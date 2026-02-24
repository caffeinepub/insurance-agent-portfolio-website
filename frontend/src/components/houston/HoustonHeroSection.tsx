import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function HoustonHeroSection() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const form = document.getElementById('quote-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-handshake.dim_1920x1080.png"
          alt="Houston Insurance Agent"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#1e3a8a]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-[1.6]" style={{ fontWeight: 600 }}>
          Houston Independent Insurance Agent | Free Auto - Home - Life Quotes
        </h1>

        <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto leading-[1.6]" style={{ fontWeight: 400 }}>
          Local Expertise - Shops 20+ Carriers - Licensed TX #123456 - IIAH Member
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            onClick={scrollToForm}
            size="lg"
            className="w-full sm:w-auto bg-[#f59e0b] hover:bg-[#f59e0b]/90 text-white font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            style={{ fontWeight: 600 }}
          >
            Get Free Quote Now
          </Button>

          <a
            href="tel:7135550123"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ fontWeight: 600 }}
          >
            <Phone className="w-5 h-5 text-white" />
            Call (713) 555-0123
          </a>
        </div>

        {/* Trust Bar */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-white text-sm md:text-base leading-[1.6]" style={{ fontWeight: 400 }}>
          <div className="flex items-center gap-2">
            <span className="font-semibold" style={{ fontWeight: 600 }}>A+ BBB Rated</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/30"></div>
          <div className="flex items-center gap-2">
            <span className="font-semibold" style={{ fontWeight: 600 }}>4.9 Stars</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/30"></div>
          <div className="flex items-center gap-2">
            <span className="font-semibold" style={{ fontWeight: 600 }}>347 Google Reviews</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/30"></div>
          <div className="flex items-center gap-2">
            <span className="font-semibold" style={{ fontWeight: 600 }}>Free Consultations</span>
          </div>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      {isSticky && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#1e3a8a] shadow-lg md:hidden">
          <Button
            onClick={scrollToForm}
            size="lg"
            className="w-full bg-[#f59e0b] hover:bg-[#f59e0b]/90 text-white font-semibold text-lg py-6 rounded-full shadow-lg"
            style={{ fontWeight: 600 }}
          >
            Get Free Quote Now
          </Button>
        </div>
      )}
    </section>
  );
}
