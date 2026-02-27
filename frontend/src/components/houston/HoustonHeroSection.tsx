import { Phone, ArrowRight, Shield, Star } from 'lucide-react';
import { useBusinessInfo } from '../../hooks/useBusinessInfo';

export default function HoustonHeroSection() {
  const { businessName, phone } = useBusinessInfo();
  const displayPhone = phone || '(832) 555-1234';
  const telPhone = displayPhone.replace(/\D/g, '');

  return (
    <section
      className="relative min-h-[85vh] flex items-center"
      style={{ backgroundColor: '#1e3a8a' }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 60%, #1e3a8a 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Trust Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ backgroundColor: 'rgba(245,158,11,0.2)', color: '#f59e0b' }}
            >
              <Shield className="w-4 h-4" style={{ color: '#f59e0b' }} />
              <span style={{ color: '#f59e0b' }}>Conroe's Trusted Independent Broker</span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ color: '#FFFFFF' }}
            >
              Conroe Agents: Get 12+ Quotes/Month
            </h1>

            <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: '#FFFFFF' }}>
              Local, independent broker serving Conroe families with honest advice and access to
              30+ top-rated carriers. No pressure. No gimmicks. Just the right coverage at the
              right price.
            </p>

            {/* Stars */}
            <div className="flex items-center gap-2 mb-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#f59e0b' }} />
              ))}
              <span className="text-sm font-medium ml-1" style={{ color: '#FFFFFF' }}>
                5.0 · 300+ Conroe Families Protected
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded font-bold text-lg transition-all hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: '#f59e0b', color: '#FFFFFF' }}
              >
                <span style={{ color: '#FFFFFF' }}>Get Conroe Site - 3 Spots Left Week</span>
                <ArrowRight className="w-5 h-5" style={{ color: '#FFFFFF' }} />
              </a>
              <a
                href={`tel:+1${telPhone}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded font-bold text-lg transition-all hover:opacity-90"
                style={{ backgroundColor: '#f97316', color: '#FFFFFF' }}
              >
                <Phone className="w-5 h-5" style={{ color: '#FFFFFF' }} />
                <span style={{ color: '#FFFFFF' }}>{displayPhone}</span>
              </a>
            </div>
          </div>

          {/* Agent Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div
                className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4"
                style={{ borderColor: '#f59e0b' }}
              >
                <img
                  src="/assets/generated/agent-portrait.dim_400x400.png"
                  alt={businessName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-lg shadow-lg"
                style={{ backgroundColor: '#f59e0b' }}
              >
                <p className="text-sm font-bold" style={{ color: '#FFFFFF' }}>
                  {businessName}
                </p>
                <p className="text-xs" style={{ color: '#FFFFFF' }}>
                  Conroe Insurance Expert
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 py-3 flex gap-3"
        style={{ backgroundColor: '#1e3a8a', borderTop: '1px solid rgba(255,255,255,0.2)' }}
      >
        <a
          href="#quote"
          className="flex-1 text-center py-3 rounded-lg font-bold text-sm"
          style={{ backgroundColor: '#f59e0b', color: '#FFFFFF' }}
        >
          <span style={{ color: '#FFFFFF' }}>Get Conroe Site - 3 Spots Left Week</span>
        </a>
        <a
          href={`tel:+1${telPhone}`}
          className="flex-1 text-center py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2"
          style={{ backgroundColor: '#f97316', color: '#FFFFFF' }}
        >
          <Phone className="w-4 h-4" style={{ color: '#FFFFFF' }} />
          <span style={{ color: '#FFFFFF' }}>{displayPhone}</span>
        </a>
      </div>
    </section>
  );
}
