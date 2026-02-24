import { Shield, BookOpen, Calendar, Headphones } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function WhyChooseSection() {
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

  const benefits = [
    {
      icon: Shield,
      title: 'Independent & Unbiased Advice',
      description: 'As an independent advisor, I\'m not tied to any single insurance company. I shop 20+ A-rated carriers to find you the best coverage at the best price—always putting your interests first, never corporate quotas.',
    },
    {
      icon: BookOpen,
      title: 'Transparent & Education-First Approach',
      description: 'No confusing jargon or hidden fees. I take the time to educate you on every option, explain the fine print, and ensure you understand exactly what you\'re buying and why it matters for your family\'s future.',
    },
    {
      icon: Calendar,
      title: 'Ongoing Annual Reviews',
      description: 'Your life changes—marriage, children, career growth, retirement. I provide complimentary annual policy reviews to ensure your coverage evolves with your needs, so you\'re never under-protected or overpaying.',
    },
    {
      icon: Headphones,
      title: 'Dedicated Claims Support',
      description: 'When you need your insurance most, I\'m here to advocate for you. I guide you through the claims process, handle paperwork, and fight to ensure you receive every benefit you\'re entitled to—quickly and fairly.',
    },
  ];

  return (
    <section ref={sectionRef} id="why-choose" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-gold-accent/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mx-auto text-center space-y-6 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-800">
            Why Choose <span className="text-gold-accent">Me as Your Advisor</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-700 font-sans">
            Experience the difference of working with a trusted, independent insurance professional who puts your family first.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`glass-card p-8 rounded-2xl hover-lift transition-all duration-700 bg-white/80 backdrop-blur-sm border border-slate-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-gold-accent/10 flex items-center justify-center border border-gold-accent/30 mb-6 transition-all duration-300 hover:border-gold-accent/60 hover:bg-gold-accent/20">
                  <Icon className="w-8 h-8 text-gold-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-800 mb-4">{benefit.title}</h3>
                <p className="text-slate-700 font-sans text-sm leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
