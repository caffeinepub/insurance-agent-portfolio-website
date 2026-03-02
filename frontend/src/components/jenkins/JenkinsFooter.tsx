import React from 'react';
import { SiFacebook, SiLinkedin } from 'react-icons/si';
import { Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Coverage Types', href: '#coverage' },
  { label: 'About C. Jenkins', href: '#about' },
  { label: 'Google Reviews', href: '#reviews' },
  { label: 'Get Free Quote', href: '#quote' },
  { label: 'Contact Us', href: '#quote' },
];

const serviceAreas = [
  'The Woodlands', 'Spring TX', 'Conroe TX',
  'Humble TX', 'Magnolia TX', 'Tomball TX', 'Montgomery County',
];

export default function JenkinsFooter() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'jenkins-insurance');

  return (
    <footer style={{ backgroundColor: '#0D2347' }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Brand */}
          <div>
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: '20px',
                color: '#FFFFFF',
                marginBottom: '12px',
              }}
            >
              🛡️ Jenkins Insurance Agency
            </div>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: '14px',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.7,
                marginBottom: '16px',
              }}
            >
              Independent Insurance Agent<br />
              The Woodlands, TX 77354
            </p>
            <div className="flex flex-col gap-2 mb-4">
              <a
                href="tel:+12814108934"
                style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.65)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                className="hover:text-yellow-300 transition-colors"
              >
                <Phone size={14} style={{ color: '#F4B942' }} />
                (281) 410-8934
              </a>
              <a
                href="mailto:cjenkins@twfg.com"
                style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.65)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                className="hover:text-yellow-300 transition-colors"
              >
                <Mail size={14} style={{ color: '#F4B942' }} />
                cjenkins@twfg.com
              </a>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.65)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={14} style={{ color: '#F4B942' }} />
                33018 Tamina Rd, The Woodlands TX 77354
              </div>
            </div>
            <div style={{ color: '#F4B942', fontSize: '16px' }}>
              ★★★★★ <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '14px', color: '#F4B942' }}>4.9/5 Google Rating</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: '16px',
                color: '#FFFFFF',
                marginBottom: '16px',
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.65)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      textAlign: 'left',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#F4B942'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.65)'; }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h4
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 600,
                fontSize: '14px',
                color: '#FFFFFF',
                marginBottom: '16px',
              }}
            >
              Serving All Of:
            </h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.65)',
                  }}
                >
                  📍 {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.55)', textAlign: 'center' }}>
            © {year} Jenkins Insurance Agency | The Woodlands, TX
          </p>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.55)', textAlign: 'center' }}>
            Texas Dept of Insurance License #XXXXXXX
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'rgba(255,255,255,0.55)' }}
              className="hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <SiFacebook size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'rgba(255,255,255,0.55)' }}
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <SiLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Attribution */}
        <div className="text-center mt-4">
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.35)' }}>
            Built with ❤️ using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#F4B942', textDecoration: 'none' }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
