import { Phone } from 'lucide-react';
import { useBusinessInfo } from '../hooks/useBusinessInfo';

export default function FloatingCallButton() {
  const { phone } = useBusinessInfo();
  const cleanPhone = (phone || '(213) 555-0123').replace(/\D/g, '');

  return (
    <a
      href={`tel:+${cleanPhone}`}
      className="fixed bottom-6 right-5 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg call-pulse transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      style={{ backgroundColor: '#0f2557', color: '#ffffff' }}
      aria-label={`Call us at ${phone}`}
    >
      <Phone className="w-5 h-5" aria-hidden="true" />
      <span className="text-sm font-bold hidden sm:inline">{phone || '(213) 555-0123'}</span>
      <span className="sr-only">Call {phone || '(213) 555-0123'}</span>
    </a>
  );
}
