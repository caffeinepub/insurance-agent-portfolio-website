import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'TX Agent J.D.',
    location: 'Conroe, TX',
    rating: 5,
    text: 'Johnathan helped me get 12 quotes in my first month working with him. He found coverage I didn\'t even know I needed — and saved me $400 a year in the process.',
    coverage: 'Auto + Home Bundle',
    attribution: 'TX Agent J.D. - 12 quotes first month',
  },
  {
    name: 'Marcus & Diane Webb',
    location: 'The Woodlands, TX',
    rating: 5,
    text: 'After our previous agent retired, we were lost. Johnathan sat with us for two hours, explained everything, and set up a life insurance plan that actually fits our retirement goals.',
    coverage: 'Life Insurance',
    attribution: 'Marcus & Diane Webb, The Woodlands TX',
  },
  {
    name: 'Roberto Salinas',
    location: 'Katy, TX',
    rating: 5,
    text: 'I\'ve been burned by pushy agents before. Johnathan was completely different — patient, honest, and he never once pressured me. My business is now fully covered and I sleep better at night.',
    coverage: 'Business Insurance',
    attribution: 'Roberto Salinas, Katy TX',
  },
  {
    name: 'Priya Nair',
    location: 'Sugar Land, TX',
    rating: 5,
    text: 'The annual review process alone is worth it. Johnathan caught that my home coverage was $80k underinsured after we renovated. That could have been catastrophic.',
    coverage: 'Home Insurance',
    attribution: 'Priya Nair, Sugar Land TX',
  },
  {
    name: 'James & Tonya Caldwell',
    location: 'Spring, TX',
    rating: 5,
    text: 'When we had a water damage claim, Johnathan was on the phone with us within an hour. He guided us through every step. That\'s the kind of agent you want in your corner.',
    coverage: 'Home Insurance',
    attribution: 'James & Tonya Caldwell, Spring TX',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const navigate = (dir: 'prev' | 'next') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) =>
        dir === 'next'
          ? (prev + 1) % testimonials.length
          : (prev - 1 + testimonials.length) % testimonials.length
      );
      setIsAnimating(false);
    }, 200);
  };

  useEffect(() => {
    const interval = setInterval(() => navigate('next'), 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-fade').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const t = testimonials[current];

  return (
    <section id="testimonials" ref={ref} className="bg-cream-dark py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="scroll-fade flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-amber" />
            <span className="font-body text-amber text-sm font-semibold tracking-widest uppercase">
              Client Stories
            </span>
            <div className="w-8 h-px bg-amber" />
          </div>
          <h2 className="scroll-fade delay-100 font-display text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
            Real People,
            <br />
            <span className="italic text-forest">Real Results</span>
          </h2>
        </div>

        {/* Main testimonial */}
        <div className="scroll-fade delay-200 max-w-3xl mx-auto">
          <div
            className={`bg-white rounded-2xl border border-forest/10 p-10 shadow-card-lift transition-opacity duration-200 ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {/* Quote icon */}
            <div className="w-12 h-12 bg-forest/8 rounded-sm flex items-center justify-center mb-6 border border-forest/15">
              <Quote className="w-6 h-6 text-forest" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber fill-amber" />
              ))}
            </div>

            {/* Text */}
            <blockquote className="font-display text-xl lg:text-2xl text-charcoal leading-relaxed italic mb-8">
              "{t.text}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div>
                <div className="font-body font-bold text-charcoal text-base">{t.attribution}</div>
                <div className="font-body text-charcoal-muted text-sm">{t.location}</div>
              </div>
              <div className="bg-amber/10 border border-amber/25 rounded-full px-4 py-1.5">
                <span className="font-body text-amber-dark font-semibold text-xs tracking-wide">
                  {t.coverage}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => navigate('prev')}
              className="w-10 h-10 rounded-sm border border-forest/20 flex items-center justify-center text-forest hover:bg-forest hover:text-white hover:border-forest transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current ? 'w-6 h-2 bg-amber' : 'w-2 h-2 bg-forest/20 hover:bg-forest/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => navigate('next')}
              className="w-10 h-10 rounded-sm border border-forest/20 flex items-center justify-center text-forest hover:bg-forest hover:text-white hover:border-forest transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mini testimonial cards */}
        <div className="scroll-fade delay-300 grid md:grid-cols-3 gap-4 mt-12">
          {testimonials.slice(0, 3).map((t, i) => (
            <button
              key={t.attribution}
              onClick={() => setCurrent(i)}
              className={`text-left bg-white rounded-xl border p-5 transition-all duration-200 ${
                current === i
                  ? 'border-amber/50 shadow-amber-glow'
                  : 'border-forest/8 hover:border-forest/20 shadow-forest-sm'
              }`}
            >
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-amber fill-amber" />
                ))}
              </div>
              <p className="font-body text-charcoal-muted text-xs leading-relaxed line-clamp-2 mb-3">
                "{t.text}"
              </p>
              <div className="font-body font-semibold text-charcoal text-xs">{t.attribution}</div>
              <div className="font-body text-charcoal-muted text-xs">{t.location}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
