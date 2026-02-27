import { useEffect, useRef } from 'react';
import { Clock, DollarSign, MapPin, Shield } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: '24/7 Support',
    description:
      'Insurance emergencies don\'t follow business hours. Johnathan is available around the clock for claims support, policy questions, and urgent coverage needs.',
    stat: '24/7',
    statLabel: 'Availability',
  },
  {
    icon: DollarSign,
    title: 'Best Rates',
    description:
      'We shop multiple top-rated carriers simultaneously to find you the most competitive rates without compromising on coverage quality.',
    stat: '20+',
    statLabel: 'Carriers Compared',
  },
  {
    icon: MapPin,
    title: 'Local Expert',
    description:
      'Deep knowledge of California, New York, and Texas insurance markets means you get advice tailored to your state\'s specific regulations and risks.',
    stat: '3',
    statLabel: 'States Licensed',
  },
  {
    icon: Shield,
    title: 'A+ Rated Carriers',
    description:
      'We only partner with financially strong, A+ rated insurance carriers — so you can trust your claims will be paid when you need them most.',
    stat: 'A+',
    statLabel: 'Carrier Rating',
  },
];

export default function ReevesWhyChooseSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.why-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
              }, i * 120);
            });
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
      id="why-choose"
      ref={sectionRef}
      className="py-20"
      style={{ background: 'linear-gradient(135deg, #0f2557 0%, #1e3a8a 100%)' }}
      aria-label="Why choose Reeves Insurance Solutions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: '#c9a227' }}>
            The Reeves Difference
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#ffffff' }}>
            Why Choose Reeves Insurance Solutions
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: '#cbd5e1' }}>
            We're not just selling policies — we're building long-term relationships based on trust,
            expertise, and genuine care for your financial security.
          </p>
          <div className="w-16 h-1 mx-auto rounded-full mt-4" style={{ backgroundColor: '#c9a227' }} />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="why-card rounded-2xl p-6 text-center border transition-all duration-300 hover:shadow-gold-glow hover:-translate-y-1"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.07)',
                  borderColor: 'rgba(201,162,39,0.25)',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease',
                }}
                aria-label={reason.title}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'rgba(201,162,39,0.2)' }}
                  aria-hidden="true"
                >
                  <Icon className="w-7 h-7" style={{ color: '#c9a227' }} />
                </div>

                {/* Stat */}
                <div className="text-3xl font-bold mb-1" style={{ color: '#c9a227' }}>
                  {reason.stat}
                </div>
                <div className="text-xs mb-3" style={{ color: '#94a3b8' }}>
                  {reason.statLabel}
                </div>

                <h3 className="text-base font-bold mb-2" style={{ color: '#ffffff' }}>
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#cbd5e1' }}>
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-bold transition-all hover:opacity-90 hover:shadow-gold-glow focus:outline-none focus:ring-2 focus:ring-yellow-400"
            style={{ backgroundColor: '#c9a227', color: '#0f2557' }}
            aria-label="Get your free insurance quote today"
          >
            Get Your Free Quote Today
          </a>
        </div>
      </div>
    </section>
  );
}
