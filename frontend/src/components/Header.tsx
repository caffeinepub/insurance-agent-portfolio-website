import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, Phone } from 'lucide-react';
import { useBusinessInfo } from '../hooks/useBusinessInfo';

export default function Header() {
  const { businessName, phone } = useBusinessInfo();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const displayPhone = phone || '(832) 555-1234';
  const telPhone = displayPhone.replace(/\D/g, '');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-forest-dark/95 backdrop-blur-md shadow-forest-lg border-b border-forest-light/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-amber rounded-sm flex items-center justify-center shadow-amber-glow group-hover:shadow-amber-glow-lg transition-shadow">
                <Shield className="w-5 h-5 text-forest-dark" strokeWidth={2.5} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white text-lg leading-tight tracking-tight">
                {businessName || 'Reeves Insurance'}
              </span>
              <span className="font-body text-amber text-xs tracking-widest uppercase">
                Solutions
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="relative font-body text-white/75 hover:text-white text-sm font-medium transition-colors group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:+1${telPhone}`}
              className="flex items-center gap-2 font-body text-white/75 hover:text-amber text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              {displayPhone}
            </a>
            <a
              href="#contact"
              className="bg-amber hover:bg-amber-light text-forest-dark font-body font-bold text-sm px-5 py-2.5 rounded-sm shadow-amber-glow hover:shadow-amber-glow-lg transition-all duration-200 whitespace-nowrap"
            >
              Get Conroe Site - 3 Spots Left Week
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white/75 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-forest-dark/98 backdrop-blur-md border-t border-forest-light/20">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="block font-body text-white/75 hover:text-amber text-base font-medium transition-colors py-2 border-b border-white/8"
              >
                {label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href={`tel:+1${telPhone}`}
                className="flex items-center gap-2 font-body text-amber text-base font-semibold"
              >
                <Phone className="w-5 h-5" />
                {displayPhone}
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-amber hover:bg-amber-light text-forest-dark font-body font-bold text-base px-6 py-3 rounded-sm shadow-amber-glow transition-all duration-200"
              >
                Get Conroe Site - 3 Spots Left Week
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
