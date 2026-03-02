import { useEffect, useRef, useState } from 'react';

interface Stat {
  prefix?: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

const stats: Stat[] = [
  { value: 500, suffix: '+', label: 'Families Insured', icon: '🏆' },
  { value: 4.9, suffix: '/5', label: 'Star Rating', icon: '⭐' },
  { value: 20, suffix: '+', label: 'Carrier Partners', icon: '📋' },
  { value: 6, suffix: '', label: 'Cities Served', icon: '📍' },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const start = Date.now();
    const isDecimal = target % 1 !== 0;

    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(target);
    };

    requestAnimationFrame(tick);
  }, [active, target, duration]);

  return count;
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const count = useCountUp(stat.value, 2000, active);
  const isDecimal = stat.value % 1 !== 0;

  return (
    <div className="flex flex-col items-center gap-1 px-6">
      <div className="text-2xl mb-1">{stat.icon}</div>
      <div className="font-montserrat font-extrabold text-[22px] text-jenkins-navy">
        {isDecimal ? count.toFixed(1) : count}{stat.suffix}
      </div>
      <div className="font-opensans font-semibold text-[13px] text-jenkins-navy">
        {stat.label}
      </div>
    </div>
  );
}

export default function JenkinsTrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-5"
      style={{ background: '#F4B942', minHeight: '72px' }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center">
              <StatItem stat={stat} active={active} />
              {i < stats.length - 1 && (
                <div className="hidden md:block w-px h-10 bg-jenkins-navy/20 ml-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
