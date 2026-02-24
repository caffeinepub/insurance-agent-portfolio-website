import { Car, Home, Heart, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HoustonCoverageTypesSection() {
  const scrollToForm = () => {
    const form = document.getElementById('quote-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const coverageTypes = [
    {
      icon: <Car className="w-12 h-12 text-[#f59e0b]" />,
      title: 'Auto Insurance',
      description: 'Full coverage from $89/mo - Quote in 60 seconds',
    },
    {
      icon: <Home className="w-12 h-12 text-[#f59e0b]" />,
      title: 'Home Insurance',
      description: 'Protect your Houston property from floods to fires',
    },
    {
      icon: <Heart className="w-12 h-12 text-[#f59e0b]" />,
      title: 'Life Insurance',
      description: 'Affordable term policies for Texas families',
    },
    {
      icon: <Briefcase className="w-12 h-12 text-[#f59e0b]" />,
      title: 'Business Insurance',
      description: 'Liability + Workers Comp for Houston companies',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#ffffff]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1e293b] text-center mb-12 leading-[1.6]" style={{ fontWeight: 600 }}>
          Coverage Types
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {coverageTypes.map((coverage, index) => (
            <div
              key={index}
              className="p-6 bg-[#f8fafc] rounded-lg border-2 border-gray-200 hover:border-[#f59e0b] hover:shadow-lg transition-all hover:scale-105"
            >
              <div className="flex justify-center mb-4">{coverage.icon}</div>
              <h3 className="text-xl font-semibold text-[#1e293b] mb-3 text-center leading-[1.6]" style={{ fontWeight: 600 }}>
                {coverage.title}
              </h3>
              <p className="text-[#334155] mb-6 text-center leading-[1.6]" style={{ fontWeight: 400 }}>{coverage.description}</p>
              <Button
                onClick={scrollToForm}
                className="w-full bg-[#f59e0b] hover:bg-[#f59e0b]/90 text-white font-semibold rounded-full"
                style={{ fontWeight: 600 }}
              >
                Get Quote
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
