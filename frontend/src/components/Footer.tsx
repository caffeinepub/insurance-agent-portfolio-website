import React from 'react';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { SiFacebook, SiInstagram, SiLinkedin } from 'react-icons/si';
import ProcessProofSection from './ProcessProofSection';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(window.location.hostname || 'reeves-insurance');

  return (
    <>
      <ProcessProofSection />
      <footer style={{ background: '#1a1a2e' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src="/assets/generated/ris-logo.dim_200x200.png" alt="RIS" className="w-10 h-10 rounded-lg object-cover" />
                <div>
                  <p className="text-white font-bold text-sm">Reeves Insurance</p>
                  <p className="text-amber-400 text-xs">Solutions</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Protecting Conroe families and businesses with comprehensive insurance solutions since 2009.
              </p>
              <div className="flex items-center gap-3">
                {[SiFacebook, SiInstagram, SiLinkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
              <ul className="space-y-2">
                {['Auto Insurance', 'Home Insurance', 'Life Insurance', 'Business Insurance', 'Health Insurance', 'Retirement Planning'].map(s => (
                  <li key={s}>
                    <a href="#services" className="text-gray-400 hover:text-white text-sm transition-colors">{s}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
              <ul className="space-y-2">
                {['About Johnathan', 'Why Choose Us', 'Testimonials', 'Carrier Partners', 'Get a Quote'].map(s => (
                  <li key={s}>
                    <a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors">{s}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
              <div className="space-y-3">
                <a href="tel:+19364412301" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                  <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  (936) 441-2301
                </a>
                <a href="mailto:john@reevesinsurance.com" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                  <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  john@reevesinsurance.com
                </a>
                <div className="flex items-start gap-2 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  Conroe, TX 77301
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-xs text-center sm:text-left">
              © {year} Reeves Insurance Solutions. All rights reserved. | Licensed in TX & 12+ states
            </p>
            <p className="text-gray-500 text-xs flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-amber-400 fill-amber-400" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 transition-colors"
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
