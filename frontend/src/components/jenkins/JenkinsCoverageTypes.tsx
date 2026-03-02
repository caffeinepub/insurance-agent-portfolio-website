import { useRef, useEffect, useState } from 'react';

interface CoverageCard {
  icon: string;
  title: string;
  description: string;
}

const defaultCoverage: CoverageCard[] = [
  {
    icon: '🏠',
    title: 'Homeowners Insurance',
    description: 'Protect your biggest investment. Best rates for Greater Houston homes including flood & windstorm coverage.',
  },
  {
    icon: '🚗',
    title: 'Auto Insurance',
    description: 'Compare 20+ carriers instantly. Multi-car discounts available. Texas minimum to full comprehensive.',
  },
  {
    icon: '🏢',
    title: 'Business Insurance',
    description: 'General liability, commercial property and workers comp for Houston small businesses and contractors.',
  },
  {
    icon: '🌊',
    title: 'Flood Insurance',
    description: "Most Texas policies DON'T cover flooding. We get you the right NFIP or private flood coverage.",
  },
  {
    icon: '🏍️',
    title: 'Recreational Vehicles',
    description: 'Motorcycles, boats, ATVs, golf carts and RVs. Protect everything you love in Texas.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Life & Health Insurance',
    description: 'Term life, whole life, and health coverage for Houston families and small business owners.',
  },
];

export default function JenkinsCoverageTypes() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [coverage, setCoverage] = useState<CoverageCard[]>(defaultCoverage);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('jenkinsCoverage');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length === 6) {
          setCoverage(parsed.map((item: Partial<CoverageCard>, i: number) => ({
            icon: defaultCoverage[i].icon,
            title: item.title || defaultCoverage[i].title,
            description: item.description || defaultCoverage[i].description,
          })));
        }
      }
    } catch {}

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="coverage" className="py-[90px]" style={{ background: '#F8F9FA' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-montserrat font-extrabold text-[38px] text-jenkins-navy mb-3">
            Coverage We Specialize In
          </h2>
          <p className="font-opensans text-[18px] text-[#555]">
            Protecting every part of your Greater Houston life
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {coverage.map((card, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl p-8 shadow-jenkins-card card-hover border-2 border-transparent hover:border-jenkins-gold transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="font-montserrat font-bold text-[18px] text-jenkins-navy mb-3">
                {card.title}
              </h3>
              <p className="font-opensans text-[15px] text-[#555] leading-[1.7] mb-4">
                {card.description}
              </p>
              <a
                href="#contact"
                className="font-opensans font-bold text-jenkins-gold text-[15px] hover:underline"
              >
                Get Quote →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
