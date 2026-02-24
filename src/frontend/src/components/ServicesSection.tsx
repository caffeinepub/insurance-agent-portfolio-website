import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: '/assets/generated/icon-life.dim_64x64.png',
      title: 'Life Insurance',
      description: 'Comprehensive coverage that ensures your family\'s financial stability, no matter what happens.',
      emotionalValue: 'Peace of mind knowing your loved ones are protected.',
    },
    {
      icon: '/assets/generated/icon-health.dim_64x64.png',
      title: 'Health Insurance',
      description: 'Medical coverage that protects your savings from unexpected healthcare costs.',
      emotionalValue: 'Access to quality care without financial stress.',
    },
    {
      icon: '/assets/generated/icon-term.dim_64x64.png',
      title: 'Term Plans',
      description: 'Affordable, high-coverage protection for your family during critical earning years.',
      emotionalValue: 'Maximum protection at minimal cost.',
    },
    {
      icon: '/assets/generated/icon-investment.dim_64x64.png',
      title: 'Investment Plans',
      description: 'Grow your wealth while securing your future with smart investment-linked insurance.',
      emotionalValue: 'Build wealth and protection simultaneously.',
    },
    {
      icon: '/assets/generated/icon-retirement.dim_64x64.png',
      title: 'Retirement Planning',
      description: 'Secure your golden years with strategic planning that ensures financial independence.',
      emotionalValue: 'Retire with dignity and financial freedom.',
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-luxury-dark to-luxury-dark/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-accent-gold/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Comprehensive <span className="text-accent-gold glow-text">Protection Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 font-body">
            Tailored insurance strategies designed to protect what matters most to you and your family.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover-lift group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mb-6 rounded-xl bg-accent-gold/10 flex items-center justify-center border border-accent-gold/30 group-hover:border-accent-gold/60 transition-colors">
                <img src={service.icon} alt={service.title} className="w-12 h-12" />
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-accent-gold transition-colors">
                {service.title}
              </h3>
              
              <p className="text-foreground/70 font-body mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex items-start gap-2 mb-6 p-4 rounded-lg bg-accent-blue/5 border border-accent-blue/20">
                <span className="text-accent-blue text-sm font-body italic">{service.emotionalValue}</span>
              </div>
              
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="w-full border-accent-gold/30 text-accent-gold hover:bg-accent-gold/10 group-hover:border-accent-gold transition-all"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
