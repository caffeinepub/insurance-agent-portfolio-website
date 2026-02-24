import { Award, Users, TrendingUp, Star, Shield } from 'lucide-react';

export default function TrustBar() {
  const stats = [
    { icon: Shield, label: 'Licensed & Certified', value: 'Insurance Advisor' },
    { icon: Users, label: 'Families Protected', value: '500+' },
    { icon: TrendingUp, label: 'Claim Support Success', value: '98%' },
    { icon: Star, label: 'Client Satisfaction', value: '5-Star' },
    { icon: Award, label: 'Industry', value: 'Certified' },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-luxury-dark via-accent-gold/5 to-luxury-dark border-y border-accent-gold/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center border border-accent-gold/30">
                  <Icon className="w-6 h-6 text-accent-gold" />
                </div>
                <div className="text-2xl md:text-3xl font-heading font-bold text-accent-gold">{stat.value}</div>
                <div className="text-sm text-foreground/70 font-body">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
