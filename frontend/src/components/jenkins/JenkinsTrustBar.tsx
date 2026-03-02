import React, { useEffect, useRef, useState } from 'react';

interface Stat {
  icon: string;
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { icon: '🏆', value: 500, suffix: '+', label: 'Families Insured' },
  { icon: '⭐', value: 4.9, suffix: '/5', label: 'Star Rating' },
  { icon: '📋', value: 20, suffix: '+', label: 'Carrier Partners' },
  { icon: '📍', value: 0, suffix: '', label: 'The Woodlands, TX Local' },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active || target === 0) {
      if (target === 0) setCount(0);
      return;
    }
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(target % 1 !== 0 ? 1 : 0)));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [active, target, duration]);

  return count;
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const count = useCountUp(stat.value, 2000, active);
  const displayValue = stat.value === 0 ? '' : (stat.value % 1 !== 0 ? count.toFixed(1) : Math.round(count as number).toString());

  return (
    <div className="flex flex-col items-center justify-center px-4 py-3">
      <div
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700,
          fontSize: '22px',
          color: '#1B3A6B',
          lineHeight: 1.2,
        }}
      >
        {stat.icon} {stat.value === 0 ? '' : `${displayValue}${stat.suffix}`}
      </div>
      <div
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700,
          fontSize: '13px',
          color: '#1B3A6B',
          marginTop: '2px',
        }}
      >
        {stat.label}
      </div>
    </div>
  );
}

export default function JenkinsTrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ backgroundColor: '#F4B942', minHeight: '70px' }}
      className="w-full"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-jenkins-navy/20">
          {stats.map((stat, i) => (
            <React.Fragment key={i}>
              <StatItem stat={stat} active={active} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
