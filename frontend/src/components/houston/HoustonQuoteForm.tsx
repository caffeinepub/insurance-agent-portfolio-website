import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useHoustonQuoteSubmission } from '../../hooks/useHoustonQuoteSubmission';

const coverageOptions = [
  { value: 'auto', label: 'Auto Insurance' },
  { value: 'home', label: 'Home Insurance' },
  { value: 'life', label: 'Life Insurance' },
  { value: 'business', label: 'Business Insurance' },
];

const timeOptions = [
  { value: 'morning', label: 'Morning (8am–12pm)' },
  { value: 'afternoon', label: 'Afternoon (12pm–5pm)' },
  { value: 'evening', label: 'Evening (5pm–8pm)' },
  { value: 'anyTime', label: 'Any Time' },
];

export default function HoustonQuoteForm() {
  const { mutate: submitQuote, isPending } = useHoustonQuoteSubmission();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    coverageType: 'auto',
    bestTimeToCall: 'anyTime',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitQuote(
      {
        name: form.name,
        phone: form.phone,
        email: form.email,
        city: form.city,
        coverageType: form.coverageType,
        message: `Best time to call: ${form.bestTimeToCall}. ${form.message}`.trim(),
      },
      { onSuccess: () => setSubmitted(true) }
    );
  };

  if (submitted) {
    return (
      <section id="quote" style={{ backgroundColor: '#1e3a8a' }} className="py-10">
        <div className="max-w-xl mx-auto px-4 text-center">
          <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: '#f59e0b' }} />
          <h3 className="text-xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
            Quote Request Received!
          </h3>
          <p style={{ color: '#FFFFFF' }}>
            We'll be in touch within 24 hours with your personalized quote.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" style={{ backgroundColor: '#1e3a8a' }} className="py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
            Get Your Free Houston Insurance Quote
          </h2>
          <p className="text-sm" style={{ color: '#FFFFFF' }}>
            Takes less than 2 minutes. No obligation. No spam.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl p-6 md:p-8 space-y-4"
          style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: '#FFFFFF' }}>
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: '#FFFFFF' }}>
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="(832) 555-0000"
                className="w-full px-4 py-3 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-sm"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: '#FFFFFF' }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: '#FFFFFF' }}>
                City / ZIP Code
              </label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Conroe, TX or 77301"
                className="w-full px-4 py-3 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-sm"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: '#FFFFFF' }}>
                Coverage Type *
              </label>
              <select
                name="coverageType"
                value={form.coverageType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-sm"
              >
                {coverageOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: '#FFFFFF' }}>
                Best Time to Call
              </label>
              <select
                name="bestTimeToCall"
                value={form.bestTimeToCall}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-sm"
              >
                {timeOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base transition-all disabled:opacity-60 min-h-[48px]"
            style={{ backgroundColor: '#f59e0b', color: '#1e3a8a' }}
          >
            {isPending ? (
              <>
                <div className="w-4 h-4 border-2 border-blue-900/30 border-t-blue-900 rounded-full animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Get My Free Quote
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
