import { useRef, useEffect, useState } from 'react';

const carriers = [
  'PROGRESSIVE', 'TRAVELERS', 'NATIONWIDE', 'LIBERTY MUTUAL', 'SAFECO',
  'METLIFE', 'ALLSTATE', 'TWFG', 'HARTFORD', 'FARMERS',
];

export default function JenkinsCarrierBadges() {
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
    <section className="py-12" style={{ background: '#F8F9FA' }}>
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center font-opensans font-semibold text-[12px] text-[#888888] uppercase tracking-[3px] mb-8">
          TRUSTED CARRIER PARTNERS
        </p>
        <div
          ref={ref}
          className={`flex flex-wrap justify-center gap-3 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {carriers.map((carrier, i) => (
            <div
              key={carrier}
              className="border-2 border-[#E0E0E0] rounded-lg px-6 py-3 bg-white font-montserrat font-bold text-[13px] text-jenkins-dark-text hover:border-jenkins-gold transition-all duration-200 cursor-default"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {carrier}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
