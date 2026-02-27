import { MapPin, Phone, Mail } from 'lucide-react';
import ProcessProofSection from '../ProcessProofSection';

export default function HoustonFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'houston-insurance-demo';
  const displayPhone = '(832) 555-1234';
  const telPhone = '18325551234';

  return (
    <>
      <ProcessProofSection />
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          {/* Portfolio Pitch Section */}
          <div className="mb-12 p-6 bg-[#f59e0b]/10 border-2 border-[#f59e0b] rounded-lg">
            <p className="text-center text-lg text-black leading-[1.6]" style={{ fontWeight: 400 }}>
              <span className="font-semibold" style={{ fontWeight: 600 }}>This site gets Conroe agents 15+ quotes/month.</span> Get yours customized for $800 →{' '}
              <a href="#" className="text-[#f59e0b] underline hover:text-[#f59e0b]/80 transition-colors">
                [your portfolio link]
              </a>
              <br />
              <span className="text-sm">Rank #1 locally in 30 days guaranteed.</span>
            </p>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Business Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#f59e0b] leading-[1.6]" style={{ fontWeight: 600 }}>Conroe Insurance Agent</h3>
              <div className="space-y-3 leading-[1.6]" style={{ fontWeight: 400 }}>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-[#f59e0b]" />
                  <p className="text-black">
                    123 Main Street
                    <br />
                    Conroe, TX 77301
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 flex-shrink-0 text-[#f59e0b]" />
                  <a href={`tel:+1${telPhone}`} className="hover:text-[#f59e0b] transition-colors text-black">
                    {displayPhone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 flex-shrink-0 text-[#f59e0b]" />
                  <a href="mailto:info@conroeinsurance.com" className="hover:text-[#f59e0b] transition-colors text-black">
                    info@conroeinsurance.com
                  </a>
                </div>
                <p className="text-sm text-black">Licensed TX #123456</p>
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#f59e0b] leading-[1.6]" style={{ fontWeight: 600 }}>Service Areas</h3>
              <ul className="space-y-2 leading-[1.6]" style={{ fontWeight: 400 }}>
                <li className="text-black">Conroe</li>
                <li className="text-black">The Woodlands</li>
                <li className="text-black">Spring</li>
                <li className="text-black">Tomball</li>
                <li className="text-black">Magnolia</li>
                <li className="text-black">Montgomery</li>
              </ul>
            </div>

            {/* Coverage Types */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#f59e0b] leading-[1.6]" style={{ fontWeight: 600 }}>Coverage Types</h3>
              <ul className="space-y-2 leading-[1.6]" style={{ fontWeight: 400 }}>
                <li className="text-black">Auto Insurance</li>
                <li className="text-black">Home Insurance</li>
                <li className="text-black">Life Insurance</li>
                <li className="text-black">Business Insurance</li>
                <li className="text-black">Renters Insurance</li>
                <li className="text-black">Umbrella Insurance</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8 text-center text-black text-sm leading-[1.6]" style={{ fontWeight: 400 }}>
            <p className="mb-2">
              © {currentYear} Conroe Insurance Agent. All rights reserved.
            </p>
            <p>
              Built with ❤️ using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f59e0b] hover:text-[#f59e0b]/80 transition-colors underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
