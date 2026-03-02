import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useToast } from '../../contexts/ToastContext';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function Section({ title, children, defaultOpen = false }: SectionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors"
      >
        <span className="font-montserrat font-bold text-[16px]" style={{ color: '#1B3A6B' }}>{title}</span>
        {open ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
      </button>
      {open && <div className="px-6 pb-6 border-t border-gray-100">{children}</div>}
    </div>
  );
}

function Field({ label, value, onChange, multiline = false, type = 'text' }: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  type?: string;
}) {
  const cls = "w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl font-opensans text-[14px] focus:outline-none transition-colors";
  const focusBlur = {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => (e.target.style.borderColor = '#F4B942'),
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => (e.target.style.borderColor = '#e5e7eb'),
  };
  return (
    <div className="mb-4">
      <label className="font-opensans text-[13px] font-semibold text-gray-600 block mb-1">{label}</label>
      {multiline ? (
        <textarea
          value={value}
          onChange={e => onChange(e.target.value)}
          rows={4}
          className={`${cls} resize-none`}
          {...focusBlur}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          className={cls}
          {...focusBlur}
        />
      )}
    </div>
  );
}

export default function AdminJenkinsContentPage() {
  const { showToast } = useToast();
  const [saving, setSaving] = useState<string | null>(null);

  // Hero
  const [hero, setHero] = useState({
    headline: "Greater Houston's Most Trusted Independent Insurance Agent",
    subheadline: 'Comparing 20+ top carriers to find you the lowest rate in Texas — serving The Woodlands, Spring, Humble, Magnolia, Tomball & Conroe',
    button1: '🔍 Get My Free Quote',
    button2: '▶ See How It Works',
    trust1: '✅ Licensed Texas Agent',
    trust2: '⭐ 200+ Five-Star Reviews',
    trust3: '🏢 20+ Carriers',
    trust4: '⚡ Free Quote 24hrs',
  });

  // About
  const [about, setAbout] = useState({
    agentName: 'C. Jenkins',
    aboutText: "Hi, I'm C. Jenkins.\n\nI've spent years protecting families across Greater Houston — The Woodlands, Spring, Humble, Magnolia, Tomball, and Conroe — from the unexpected.\n\nAs an independent agent, I work for YOU. I compare over 20 insurance carriers every single time to make sure you get the absolute best rate available in Texas.",
    yearsExperience: '10+',
    familiesServed: '500+',
    carriersCount: '20+',
  });

  // Contact
  const [contact, setContact] = useState({
    phone: '(281) 410-8934',
    email: 'cjenkins@twfg.com',
    address: '33018 Tamina Rd, Greater Houston Metro TX',
    hoursMF: 'Monday–Friday: 8AM–6PM CST',
    hoursSat: 'Saturday: 9AM–2PM CST',
    whatsapp: '+12814108934',
  });

  // Coverage
  const [coverage, setCoverage] = useState([
    { title: 'Homeowners Insurance', description: 'Protect your biggest investment. Best rates for Greater Houston homes including flood & windstorm coverage.' },
    { title: 'Auto Insurance', description: 'Compare 20+ carriers instantly. Multi-car discounts available. Texas minimum to full comprehensive.' },
    { title: 'Business Insurance', description: 'General liability, commercial property and workers comp for Houston small businesses and contractors.' },
    { title: 'Flood Insurance', description: "Most Texas policies DON'T cover flooding. We get you the right NFIP or private flood coverage." },
    { title: 'Recreational Vehicles', description: 'Motorcycles, boats, ATVs, golf carts and RVs. Protect everything you love in Texas.' },
    { title: 'Life & Health Insurance', description: 'Term life, whole life, and health coverage for Houston families and small business owners.' },
  ]);

  // Bilingual
  const [bilingual, setBilingual] = useState({
    headline: '¿Hablas Español?',
    body: 'Ofrecemos servicio completo en español para familias de Greater Houston — The Woodlands, Spring, Humble, Magnolia, Tomball y Conroe.\n\nSeguros de casa, auto y vida — ¡cotización gratis en 24 horas!',
    button: 'Obtener Cotización Gratis',
  });

  useEffect(() => {
    try {
      const h = localStorage.getItem('jenkinsHero');
      if (h) setHero(prev => ({ ...prev, ...JSON.parse(h) }));
      const a = localStorage.getItem('jenkinsAbout');
      if (a) setAbout(prev => ({ ...prev, ...JSON.parse(a) }));
      const c = localStorage.getItem('jenkinsContactInfo');
      if (c) setContact(prev => ({ ...prev, ...JSON.parse(c) }));
      const cv = localStorage.getItem('jenkinsCoverage');
      if (cv) setCoverage(JSON.parse(cv));
      const b = localStorage.getItem('jenkinsBilingual');
      if (b) setBilingual(prev => ({ ...prev, ...JSON.parse(b) }));
    } catch {}
  }, []);

  const save = async (key: string, data: unknown) => {
    setSaving(key);
    await new Promise(r => setTimeout(r, 400));
    localStorage.setItem(key, JSON.stringify(data));
    setSaving(null);
    showToast('✅ Saved successfully!', 'success');
  };

  const SaveButtons = ({ sectionKey, data }: { sectionKey: string; data: unknown }) => (
    <div className="flex gap-3 mt-4 pt-4 border-t border-gray-100">
      <button
        onClick={() => save(sectionKey, data)}
        disabled={saving === sectionKey}
        className="px-6 py-2.5 rounded-xl text-[14px] font-semibold transition-all hover:opacity-80 disabled:opacity-60 flex items-center gap-2"
        style={{ background: '#F4B942', color: '#1B3A6B' }}
      >
        {saving === sectionKey ? (
          <>
            <div className="w-4 h-4 border-2 border-jenkins-navy/30 border-t-jenkins-navy rounded-full animate-spin" />
            Saving...
          </>
        ) : (
          'Save Changes'
        )}
      </button>
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2.5 rounded-xl text-[14px] font-semibold text-white transition-all hover:opacity-80"
        style={{ background: '#1B3A6B' }}
      >
        Preview Changes
      </a>
    </div>
  );

  return (
    <div>
      <h1 className="font-montserrat font-bold text-[28px] mb-6" style={{ color: '#1B3A6B' }}>
        Edit Your Website Content
      </h1>

      {/* Hero Section */}
      <Section title="🦸 Hero Section" defaultOpen>
        <div className="pt-4">
          <Field label="Main Headline" value={hero.headline} onChange={v => setHero({ ...hero, headline: v })} />
          <Field label="Subheadline" value={hero.subheadline} onChange={v => setHero({ ...hero, subheadline: v })} multiline />
          <Field label="Button 1 Text" value={hero.button1} onChange={v => setHero({ ...hero, button1: v })} />
          <Field label="Button 2 Text" value={hero.button2} onChange={v => setHero({ ...hero, button2: v })} />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Trust Indicator 1" value={hero.trust1} onChange={v => setHero({ ...hero, trust1: v })} />
            <Field label="Trust Indicator 2" value={hero.trust2} onChange={v => setHero({ ...hero, trust2: v })} />
            <Field label="Trust Indicator 3" value={hero.trust3} onChange={v => setHero({ ...hero, trust3: v })} />
            <Field label="Trust Indicator 4" value={hero.trust4} onChange={v => setHero({ ...hero, trust4: v })} />
          </div>
          <SaveButtons sectionKey="jenkinsHero" data={hero} />
        </div>
      </Section>

      {/* About Section */}
      <Section title="👤 About Section">
        <div className="pt-4">
          <Field label="Agent Name" value={about.agentName} onChange={v => setAbout({ ...about, agentName: v })} />
          <Field label="About Text" value={about.aboutText} onChange={v => setAbout({ ...about, aboutText: v })} multiline />
          <div className="grid grid-cols-3 gap-4">
            <Field label="Years Experience" value={about.yearsExperience} onChange={v => setAbout({ ...about, yearsExperience: v })} />
            <Field label="Families Served" value={about.familiesServed} onChange={v => setAbout({ ...about, familiesServed: v })} />
            <Field label="Carriers Count" value={about.carriersCount} onChange={v => setAbout({ ...about, carriersCount: v })} />
          </div>
          <SaveButtons sectionKey="jenkinsAbout" data={about} />
        </div>
      </Section>

      {/* Contact Info */}
      <Section title="📞 Contact Info">
        <div className="pt-4">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Phone Number" value={contact.phone} onChange={v => setContact({ ...contact, phone: v })} />
            <Field label="Email Address" value={contact.email} onChange={v => setContact({ ...contact, email: v })} type="email" />
          </div>
          <Field label="Physical Address" value={contact.address} onChange={v => setContact({ ...contact, address: v })} />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Mon–Fri Hours" value={contact.hoursMF} onChange={v => setContact({ ...contact, hoursMF: v })} />
            <Field label="Saturday Hours" value={contact.hoursSat} onChange={v => setContact({ ...contact, hoursSat: v })} />
          </div>
          <Field label="WhatsApp Number" value={contact.whatsapp} onChange={v => setContact({ ...contact, whatsapp: v })} />
          <SaveButtons sectionKey="jenkinsContactInfo" data={contact} />
        </div>
      </Section>

      {/* Coverage Types */}
      <Section title="🛡️ Coverage Types">
        <div className="pt-4">
          {coverage.map((card, i) => (
            <div key={i} className="mb-5 p-4 bg-gray-50 rounded-xl">
              <p className="font-opensans font-semibold text-[13px] text-gray-500 mb-2">Coverage Card {i + 1}</p>
              <Field
                label="Title"
                value={card.title}
                onChange={v => {
                  const updated = [...coverage];
                  updated[i] = { ...updated[i], title: v };
                  setCoverage(updated);
                }}
              />
              <Field
                label="Description"
                value={card.description}
                onChange={v => {
                  const updated = [...coverage];
                  updated[i] = { ...updated[i], description: v };
                  setCoverage(updated);
                }}
                multiline
              />
            </div>
          ))}
          <SaveButtons sectionKey="jenkinsCoverage" data={coverage} />
        </div>
      </Section>

      {/* Bilingual Section */}
      <Section title="🇲🇽 Bilingual Section">
        <div className="pt-4">
          <Field label="Spanish Headline" value={bilingual.headline} onChange={v => setBilingual({ ...bilingual, headline: v })} />
          <Field label="Spanish Body Text" value={bilingual.body} onChange={v => setBilingual({ ...bilingual, body: v })} multiline />
          <Field label="Spanish Button Text" value={bilingual.button} onChange={v => setBilingual({ ...bilingual, button: v })} />
          <SaveButtons sectionKey="jenkinsBilingual" data={bilingual} />
        </div>
      </Section>
    </div>
  );
}
