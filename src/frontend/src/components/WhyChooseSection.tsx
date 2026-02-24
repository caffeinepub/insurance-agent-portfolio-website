import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseSection() {
  const benefits = [
    {
      title: 'Personalized Protection Strategy',
      description: 'Custom-designed plans that align with your unique financial goals and family needs.',
    },
    {
      title: 'Fast Claim Support',
      description: 'Dedicated assistance during claims to ensure quick processing and minimal stress.',
    },
    {
      title: '100% Transparency',
      description: 'Clear explanations of every policy detail—no confusing jargon or hidden terms.',
    },
    {
      title: 'No Hidden Surprises',
      description: 'Upfront pricing and honest recommendations that prioritize your best interests.',
    },
    {
      title: 'Annual Financial Review',
      description: 'Regular check-ins to ensure your coverage evolves with your changing life circumstances.',
    },
    {
      title: '24/7 Availability',
      description: 'Round-the-clock support because financial emergencies don\'t follow business hours.',
    },
    {
      title: 'Long-Term Advisory Relationship',
      description: 'A trusted partner for life, not just a one-time transaction.',
    },
  ];

  return (
    <section id="why-choose" className="py-20 md:py-32 bg-luxury-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-accent-blue/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Not Just an Agent. Your <span className="text-accent-gold glow-text">Long-Term Financial Partner.</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 font-body">
              Experience the difference of working with an advisor who truly cares about your family's future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover-lift animate-fade-in flex gap-4"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-accent-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-foreground/70 font-body leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
