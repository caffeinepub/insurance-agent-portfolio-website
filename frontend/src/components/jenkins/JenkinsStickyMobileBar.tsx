import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function JenkinsStickyMobileBar() {
  const scrollToQuote = () => {
    const el = document.querySelector('#quote');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="md:hidden"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '60px',
        backgroundColor: '#1B3A6B',
        zIndex: 9998,
        display: 'flex',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.2)',
      }}
    >
      {/* Call Now */}
      <a
        href="tel:+12814108934"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          backgroundColor: '#F4B942',
          color: '#1B3A6B',
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700,
          fontSize: '15px',
          textDecoration: 'none',
          borderRight: '1px solid rgba(27,58,107,0.3)',
        }}
      >
        <Phone size={18} />
        Call Now
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/12814108934?text=Hi%2C%20I%27d%20like%20a%20free%20insurance%20quote."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700,
          fontSize: '15px',
          textDecoration: 'none',
        }}
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>
    </div>
  );
}
