import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: '/assets/generated/icon-term-life.dim_128x128.png',
      title: 'Term Life Insurance',
      description: 'Affordable income protection that ensures your family can maintain their lifestyle if the unexpected happens.',
      benefits: [
        'Affordable income protection for your family',
        'Mortgage and debt payoff coverage',
        'Replace lost income for 10-30 years',
        'Convertible to permanent coverage',
      ],
      taxAdvantage: 'Death benefits paid 100% income tax-free to beneficiaries',
    },
    {
      icon: '/assets/generated/icon-iul.dim_128x128.png',
      title: 'Indexed Universal Life (IUL)',
      description: 'Build tax-advantaged cash value while protecting your family—wealth accumulation with downside protection.',
      benefits: [
        'Tax-advantaged cash value growth',
        'Market-linked gains with 0% floor protection',
        'Tax-free retirement income potential',
        'Flexible premium payments',
      ],
      taxAdvantage: 'Tax-deferred growth + tax-free loans for retirement income',
    },
    {
      icon: '/assets/generated/icon-whole-life.dim_128x128.png',
      title: 'Whole Life Insurance',
      description: 'Guaranteed growth and lifetime protection—the foundation of generational wealth transfer and estate planning.',
      benefits: [
        'Guaranteed cash value growth',
        'Lifetime death benefit protection',
        'Dividend potential from mutual companies',
        'Estate planning and wealth transfer',
      ],
      taxAdvantage: 'Tax-deferred growth + tax-free death benefit for heirs',
    },
    {
      icon: '/assets/generated/icon-retirement.dim_128x128.png',
      title: 'Retirement Planning',
      description: 'Create tax-efficient retirement income streams that last as long as you do—401(k) rollovers and Roth strategies.',
      benefits: [
        'Tax-efficient retirement income strategies',
        '401(k) and IRA rollover guidance',
        'Roth conversion planning',
        'Social Security optimization',
      ],
      taxAdvantage: 'Minimize taxes in retirement with strategic income planning',
    },
    {
      icon: '/assets/generated/icon-annuities.dim_128x128.png',
      title: 'Annuities',
      description: 'Guaranteed lifetime income you can\'t outlive—principal protection with predictable retirement cash flow.',
      benefits: [
        'Guaranteed lifetime income solutions',
        'Principal protection strategies',
        'Inflation-adjusted income options',
        'No market risk on fixed annuities',
      ],
      taxAdvantage: 'Tax-deferred growth until withdrawal + guaranteed income',
    },
    {
      icon: '/assets/generated/icon-business-protection.dim_128x128.png',
      title: 'Business Owner Protection',
      description: 'Protect your business and key employees—succession planning, buy-sell agreements, and executive benefits.',
      benefits: [
        'Key person insurance for critical employees',
        'Buy-sell agreement funding',
        'Executive bonus and retention plans',
        'Business succession planning',
      ],
      taxAdvantage: 'Tax-deductible premiums + tax-advantaged executive benefits',
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section ref={sectionRef} id="services" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-gold-accent/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mx-auto text-center space-y-6 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-800">
            Comprehensive <span className="text-gold-accent">Protection Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-700 font-sans">
            Strategic insurance and wealth-building solutions designed for [City] families and business owners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`glass-card p-8 rounded-2xl hover-lift group transition-all duration-700 bg-white/80 backdrop-blur-sm border border-slate-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 mb-6 rounded-xl bg-gold-accent/10 flex items-center justify-center border border-gold-accent/30 group-hover:border-gold-accent/60 transition-all duration-300">
                <img src={service.icon} alt={service.title} className="w-16 h-16" loading="lazy" />
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4 group-hover:text-gold-accent transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-700 font-sans mb-4 leading-relaxed text-sm">
                {service.description}
              </p>

              <div className="mb-4 space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-accent mt-2 flex-shrink-0" />
                    <p className="text-slate-700 text-xs font-sans">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="mb-6 p-4 rounded-lg bg-gold-accent/5 border border-gold-accent/20">
                <p className="text-gold-accent text-xs font-sans font-semibold">💰 {service.taxAdvantage}</p>
              </div>
              
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="w-full border-gold-accent/30 text-gold-accent hover:bg-gold-accent/10 group-hover:border-gold-accent transition-all duration-300"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
