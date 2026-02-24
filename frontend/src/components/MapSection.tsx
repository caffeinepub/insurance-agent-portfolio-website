import { MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function MapSection() {
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
    <section ref={sectionRef} className="py-20 bg-navy-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
              Visit Our <span className="text-gold-accent">Office</span>
            </h2>
            <p className="text-lg text-white/80 font-sans">
              Proudly serving families and businesses in [City, State] and surrounding areas.
            </p>
          </div>

          <div className="glass-card rounded-2xl overflow-hidden border-2 border-gold-accent/30">
            <div className="relative aspect-video bg-navy-primary/50">
              {/* Google Maps Embed Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-16 h-16 rounded-full bg-gold-accent/20 flex items-center justify-center mx-auto border-2 border-gold-accent/50">
                    <MapPin className="w-8 h-8 text-gold-accent" />
                  </div>
                  <div className="max-w-md mx-auto">
                    <p className="text-white/70 font-sans text-sm mb-2">
                      Google Maps embed placeholder
                    </p>
                    <p className="text-white/50 font-sans text-xs">
                      Replace this section with your Google Maps embed iframe:
                      <br />
                      <code className="text-gold-accent text-xs">
                        &lt;iframe src="YOUR_GOOGLE_MAPS_EMBED_URL"&gt;&lt;/iframe&gt;
                      </code>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Uncomment and replace with your actual Google Maps embed URL */}
              {/* <iframe
                src="YOUR_GOOGLE_MAPS_EMBED_URL"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
