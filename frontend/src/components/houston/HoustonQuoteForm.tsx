import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useHoustonQuoteSubmission } from '../../hooks/useHoustonQuoteSubmission';
import { CoverageType, BestTimeToCall } from '../../backend';

export default function HoustonQuoteForm() {
  const { mutate: submitQuote, isPending } = useHoustonQuoteSubmission();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    zipCode: '',
    coverageType: CoverageType.auto,
    bestTimeToCall: BestTimeToCall.anyTime,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitQuote(form, {
      onSuccess: () => setSubmitted(true),
    });
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
                placeholder="John Smith"
                className="w-full px-4 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#1e293b', backgroundColor: '#FFFFFF' }}
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
                placeholder="(713) 000-0000"
                className="w-full px-4 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#1e293b', backgroundColor: '#FFFFFF' }}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: '#FFFFFF' }}>
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#1e293b', backgroundColor: '#FFFFFF' }}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: '#FFFFFF' }}>
                ZIP Code *
              </label>
              <input
                type="text"
                name="zipCode"
                required
                value={form.zipCode}
                onChange={handleChange}
                placeholder="77001"
                className="w-full px-4 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#1e293b', backgroundColor: '#FFFFFF' }}
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
                className="w-full px-4 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#1e293b', backgroundColor: '#FFFFFF' }}
              >
                <option value={CoverageType.auto} style={{ color: '#1e293b' }}>Auto Insurance</option>
                <option value={CoverageType.home} style={{ color: '#1e293b' }}>Home Insurance</option>
                <option value={CoverageType.life} style={{ color: '#1e293b' }}>Life Insurance</option>
                <option value={CoverageType.business} style={{ color: '#1e293b' }}>Business Insurance</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: '#FFFFFF' }}>
                Best Time to Call *
              </label>
              <select
                name="bestTimeToCall"
                value={form.bestTimeToCall}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#1e293b', backgroundColor: '#FFFFFF' }}
              >
                <option value={BestTimeToCall.morning} style={{ color: '#1e293b' }}>Morning (8am–12pm)</option>
                <option value={BestTimeToCall.afternoon} style={{ color: '#1e293b' }}>Afternoon (12pm–5pm)</option>
                <option value={BestTimeToCall.evening} style={{ color: '#1e293b' }}>Evening (5pm–8pm)</option>
                <option value={BestTimeToCall.anyTime} style={{ color: '#1e293b' }}>Any Time</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-base transition-all hover:opacity-90 disabled:opacity-50"
            style={{ backgroundColor: '#f59e0b', color: '#FFFFFF' }}
          >
            <Send className="w-5 h-5" style={{ color: '#FFFFFF' }} />
            <span style={{ color: '#FFFFFF' }}>
              {isPending ? 'Submitting...' : 'Get My Free Houston Quote'}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
