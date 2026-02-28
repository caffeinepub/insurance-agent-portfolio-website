import React from 'react';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a2e1a 0%, #0d1f0d 50%, #0a1a0a 100%)' }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.png"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(26,46,26,0.85) 0%, rgba(13,31,13,0.9) 100%)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 mb-6">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-amber-400 text-xs font-semibold tracking-wide uppercase">Conroe TX #1 Insurance Agency</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6">
              Conroe Agents:<br />
              <span className="text-amber-400">Get 12+ Quotes</span><br />
              Per Month
            </h1>

            <p className="text-gray-300 text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Professional insurance websites built specifically for Conroe, TX agents. 
              More leads, more quotes, more revenue — guaranteed.
            </p>

            {/* Trust Points */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8 justify-center lg:justify-start">
              {['No setup fees', 'Live in 48 hours', '30-day guarantee'].map(point => (
                <div key={point} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  {point}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="flex items-center justify-center gap-2 px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-bold text-sm md:text-base text-forest-dark bg-amber-400 hover:bg-amber-300 transition-all shadow-amber-glow"
              >
                Get Conroe Site – 3 Spots Left
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <a
                href="tel:+19364412301"
                className="flex items-center justify-center gap-2 px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-semibold text-sm md:text-base text-white border border-white/30 hover:bg-white/10 transition-all"
              >
                Call (936) 441-2301
              </a>
            </div>
          </div>

          {/* Agent Photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl opacity-30" style={{ background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)' }} />
              <img
                src="/assets/generated/johnathan-headshot.dim_400x500.png"
                alt="Johnathan Reeves — Insurance Agent"
                className="relative w-56 sm:w-72 md:w-80 lg:w-96 max-w-full rounded-2xl object-cover shadow-2xl"
                style={{ aspectRatio: '4/5' }}
              />
              {/* Floating testimonial */}
              <div className="absolute -bottom-4 -left-4 sm:-left-8 bg-white rounded-xl p-3 shadow-xl max-w-[200px] sm:max-w-[220px]">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-800 text-xs font-medium leading-tight">"12 quotes my first month!"</p>
                <p className="text-gray-500 text-xs mt-1">— TX Agent J.D.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { value: '50+', label: 'Carrier Partners' },
            { value: '500+', label: 'Families Served' },
            { value: '4.9★', label: 'Google Rating' },
            { value: '15+', label: 'Years Experience' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center p-3 md:p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl md:text-3xl font-bold text-amber-400">{value}</p>
              <p className="text-gray-400 text-xs md:text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
