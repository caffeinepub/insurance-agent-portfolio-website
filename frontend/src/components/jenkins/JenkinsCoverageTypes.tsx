import React, { useRef, useState, useEffect } from 'react';

const coverageCards = [
  {
    icon: '🏠',
    title: 'Homeowners Insurance',
    text: 'Protect your biggest investment. We find the best rates for The Woodlands homes including flood and windstorm coverage.',
  },
  {
    icon: '🚗',
    title: 'Auto Insurance',
    text: 'Compare 20+ carriers in minutes. Multi-car discounts available. Texas minimum coverage to full comprehensive plans.',
  },
  {
    icon: '🏢',
    title: 'Business Insurance',
    text: 'General liability, commercial property, and workers comp for Woodlands small businesses and contractors.',
  },
  {
    icon: '🌊',
    title: 'Flood Insurance',
    text: "Most Texas homeowners policies DON'T cover flooding. We help you get the right NFIP or private flood coverage.",
  },
  {
    icon: '🏍️',
    title: 'Recreational Vehicles',
    text: 'Motorcycles, boats, ATVs, golf carts & RVs. Protect everything you love in Texas.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Life & Health Insurance',
    text: 'Term life, whole life, and health coverage for Texas families and small business owners.',
  },
];

export default function JenkinsCoverageTypes() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToQuote = () => {
    const el = document.querySelector('#quote');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="coverage"
      ref={ref}
      style={{ backgroundColor: '#F8F9FA', padding: '90px 0' }}
      className={`scroll-fade ${visible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 38px)',
              color: '#1B3A6B',
              marginBottom: '12px',
            }}
          >
            Coverage We Specialize In
          </h2>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '18px', color: '#555' }}>
            Protecting every part of your Texas life
          </p>
          <div style={{ width: '60px', height: '4px', backgroundColor: '#F4B942', margin: '16px auto 0' }} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverageCards.map((card, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                border: '1px solid #E8E8E8',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease',
                cursor: 'default',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLDivElement).style.borderColor = '#F4B942';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.borderColor = '#E8E8E8';
              }}
            >
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>{card.icon}</div>
              <h3
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: '18px',
                  color: '#1B3A6B',
                  marginBottom: '10px',
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: '15px',
                  color: '#555',
                  lineHeight: 1.7,
                  flex: 1,
                  marginBottom: '20px',
                }}
              >
                {card.text}
              </p>
              <button
                onClick={scrollToQuote}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#F4B942',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: '14px',
                  cursor: 'pointer',
                  padding: 0,
                  textAlign: 'left',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#D9A030'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#F4B942'; }}
              >
                Get Quote →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
