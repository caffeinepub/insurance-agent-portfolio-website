import { DollarSign, Users, CheckCircle2, Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function TrustBar() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const stats = [
    { icon: DollarSign, label: 'Coverage Placed', value: '$XX Million' },
    { icon: Users, label: 'Families Protected', value: '500+' },
    { icon: CheckCircle2, label: 'Claims Support Success Rate', value: '98%' },
    { icon: Star, label: 'Client Satisfaction', value: '5-Star' },
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-white border-y border-gold-accent/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 bg-white">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center space-y-2 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                } hover:scale-105`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-gold-accent/10 flex items-center justify-center border border-gold-accent/30 transition-all duration-300 hover:border-gold-accent/60 hover:bg-gold-accent/20">
                  <Icon className="w-7 h-7 text-gold-accent" />
                </div>
                <div className="text-2xl md:text-3xl font-serif font-bold text-gold-accent">{stat.value}</div>
                <div className="text-sm text-navy-primary font-sans">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
