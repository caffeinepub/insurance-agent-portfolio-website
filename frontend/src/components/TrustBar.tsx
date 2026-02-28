import React from 'react';
import { Shield, Users, Star, Clock } from 'lucide-react';

const stats = [
  { icon: Shield, value: '50+', label: 'Carrier Partners' },
  { icon: Users, value: '500+', label: 'Families Served' },
  { icon: Star, value: '4.9★', label: 'Google Rating' },
  { icon: Clock, value: '15+', label: 'Years Experience' },
];

export default function TrustBar() {
  return (
    <section className="py-6 md:py-8 bg-cream border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-forest" />
              </div>
              <div>
                <p className="text-amber-600 font-bold text-lg md:text-xl leading-none">{value}</p>
                <p className="text-gray-600 text-xs md:text-sm">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
