import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { Menu, X, Phone } from 'lucide-react';

export default function JenkinsHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Coverage', href: '#coverage' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        scrolled
          ? 'bg-jenkins-navy shadow-[0_2px_30px_rgba(0,0,0,0.25)]'
          : 'bg-jenkins-navy shadow-[0_2px_20px_rgba(0,0,0,0.15)]'
      }`}
      style={{ height: '70px' }}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <span className="text-2xl">🛡️</span>
          <div>
            <div className="font-montserrat font-bold text-white text-[22px] leading-tight">
              Jenkins Insurance
            </div>
            <div className="text-[11px] text-jenkins-gold font-opensans leading-tight">
              Greater Houston Metro TX
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white font-opensans font-semibold text-[15px] hover:text-jenkins-gold transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-jenkins-gold transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+12814108934"
            className="text-white font-opensans text-sm flex items-center gap-1 hover:text-jenkins-gold transition-colors"
          >
            <Phone className="w-4 h-4" />
            (281) 410-8934
          </a>
          <a
            href="#contact"
            className="jenkins-gold-btn px-[22px] py-[10px] rounded-[25px] text-[15px] font-semibold"
          >
            ☎ Free Quote
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-jenkins-navy border-t border-white/10 animate-fade-in-up">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white font-opensans font-semibold text-[15px] py-2 hover:text-jenkins-gold transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="jenkins-gold-btn text-center py-3 rounded-lg text-[16px] font-semibold mt-2"
              onClick={() => setMobileOpen(false)}
            >
              ☎ Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
