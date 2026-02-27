import React, { useEffect, useRef } from 'react';
import { Scale, GraduationCap, RefreshCw, LifeBuoy } from 'lucide-react';

const differentiators = [
  {
    icon: Scale,
    title: 'Independent & Unbiased',
    desc: 'We\'re not captive to any single carrier. We shop 30+ companies to find your best rate and coverage — period.',
    stat: '30+',
    statLabel: 'Carriers Compared',
  },
  {
    icon: GraduationCap,
    title: 'Education-First Approach',
    desc: 'We explain your options in plain English. You make informed decisions — we never pressure or rush.',
    stat: '100%',
    statLabel: 'Transparent Process',
  },
  {
    icon: RefreshCw,
    title: 'Annual Policy Reviews',
    desc: 'Life changes. Your coverage should too. We proactively review your policies every year at no extra cost.',
    stat: 'Free',
    statLabel: 'Annual Reviews',
  },
  {
    icon: LifeBuoy,
    title: 'Dedicated Claims Support',
    desc: 'When you need to file a claim, we\'re in your corner — guiding you through every step of the process.',
    stat: '24/7',
    statLabel: 'Claims Guidance',
  },
];

export default function WhyChooseSection() {
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-forest-dark py-24 lg:py-32 relative overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 texture-overlay opacity-30" />

      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-amber/8" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border border-amber/8" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="scroll-fade flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-amber" />
            <span className="font-body text-amber text-sm font-semibold tracking-widest uppercase">
              Why Choose Us
            </span>
            <div className="w-8 h-px bg-amber" />
          </div>
          <h2 className="scroll-fade delay-100 font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            The Reeves Difference
          </h2>
          <p className="scroll-fade delay-200 font-body text-white/60 text-lg leading-relaxed">
            Most agents sell you a policy and disappear. We build lasting relationships built on
            trust, transparency, and genuine care for your financial wellbeing.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map(({ icon: Icon, title, desc, stat, statLabel }, index) => (
            <div
              key={title}
              className="scroll-fade group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-amber/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stat */}
              <div className="mb-5">
                <div className="font-display font-bold text-amber text-3xl">{stat}</div>
                <div className="font-body text-white/40 text-xs tracking-wide mt-0.5">{statLabel}</div>
              </div>

              {/* Icon */}
              <div className="w-10 h-10 bg-amber/10 rounded-sm flex items-center justify-center mb-4 border border-amber/20 group-hover:bg-amber/20 transition-colors">
                <Icon className="w-5 h-5 text-amber" />
              </div>

              <h3 className="font-display font-bold text-white text-lg mb-3">{title}</h3>
              <p className="font-body text-white/55 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
