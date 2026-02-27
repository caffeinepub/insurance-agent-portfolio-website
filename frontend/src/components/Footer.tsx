import React from 'react';
import { Shield, Phone, Mail, MapPin, Heart } from 'lucide-react';
import { SiFacebook, SiLinkedin, SiInstagram } from 'react-icons/si';
import { useBusinessInfo } from '../hooks/useBusinessInfo';
import ProcessProofSection from './ProcessProofSection';

export default function Footer() {
  const { businessName, phone, email, address, city, state, licensedStates } = useBusinessInfo();
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'reeves-insurance'
  );

  const displayPhone = phone || '(832) 555-1234';
  const telPhone = displayPhone.replace(/\D/g, '');

  // licensedStates comes back as a comma-separated string from useBusinessInfo
  const statesArray: string[] =
    typeof licensedStates === 'string'
      ? licensedStates
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean)
      : [];

  const quickLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About Johnathan', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Get a Quote', href: '#contact' },
    { label: 'Schedule a Call', href: '#calendar' },
  ];

  const coverageTypes = [
    { label: 'Auto Insurance', href: '#services' },
    { label: 'Home Insurance', href: '#services' },
    { label: 'Life Insurance', href: '#services' },
    { label: 'Business Insurance', href: '#services' },
    { label: 'Retirement Planning', href: '#services' },
  ];

  return (
    <>
      <ProcessProofSection />
      <footer className="bg-charcoal text-white">
        {/* Top accent bar */}
        <div className="h-1 bg-amber-gradient" />

        {/* Carrier strip */}
        <div className="bg-charcoal-light border-b border-white/8 py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-6">
              <span className="font-body text-white/40 text-xs tracking-widest uppercase">
                Carrier Partners
              </span>
              {['Progressive', 'Geico', 'State Farm', 'Allstate', 'Nationwide', 'Travelers'].map(
                (carrier) => (
                  <span
                    key={carrier}
                    className="font-body font-semibold text-white/60 text-sm hover:text-amber transition-colors"
                  >
                    {carrier}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Main footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-amber rounded-sm flex items-center justify-center shadow-amber-glow">
                  <Shield className="w-5 h-5 text-forest-dark" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="font-display font-bold text-white text-base leading-tight">
                    {businessName || 'Reeves Insurance'}
                  </div>
                  <div className="font-body text-amber text-xs tracking-widest uppercase">
                    Solutions
                  </div>
                </div>
              </div>
              <p className="font-body text-white/55 text-sm leading-relaxed mb-6">
                Independent insurance guidance for Texas families. We compare 30+ carriers to find
                coverage that truly fits your life.
              </p>

              {/* Social */}
              <div className="flex gap-3">
                {[
                  { Icon: SiFacebook, href: '#', label: 'Facebook' },
                  { Icon: SiLinkedin, href: '#', label: 'LinkedIn' },
                  { Icon: SiInstagram, href: '#', label: 'Instagram' },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 bg-white/8 hover:bg-amber/20 border border-white/10 hover:border-amber/40 rounded-sm flex items-center justify-center text-white/60 hover:text-amber transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-white text-base mb-5 pb-2 border-b border-white/10">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="font-body text-white/55 hover:text-amber text-sm transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-amber/40 group-hover:bg-amber transition-colors" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coverage */}
            <div>
              <h4 className="font-display font-bold text-white text-base mb-5 pb-2 border-b border-white/10">
                Coverage Types
              </h4>
              <ul className="space-y-3">
                {coverageTypes.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="font-body text-white/55 hover:text-amber text-sm transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-amber/40 group-hover:bg-amber transition-colors" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-bold text-white text-base mb-5 pb-2 border-b border-white/10">
                Contact
              </h4>
              <div className="space-y-4">
                <a href={`tel:+1${telPhone}`} className="flex items-start gap-3 group">
                  <Phone className="w-4 h-4 text-amber mt-0.5 flex-shrink-0" />
                  <span className="font-body text-white/55 group-hover:text-amber text-sm transition-colors">
                    {displayPhone}
                  </span>
                </a>
                {email && (
                  <a href={`mailto:${email}`} className="flex items-start gap-3 group">
                    <Mail className="w-4 h-4 text-amber mt-0.5 flex-shrink-0" />
                    <span className="font-body text-white/55 group-hover:text-amber text-sm transition-colors">
                      {email}
                    </span>
                  </a>
                )}
                {(address || city) && (
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-amber mt-0.5 flex-shrink-0" />
                    <span className="font-body text-white/55 text-sm">
                      {address || `${city}, ${state}`}
                    </span>
                  </div>
                )}
              </div>

              {/* Licensed states */}
              {statesArray.length > 0 && (
                <div className="mt-6 pt-5 border-t border-white/10">
                  <div className="font-body text-white/35 text-xs uppercase tracking-widest mb-2">
                    Licensed In
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {statesArray.map((s) => (
                      <span
                        key={s}
                        className="font-body text-white/60 text-xs bg-white/8 border border-white/10 px-2 py-0.5 rounded-sm"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-body text-white/35 text-xs">
              © {year} {businessName || 'Reeves Insurance Solutions'}. All rights reserved.
            </p>
            <p className="font-body text-white/35 text-xs flex items-center gap-1.5">
              Built with{' '}
              <Heart className="w-3 h-3 text-amber fill-amber" />{' '}
              using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber hover:text-amber-light transition-colors"
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
