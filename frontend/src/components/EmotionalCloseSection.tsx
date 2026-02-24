import { Button } from '@/components/ui/button';
import { Shield, Clock, Heart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function EmotionalCloseSection() {
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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const benefits = [
    {
      icon: Shield,
      title: 'Income Protection',
      description: 'Ensure your family can maintain their lifestyle even if the unexpected happens',
    },
    {
      icon: Clock,
      title: 'Tax-Free Wealth',
      description: 'Build retirement income that doesn\'t get taxed—keep more of what you earn',
    },
    {
      icon: Heart,
      title: 'Peace of Mind',
      description: 'Sleep better knowing your loved ones are financially protected no matter what',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-gold-accent/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-800">
            Your Family's Financial Security <span className="text-gold-accent">Can't Wait Another Day</span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-700 font-sans max-w-3xl mx-auto leading-relaxed">
            Every day without proper protection is a day your family is at risk. Don't leave their future to chance—take action now to secure the coverage they deserve.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl hover-lift transition-all duration-300 bg-white/80 backdrop-blur-sm border border-slate-200"
                >
                  <div className="w-14 h-14 rounded-full bg-gold-accent/10 flex items-center justify-center border border-gold-accent/30 mx-auto mb-4">
                    <Icon className="w-7 h-7 text-gold-accent" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-slate-800 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-700 font-sans">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-gold-accent hover:bg-gold-accent/90 text-white font-bold text-xl px-12 py-8 shadow-glow-gold hover-lift transition-all duration-300"
          >
            Protect My Family Now
          </Button>

          <p className="text-sm text-slate-700 font-sans">
            ⚡ Free quote in 5 minutes • No obligation • Trusted by 500+ families
          </p>
        </div>
      </div>
    </section>
  );
}
