import { useRef, useEffect, useState } from 'react';

interface BilingualContent {
  headline: string;
  body: string;
  button: string;
}

const defaultContent: BilingualContent = {
  headline: '¿Hablas Español?',
  body: 'Ofrecemos servicio completo en español para familias de Greater Houston — The Woodlands, Spring, Humble, Magnolia, Tomball y Conroe.\n\nSeguros de casa, auto y vida — ¡cotización gratis en 24 horas!',
  button: 'Obtener Cotización Gratis',
};

export default function JenkinsBilingual() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState<BilingualContent>(defaultContent);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('jenkinsBilingual');
      if (stored) {
        const parsed = JSON.parse(stored);
        setContent({ ...defaultContent, ...parsed });
      }
    } catch {}

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-[60px] text-center"
      style={{
        background: '#F8F9FA',
        borderTop: '4px solid #F4B942',
      }}
    >
      <div
        ref={ref}
        className={`max-w-2xl mx-auto px-4 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-4xl mb-4">🇲🇽 🇺🇸</div>
        <h2 className="font-montserrat font-extrabold text-[40px] text-jenkins-navy mb-6">
          {content.headline}
        </h2>
        <p className="font-opensans text-[18px] text-[#555] leading-[1.8] mb-8 whitespace-pre-line">
          {content.body}
        </p>
        <a
          href="#contact"
          className="jenkins-gold-btn inline-block px-8 py-4 text-[17px] rounded-lg"
        >
          {content.button}
        </a>
        <p className="font-opensans text-[13px] text-[#888] mt-4">
          Bilingual Agent | Agente Bilingüe<br />
          Greater Houston Metro TX
        </p>
      </div>
    </section>
  );
}
