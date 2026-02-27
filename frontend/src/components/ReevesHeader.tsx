import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useBusinessInfo } from '../hooks/useBusinessInfo';

export default function ReevesHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { businessName, phone } = useBusinessInfo();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-choose' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact-form' },
    { label: 'Schedule Call', href: '#calendar-section' },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-navy-shadow" style={{ backgroundColor: '#0f2557' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* RIS Logo */}
          <a href="/" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded" aria-label="Reeves Insurance Solutions - Home">
            <img
              src="/assets/generated/ris-logo.dim_200x200.png"
              alt="RIS text-based monogram logo in gold lettering on deep navy background"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <div className="hidden sm:block">
              <span className="text-base font-bold leading-tight block" style={{ color: '#ffffff' }}>
                {businessName}
              </span>
              <span className="text-xs" style={{ color: '#c9a227' }}>
                Johnathan Reeves, CLU, ChFC
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-opacity hover:opacity-75"
                style={{ color: '#e2e8f0' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${phone.replace(/\D/g, '')}`}
              className="flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-80"
              style={{ color: '#c9a227' }}
              aria-label={`Call us at ${phone}`}
            >
              <Phone className="w-4 h-4" />
              {phone}
            </a>
            <a
              href="#contact-form"
              className="px-4 py-2 rounded text-sm font-bold transition-all hover:opacity-90 hover:shadow-gold-glow"
              style={{ backgroundColor: '#c9a227', color: '#0f2557' }}
              aria-label="Get a free insurance quote"
            >
              Free Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            style={{ color: '#ffffff' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t px-4 pb-4 pt-2" style={{ backgroundColor: '#0f2557', borderColor: 'rgba(201,162,39,0.3)' }}>
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium py-2 px-2 rounded transition-colors hover:bg-white/10"
                style={{ color: '#e2e8f0' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${phone.replace(/\D/g, '')}`}
              className="flex items-center gap-2 py-2 px-2 text-sm font-semibold"
              style={{ color: '#c9a227' }}
              onClick={() => setMobileMenuOpen(false)}
              aria-label={`Call us at ${phone}`}
            >
              <Phone className="w-4 h-4" />
              {phone}
            </a>
            <a
              href="#contact-form"
              className="mt-1 px-4 py-2.5 rounded text-sm font-bold text-center transition-all hover:opacity-90"
              style={{ backgroundColor: '#c9a227', color: '#0f2557' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Free Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
