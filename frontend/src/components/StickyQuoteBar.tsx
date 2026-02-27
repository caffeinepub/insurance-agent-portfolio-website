import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function StickyQuoteBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!dismissed && window.scrollY > 300) {
        setVisible(true);
      } else if (window.scrollY <= 300) {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (dismissed || !visible) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-40 slide-down"
      style={{ backgroundColor: '#c9a227' }}
      role="banner"
      aria-label="Free insurance quote offer"
    >
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1 justify-center">
          <span className="text-sm font-bold" style={{ color: '#0f2557' }}>
            🛡️ Get Your Free Insurance Quote Today — No Obligation, No Pressure
          </span>
          <a
            href="#contact-form"
            className="hidden sm:inline-flex px-4 py-1.5 rounded-lg text-xs font-bold transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white"
            style={{ backgroundColor: '#0f2557', color: '#ffffff' }}
            aria-label="Get a free insurance quote"
          >
            Get Quote
          </a>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="p-1 rounded hover:bg-black/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white flex-shrink-0"
          style={{ color: '#0f2557' }}
          aria-label="Dismiss quote bar"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
