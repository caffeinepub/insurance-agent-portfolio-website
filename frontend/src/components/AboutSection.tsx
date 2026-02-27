import React, { useEffect, useRef } from 'react';
import { CheckCircle2, Award, BookOpen, Heart } from 'lucide-react';
import { useBusinessInfo } from '../hooks/useBusinessInfo';

const credentials = [
  { icon: Award, text: 'Licensed in TX, CA, NY & more' },
  { icon: BookOpen, text: 'Certified Insurance Counselor (CIC)' },
  { icon: Heart, text: 'Education-first, no-pressure approach' },
  { icon: CheckCircle2, text: 'Independent — not tied to any single carrier' },
];

const values = [
  {
    title: 'Transparency First',
    desc: 'We explain every option in plain English. No jargon, no hidden fees, no surprises.',
  },
  {
    title: 'Truly Independent',
    desc: 'We work for you, not the insurance companies. Our only goal is finding your best fit.',
  },
  {
    title: 'Long-Term Partnership',
    desc: 'Annual reviews, claims support, and life-change updates — we\'re here for the long haul.',
  },
];

export default function AboutSection() {
  const { businessName } = useBusinessInfo();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-fade').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
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
    <section id="about" ref={ref} className="bg-cream py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="scroll-fade flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-amber" />
          <span className="font-body text-amber text-sm font-semibold tracking-widest uppercase">
            About Us
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Photo + credentials */}
          <div className="scroll-fade delay-100 relative">
            <div className="relative inline-block">
              {/* Decorative background block */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-forest/8 rounded-2xl border border-forest/15" />

              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-forest-xl">
                <img
                  src="/assets/generated/johnathan-headshot.dim_400x500.png"
                  alt="Johnathan Reeves"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay badge */}
                <div className="absolute top-4 left-4 bg-amber text-forest-dark font-body font-bold text-xs px-3 py-1.5 rounded-full shadow-amber-glow tracking-wide uppercase">
                  15+ Years Experience
                </div>
              </div>
            </div>

            {/* Credentials */}
            <div className="mt-8 space-y-3">
              {credentials.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-forest/10 rounded-sm flex items-center justify-center flex-shrink-0 border border-forest/20">
                    <Icon className="w-4 h-4 text-forest" />
                  </div>
                  <span className="font-body text-charcoal text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Story + values */}
          <div className="space-y-8">
            <div className="scroll-fade delay-200">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
                A Trusted Advisor,
                <br />
                <span className="italic text-forest">Not Just an Agent</span>
              </h2>
              <div className="space-y-4 font-body text-charcoal-muted text-base leading-relaxed">
                <p>
                  Johnathan Reeves founded {businessName || 'Reeves Insurance Solutions'} on a simple belief:
                  every family deserves honest, personalized insurance guidance — not a one-size-fits-all policy
                  pushed by someone chasing a commission.
                </p>
                <p>
                  With over 15 years in the industry and access to 30+ top-rated carriers, Johnathan takes the
                  time to understand your unique situation before recommending a single product.
                </p>
              </div>
            </div>

            {/* Value cards */}
            <div className="scroll-fade delay-300 space-y-4">
              {values.map(({ title, desc }) => (
                <div
                  key={title}
                  className="bg-white border border-forest/10 rounded-xl p-5 shadow-forest-sm hover:shadow-forest-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-full min-h-[2.5rem] bg-amber rounded-full flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-display font-bold text-charcoal text-base mb-1">{title}</h3>
                      <p className="font-body text-charcoal-muted text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="scroll-fade delay-400">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-forest hover:bg-forest-light text-white font-body font-semibold px-7 py-3.5 rounded-sm shadow-forest-md hover:shadow-forest-lg transition-all duration-200"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
