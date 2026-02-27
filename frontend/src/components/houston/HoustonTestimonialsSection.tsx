import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'TX Agent J.D.',
    location: 'Conroe, TX',
    text: 'Johnathan helped me get 12 quotes in my first month. He found coverage I didn\'t even know I needed — and saved me $400 a year in the process. Best decision I made for my agency.',
    rating: 5,
    attribution: 'TX Agent J.D. - 12 quotes first month',
  },
  {
    name: 'Jennifer L.',
    location: 'Sugar Land, TX',
    text: 'I was paying way too much for auto and home insurance. He shopped around and saved me over $1,400 a year with better coverage. The whole process took less than an hour.',
    rating: 5,
    attribution: 'Jennifer L., Sugar Land TX',
  },
  {
    name: 'Marcus & Tanya W.',
    location: 'Katy, TX',
    text: 'As a Conroe family, we needed someone who understood our local risks. He set us up with flood coverage that our previous agent never even mentioned. Truly a lifesaver.',
    rating: 5,
    attribution: 'Marcus & Tanya W., Katy TX',
  },
];

export default function HoustonTestimonialsSection() {
  return (
    <section style={{ backgroundColor: '#1e3a8a' }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: '#f59e0b' }}>
            What Agents Say
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
            Trusted by Conroe Families
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: '#FFFFFF' }}>
            Real stories from real Conroe residents who found the right coverage.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {testimonials.map(({ attribution, location, text, rating }) => (
            <div
              key={attribution}
              className="p-6 rounded-xl"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              <Quote className="w-8 h-8 mb-3" style={{ color: '#f59e0b' }} />
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#FFFFFF' }}>
                "{text}"
              </p>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#f59e0b' }} />
                ))}
              </div>
              <p className="text-sm font-bold" style={{ color: '#FFFFFF' }}>
                {attribution}
              </p>
              <p className="text-xs" style={{ color: '#FFFFFF' }}>
                {location}
              </p>
            </div>
          ))}
        </div>

        {/* Google Reviews Widget */}
        <div
          className="max-w-sm mx-auto rounded-xl p-6 text-center"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#f59e0b' }} />
            ))}
          </div>
          <p className="text-2xl font-bold mb-1" style={{ color: '#1e293b' }}>
            5.0
          </p>
          <p className="text-sm font-medium mb-1" style={{ color: '#1e293b' }}>
            Google Reviews
          </p>
          <p className="text-xs" style={{ color: '#334155' }}>
            Based on 150+ reviews
          </p>
        </div>
      </div>
    </section>
  );
}
