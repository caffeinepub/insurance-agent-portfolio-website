import React, { useRef, useState, useEffect } from 'react';

const cards = [
  {
    icon: '🏆',
    title: 'Independent Agent Advantage',
    text: 'Unlike State Farm or Allstate agents who sell ONE company\'s products, we shop 20+ carriers every time — meaning you always get the best coverage at the lowest price.',
  },
  {
    icon: '📍',
    title: 'True Local Woodlands Expert',
    text: 'We know The Woodlands flood zones, HOA requirements, and Montgomery County insurance laws. Not a call center. A real neighbor who answers their phone.',
  },
  {
    icon: '⚡',
    title: 'Effortless & Fast',
    text: 'Get a full quote comparison in 24 hours. Communicate by email, phone, or WhatsApp. We handle all paperwork. You just pick the best option.',
  },
];

export default function JenkinsWhyChoose() {
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

  const scrollToQuote = () => {
    const el = document.querySelector('#quote');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      style={{ backgroundColor: '#FFFFFF', padding: '90px 0' }}
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
              marginBottom: '16px',
            }}
          >
            Why The Woodlands Families Choose Jenkins Insurance
          </h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: '#F4B942', margin: '0 auto' }} />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E8E8E8',
                borderRadius: '16px',
                padding: '40px 32px',
                borderTop: '4px solid #F4B942',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(244,185,66,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  marginBottom: '20px',
                }}
              >
                {card.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: '20px',
                  color: '#1B3A6B',
                  marginBottom: '12px',
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: '16px',
                  color: '#555',
                  lineHeight: 1.7,
                }}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={scrollToQuote}
            style={{
              backgroundColor: '#1B3A6B',
              color: '#FFFFFF',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: '16px',
              padding: '14px 36px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0D2347';
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.03)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1B3A6B';
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
            }}
          >
            Get Your Free Quote Today →
          </button>
        </div>
      </div>
    </section>
  );
}
