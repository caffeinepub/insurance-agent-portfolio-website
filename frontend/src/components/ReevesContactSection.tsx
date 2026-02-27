import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useBusinessInfo } from '../hooks/useBusinessInfo';
import { useReevesQuoteSubmission } from '../hooks/useReevesQuoteSubmission';

interface FormState {
  name: string;
  phone: string;
  email: string;
  zipCode: string;
  coverageType: string;
  message: string;
  tcpa: boolean;
}

export default function ReevesContactSection() {
  const { businessName, phone: agentPhone } = useBusinessInfo();
  const { mutate: submitQuote, isPending, isSuccess, isError, reset } = useReevesQuoteSubmission();

  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    zipCode: '',
    coverageType: '',
    message: '',
    tcpa: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitQuote({
      name: form.name,
      phone: form.phone,
      email: form.email,
      zipCode: form.zipCode || '90001',
      coverageType: form.coverageType || 'auto',
      message: form.message,
    });
  };

  const handleReset = () => {
    setForm({ name: '', phone: '', email: '', zipCode: '', coverageType: '', message: '', tcpa: false });
    reset();
  };

  if (isSuccess) {
    return (
      <section id="contact-form" className="py-20" style={{ backgroundColor: '#f8f9fc' }} aria-label="Quote request success">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: 'rgba(201,162,39,0.15)' }}
          >
            <CheckCircle className="w-10 h-10" style={{ color: '#c9a227' }} aria-hidden="true" />
          </div>
          <h2 className="text-2xl font-bold mb-3" style={{ color: '#0f2557' }}>
            Thank You!
          </h2>
          <p className="text-base mb-6" style={{ color: '#374151' }}>
            Your quote request has been received. We'll contact you within 24 hours with personalized
            options tailored to your needs.
          </p>
          <p className="text-sm mb-8" style={{ color: '#6b7280' }}>
            Need immediate assistance? Call us at{' '}
            <a href={`tel:${agentPhone.replace(/\D/g, '')}`} className="font-semibold hover:underline" style={{ color: '#0f2557' }}>
              {agentPhone}
            </a>
          </p>
          <button
            onClick={handleReset}
            className="px-6 py-2.5 rounded-lg text-sm font-bold border transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            style={{ borderColor: '#0f2557', color: '#0f2557' }}
          >
            Submit Another Request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-20" style={{ backgroundColor: '#f8f9fc' }} aria-label="Get a free insurance quote">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: '#c9a227' }}>
            Get Started Today
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0f2557' }}>
            Get Your Free Insurance Quote
          </h2>
          <p className="text-base" style={{ color: '#374151' }}>
            Fill out the form below and Johnathan will reach out within 24 hours with personalized options.
          </p>
          <div className="w-16 h-1 mx-auto rounded-full mt-4" style={{ backgroundColor: '#c9a227' }} />
        </div>

        {/* Error Banner */}
        {isError && (
          <div
            className="flex items-start gap-3 p-4 rounded-xl mb-6 border"
            style={{ backgroundColor: 'rgba(239,68,68,0.08)', borderColor: 'rgba(239,68,68,0.3)' }}
            role="alert"
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#ef4444' }} aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold" style={{ color: '#dc2626' }}>Submission Failed</p>
              <p className="text-sm" style={{ color: '#374151' }}>
                There was a problem submitting your request. Please try again or call us at{' '}
                <a href={`tel:${agentPhone.replace(/\D/g, '')}`} className="font-semibold underline" style={{ color: '#0f2557' }}>
                  {agentPhone}
                </a>
              </p>
            </div>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl p-8 shadow-card-hover space-y-5"
          style={{ backgroundColor: '#ffffff' }}
          noValidate
        >
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-1" style={{ color: '#0f2557' }}>
                Full Name <span aria-hidden="true" style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="John Smith"
                className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-colors"
                style={{ borderColor: '#e2e8f0', color: '#1a1f36', backgroundColor: '#ffffff' }}
                aria-required="true"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-1" style={{ color: '#0f2557' }}>
                Phone Number <span aria-hidden="true" style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="(555) 000-0000"
                className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-colors"
                style={{ borderColor: '#e2e8f0', color: '#1a1f36', backgroundColor: '#ffffff' }}
                aria-required="true"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-1" style={{ color: '#0f2557' }}>
                Email Address <span aria-hidden="true" style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-colors"
                style={{ borderColor: '#e2e8f0', color: '#1a1f36', backgroundColor: '#ffffff' }}
                aria-required="true"
              />
            </div>

            {/* Zip Code */}
            <div>
              <label htmlFor="zipCode" className="block text-sm font-semibold mb-1" style={{ color: '#0f2557' }}>
                ZIP Code
              </label>
              <input
                id="zipCode"
                type="text"
                name="zipCode"
                value={form.zipCode}
                onChange={handleChange}
                placeholder="90001"
                maxLength={10}
                className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-colors"
                style={{ borderColor: '#e2e8f0', color: '#1a1f36', backgroundColor: '#ffffff' }}
              />
            </div>
          </div>

          {/* Quote Type */}
          <div>
            <label htmlFor="coverageType" className="block text-sm font-semibold mb-1" style={{ color: '#0f2557' }}>
              Quote Type <span aria-hidden="true" style={{ color: '#ef4444' }}>*</span>
            </label>
            <select
              id="coverageType"
              name="coverageType"
              required
              value={form.coverageType}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-colors"
              style={{ borderColor: '#e2e8f0', color: '#1a1f36', backgroundColor: '#ffffff' }}
              aria-required="true"
            >
              <option value="">Select coverage type...</option>
              <option value="auto">Auto Insurance</option>
              <option value="home">Home Insurance</option>
              <option value="life">Life Insurance</option>
              <option value="health">Health Insurance</option>
              <option value="business">Business Insurance</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-1" style={{ color: '#0f2557' }}>
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              placeholder="Tell us about your insurance needs..."
              className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 resize-none transition-colors"
              style={{ borderColor: '#e2e8f0', color: '#1a1f36', backgroundColor: '#ffffff' }}
            />
          </div>

          {/* TCPA Consent */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="tcpa"
              name="tcpa"
              checked={form.tcpa}
              onChange={handleChange}
              className="mt-1 w-4 h-4 rounded focus:ring-2 focus:ring-yellow-400"
              style={{ accentColor: '#c9a227' }}
              aria-required="true"
            />
            <label htmlFor="tcpa" className="text-xs leading-relaxed" style={{ color: '#374151' }}>
              By submitting this form, I consent to be contacted by {businessName} via phone, email,
              or text message regarding insurance products and services. Message and data rates may
              apply. I understand I can opt out at any time. See our{' '}
              <a href="/privacy-policy" className="underline hover:opacity-80" style={{ color: '#0f2557' }}>
                Privacy Policy
              </a>
              .
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isPending || !form.tcpa || !form.name || !form.phone || !form.email}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-bold text-base transition-all hover:opacity-90 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            style={{ backgroundColor: '#c9a227', color: '#0f2557' }}
            aria-label="Submit quote request"
          >
            {isPending ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" aria-hidden="true" />
                <span>Get My Free Quote</span>
              </>
            )}
          </button>
        </form>

        {/* Compliance note */}
        <p className="text-center text-xs mt-4" style={{ color: '#9ca3af' }}>
          Insurance products not available in all states. Coverage varies by state regulations.
          Licensed in CA, NY, TX. Not affiliated with any carrier.
        </p>
      </div>
    </section>
  );
}
