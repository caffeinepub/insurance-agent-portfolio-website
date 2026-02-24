import { Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function VideoSection() {
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

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-navy-primary to-navy-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-gold-accent/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">
            Why Families in <span className="text-gold-accent">[City]</span> Trust Me With Their Protection Planning
          </h2>
          
          <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-gold-accent/30 bg-navy-secondary/50 backdrop-blur-sm group hover:border-gold-accent/60 transition-all duration-300">
            {/* Video Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-gold-accent/20 flex items-center justify-center mx-auto border-2 border-gold-accent/50 group-hover:bg-gold-accent/30 transition-all duration-300">
                  <Play className="w-10 h-10 text-gold-accent ml-1" />
                </div>
                <p className="text-white/70 font-sans text-sm max-w-md mx-auto px-4">
                  Video placeholder: Insert your 60-second introduction video embed code here
                  <br />
                  <span className="text-gold-accent text-xs">(YouTube, Vimeo, or custom video player)</span>
                </p>
              </div>
            </div>
          </div>

          <p className="text-white/70 font-sans text-sm italic">
            Hear directly from me about my commitment to protecting families in [City] and why personalized insurance planning matters.
          </p>
        </div>
      </div>
    </section>
  );
}
