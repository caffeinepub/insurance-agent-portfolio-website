import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x1080.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/90 via-luxury-dark/80 to-luxury-dark/95" />

      {/* Animated gradient lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-line gradient-line-1" />
        <div className="gradient-line gradient-line-2" />
        <div className="gradient-line gradient-line-3" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/30 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-accent-gold" />
              <span className="text-sm text-accent-gold font-semibold">Licensed & Certified Advisor</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
              Protect What Matters Most.{' '}
              <span className="text-accent-gold glow-text">Build Wealth That Lasts.</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 font-body max-w-2xl">
              Helping professionals and families secure their financial future with intelligent insurance and long-term
              protection strategies.
            </p>

            <div className="flex items-center gap-2 text-accent-blue font-body italic text-base md:text-lg">
              <span className="w-12 h-0.5 bg-accent-blue" />
              One unexpected moment should never destroy a lifetime of hard work.
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-cta-bright hover:bg-cta-bright/90 text-luxury-dark font-bold text-lg px-8 py-6 shadow-glow-gold hover-lift"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={scrollToContact}
                size="lg"
                variant="outline"
                className="border-2 border-accent-blue text-accent-blue hover:bg-accent-blue/10 font-semibold text-lg px-8 py-6 hover-lift"
              >
                Get Custom Protection Plan
              </Button>
            </div>
          </div>

          {/* Portrait */}
          <div className="flex justify-center lg:justify-end animate-fade-in-delay">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/30 to-accent-blue/30 rounded-full blur-3xl" />
              <img
                src="/assets/generated/agent-portrait.dim_400x400.png"
                alt="Professional Insurance Agent"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-accent-gold/50 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
