import { useEffect, useRef } from 'react';
import { Award } from 'lucide-react';

const carriers = [
  { name: 'State Farm', alt: 'State Farm logo', color: '#CC0000', initial: 'SF' },
  { name: 'Allstate', alt: 'Allstate logo', color: '#0033A0', initial: 'AS' },
  { name: 'Geico', alt: 'Geico logo', color: '#00A651', initial: 'GE' },
  { name: 'Progressive', alt: 'Progressive logo', color: '#0066CC', initial: 'PR' },
];

export default function ReevesCarrierBadges() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16"
      style={{ backgroundColor: '#f8f9fc' }}
      aria-label="Partnered insurance carriers"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Award className="w-5 h-5" style={{ color: '#c9a227' }} aria-hidden="true" />
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#0f2557' }}>
              Partnered with Top-Rated Carriers
            </h2>
          </div>
          <p className="text-sm" style={{ color: '#374151' }}>
            We work with America's most trusted insurance companies to find you the best coverage.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {carriers.map((carrier) => (
            <div
              key={carrier.name}
              className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
              style={{ backgroundColor: '#ffffff', borderColor: 'rgba(201,162,39,0.2)' }}
              aria-label={carrier.alt}
            >
              {/* Carrier Logo Placeholder */}
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-3 text-white font-bold text-xl"
                style={{ backgroundColor: carrier.color }}
                aria-hidden="true"
              >
                {carrier.initial}
              </div>
              <p className="text-sm font-bold text-center" style={{ color: '#0f2557' }}>
                {carrier.name}
              </p>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-xs font-semibold" style={{ color: '#c9a227' }}>A+</span>
                <span className="text-xs" style={{ color: '#6b7280' }}>Rated</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs mt-8" style={{ color: '#9ca3af' }}>
          Not affiliated with any carrier. Carrier logos are trademarks of their respective owners.
          Coverage availability varies by state.
        </p>
      </div>
    </section>
  );
}
