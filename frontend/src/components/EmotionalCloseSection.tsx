import React, { useEffect, useRef } from 'react';
import { ArrowRight, Shield, Clock, Heart } from 'lucide-react';

const valueProps = [
  {
    icon: Shield,
    title: 'No Obligation',
    desc: 'A free consultation with zero pressure. We educate, you decide.',
  },
  {
    icon: Clock,
    title: '15-Minute Call',
    desc: 'Get clarity on your coverage gaps in a quick, focused conversation.',
  },
  {
    icon: Heart,
    title: 'Family-First',
    desc: 'Every recommendation is made with your family\'s long-term security in mind.',
  },
];

export default function EmotionalCloseSection() {
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
    <section ref={ref} className="bg-forest py-24 lg:py-32 relative overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 texture-overlay opacity-20" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full border border-amber/10 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full border border-amber/10 translate-y-1/2 -translate-x-1/2" />

      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-amber-gradient" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Label */}
        <div className="scroll-fade flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-amber/60" />
          <span className="font-body text-amber text-sm font-semibold tracking-widest uppercase">
            Take Action Today
          </span>
          <div className="w-8 h-px bg-amber/60" />
        </div>

        {/* Headline */}
        <h2 className="scroll-fade delay-100 font-display text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Your Family's Security
          <br />
          <span className="italic text-amber">Can't Wait Another Day</span>
        </h2>

        <p className="scroll-fade delay-200 font-body text-white/65 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Every day without proper coverage is a day your family is exposed to financial risk.
          One conversation with Johnathan could change everything.
        </p>

        {/* Value props */}
        <div className="scroll-fade delay-300 grid md:grid-cols-3 gap-6 mb-12">
          {valueProps.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white/8 border border-white/12 rounded-xl p-6 text-left hover:bg-white/12 transition-colors"
            >
              <div className="w-10 h-10 bg-amber/15 rounded-sm flex items-center justify-center mb-4 border border-amber/25">
                <Icon className="w-5 h-5 text-amber" />
              </div>
              <h3 className="font-display font-bold text-white text-base mb-2">{title}</h3>
              <p className="font-body text-white/55 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="scroll-fade delay-400 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-light text-forest-dark font-body font-bold text-lg px-10 py-4 rounded-sm shadow-amber-glow-lg hover:shadow-amber-glow transition-all duration-200"
          >
            Get Conroe Site - 3 Spots Left Week
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#calendar"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/25 hover:border-amber/50 text-white hover:text-amber font-body font-semibold text-lg px-10 py-4 rounded-sm transition-all duration-200"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  );
}
