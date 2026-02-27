import { useEffect, useRef } from 'react';

const services = [
  {
    icon: '/assets/generated/icon-auto.dim_80x80.png',
    iconAlt: 'Auto insurance icon - simple flat vector car silhouette in gold on white',
    title: 'Auto Insurance',
    description:
      'Protect your vehicle with comprehensive, collision, and liability coverage. We shop top carriers to find you the best rate without sacrificing protection.',
    highlights: ['Liability & Collision', 'Uninsured Motorist', 'Roadside Assistance'],
    coverageType: 'auto',
  },
  {
    icon: '/assets/generated/icon-home.dim_80x80.png',
    iconAlt: 'Home insurance icon - simple flat vector house silhouette in gold on white',
    title: 'Home Insurance',
    description:
      'Safeguard your most valuable asset. From dwelling coverage to personal property and liability, we ensure your home is fully protected.',
    highlights: ['Dwelling Coverage', 'Personal Property', 'Liability Protection'],
    coverageType: 'home',
  },
  {
    icon: '/assets/generated/icon-life.dim_80x80.png',
    iconAlt: 'Life insurance icon - simple flat vector heart/shield in gold on white',
    title: 'Life Insurance',
    description:
      'Give your family financial security with term, whole, or universal life policies tailored to your goals and budget.',
    highlights: ['Term Life', 'Whole Life', 'Universal Life'],
    coverageType: 'life',
  },
  {
    icon: '/assets/generated/icon-health.dim_80x80.png',
    iconAlt: 'Health insurance icon - simple flat vector medical cross in gold on white',
    title: 'Health Insurance',
    description:
      'Access quality healthcare without financial stress. Individual, family, and group health plans from leading providers.',
    highlights: ['Individual Plans', 'Family Coverage', 'Preventive Care'],
    coverageType: 'health',
  },
  {
    icon: '/assets/generated/icon-business.dim_80x80.png',
    iconAlt: 'Business insurance icon - simple flat vector briefcase in gold on white',
    title: 'Business Insurance',
    description:
      'Protect your business from unexpected risks with general liability, commercial property, workers\' comp, and more.',
    highlights: ['General Liability', 'Commercial Property', 'Workers\' Comp'],
    coverageType: 'business',
  },
];

export default function ReevesServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
              }, i * 100);
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
    <section id="services" ref={sectionRef} className="py-20" style={{ backgroundColor: '#ffffff' }} aria-label="Insurance services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: '#c9a227' }}>
            What We Cover
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0f2557' }}>
            Our Insurance Services
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: '#374151' }}>
            Comprehensive coverage options for every stage of life. We work with top-rated carriers
            to find the right policy at the right price.
          </p>
          <div className="w-16 h-1 mx-auto rounded-full mt-4" style={{ backgroundColor: '#c9a227' }} />
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="service-card rounded-2xl p-6 border transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 group"
              style={{
                backgroundColor: '#ffffff',
                borderColor: 'rgba(201,162,39,0.2)',
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease',
              }}
              aria-label={`${service.title} coverage`}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: 'rgba(201,162,39,0.1)' }}
              >
                <img
                  src={service.icon}
                  alt={service.iconAlt}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-2" style={{ color: '#0f2557' }}>
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#374151' }}>
                {service.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1 mb-5">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs" style={{ color: '#374151' }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#c9a227' }} aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex gap-2">
                <a
                  href="#contact-form"
                  className="flex-1 text-center px-3 py-2 rounded-lg text-xs font-bold transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  style={{ backgroundColor: '#c9a227', color: '#0f2557' }}
                  aria-label={`Get a ${service.title} quote`}
                >
                  Get a Quote
                </a>
                <a
                  href="#contact-form"
                  className="flex-1 text-center px-3 py-2 rounded-lg text-xs font-semibold border transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  style={{ borderColor: '#0f2557', color: '#0f2557' }}
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                </a>
              </div>
            </article>
          ))}

          {/* CTA Card */}
          <article
            className="service-card rounded-2xl p-6 flex flex-col items-center justify-center text-center border-2 border-dashed"
            style={{
              borderColor: 'rgba(201,162,39,0.4)',
              backgroundColor: 'rgba(201,162,39,0.04)',
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          >
            <p className="text-base font-bold mb-2" style={{ color: '#0f2557' }}>
              Not sure what you need?
            </p>
            <p className="text-sm mb-4" style={{ color: '#374151' }}>
              Let Johnathan review your situation and recommend the right coverage.
            </p>
            <a
              href="#contact-form"
              className="px-6 py-2.5 rounded-lg text-sm font-bold transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              style={{ backgroundColor: '#0f2557', color: '#ffffff' }}
              aria-label="Get a free insurance consultation"
            >
              Free Consultation
            </a>
          </article>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs mt-10" style={{ color: '#9ca3af' }}>
          Insurance products not available in all states. Coverage varies by state regulations.
          Licensed in CA, NY, TX.
        </p>
      </div>
    </section>
  );
}
