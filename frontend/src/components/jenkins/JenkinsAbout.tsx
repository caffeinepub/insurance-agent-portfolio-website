import React, { useRef, useState, useEffect } from 'react';

const agentStats = [
  { value: '10+', label: 'Years' },
  { value: '500+', label: 'Clients' },
  { value: '20+', label: 'Carriers' },
  { value: '4.9★', label: 'Rating' },
];

export default function JenkinsAbout() {
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
      id="about"
      ref={ref}
      style={{ backgroundColor: '#1B3A6B', padding: '90px 0' }}
      className={`scroll-fade ${visible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Photo */}
          <div className="flex flex-col items-center lg:items-start">
            <div
              style={{
                width: '100%',
                maxWidth: '420px',
                height: '500px',
                borderRadius: '16px',
                border: '4px solid #F4B942',
                overflow: 'hidden',
                backgroundColor: 'rgba(255,255,255,0.1)',
                position: 'relative',
              }}
            >
              <img
                src="/assets/generated/agent-photo.dim_400x500.png"
                alt="C. Jenkins — Licensed Texas Insurance Agent"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
              />
            </div>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: '14px',
                color: '#F4B942',
                marginTop: '12px',
                textAlign: 'center',
              }}
            >
              C. Jenkins | Licensed Texas Agent
            </p>
          </div>

          {/* Right: Story */}
          <div>
            {/* Gold accent line */}
            <div style={{ width: '50px', height: '4px', backgroundColor: '#F4B942', marginBottom: '24px' }} />

            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(26px, 3.5vw, 36px)',
                color: '#FFFFFF',
                lineHeight: 1.25,
                marginBottom: '24px',
              }}
            >
              Your Neighbor. Your Advocate.<br />Your Insurance Agent.
            </h2>

            <div
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: '17px',
                color: 'rgba(255,255,255,0.88)',
                lineHeight: 1.9,
              }}
            >
              <p style={{ marginBottom: '16px' }}>
                Hi, I'm C. Jenkins — and I've spent years protecting families right here
                in The Woodlands from the unexpected.
              </p>
              <p style={{ marginBottom: '16px' }}>
                I became an independent agent because I was tired of seeing neighbors get
                stuck with overpriced policies from companies that treated them like a
                policy number — not a person.
              </p>
              <p style={{ marginBottom: '16px' }}>
                As an independent agent at 33018 Tamina Road, I work for YOU.
                I compare over 20 insurance carriers every single time to make sure
                you're getting the absolute best rate available in Texas.
              </p>
              <p>
                When you call me, I answer. When you have a claim, I fight for you.
                That's my promise to every family I serve in The Woodlands.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {agentStats.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    border: '1px solid rgba(244,185,66,0.4)',
                    borderRadius: '12px',
                    padding: '16px 12px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 800,
                      fontSize: '28px',
                      color: '#F4B942',
                      lineHeight: 1.2,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: '13px',
                      color: '#FFFFFF',
                      marginTop: '4px',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
