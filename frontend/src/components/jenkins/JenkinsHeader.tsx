import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Coverage', href: '#coverage' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#quote' },
];

export default function JenkinsHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          backgroundColor: '#1B3A6B',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.25)' : '0 2px 20px rgba(0,0,0,0.15)',
          transition: 'box-shadow 0.3s ease',
        }}
        className="fixed top-0 left-0 right-0 z-50 h-[70px]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex flex-col items-start focus:outline-none"
          >
            <span
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '22px', color: '#FFFFFF', lineHeight: 1.2 }}
            >
              🛡️ Jenkins Insurance
            </span>
            <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '11px', color: '#F4B942', lineHeight: 1 }}>
              The Woodlands, TX
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                style={{ fontFamily: "'Open Sans', sans-serif", color: '#FFFFFF', fontSize: '15px', background: 'none', border: 'none', cursor: 'pointer' }}
                className="hover:text-yellow-300 transition-colors relative group pb-1"
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-200"
                  style={{ backgroundColor: '#F4B942' }}
                />
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+12814108934"
              style={{ fontFamily: "'Open Sans', sans-serif", color: '#F4B942', fontSize: '14px', fontWeight: 600 }}
              className="flex items-center gap-1 hover:opacity-80 transition-opacity"
            >
              <Phone size={14} />
              (281) 410-8934
            </a>
            <button
              onClick={() => handleNavClick('#quote')}
              style={{
                backgroundColor: '#F4B942',
                color: '#1B3A6B',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: '14px',
                borderRadius: '25px',
                padding: '10px 22px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.backgroundColor = '#D9A030'; }}
              onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.backgroundColor = '#F4B942'; }}
            >
              ☎ Free Quote
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div
            style={{ backgroundColor: '#1B3A6B', borderTop: '1px solid rgba(255,255,255,0.1)' }}
            className="md:hidden absolute top-[70px] left-0 right-0 z-50 shadow-lg"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  style={{ fontFamily: "'Open Sans', sans-serif", color: '#FFFFFF', fontSize: '16px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: '8px 0' }}
                  className="hover:text-yellow-300 transition-colors border-b border-white/10 pb-2"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="tel:+12814108934"
                style={{ color: '#F4B942', fontFamily: "'Open Sans', sans-serif", fontSize: '16px', fontWeight: 600, padding: '8px 0' }}
                className="flex items-center gap-2"
              >
                <Phone size={16} />
                (281) 410-8934
              </a>
              <button
                onClick={() => handleNavClick('#quote')}
                style={{
                  backgroundColor: '#F4B942',
                  color: '#1B3A6B',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: '16px',
                  borderRadius: '8px',
                  padding: '14px 28px',
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%',
                  marginTop: '8px',
                }}
              >
                ☎ Get Free Quote
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
