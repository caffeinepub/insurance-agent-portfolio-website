import React, { useRef, useState, useEffect } from 'react';

export default function JenkinsBilingual() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: '#F8F9FA',
        padding: '60px 0',
        borderTop: '4px solid #F4B942',
      }}
      className={`scroll-fade ${visible ? 'visible' : ''}`}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div style={{ fontSize: '40px', marginBottom: '16px' }}>🇲🇽 🇺🇸</div>

        <h2
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(28px, 4vw, 36px)',
            color: '#1B3A6B',
            marginBottom: '16px',
          }}
        >
          ¿Hablas Español?
        </h2>

        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: '18px',
            color: '#555',
            lineHeight: 1.7,
            marginBottom: '32px',
            maxWidth: '600px',
            margin: '0 auto 32px',
          }}
        >
          Ofrecemos servicio completo en español para familias de The Woodlands, Spring,
          Conroe y Humble, Texas. Seguros de casa, auto y vida —
          ¡cotización gratis en 24 horas!
        </p>

        <a
          href="tel:+12814108934"
          style={{
            display: 'inline-block',
            backgroundColor: '#F4B942',
            color: '#1B3A6B',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: '17px',
            padding: '14px 36px',
            borderRadius: '8px',
            textDecoration: 'none',
            boxShadow: '0 4px 15px rgba(244,185,66,0.4)',
            transition: 'background-color 0.2s ease, transform 0.2s ease',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#D9A030';
            (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#F4B942';
            (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
          }}
        >
          Obtener Cotización Gratis
        </a>

        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: '14px',
            color: '#888',
            marginTop: '20px',
          }}
        >
          Bilingual Agent | Agente Bilingüe | The Woodlands TX
        </p>
      </div>
    </section>
  );
}
