import { Shield, Phone, Mail, MapPin, Heart, Facebook, Linkedin, Twitter } from 'lucide-react';
import { SiFacebook, SiLinkedin, SiX } from 'react-icons/si';
import { useBusinessInfo } from '../hooks/useBusinessInfo';

export default function ReevesFooter() {
  const { businessName, address, city, state, phone, email, licensedStates } = useBusinessInfo();

  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'reeves-insurance-solutions'
  );

  const statesDisplay = licensedStates || 'CA, NY, TX';

  return (
    <footer style={{ backgroundColor: '#0f2557' }} className="pt-16 pb-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/ris-logo.dim_200x200.png"
                alt="RIS text-based monogram logo in gold lettering on deep navy background"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div>
                <span className="text-base font-bold block" style={{ color: '#ffffff' }}>
                  {businessName}
                </span>
                <span className="text-xs" style={{ color: '#c9a227' }}>
                  Johnathan Reeves, CLU, ChFC
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#cbd5e1' }}>
              Licensed insurance agent serving families and businesses across California, New York,
              and Texas with honest, personalized coverage from top-rated carriers.
            </p>

            {/* Licensing Disclaimer */}
            <div
              className="p-3 rounded-lg text-xs leading-relaxed"
              style={{ backgroundColor: 'rgba(255,255,255,0.07)', color: '#94a3b8' }}
            >
              <p>
                Licensed in {statesDisplay} | Not affiliated with any carrier | Insurance products
                not available in all states. Coverage varies by state regulations.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                aria-label="Follow us on Facebook"
              >
                <SiFacebook className="w-4 h-4" style={{ color: '#c9a227' }} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                aria-label="Follow us on LinkedIn"
              >
                <SiLinkedin className="w-4 h-4" style={{ color: '#c9a227' }} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                aria-label="Follow us on X (Twitter)"
              >
                <SiX className="w-4 h-4" style={{ color: '#c9a227' }} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: '#c9a227' }}>
              Contact
            </h3>
            <address className="not-italic space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#c9a227' }} aria-hidden="true" />
                <span className="text-sm" style={{ color: '#cbd5e1' }}>
                  {address || 'Los Angeles, CA'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: '#c9a227' }} aria-hidden="true" />
                <a
                  href={`tel:${(phone || '(213) 555-0123').replace(/\D/g, '')}`}
                  className="text-sm transition-opacity hover:opacity-80 focus:outline-none focus:underline"
                  style={{ color: '#cbd5e1' }}
                  aria-label={`Call us at ${phone}`}
                >
                  {phone || '(213) 555-0123'}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: '#c9a227' }} aria-hidden="true" />
                <a
                  href={`mailto:${email || 'john@reevesinsurance.com'}`}
                  className="text-sm transition-opacity hover:opacity-80 focus:outline-none focus:underline"
                  style={{ color: '#cbd5e1' }}
                  aria-label={`Email us at ${email}`}
                >
                  {email || 'john@reevesinsurance.com'}
                </a>
              </div>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: '#c9a227' }}>
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {[
                  { label: 'About', href: '#about' },
                  { label: 'Services', href: '#services' },
                  { label: 'Why Choose Us', href: '#why-choose' },
                  { label: 'Testimonials', href: '#testimonials' },
                  { label: 'Get a Quote', href: '#contact-form' },
                  { label: 'Schedule Call', href: '#calendar-section' },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-opacity hover:opacity-80 focus:outline-none focus:underline"
                      style={{ color: '#cbd5e1' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-sm transition-opacity hover:opacity-80 focus:outline-none focus:underline"
                    style={{ color: '#c9a227' }}
                    aria-label="Read our Privacy Policy"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* CCPA/GDPR Compliance */}
        <div
          className="py-4 border-t border-b mb-6 text-xs text-center"
          style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#94a3b8' }}
        >
          <a
            href="/privacy-policy"
            className="hover:opacity-80 underline focus:outline-none"
            style={{ color: '#c9a227' }}
            aria-label="CCPA/GDPR Privacy Policy"
          >
            CCPA/GDPR Compliant
          </a>
          {' '}· We respect your privacy. No data sold. ·{' '}
          <a
            href="/privacy-policy"
            className="hover:opacity-80 underline focus:outline-none"
            style={{ color: '#c9a227' }}
          >
            Privacy Policy
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: '#94a3b8' }}>
            © {new Date().getFullYear()} {businessName}. All rights reserved. | Licensed in {statesDisplay}
          </p>
          <p className="text-xs flex items-center gap-1" style={{ color: '#94a3b8' }}>
            Built with{' '}
            <Heart className="w-3 h-3 fill-current" style={{ color: '#c9a227' }} aria-hidden="true" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80 focus:outline-none"
              style={{ color: '#c9a227' }}
              aria-label="Built with caffeine.ai"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
