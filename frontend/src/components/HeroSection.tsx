import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToConsultation = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x1080.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-primary/95 via-navy-primary/90 to-navy-primary/95" />

      {/* Animated gradient lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-line gradient-line-1" />
        <div className="gradient-line gradient-line-2" />
        <div className="gradient-line gradient-line-3" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`text-center lg:text-left space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-accent/10 border border-gold-accent/30 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-gold-accent" />
              <span className="text-sm text-white font-semibold">Licensed & Certified Insurance Advisor</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight drop-shadow-2xl">
              Helping Families in [City, State] Protect Their Income, Build Tax-Free Wealth & Retire With Confidence
            </h1>

            <p className="text-lg md:text-xl text-white font-sans max-w-2xl drop-shadow-lg leading-relaxed">
              Independent Licensed Insurance Advisor Serving [State] — Personalized Protection Strategies Backed by A-Rated Carriers
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gold-accent hover:bg-gold-accent/90 text-white font-bold text-lg px-8 py-6 shadow-glow-gold hover-lift transition-all duration-300"
              >
                Get My Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={scrollToConsultation}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6 hover-lift backdrop-blur-sm transition-all duration-300"
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>

          {/* Professional Headshot */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-accent/30 to-gold-accent/10 rounded-full blur-3xl" />
              <img
                src="/assets/generated/agent-headshot.dim_400x400.png"
                alt="Professional Insurance Advisor"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-gold-accent/50 shadow-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
