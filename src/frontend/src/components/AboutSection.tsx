import { Heart, Target, Users, Handshake } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: 'Realization',
      description: 'Witnessing families struggle after unexpected loss showed me the critical importance of financial protection.',
    },
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'My purpose is to ensure no family faces financial devastation during their most vulnerable moments.',
    },
    {
      icon: Users,
      title: 'Family Protection',
      description: 'Every policy I design is crafted with the same care I would want for my own loved ones.',
    },
    {
      icon: Handshake,
      title: 'Transparency',
      description: 'Building long-term relationships based on trust, honesty, and unwavering commitment to your security.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-luxury-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-accent-blue/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Why I Chose to <span className="text-accent-gold glow-text">Protect Lives</span> — Not Just Sell Policies
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 font-body">
            My journey into insurance wasn't about sales—it was about making a difference when it matters most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-accent-gold/10 flex items-center justify-center border border-accent-gold/30 mb-6">
                  <Icon className="w-8 h-8 text-accent-gold" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-foreground/70 font-body leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-card p-8 md:p-12 rounded-2xl border-2 border-accent-gold/30">
            <p className="text-2xl md:text-3xl font-heading font-bold text-accent-gold mb-4 glow-text">
              "I don't sell policies. I design financial safety systems."
            </p>
            <p className="text-foreground/80 font-body text-lg">
              Every client receives a personalized protection strategy that evolves with their life, ensuring their
              family's security today, tomorrow, and for generations to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
