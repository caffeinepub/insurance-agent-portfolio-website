import { Link } from '@tanstack/react-router';
import { SiFacebook, SiLinkedin } from 'react-icons/si';

export default function JenkinsFooter() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Coverage Types', href: '#coverage' },
    { label: 'About C. Jenkins', href: '#about' },
    { label: 'Google Reviews', href: '#reviews' },
    { label: 'Get Free Quote', href: '#contact' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const cities = [
    'The Woodlands TX', 'Spring TX', 'Conroe TX',
    'Humble TX', 'Magnolia TX', 'Tomball TX', 'Montgomery County TX',
  ];

  return (
    <footer style={{ background: '#0D2347' }}>
      <div className="max-w-6xl mx-auto px-4 pt-[60px] pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🛡️</span>
              <span className="font-montserrat font-bold text-white text-[20px]">
                Jenkins Insurance Agency
              </span>
            </div>
            <p className="font-opensans text-[14px] mb-3" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Independent Agent | Greater Houston TX
            </p>
            <div className="flex items-center gap-1 text-jenkins-gold text-[14px]">
              ★★★★★ <span className="ml-1 text-white/65">4.9/5 Google Rating</span>
            </div>
            <div className="mt-4 space-y-1">
              <p className="font-opensans text-[14px]" style={{ color: 'rgba(255,255,255,0.65)' }}>
                📞 (281) 410-8934
              </p>
              <p className="font-opensans text-[14px]" style={{ color: 'rgba(255,255,255,0.65)' }}>
                📧 cjenkins@twfg.com
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-montserrat font-bold text-white text-[16px] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-opensans text-[14px] hover:text-jenkins-gold transition-colors"
                    style={{ color: 'rgba(255,255,255,0.70)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-montserrat font-bold text-white text-[16px] mb-4">Proudly Serving:</h4>
            <ul className="space-y-2">
              {cities.map((city) => (
                <li key={city} className="font-opensans text-[14px]" style={{ color: 'rgba(255,255,255,0.70)' }}>
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mb-6" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-opensans text-[12px]" style={{ color: 'rgba(255,255,255,0.50)' }}>
            © {year} Jenkins Insurance Agency | Greater Houston Metro TX
          </p>
          <p className="font-opensans text-[12px]" style={{ color: 'rgba(255,255,255,0.50)' }}>
            TX Dept of Insurance Lic #XXXXXXX
          </p>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-jenkins-gold transition-colors">
              <SiFacebook className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-jenkins-gold transition-colors">
              <SiLinkedin className="w-5 h-5" />
            </a>
            <Link
              to="/admin"
              className="font-opensans text-[12px] hover:text-jenkins-gold transition-colors"
              style={{ color: 'rgba(255,255,255,0.50)' }}
            >
              Agent Login →
            </Link>
          </div>
        </div>

        {/* Attribution */}
        <div className="text-center mt-6">
          <p className="font-opensans text-[11px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Built with ❤️ using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname || 'jenkins-insurance')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-jenkins-gold transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
