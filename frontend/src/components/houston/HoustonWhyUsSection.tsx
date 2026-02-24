import { Shield, MapPin, Clock } from 'lucide-react';

export default function HoustonWhyUsSection() {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-[#f59e0b]" />,
      title: 'Personal Local Service',
      description: 'Independent agent shops ALL carriers for YOUR best rate',
    },
    {
      icon: <MapPin className="w-12 h-12 text-[#f59e0b]" />,
      title: 'Houston Area Expert',
      description: 'Serving Houston, Katy, Sugar Land, The Woodlands since 2015',
    },
    {
      icon: <Clock className="w-12 h-12 text-[#f59e0b]" />,
      title: '24/7 Claims Help',
      description: 'File claims fast—no corporate hold times',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1e293b] text-center mb-12 leading-[1.6]" style={{ fontWeight: 600 }}>
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-[#ffffff] rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#1e293b] mb-3 leading-[1.6]" style={{ fontWeight: 600 }}>{feature.title}</h3>
              <p className="text-[#334155] leading-[1.6]" style={{ fontWeight: 400 }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
