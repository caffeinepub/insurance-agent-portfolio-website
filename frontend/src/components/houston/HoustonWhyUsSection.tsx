import { UserCheck, MapPin, LifeBuoy } from 'lucide-react';

const reasons = [
  {
    icon: UserCheck,
    title: 'Personal Local Service',
    description:
      'I\'m a real person in Houston — not a call center. You get my direct line and personalized attention every time.',
    img: '/assets/generated/icon-personal-service.dim_64x64.png',
  },
  {
    icon: MapPin,
    title: 'Houston Area Expert',
    description:
      'I know Houston\'s unique risks — from flooding to hail storms. I make sure your coverage actually protects you here.',
    img: '/assets/generated/icon-houston-expert.dim_64x64.png',
  },
  {
    icon: LifeBuoy,
    title: '24/7 Claims Help',
    description:
      'When disaster strikes, I\'m available around the clock to guide you through the claims process and fight for your payout.',
    img: '/assets/generated/icon-claims-support.dim_64x64.png',
  },
];

export default function HoustonWhyUsSection() {
  return (
    <section style={{ backgroundColor: '#f8fafc' }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: '#f59e0b' }}>
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e293b' }}>
            Houston's Independent Insurance Advantage
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: '#334155' }}>
            Unlike big-box insurance companies, I live and work in Houston. I understand your
            community and your risks.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, description, img }) => (
            <div
              key={title}
              className="p-6 rounded-xl text-center"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <img src={img} alt={title} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-base font-bold mb-2" style={{ color: '#1e293b' }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#334155' }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
