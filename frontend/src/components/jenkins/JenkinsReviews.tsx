import React, { useRef, useState, useEffect } from 'react';

const reviews = [
  {
    name: 'Sarah M.',
    location: 'The Woodlands, TX',
    text: 'C. Jenkins saved our family over $1,400 a year by switching our home and auto bundle. The process took less than 24 hours. I\'ve already referred three of my neighbors.',
  },
  {
    name: 'Robert T.',
    location: 'Spring, TX',
    text: 'After Hurricane Harvey I thought dealing with insurance would be a nightmare. C. Jenkins walked us through every single step and got our claim approved fast. Truly a lifesaver.',
  },
  {
    name: 'Maria G.',
    location: 'Conroe, TX',
    text: 'As a small business owner I needed someone who actually understood Texas business insurance laws. Jenkins Insurance knew exactly what I needed and saved me $2,100 on my policy.',
  },
];

export default function JenkinsReviews() {
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
      id="reviews"
      ref={ref}
      style={{ backgroundColor: '#FFFFFF', padding: '90px 0' }}
      className={`scroll-fade ${visible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px, 4vw, 38px)',
              color: '#1B3A6B',
              marginBottom: '16px',
            }}
          >
            What Woodlands Families Are Saying
          </h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: '#F4B942', margin: '0 auto 32px' }} />

          {/* Google Rating Summary */}
          <div
            style={{
              display: 'inline-block',
              backgroundColor: '#F8F9FA',
              borderRadius: '16px',
              padding: '20px 40px',
              textAlign: 'center',
            }}
          >
            <div style={{ color: '#F4B942', fontSize: '28px', marginBottom: '4px' }}>★★★★★</div>
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                fontSize: '32px',
                color: '#1B3A6B',
                lineHeight: 1,
              }}
            >
              4.9 out of 5
            </div>
            <div
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: '14px',
                color: '#666',
                marginTop: '4px',
              }}
            >
              Based on 127 Google Reviews
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              style={{
                borderRadius: '16px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.09)',
                padding: '36px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #F0F0F0',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
              }}
            >
              {/* Google G */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #4285F4, #34A853, #FBBC05, #EA4335)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: '18px',
                  marginBottom: '16px',
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                G
              </div>

              {/* Stars */}
              <div style={{ color: '#F4B942', fontSize: '18px', marginBottom: '12px' }}>★★★★★</div>

              {/* Review Text */}
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: '16px',
                  color: '#444',
                  lineHeight: 1.7,
                  marginBottom: '20px',
                }}
              >
                "{review.text}"
              </p>

              {/* Reviewer */}
              <div>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: '15px',
                    color: '#1B3A6B',
                  }}
                >
                  — {review.name}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                  <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '13px', color: '#F4B942' }}>
                    {review.location}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: '11px',
                      color: '#27AE60',
                      backgroundColor: 'rgba(39,174,96,0.1)',
                      padding: '2px 8px',
                      borderRadius: '20px',
                    }}
                  >
                    ✓ Verified Google Review
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
