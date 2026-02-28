import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'TX Agent J.D.',
    role: '12 quotes first month',
    text: 'Johnathan built my insurance website and I got 12 quotes in my very first month. The leads are real Conroe residents who are actually ready to buy. Best investment I\'ve made for my agency.',
    rating: 5,
  },
  {
    name: 'Sarah Mitchell',
    role: 'Conroe Homeowner',
    text: 'Switched my home and auto to Reeves Insurance and saved over $800 a year. Johnathan took the time to explain every option and found me coverage I didn\'t even know I was missing.',
    rating: 5,
  },
  {
    name: 'Carlos Mendoza',
    role: 'Small Business Owner, Conroe TX',
    text: 'Getting commercial insurance used to be a nightmare. Johnathan made it simple, found me better coverage than my previous agent, and saved me $1,200 annually on my business policy.',
    rating: 5,
  },
  {
    name: 'Linda Patterson',
    role: 'Conroe Resident',
    text: 'After a hail storm damaged my roof, Johnathan guided me through the entire claims process. He was available every step of the way. That\'s the kind of agent you want in your corner.',
    rating: 5,
  },
  {
    name: 'Marcus Webb',
    role: 'Insurance Agent, Conroe TX',
    text: 'The website Johnathan built for my agency looks incredibly professional. My clients always comment on how easy it is to get a quote. Lead volume is up 40% since launch.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-16 md:py-24" style={{ background: '#0d1f0d' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wide mb-3">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Real stories from real Conroe families and agents who trust Reeves Insurance Solutions.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-3xl mx-auto">
          <div className="relative p-6 md:p-10 rounded-2xl bg-white/5 border border-white/10">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-amber-400/30" />
            <div className="flex items-center gap-1 mb-4 justify-center">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-white text-base md:text-lg leading-relaxed text-center mb-6 italic">
              "{t.text}"
            </p>
            <div className="text-center">
              <p className="text-white font-bold text-sm md:text-base">{t.name}</p>
              <p className="text-amber-400 text-xs md:text-sm">{t.role}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-amber-400 w-6' : 'bg-white/30'}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mini previews */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-10">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`p-3 rounded-xl text-left transition-all ${i === current ? 'bg-amber-400/10 border border-amber-400/30' : 'bg-white/5 border border-white/10 hover:bg-white/8'}`}
            >
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-white text-xs font-medium truncate">{t.name}</p>
              <p className="text-gray-500 text-xs truncate">{t.role}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
