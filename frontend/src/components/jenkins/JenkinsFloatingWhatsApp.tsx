import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function JenkinsFloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-7 right-7 z-[9998]">
      {showTooltip && (
        <div className="absolute right-16 bottom-2 bg-jenkins-dark-text text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
          Chat on WhatsApp
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-jenkins-dark-text" />
        </div>
      )}
      <a
        href="https://wa.me/12814108934?text=Hi%20C.%20Jenkins%2C%20I%27d%20like%20a%20free%20insurance%20quote!"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[58px] h-[58px] rounded-full flex items-center justify-center animate-pulse-whatsapp transition-transform hover:scale-110"
        style={{ background: '#25D366' }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
