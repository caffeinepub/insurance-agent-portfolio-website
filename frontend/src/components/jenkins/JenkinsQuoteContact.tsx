import { useState, useEffect } from 'react';
import { useActor } from '../../hooks/useActor';

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hoursMF: string;
  hoursSat: string;
  whatsapp: string;
}

const defaultContact: ContactInfo = {
  phone: '(281) 410-8934',
  email: 'cjenkins@twfg.com',
  address: '33018 Tamina Rd, Greater Houston Metro TX',
  hoursMF: 'Monday–Friday: 8AM–6PM CST',
  hoursSat: 'Saturday: 9AM–2PM CST',
  whatsapp: '+12814108934',
};

const cities = ['The Woodlands', 'Spring', 'Conroe', 'Humble', 'Magnolia', 'Tomball', 'Other Houston Area'];
const coverageTypes = ['Homeowners', 'Auto Insurance', 'Home + Auto Bundle', 'Business', 'Flood Insurance', 'Life Insurance', 'Multiple Types'];

export default function JenkinsQuoteContact() {
  const { actor } = useActor();
  const [contact, setContact] = useState<ContactInfo>(defaultContact);
  const [form, setForm] = useState({
    firstName: '', lastName: '', phone: '', email: '',
    city: '', coverage: '', currentInsurer: '', message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('jenkinsContactInfo');
      if (stored) {
        const parsed = JSON.parse(stored);
        setContact({ ...defaultContact, ...parsed });
      }
    } catch {}
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      if (actor) {
        await actor.submitQuote({
          name: `${form.firstName} ${form.lastName}`.trim(),
          phone: form.phone,
          email: form.email,
          city: form.city,
          coverageType: form.coverage,
          message: form.message,
          timestamp: BigInt(Date.now()),
        });
      }
      // Also save to localStorage for admin panel
      const existing = JSON.parse(localStorage.getItem('jenkinsQuoteLeads') || '[]');
      const newLead = {
        id: Date.now().toString(),
        name: `${form.firstName} ${form.lastName}`.trim(),
        phone: form.phone,
        email: form.email,
        city: form.city,
        coverage: form.coverage,
        currentInsurer: form.currentInsurer,
        message: form.message,
        date: new Date().toLocaleDateString(),
        status: 'New',
        notes: '',
      };
      localStorage.setItem('jenkinsQuoteLeads', JSON.stringify([newLead, ...existing]));
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-[90px]" style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #2E5FA3 100%)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="font-montserrat font-extrabold text-[36px] text-white mb-3">
              Get Your Free Texas Quote
            </h2>
            <p className="font-opensans text-[16px] mb-8" style={{ color: 'rgba(255,255,255,0.80)' }}>
              Takes 2 minutes. No spam ever. Response within 24 hours guaranteed.
            </p>

            {submitted ? (
              <div className="bg-white rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-montserrat font-bold text-[24px] text-jenkins-navy mb-3">
                  Quote Request Sent!
                </h3>
                <p className="font-opensans text-[16px] text-[#555]">
                  Thank you! C. Jenkins will contact you within 24 hours at {form.phone || form.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name *"
                    required
                    value={form.firstName}
                    onChange={e => setForm({ ...form, firstName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white text-jenkins-dark-text font-opensans focus:outline-none focus:ring-2 focus:ring-jenkins-gold"
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    required
                    value={form.lastName}
                    onChange={e => setForm({ ...form, lastName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white text-jenkins-dark-text font-opensans focus:outline-none focus:ring-2 focus:ring-jenkins-gold"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="(281) 555-0000"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white text-jenkins-dark-text font-opensans focus:outline-none focus:ring-2 focus:ring-jenkins-gold"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white text-jenkins-dark-text font-opensans focus:outline-none focus:ring-2 focus:ring-jenkins-gold"
                />
                <select
                  value={form.city}
                  onChange={e => setForm({ ...form, city: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white text-jenkins-dark-text font-opensans focus:outline-none focus:ring-2 focus:ring-jenkins-gold"
                >
                  <option value="">Your City</option>
                  {cities.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <select
                  value={form.coverage}
                  onChange={e => setForm({ ...form, coverage: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white text-jenkins-dark-text font-opensans focus:outline-none focus:ring-2 focus:ring-jenkins-gold"
                >
                  <option value="">Coverage Needed</option>
                  {coverageTypes.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <input
                  type="text"
                  placeholder="Current Insurance Company (e.g. State Farm, Allstate)"
                  value={form.currentInsurer}
                  onChange={e => setForm({ ...form, currentInsurer: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white text-jenkins-dark-text font-opensans focus:outline-none focus:ring-2 focus:ring-jenkins-gold"
                />
                <textarea
                  rows={4}
                  placeholder="Tell us about your current coverage and what you want to save on..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white text-jenkins-dark-text font-opensans focus:outline-none focus:ring-2 focus:ring-jenkins-gold resize-none"
                />
                {error && <p className="text-red-300 text-sm">{error}</p>}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full jenkins-gold-btn py-4 text-[18px] rounded-lg disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-jenkins-navy/30 border-t-jenkins-navy rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send My Free Quote Request →'
                  )}
                </button>
                <p className="text-center text-[13px]" style={{ color: 'rgba(255,255,255,0.70)' }}>
                  🔒 100% Private — Your information is never sold or shared with third parties. Ever.
                </p>
              </form>
            )}
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-[20px] p-10 shadow-[0_8px_40px_rgba(0,0,0,0.15)] h-fit">
            <h3 className="font-montserrat font-bold text-[22px] text-jenkins-navy mb-6">
              Or Reach Us Directly
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">📞</span>
                <div>
                  <a href={`tel:${contact.phone.replace(/\D/g, '')}`} className="font-opensans font-semibold text-jenkins-navy hover:text-jenkins-gold transition-colors">
                    {contact.phone}
                  </a>
                  <p className="text-[13px] text-[#555]">Call or text anytime</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">📧</span>
                <div>
                  <a href={`mailto:${contact.email}`} className="font-opensans font-semibold text-jenkins-navy hover:text-jenkins-gold transition-colors">
                    {contact.email}
                  </a>
                  <p className="text-[13px] text-[#555]">Reply within 2 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <p className="font-opensans font-semibold text-jenkins-navy">{contact.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">💬</span>
                <div>
                  <p className="font-opensans font-semibold text-jenkins-navy">WhatsApp Available</p>
                  <p className="text-[13px] text-[#555]">Message us anytime</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🕐</span>
                <div>
                  <p className="font-opensans text-[14px] text-jenkins-navy">{contact.hoursMF}</p>
                  <p className="font-opensans text-[14px] text-jenkins-navy">{contact.hoursSat}</p>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="mt-6 p-4 rounded-xl" style={{ background: '#F8F9FA' }}>
              <p className="font-opensans font-bold text-jenkins-navy text-[14px] mb-2">Serving:</p>
              <p className="font-opensans text-[14px] text-[#555]">
                The Woodlands • Spring • Conroe<br />
                Humble • Magnolia • Tomball
              </p>
            </div>

            {/* Badges */}
            <div className="flex gap-3 mt-4">
              <span className="px-3 py-1.5 border-2 border-jenkins-gold text-jenkins-navy font-opensans font-semibold text-[12px] rounded-lg">
                🛡️ Licensed TX Agent
              </span>
              <span className="px-3 py-1.5 border-2 border-jenkins-gold text-jenkins-navy font-opensans font-semibold text-[12px] rounded-lg">
                ⭐ 4.9 Star Rated
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
