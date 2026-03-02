import { useRef, useEffect, useState } from 'react';

interface AboutContent {
  agentName: string;
  aboutText: string;
  yearsExperience: string;
  familiesServed: string;
  carriersCount: string;
}

const defaultAbout: AboutContent = {
  agentName: 'C. Jenkins',
  aboutText: `Hi, I'm C. Jenkins.\n\nI've spent years protecting families across Greater Houston — The Woodlands, Spring, Humble, Magnolia, Tomball, and Conroe — from the unexpected.\n\nI became an independent agent because I was tired of seeing my neighbors get stuck with overpriced policies from companies that treated them like a number — not a person.\n\nAs an independent agent, I work for YOU. I compare over 20 insurance carriers every single time to make sure you get the absolute best rate available in Texas.\n\nWhen you call me, I answer. When you have a claim, I fight for you. That's my promise to every Houston family I serve.`,
  yearsExperience: '10+',
  familiesServed: '500+',
  carriersCount: '20+',
};

export default function JenkinsAbout() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState<AboutContent>(defaultAbout);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('jenkinsAbout');
      if (stored) {
        const parsed = JSON.parse(stored);
        setContent({ ...defaultAbout, ...parsed });
      }
    } catch {}

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: content.yearsExperience, label: 'Years Experience' },
    { value: content.familiesServed, label: 'Families Served' },
    { value: content.carriersCount, label: 'Carrier Options' },
    { value: '4.9★', label: 'Google Rating' },
  ];

  return (
    <section id="about" className="py-[90px]" style={{ background: '#1B3A6B' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left: Photo */}
          <div className="flex flex-col items-center">
            <div
              className="rounded-2xl overflow-hidden flex items-center justify-center"
              style={{
                width: '100%',
                maxWidth: '420px',
                height: '500px',
                border: '4px solid #F4B942',
                background: 'rgba(255,255,255,0.08)',
              }}
            >
              <img
                src="/assets/generated/agent-photo-jenkins.dim_400x500.png"
                alt="C. Jenkins - Licensed Texas Insurance Agent"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = '<div class="text-white/40 text-center p-8"><div class="text-8xl mb-4">👤</div><div class="text-lg">C. Jenkins</div></div>';
                }}
              />
            </div>
            <p className="font-opensans text-[14px] mt-3" style={{ color: '#F4B942' }}>
              {content.agentName} | Licensed TX Agent
            </p>
          </div>

          {/* Right: Content */}
          <div>
            <div className="w-[50px] h-1 bg-jenkins-gold mb-6 rounded-full" />
            <h2 className="font-montserrat font-extrabold text-[36px] text-white leading-tight mb-6">
              Your Neighbor. Your Advocate.<br />Your Insurance Agent.
            </h2>
            <div
              className="font-opensans text-[17px] leading-[1.9] mb-8 whitespace-pre-line"
              style={{ color: 'rgba(255,255,255,0.88)' }}
            >
              {content.aboutText}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 text-center"
                  style={{ border: '1px solid rgba(244,185,66,0.4)' }}
                >
                  <div className="font-montserrat font-extrabold text-[28px] text-jenkins-gold">
                    {stat.value}
                  </div>
                  <div className="font-opensans text-[12px] text-white mt-1">
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
