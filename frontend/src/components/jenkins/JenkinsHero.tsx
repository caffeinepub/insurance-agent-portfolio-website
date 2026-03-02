import React, { useEffect, useRef, useState } from 'react';
import { Shield, Star, CheckCircle, Building2, Zap } from 'lucide-react';

export default function JenkinsHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToQuote = () => {
    const el = document.querySelector('#quote');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center texas-watermark"
      style={{
        background: 'linear-gradient(135deg, #1B3A6B 0%, #2E5FA3 100%)',
        paddingTop: '70px',
      }}
    >
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 120,70 180,70 130,110 150,170 100,130 50,170 70,110 20,70 80,70' fill='white'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Column — 60% */}
          <div
            className="lg:col-span-3"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            {/* Badge */}
            <div
              className="inline-block mb-6"
              style={{
                background: 'rgba(244,185,66,0.15)',
                border: '1px solid #F4B942',
                borderRadius: '20px',
                padding: '6px 16px',
              }}
            >
              <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '13px', color: '#F4B942' }}>
                ⭐ #1 Rated Independent Agent in The Woodlands TX
              </span>
            </div>

            {/* H1 */}
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                lineHeight: 1.15,
                color: '#FFFFFF',
              }}
              className="text-4xl sm:text-5xl lg:text-[52px] mb-6"
            >
              The Woodlands' Most Trusted{' '}
              <span style={{ color: '#F4B942' }}>Independent Insurance Agent</span>
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: '20px',
                color: 'rgba(255,255,255,0.85)',
                maxWidth: '520px',
                lineHeight: 1.6,
                marginBottom: '32px',
              }}
            >
              We compare 20+ top carriers to find you the lowest rate in Texas —
              Home, Auto, Life &amp; Business Coverage
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={scrollToQuote}
                style={{
                  backgroundColor: '#F4B942',
                  color: '#1B3A6B',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: '17px',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(244,185,66,0.4)',
                  transition: 'transform 0.2s ease, background-color 0.2s ease',
                  minHeight: '56px',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.03)';
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#D9A030';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#F4B942';
                }}
              >
                🔍 Get My Free Quote
              </button>
              <button
                onClick={scrollToAbout}
                style={{
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: '17px',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  border: '2px solid #FFFFFF',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, background-color 0.2s ease',
                  minHeight: '56px',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.03)';
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.1)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
                }}
              >
                ▶ See How It Works
              </button>
            </div>

            {/* Trust Indicators */}
            <div
              className="flex flex-wrap gap-x-4 gap-y-2 items-center"
              style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.80)' }}
            >
              <span className="flex items-center gap-1"><CheckCircle size={14} style={{ color: '#27AE60' }} /> Licensed Texas Agent</span>
              <span className="hidden sm:inline" style={{ color: 'rgba(255,255,255,0.4)' }}>|</span>
              <span className="flex items-center gap-1"><Star size={14} style={{ color: '#F4B942' }} /> 200+ Five-Star Reviews</span>
              <span className="hidden sm:inline" style={{ color: 'rgba(255,255,255,0.4)' }}>|</span>
              <span className="flex items-center gap-1"><Building2 size={14} style={{ color: '#F4B942' }} /> 20+ Carrier Options</span>
              <span className="hidden sm:inline" style={{ color: 'rgba(255,255,255,0.4)' }}>|</span>
              <span className="flex items-center gap-1"><Zap size={14} style={{ color: '#F4B942' }} /> Free Quote in 24hrs</span>
            </div>
          </div>

          {/* Right Column — 40% */}
          <div
            className="lg:col-span-2 flex flex-col items-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
            }}
          >
            {/* Agent Photo */}
            <div className="relative" style={{ animation: 'floatUpDown 3s ease-in-out infinite' }}>
              <div
                style={{
                  width: '280px',
                  height: '280px',
                  borderRadius: '50%',
                  border: '4px solid #F4B942',
                  overflow: 'hidden',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
                }}
                className="sm:w-[320px] sm:h-[320px]"
              >
                <img
                  src="/assets/generated/agent-photo.dim_400x500.png"
                  alt="C. Jenkins — Licensed Texas Insurance Agent"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                />
              </div>

              {/* Review Card */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-40px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                  width: '260px',
                  textAlign: 'center',
                }}
              >
                <div style={{ color: '#F4B942', fontSize: '18px', marginBottom: '4px' }}>★★★★★</div>
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '13px', color: '#444', lineHeight: 1.5, margin: '0 0 6px' }}>
                  "Saved me $1,200/year on my home and auto bundle!"
                </p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '12px', color: '#1B3A6B' }}>
                  — Jennifer K., The Woodlands TX
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', textAlign: 'center', fontFamily: "'Open Sans', sans-serif" }}>
          <div style={{ width: '2px', height: '30px', backgroundColor: 'rgba(255,255,255,0.3)', margin: '0 auto 4px', borderRadius: '1px' }} />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
