import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function JenkinsFloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const waUrl = 'https://wa.me/12814108934?text=Hi%2C%20I%27d%20like%20a%20free%20insurance%20quote%20from%20Jenkins%20Insurance.';

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 9999,
      }}
    >
      {/* Tooltip */}
      {showTooltip && (
        <div
          style={{
            position: 'absolute',
            right: '70px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: '#1B3A6B',
            color: '#FFFFFF',
            fontFamily: "'Open Sans', sans-serif",
            fontSize: '13px',
            fontWeight: 600,
            padding: '8px 14px',
            borderRadius: '8px',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            pointerEvents: 'none',
          }}
        >
          Chat with us on WhatsApp
          <div
            style={{
              position: 'absolute',
              right: '-6px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: 0,
              height: 0,
              borderTop: '6px solid transparent',
              borderBottom: '6px solid transparent',
              borderLeft: '6px solid #1B3A6B',
            }}
          />
        </div>
      )}

      {/* Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
          textDecoration: 'none',
          animation: 'waPulse 3s ease-out infinite',
          transition: 'transform 0.2s ease',
        }}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
      >
        <MessageCircle size={26} color="#FFFFFF" />
      </a>
    </div>
  );
}
