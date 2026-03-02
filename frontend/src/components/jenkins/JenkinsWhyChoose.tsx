import { useRef, useEffect, useState } from 'react';

const cards = [
  {
    icon: '🏆',
    title: 'Independent Agent Advantage',
    text: "Unlike State Farm or Allstate agents who sell ONE company's products, we shop 20+ carriers every single time — meaning you always get the absolute best coverage at the lowest price available in Texas.",
  },
  {
    icon: '📍',
    title: 'True Local Houston Expert',
    text: "We know Greater Houston flood zones, HOA requirements, and Texas insurance laws. Not a call center. A real neighbor who answers their phone and fights for you when claims happen.",
  },
  {
    icon: '⚡',
    title: 'Effortless & Fast',
    text: "Full quote comparison in 24 hours. Communicate by email, phone, or WhatsApp — your choice. We handle all paperwork. You just pick the best option.",
  },
];

export default function JenkinsWhyChoose() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-[90px] bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-montserrat font-extrabold text-[40px] text-jenkins-navy mb-4">
            Why Houston Families Choose<br />Jenkins Insurance
          </h2>
          <div className="w-[60px] h-1 bg-jenkins-gold mx-auto rounded-full" />
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className={`bg-white border border-[#E8E8E8] rounded-2xl p-10 border-t-4 shadow-jenkins-card card-hover transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                borderTopColor: '#F4B942',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-5"
                style={{ background: 'rgba(244,185,66,0.15)' }}
              >
                {card.icon}
              </div>
              <h3 className="font-montserrat font-bold text-[20px] text-jenkins-navy mb-3">
                {card.title}
              </h3>
              <p className="font-opensans text-[16px] text-[#555] leading-[1.8]">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
