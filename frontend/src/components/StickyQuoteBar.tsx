import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function StickyQuoteBar() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // Only visible on mobile (hidden on md and above)
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      role="complementary"
      aria-label="Get a quote"
    >
      <button
        onClick={scrollToContact}
        className="w-full flex items-center justify-center gap-2 py-4 font-bold text-base text-white min-h-[56px] transition-all active:scale-[0.98]"
        style={{ background: 'linear-gradient(90deg, #16a34a 0%, #15803d 100%)' }}
      >
        <span>Get Quote — 3 Spots This Week</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}
