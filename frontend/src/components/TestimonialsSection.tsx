import { Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function TestimonialsSection() {
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

  const testimonials = [
    {
      name: 'Michael Thompson',
      location: 'Dallas, TX',
      rating: 5,
      text: 'Before working with [Advisor Name], I was overwhelmed trying to figure out how to protect my family\'s future. Now I have a $1M term policy and an IUL building tax-free retirement income. I finally have peace of mind knowing my wife and kids are protected no matter what happens.',
    },
    {
      name: 'Sarah Martinez',
      location: 'Austin, TX',
      rating: 5,
      text: 'I thought life insurance was too expensive until [Advisor Name] showed me how affordable term coverage actually is. For less than my monthly streaming subscriptions, I secured $500K in coverage. The education-first approach made all the difference—I finally understand what I\'m buying.',
    },
    {
      name: 'David Chen',
      location: 'Houston, TX',
      rating: 5,
      text: 'As a business owner, I needed more than just personal coverage. [Advisor Name] set up key person insurance and a buy-sell agreement that protects both my family and my business partners. The tax advantages alone have saved me thousands. Highly recommend!',
    },
    {
      name: 'Jennifer Williams',
      location: 'San Antonio, TX',
      rating: 5,
      text: 'After my husband passed away, [Advisor Name] was there every step of the way during the claims process. The death benefit came through quickly and tax-free, allowing me to pay off our mortgage and secure my children\'s college fund. I\'m forever grateful for the guidance and support.',
    },
    {
      name: 'Robert Johnson',
      location: 'Fort Worth, TX',
      rating: 5,
      text: 'I was skeptical about whole life insurance until [Advisor Name] broke down the numbers. Now I see it as a tax-advantaged savings vehicle that also protects my family. The guaranteed cash value growth and dividends are building wealth I can access in retirement. Best financial decision I\'ve made.',
    },
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-gold-accent/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mx-auto text-center space-y-6 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-800">
            Real Stories from <span className="text-houstonGold">Protected Families</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-700 font-sans">
            See how personalized insurance strategies have transformed financial security for families across [State].
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`glass-card p-8 rounded-2xl hover-lift transition-all duration-700 bg-white/80 backdrop-blur-sm border border-slate-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-houstonGold text-houstonGold" />
                ))}
              </div>
              
              <p className="text-slate-700 font-sans mb-6 leading-relaxed text-sm italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-slate-200 pt-4">
                <p className="font-serif font-bold text-slate-800">{testimonial.name}</p>
                <p className="text-sm text-slate-700 font-sans">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
