import { Button } from '@/components/ui/button';
import { ArrowRight, AlertTriangle } from 'lucide-react';

export default function EmotionalCloseSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-luxury-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-accent-gold/10 via-accent-blue/5 to-transparent spotlight-effect" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/30 backdrop-blur-sm mb-4">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-sm text-destructive font-semibold">Time-Sensitive Decision</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
            Your Family Deserves <span className="text-accent-gold glow-text">Security</span>. Don't Wait.
          </h2>

          <p className="text-xl md:text-2xl text-accent-blue font-body italic">
            Every day without protection increases financial risk.
          </p>

          <div className="glass-card p-8 md:p-12 rounded-2xl border-2 border-accent-gold/30 space-y-6">
            <p className="text-lg md:text-xl text-foreground/80 font-body leading-relaxed">
              The best time to secure your family's future was yesterday. The second best time is right now. Don't let
              another day pass without the protection your loved ones deserve.
            </p>

            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-cta-bright hover:bg-cta-bright/90 text-luxury-dark font-bold text-xl px-12 py-8 shadow-glow-gold hover-lift w-full sm:w-auto"
            >
              Book Your Free Financial Protection Session Now
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>

            <p className="text-sm text-foreground/60 font-body">
              Limited consultation slots available weekly. Secure your spot today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="glass-card p-6 rounded-xl">
              <div className="text-3xl font-heading font-bold text-accent-gold mb-2">Free</div>
              <div className="text-foreground/70 font-body">No-obligation consultation</div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="text-3xl font-heading font-bold text-accent-gold mb-2">30 Min</div>
              <div className="text-foreground/70 font-body">Comprehensive risk assessment</div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="text-3xl font-heading font-bold text-accent-gold mb-2">Custom</div>
              <div className="text-foreground/70 font-body">Personalized protection plan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
