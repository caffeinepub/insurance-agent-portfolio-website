import { MessageCircle } from 'lucide-react';
import { useBusinessInfo } from '../hooks/useBusinessInfo';

export default function FloatingWhatsApp() {
  const { whatsappNumber } = useBusinessInfo();
  const cleanNumber = (whatsappNumber || '+12135550123').replace(/\D/g, '');
  const waUrl = `https://wa.me/${cleanNumber}?text=Hi%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20insurance%20services.`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg pulse-animation transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      style={{ backgroundColor: '#25D366' }}
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" aria-hidden="true" />
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
}
