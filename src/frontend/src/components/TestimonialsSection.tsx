import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      rating: 5,
      before: 'I was overwhelmed by insurance options and worried about making the wrong choice for my family.',
      after: 'Now I have complete peace of mind knowing my family is protected with a plan that actually makes sense for us.',
      quote: 'The personalized approach made all the difference. I finally understand my coverage and feel confident about my family\'s financial future.',
    },
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      rating: 5,
      before: 'After my father\'s sudden illness, I realized how unprepared we were financially.',
      after: 'Today, my entire family has comprehensive coverage, and I sleep better knowing we\'re protected.',
      quote: 'The claim support during my father\'s treatment was exceptional. They handled everything while we focused on his recovery.',
    },
    {
      name: 'Amit Patel',
      role: 'Marketing Manager',
      rating: 5,
      before: 'I had multiple policies from different agents and no clear understanding of my actual coverage.',
      after: 'Everything is now consolidated and optimized. I\'m saving money while having better protection.',
      quote: 'The annual review helped me identify gaps I didn\'t even know existed. This is what true financial advisory looks like.',
    },
    {
      name: 'Sneha Reddy',
      role: 'Entrepreneur',
      rating: 5,
      before: 'As a new business owner, I was neglecting my personal insurance while focusing on my startup.',
      after: 'I now have a balanced approach that protects both my business and my family\'s future.',
      quote: 'The transparency and honest advice helped me make informed decisions without feeling pressured. Highly recommend!',
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-b from-luxury-dark/95 to-luxury-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-accent-gold/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Real Stories. <span className="text-accent-gold glow-text">Real Impact.</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 font-body">
            See how personalized protection strategies have transformed the lives of families just like yours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="glass-card p-8 rounded-2xl hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent-gold text-accent-gold" />
                ))}
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                  <p className="text-sm font-body text-foreground/70 italic">
                    <span className="font-semibold text-destructive">Before:</span> {testimonial.before}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-accent-gold/10 border border-accent-gold/20">
                  <p className="text-sm font-body text-foreground/70 italic">
                    <span className="font-semibold text-accent-gold">After:</span> {testimonial.after}
                  </p>
                </div>
              </div>

              <blockquote className="text-foreground/90 font-body leading-relaxed mb-6 text-lg">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4 pt-4 border-t border-accent-gold/20">
                <div className="w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center">
                  <span className="text-accent-gold font-heading font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-heading font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-foreground/60 font-body">{testimonial.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
