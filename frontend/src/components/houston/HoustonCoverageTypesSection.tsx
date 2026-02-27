import { ArrowRight } from 'lucide-react';

const coverageTypes = [
  {
    name: 'Auto Insurance',
    description: 'Comprehensive auto coverage at competitive rates. We shop 30+ carriers to find you the best deal.',
    img: '/assets/generated/icon-auto-insurance.dim_64x64.png',
    href: '#quote',
  },
  {
    name: 'Home Insurance',
    description: 'Protect your Houston home from floods, hail, and more with the right homeowners policy.',
    img: '/assets/generated/icon-home-insurance.dim_64x64.png',
    href: '#quote',
  },
  {
    name: 'Life Insurance',
    description: 'Term, whole life, and IUL options to protect your family\'s financial future.',
    img: '/assets/generated/icon-life-insurance.dim_64x64.png',
    href: '#quote',
  },
  {
    name: 'Business Insurance',
    description: 'General liability, workers comp, and commercial coverage for Houston businesses.',
    img: '/assets/generated/icon-business-insurance.dim_64x64.png',
    href: '#quote',
  },
];

export default function HoustonCoverageTypesSection() {
  return (
    <section style={{ backgroundColor: '#FFFFFF' }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: '#f59e0b' }}>
            Coverage Options
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e293b' }}>
            Insurance for Every Houston Need
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: '#334155' }}>
            From protecting your car to securing your family's future, I offer comprehensive
            coverage options tailored to Houston residents.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coverageTypes.map(({ name, description, img, href }) => (
            <div
              key={name}
              className="p-6 rounded-xl border text-center transition-shadow hover:shadow-lg"
              style={{ backgroundColor: '#FFFFFF', borderColor: '#e2e8f0' }}
            >
              <img src={img} alt={name} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-base font-bold mb-2" style={{ color: '#1e293b' }}>
                {name}
              </h3>
              <p className="text-sm mb-4" style={{ color: '#334155' }}>
                {description}
              </p>
              <a
                href={href}
                className="inline-flex items-center gap-1 text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ color: '#f59e0b' }}
              >
                <span style={{ color: '#f59e0b' }}>Get Quote</span>
                <ArrowRight className="w-4 h-4" style={{ color: '#f59e0b' }} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
