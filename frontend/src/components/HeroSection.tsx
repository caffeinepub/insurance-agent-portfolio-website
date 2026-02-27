import React, { useEffect, useRef } from 'react';
import { Shield, Star, ArrowRight, CheckCircle2, Users, Award, TrendingUp } from 'lucide-react';
import { useBusinessInfo } from '../hooks/useBusinessInfo';

export default function HeroSection() {
  const { businessName, phone } = useBusinessInfo();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = heroRef.current?.querySelectorAll('.scroll-fade');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Users, value: '500+', label: 'Families Protected' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: TrendingUp, value: '98%', label: 'Client Retention' },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-forest-dark"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 65% 40%, rgba(45, 90, 64, 0.5) 0%, transparent 55%),
          radial-gradient(ellipse at 20% 80%, rgba(200, 146, 42, 0.08) 0%, transparent 40%),
          linear-gradient(160deg, #0F2218 0%, #1A3A2A 60%, #142e21 100%)
        `,
      }}
    >
      {/* Subtle texture */}
      <div className="absolute inset-0 texture-overlay opacity-40" />

      {/* Decorative elements */}
      <div className="absolute top-32 right-16 w-64 h-64 rounded-full border border-amber/10 opacity-60" />
      <div className="absolute top-48 right-32 w-32 h-32 rounded-full border border-amber/15 opacity-40" />
      <div className="absolute bottom-24 left-8 w-48 h-48 rounded-full border border-forest-light/10" />

      {/* Gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber to-transparent opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="scroll-fade inline-flex items-center gap-2 bg-amber/10 border border-amber/30 rounded-full px-4 py-2">
              <Shield className="w-4 h-4 text-amber" />
              <span className="text-amber text-sm font-body font-semibold tracking-wide uppercase">
                Licensed Insurance Advisor
              </span>
            </div>

            {/* Headline */}
            <div className="scroll-fade delay-100">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
                Conroe Agents:
                <br />
                <span className="italic text-amber">Get 12+ Quotes</span>
                <br />
                <span className="text-white/90">/Month</span>
              </h1>
            </div>

            {/* Description */}
            <p className="scroll-fade delay-200 font-body text-white/65 text-lg leading-relaxed max-w-lg">
              Independent insurance guidance tailored to your life. We compare dozens of carriers
              to find coverage that truly fits — not just what pays the highest commission.
            </p>

            {/* Trust points */}
            <div className="scroll-fade delay-300 space-y-3">
              {[
                'No-pressure, education-first approach',
                'Access to 30+ top-rated carriers',
                'Annual policy reviews at no extra cost',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber flex-shrink-0" />
                  <span className="font-body text-white/75 text-sm">{point}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="scroll-fade delay-400 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-light text-forest-dark font-body font-bold text-base px-8 py-4 rounded-sm shadow-amber-glow hover:shadow-amber-glow-lg transition-all duration-200"
              >
                Get Conroe Site - 3 Spots Left Week
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-amber/50 text-white hover:text-amber font-body font-semibold text-base px-8 py-4 rounded-sm transition-all duration-200"
              >
                Meet Johnathan
              </a>
            </div>

            {/* Star rating */}
            <div className="scroll-fade delay-500 flex items-center gap-3 pt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber fill-amber" />
                ))}
              </div>
              <span className="font-body text-white/60 text-sm">
                <strong className="text-white font-semibold">4.9/5</strong> · Trusted by 500+ Texas families
              </span>
            </div>
          </div>

          {/* Right: Agent photo + stats */}
          <div className="relative flex flex-col items-center lg:items-end gap-8">
            {/* Headshot */}
            <div className="relative scroll-fade delay-200">
              {/* Decorative frame */}
              <div className="absolute -inset-3 rounded-2xl border border-amber/20" />
              <div className="absolute -inset-6 rounded-3xl border border-amber/10" />

              {/* Gold corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-amber rounded-tl-sm" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-amber rounded-br-sm" />

              <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] rounded-xl overflow-hidden shadow-forest-xl">
                <img
                  src="/assets/generated/johnathan-headshot.dim_400x500.png"
                  alt="Johnathan Reeves — Licensed Insurance Advisor"
                  className="w-full h-full object-cover object-top"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-forest-dark/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-display font-bold text-white text-lg leading-tight">Johnathan Reeves</p>
                  <p className="font-body text-amber text-sm font-medium">Licensed Insurance Advisor</p>
                </div>
              </div>
            </div>

            {/* Floating testimonial card */}
            <div className="scroll-fade delay-300 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-4 max-w-xs shadow-forest-lg">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber fill-amber" />
                ))}
              </div>
              <p className="font-body text-white/85 text-sm italic leading-relaxed">
                "Got 12 quotes in my first month. Johnathan found me coverage I didn't even know I needed."
              </p>
              <p className="font-body text-amber text-xs font-semibold mt-2">— TX Agent J.D. - 12 quotes first month</p>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="scroll-fade delay-500 mt-20 grid grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="bg-forest-dark/60 backdrop-blur-sm px-6 py-5 text-center">
              <Icon className="w-5 h-5 text-amber mx-auto mb-2" />
              <div className="font-display font-bold text-white text-2xl">{value}</div>
              <div className="font-body text-white/55 text-xs tracking-wide mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
