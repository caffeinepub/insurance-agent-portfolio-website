import { useEffect, useRef } from 'react';
import { ChevronDown, Star } from 'lucide-react';
import { useBusinessInfo } from '../hooks/useBusinessInfo';

export default function ReevesHeroSection() {
  const { businessName, phone, licensedStates } = useBusinessInfo();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (el) {
      el.classList.add('fade-in-up');
    }
  }, []);

  const statesDisplay = licensedStates || 'CA, NY, TX';

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f2557 0%, #1e3a8a 60%, #1e40af 100%)' }}
      aria-label="Hero section"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #c9a227 0%, transparent 50%), radial-gradient(circle at 75% 75%, #c9a227 0%, transparent 50%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div ref={heroRef} className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border"
              style={{ backgroundColor: 'rgba(201,162,39,0.15)', borderColor: 'rgba(201,162,39,0.4)', color: '#f0c040' }}>
              <Star className="w-3.5 h-3.5 fill-current" />
              Licensed in {statesDisplay} | 10+ Years Experience
            </div>

            {/* H1 Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: '#ffffff' }}>
              Protecting Your Future with{' '}
              <span style={{ color: '#c9a227' }}>Expert Insurance</span>{' '}
              Solutions
            </h1>

            <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: '#cbd5e1' }}>
              Johnathan Reeves, CLU, ChFC — Your trusted insurance advisor in Los Angeles.
              Get personalized coverage from top-rated carriers at the best rates.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-base font-bold transition-all hover:opacity-90 hover:shadow-gold-glow focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                style={{ backgroundColor: '#c9a227', color: '#0f2557' }}
                aria-label="Get a free insurance quote"
              >
                Get Free Quote
              </a>
              <a
                href="#calendar-section"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-base font-bold border-2 transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                style={{ borderColor: '#ffffff', color: '#ffffff' }}
                aria-label="Schedule a call with Johnathan Reeves"
              >
                Schedule Call
              </a>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '500+', label: 'Clients Served' },
                { value: '4.9★', label: 'Google Rating' },
                { value: 'A+', label: 'Rated Carriers' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold" style={{ color: '#c9a227' }}>{stat.value}</div>
                  <div className="text-xs" style={{ color: '#94a3b8' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Agent Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div
                className="absolute -inset-4 rounded-2xl opacity-20"
                style={{ background: 'linear-gradient(135deg, #c9a227, transparent)' }}
              />
              <div className="relative rounded-2xl overflow-hidden shadow-navy-shadow border-2"
                style={{ borderColor: 'rgba(201,162,39,0.4)' }}>
                <img
                  src="/assets/generated/agent-headshot.dim_400x500.png"
                  alt="Professional male insurance agent in a navy suit shaking hands with a client in a bright office, diverse USA setting, warm and trustworthy expression"
                  className="w-full max-w-sm object-cover"
                  style={{ maxHeight: '520px' }}
                  loading="eager"
                />
                {/* Overlay card */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{ background: 'linear-gradient(to top, rgba(15,37,87,0.95), transparent)' }}
                >
                  <p className="font-bold text-lg" style={{ color: '#ffffff' }}>Johnathan Reeves</p>
                  <p className="text-sm" style={{ color: '#c9a227' }}>CLU, ChFC | Licensed in {statesDisplay}</p>
                  <a
                    href={`tel:${phone.replace(/\D/g, '')}`}
                    className="text-sm mt-1 block hover:opacity-80 transition-opacity"
                    style={{ color: '#e2e8f0' }}
                    aria-label={`Call Johnathan Reeves at ${phone}`}
                  >
                    📞 {phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-white rounded"
        aria-label="Scroll to About section"
      >
        <span className="text-xs" style={{ color: '#94a3b8' }}>Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" style={{ color: '#94a3b8' }} />
      </a>
    </section>
  );
}
