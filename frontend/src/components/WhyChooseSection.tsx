import React from 'react';
import { Shield, Clock, Users, Award } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    stat: '50+',
    title: 'Carrier Partners',
    description: 'Access to over 50 top-rated insurance carriers to find you the best rates and coverage.',
  },
  {
    icon: Clock,
    stat: '24/7',
    title: 'Claims Support',
    description: 'Round-the-clock claims assistance so you\'re never left without help when you need it most.',
  },
  {
    icon: Users,
    stat: '500+',
    title: 'Families Served',
    description: 'Trusted by hundreds of Conroe families and businesses for their insurance needs.',
  },
  {
    icon: Award,
    stat: '4.9★',
    title: 'Google Rating',
    description: 'Consistently top-rated by our clients for exceptional service and competitive pricing.',
  },
];

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-16 md:py-24" style={{ background: 'linear-gradient(135deg, #1a2e1a 0%, #0d1f0d 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wide mb-3">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            The Reeves Difference
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            We're not just another insurance agency — we're your local Conroe partners committed to your protection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {reasons.map(({ icon: Icon, stat, title, description }) => (
            <div
              key={title}
              className="text-center p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 transition-all"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 md:w-7 md:h-7 text-amber-400" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">{stat}</p>
              <h3 className="text-white font-bold text-sm md:text-base mb-2">{title}</h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
