import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    label: 'Figma Mockup',
    sublabel: 'Custom branded design',
    image: '/assets/generated/process-step1.dim_600x400.png',
    fallbackImage: '/assets/generated/figma-design-screenshot.dim_600x400.png',
    step: '01',
  },
  {
    label: 'Live Preview',
    sublabel: 'Deployed & fully functional',
    image: '/assets/generated/process-step2.dim_600x400.png',
    fallbackImage: '/assets/generated/live-preview-screenshot.dim_600x400.png',
    step: '02',
  },
  {
    label: 'Google #1 Conroe',
    sublabel: 'Ranked locally in 30 days',
    image: '/assets/generated/process-step3.dim_600x400.png',
    fallbackImage: '/assets/generated/conroe-number-one-screenshot.dim_600x400.png',
    step: '03',
  },
];

export default function ProcessProofSection() {
  return (
    <section className="bg-forest-dark py-16 lg:py-20 relative overflow-hidden">
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-amber-gradient" />

      {/* Subtle texture */}
      <div className="absolute inset-0 texture-overlay opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-amber/60" />
            <span className="font-body text-amber text-sm font-semibold tracking-widest uppercase">
              Proven Build Process
            </span>
            <div className="w-8 h-px bg-amber/60" />
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white leading-tight">
            From Design to{' '}
            <span className="italic text-amber">Google #1 Conroe</span>
          </h2>
          <p className="font-body text-white/55 text-base mt-3 max-w-xl mx-auto">
            Every site we build follows the same proven 3-step process that gets Conroe agents ranking and converting.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
          {steps.map((step, index) => (
            <React.Fragment key={step.label}>
              {/* Step card */}
              <div className="w-full md:w-72 lg:w-80 flex-shrink-0">
                <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-amber/30 transition-all duration-300 group">
                  {/* Screenshot image */}
                  <div className="relative aspect-[3/2] overflow-hidden bg-forest/40">
                    <img
                      src={step.image}
                      alt={step.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.currentTarget;
                        // Try fallback image
                        if (target.src !== step.fallbackImage) {
                          target.src = step.fallbackImage;
                        } else {
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.style.background = 'linear-gradient(135deg, #1A3A2A 0%, #2D5A40 100%)';
                            parent.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:rgba(200,146,42,0.6);font-size:3rem;font-weight:bold;">${step.step}</div>`;
                          }
                        }
                      }}
                    />
                    {/* Step number badge */}
                    <div className="absolute top-3 left-3 w-8 h-8 bg-amber rounded-sm flex items-center justify-center shadow-amber-glow">
                      <span className="font-body font-bold text-forest-dark text-xs">{step.step}</span>
                    </div>
                  </div>

                  {/* Label */}
                  <div className="p-4">
                    <h3 className="font-display font-bold text-white text-lg leading-tight">
                      {step.label}
                    </h3>
                    <p className="font-body text-white/50 text-sm mt-1">{step.sublabel}</p>
                  </div>
                </div>
              </div>

              {/* Arrow connector (between steps) */}
              {index < steps.length - 1 && (
                <div className="flex-shrink-0 flex items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-amber/60 rotate-90 md:rotate-0" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Timeline tagline */}
        <div className="text-center mt-10">
          <p className="font-display font-bold text-white text-xl md:text-2xl">
            ⚡ 5 days from deposit to live site
          </p>
        </div>
      </div>
    </section>
  );
}
