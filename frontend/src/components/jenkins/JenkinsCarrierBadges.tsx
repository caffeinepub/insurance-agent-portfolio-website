import React, { useRef, useState, useEffect } from 'react';

const carriers = [
  'PROGRESSIVE', 'TRAVELERS', 'NATIONWIDE', 'LIBERTY MUTUAL', 'SAFECO', 'METLIFE',
  'ALLSTATE', 'TWFG', 'HARTFORD', 'FARMERS',
];

export default function JenkinsCarrierBadges() {
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
      style={{ backgroundColor: '#F8F9FA', padding: '50px 0' }}
      className={`scroll-fade ${visible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 600,
            fontSize: '13px',
            color: '#888',
            textAlign: 'center',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '32px',
          }}
        >
          Trusted Carrier Partners
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {carriers.map((carrier) => (
            <div
              key={carrier}
              style={{
                border: '2px solid #E0E0E0',
                borderRadius: '8px',
                padding: '12px 20px',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: '14px',
                color: '#2C2C2C',
                backgroundColor: '#FFFFFF',
                cursor: 'default',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = '#F4B942';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 12px rgba(244,185,66,0.2)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = '#E0E0E0';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
            >
              {carrier}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
