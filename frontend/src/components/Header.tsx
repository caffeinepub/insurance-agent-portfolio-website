import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Shield } from 'lucide-react';

interface HeaderProps {
  onAgentLogin?: () => void;
}

export default function Header({ onAgentLogin }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Why Us', id: 'why-choose' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-forest-dark/95 backdrop-blur-md shadow-forest-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <img src="/assets/generated/ris-logo.dim_200x200.png" alt="RIS Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-lg object-cover" />
              <div>
                <p className="text-white font-bold text-sm md:text-base leading-tight">Reeves Insurance</p>
                <p className="text-amber-400 text-xs hidden sm:block">Solutions</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3">
              <a
                href="tel:+19364412301"
                className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">(936) 441-2301</span>
              </a>
              <button
                onClick={() => scrollTo('contact')}
                className="px-3 py-2 lg:px-4 rounded-lg text-xs lg:text-sm font-semibold text-forest-dark bg-amber-400 hover:bg-amber-300 transition-colors"
              >
                <span className="hidden lg:inline">Get Conroe Site – 3 Spots Left</span>
                <span className="lg:hidden">Get Quote</span>
              </button>
              <button
                onClick={onAgentLogin}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-blue-300 hover:text-white transition-all border border-blue-700 hover:border-blue-500"
                style={{ background: 'rgba(15,52,96,0.4)' }}
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Agent Login</span>
              </button>
            </div>

            {/* Mobile: Agent Login + Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onAgentLogin}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-blue-300 border border-blue-700"
                style={{ background: 'rgba(15,52,96,0.4)' }}
              >
                <Shield className="w-3 h-3" />
                <span>Agent</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-forest-dark/98 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="block w-full text-left px-3 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
                >
                  {label}
                </button>
              ))}
              <div className="pt-3 border-t border-white/10 space-y-2">
                <a
                  href="tel:+19364412301"
                  className="flex items-center gap-2 px-3 py-2.5 text-amber-400 text-sm font-medium"
                >
                  <Phone className="w-4 h-4" />
                  (936) 441-2301
                </a>
                <button
                  onClick={() => scrollTo('contact')}
                  className="w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-forest-dark bg-amber-400 hover:bg-amber-300 transition-colors"
                >
                  Get Conroe Site – 3 Spots Left
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
