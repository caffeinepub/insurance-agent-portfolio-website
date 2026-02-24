import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi,%20I%20would%20like%20to%20learn%20more%20about%20your%20insurance%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-accent-gold hover:bg-accent-gold/90 rounded-full flex items-center justify-center shadow-glow-gold hover-lift transition-all duration-300 group"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-luxury-dark group-hover:scale-110 transition-transform" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full animate-pulse" />
    </a>
  );
}
