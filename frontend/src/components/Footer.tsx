import { Heart, Phone, MapPin, Mail } from 'lucide-react';
import { SiFacebook, SiLinkedin, SiX, SiInstagram } from 'react-icons/si';
import { useBusinessInfo } from '../hooks/useBusinessInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? encodeURIComponent(window.location.hostname) : 'insurance-agent';
  const { businessName, city, state, licenseNumber, phone, address } = useBusinessInfo();

  return (
    <footer className="bg-navy-secondary border-t border-gold-accent/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Business Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-gold-accent">{businessName}</h3>
            <div className="space-y-2 text-white font-sans text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-accent shrink-0 mt-1" />
                <span>{address}<br />{city}, {state}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-accent shrink-0" />
                <span>{phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-accent shrink-0" />
                <span>info@example.com</span>
              </div>
            </div>
          </div>

          {/* Licensing */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-white">Licensing</h3>
            <div className="space-y-2 text-white font-sans text-sm">
              <p><span className="text-gold-accent font-semibold">License Number:</span> {licenseNumber}</p>
              <p><span className="text-gold-accent font-semibold">States Served:</span> {state}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-white">Quick Links</h3>
            <ul className="space-y-2 text-white font-sans text-sm">
              <li>
                <a href="#about" className="hover:text-gold-accent transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-accent transition-colors duration-300">Services</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-gold-accent transition-colors duration-300">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-accent transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-white">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gold-accent/10 flex items-center justify-center border border-gold-accent/30 hover:bg-gold-accent/20 hover:border-gold-accent/60 transition-all duration-300" aria-label="Facebook">
                <SiFacebook className="w-5 h-5 text-gold-accent" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gold-accent/10 flex items-center justify-center border border-gold-accent/30 hover:bg-gold-accent/20 hover:border-gold-accent/60 transition-all duration-300" aria-label="LinkedIn">
                <SiLinkedin className="w-5 h-5 text-gold-accent" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gold-accent/10 flex items-center justify-center border border-gold-accent/30 hover:bg-gold-accent/20 hover:border-gold-accent/60 transition-all duration-300" aria-label="X (Twitter)">
                <SiX className="w-5 h-5 text-gold-accent" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gold-accent/10 flex items-center justify-center border border-gold-accent/30 hover:bg-gold-accent/20 hover:border-gold-accent/60 transition-all duration-300" aria-label="Instagram">
                <SiInstagram className="w-5 h-5 text-gold-accent" />
              </a>
            </div>
            <div className="space-y-2 text-white font-sans text-sm">
              <a href="#" className="block hover:text-gold-accent transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="block hover:text-gold-accent transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gold-accent/20 pt-8 space-y-4">
          <p className="text-white font-sans text-xs leading-relaxed max-w-4xl">
            <strong className="text-white">Disclaimer:</strong> Insurance products are offered through {businessName}, a licensed insurance agency. All insurance policies and coverage are subject to underwriting approval and policy terms and conditions. This website is for informational purposes only and does not constitute legal, financial, or insurance advice. Consult with a licensed professional for personalized recommendations.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white font-sans text-sm">
            <p>© {currentYear} {businessName}. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Built with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-accent hover:text-gold-accent/80 transition-colors duration-300 font-semibold"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
