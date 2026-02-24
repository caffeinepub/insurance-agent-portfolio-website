import { Shield, Award, Users, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
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

  const credentials = [
    { icon: Shield, label: 'Licensed Insurance Advisor', value: 'License #[Number]' },
    { icon: Award, label: 'States Served', value: '[State List]' },
    { icon: Users, label: 'Families Protected', value: '500+' },
    { icon: TrendingUp, label: 'Coverage Placed', value: '$XX Million' },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-gold-accent/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-800">
              Meet Your Local <span className="text-gold-accent">Insurance & Retirement Advisor</span>
            </h2>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-2xl space-y-6 bg-white/80 backdrop-blur-sm border border-slate-200">
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 font-sans leading-relaxed">
                I'm an independent insurance advisor serving families and business owners in [City, State]. Unlike captive agents who can only sell one company's products, I work with 20+ A-rated carriers to find you the best coverage at the best price—always putting your interests first.
              </p>
              
              <p className="text-slate-700 font-sans leading-relaxed">
                My mission is simple: help you protect your income, build tax-free wealth, and retire with confidence. Whether you need affordable term life insurance, tax-advantaged retirement strategies, or comprehensive business protection, I'll educate you on every option and guide you to the right solution for your unique situation.
              </p>
              
              <p className="text-slate-700 font-sans leading-relaxed">
                I provide complimentary annual policy reviews to ensure your coverage evolves with your life changes—marriage, children, career growth, retirement. And when you need your insurance most, I'm here to advocate for you during the claims process, ensuring you receive every benefit you're entitled to.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
              {credentials.map((cred, index) => {
                const Icon = cred.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-accent/10 flex items-center justify-center border border-gold-accent/30 flex-shrink-0">
                      <Icon className="w-6 h-6 text-gold-accent" />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-slate-800">{cred.label}</p>
                      <p className="text-sm text-slate-700 font-sans">{cred.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
