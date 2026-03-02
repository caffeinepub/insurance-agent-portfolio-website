import { useEffect, useState } from 'react';

interface HeroContent {
  headline: string;
  subheadline: string;
  button1: string;
  button2: string;
  trust1: string;
  trust2: string;
  trust3: string;
  trust4: string;
}

const defaultContent: HeroContent = {
  headline: "Greater Houston's Most Trusted Independent Insurance Agent",
  subheadline: "Comparing 20+ top carriers to find you the lowest rate in Texas — serving The Woodlands, Spring, Humble, Magnolia, Tomball & Conroe",
  button1: "🔍 Get My Free Quote",
  button2: "▶ See How It Works",
  trust1: "✅ Licensed Texas Agent",
  trust2: "⭐ 200+ Five-Star Reviews",
  trust3: "🏢 20+ Carriers",
  trust4: "⚡ Free Quote 24hrs",
};

export default function JenkinsHero() {
  const [content, setContent] = useState<HeroContent>(defaultContent);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('jenkinsHero');
      if (stored) {
        const parsed = JSON.parse(stored);
        setContent({ ...defaultContent, ...parsed });
      }
    } catch {}
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center texas-star-bg"
      style={{
        background: 'linear-gradient(135deg, #1B3A6B 0%, #2E5FA3 100%)',
        paddingTop: '70px',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Column */}
          <div
            className={`lg:col-span-3 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Badge */}
            <div
              className="inline-block mb-6 px-4 py-1.5 rounded-[20px] text-[13px] font-semibold font-opensans"
              style={{
                background: 'rgba(244,185,66,0.15)',
                border: '1px solid #F4B942',
                color: '#F4B942',
              }}
            >
              ⭐ #1 Rated Independent Agent — Greater Houston Metro TX
            </div>

            {/* H1 */}
            <h1
              className="font-montserrat font-extrabold leading-[1.15] mb-5"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
            >
              <span className="text-white">Greater Houston's Most Trusted </span>
              <span style={{ color: '#F4B942' }}>Independent Insurance Agent</span>
            </h1>

            {/* Subheadline */}
            <p
              className="font-opensans text-[19px] leading-[1.7] mb-9 max-w-[520px]"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              {content.subheadline}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-7">
              <a
                href="#contact"
                className="jenkins-gold-btn px-8 py-4 text-[17px] rounded-lg shadow-jenkins-gold"
              >
                {content.button1}
              </a>
              <a
                href="#about"
                className="px-8 py-4 text-[17px] rounded-lg font-bold text-white border-2 border-white hover:bg-white hover:text-jenkins-navy transition-all duration-200"
              >
                {content.button2}
              </a>
            </div>

            {/* Trust Row */}
            <div
              className="flex flex-wrap gap-x-4 gap-y-2 text-[13px] font-opensans"
              style={{ color: 'rgba(255,255,255,0.80)' }}
            >
              <span>{content.trust1}</span>
              <span className="opacity-40">|</span>
              <span>{content.trust2}</span>
              <span className="opacity-40">|</span>
              <span>{content.trust3}</span>
              <span className="opacity-40">|</span>
              <span>{content.trust4}</span>
            </div>
          </div>

          {/* Right Column */}
          <div
            className={`lg:col-span-2 flex justify-center relative transition-all duration-700 delay-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative">
              {/* Agent Photo */}
              <div
                className="animate-float rounded-full overflow-hidden flex items-center justify-center"
                style={{
                  width: '320px',
                  height: '320px',
                  border: '4px solid #F4B942',
                  background: 'rgba(255,255,255,0.1)',
                }}
              >
                <img
                  src="/assets/generated/agent-photo-jenkins.dim_400x500.png"
                  alt="C. Jenkins - Licensed Texas Insurance Agent"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<div class="text-white/40 text-center"><div class="text-6xl mb-2">👤</div><div class="text-sm">C. Jenkins</div></div>';
                  }}
                />
              </div>

              {/* Review Card */}
              <div
                className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-jenkins-hero max-w-[220px]"
              >
                <div className="text-jenkins-gold text-lg mb-1">★★★★★</div>
                <p className="text-[14px] text-jenkins-dark-text font-opensans leading-snug">
                  "Saved $1,200 on home & auto!"
                </p>
                <p className="text-[12px] text-jenkins-gold font-semibold mt-1">
                  — Jennifer K., The Woodlands TX
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
