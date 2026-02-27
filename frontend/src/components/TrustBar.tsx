import React, { useEffect, useRef } from 'react';
import { Shield, Users, Star, Award } from 'lucide-react';

const stats = [
  { icon: Shield, value: '30+', label: 'Carrier Partners', color: 'text-amber' },
  { icon: Users, value: '500+', label: 'Families Protected', color: 'text-amber' },
  { icon: Star, value: '4.9★', label: 'Average Rating', color: 'text-amber' },
  { icon: Award, value: '15+', label: 'Years of Experience', color: 'text-amber' },
];

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-fade').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-cream-dark border-y border-amber/20 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label, color }) => (
            <div key={label} className="scroll-fade flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 bg-forest/8 rounded-sm flex items-center justify-center border border-forest/15">
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <div className="font-display font-bold text-forest text-2xl">{value}</div>
              <div className="font-body text-charcoal-muted text-sm tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
