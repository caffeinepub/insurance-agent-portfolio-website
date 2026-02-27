import React, { useEffect, useRef } from 'react';
import { Play } from 'lucide-react';
import { useBusinessInfo } from '../hooks/useBusinessInfo';

export default function VideoSection() {
  const { city } = useBusinessInfo();
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <section ref={ref} className="bg-white py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="scroll-fade flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-amber" />
            <span className="font-body text-amber text-sm font-semibold tracking-widest uppercase">
              See It In Action
            </span>
            <div className="w-8 h-px bg-amber" />
          </div>
          <h2 className="scroll-fade delay-100 font-display text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-4">
            How AI Is Changing
            <br />
            <span className="italic text-forest">Insurance Forever</span>
          </h2>
          <p className="scroll-fade delay-200 font-body text-charcoal-muted text-lg max-w-xl mx-auto leading-relaxed">
            {city ? `${city} agents` : 'Smart agents'} are using AI to find better coverage faster.
            See how modern insurance advisory works.
          </p>
        </div>

        {/* Video embed */}
        <div className="scroll-fade delay-300 relative rounded-2xl overflow-hidden shadow-forest-xl border border-forest/10">
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-amber z-10 rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-amber z-10 rounded-br-2xl" />

          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
              title="How AI is Transforming Insurance"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
