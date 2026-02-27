import React, { useState } from 'react';
import { Send, CheckCircle, MapPin, Phone, Mail, Loader2 } from 'lucide-react';
import { useBusinessInfo } from '../hooks/useBusinessInfo';
import { useSubmitQuote } from '../hooks/useQueries';
import { CoverageType, BestTimeToCall } from '../backend';

export default function ContactSection() {
  const { phone, email, address, city, state } = useBusinessInfo();
  const { mutate: submitQuote, isPending, isSuccess } = useSubmitQuote();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    zipCode: '',
    coverageType: 'auto' as CoverageType,
    bestTimeToCall: 'anyTime' as BestTimeToCall,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitQuote(form);
  };

  if (isSuccess) {
    return (
      <section id="contact" className="bg-cream py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl border border-forest/10 p-12 shadow-forest-lg">
            <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-forest" />
            </div>
            <h3 className="font-display text-3xl font-bold text-charcoal mb-4">
              We'll Be in Touch Soon!
            </h3>
            <p className="font-body text-charcoal-muted text-lg leading-relaxed">
              Thank you for reaching out. Johnathan will personally review your request and
              contact you within one business day.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-amber" />
              <span className="font-body text-amber text-sm font-semibold tracking-widest uppercase">
                Get In Touch
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
              Start Your Free
              <br />
              <span className="italic text-forest">Consultation Today</span>
            </h2>
            <p className="font-body text-charcoal-muted text-lg leading-relaxed mb-10">
              No pressure, no obligation. Just an honest conversation about your coverage needs
              and how we can help protect what matters most.
            </p>

            {/* Contact details */}
            <div className="space-y-5 mb-10">
              {phone && (
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-forest/8 rounded-sm flex items-center justify-center border border-forest/15 flex-shrink-0">
                    <Phone className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <div className="font-body text-charcoal-muted text-xs uppercase tracking-wide mb-0.5">Phone</div>
                    <a href={`tel:${phone}`} className="font-body font-semibold text-charcoal hover:text-forest transition-colors">
                      {phone}
                    </a>
                  </div>
                </div>
              )}
              {email && (
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-forest/8 rounded-sm flex items-center justify-center border border-forest/15 flex-shrink-0">
                    <Mail className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <div className="font-body text-charcoal-muted text-xs uppercase tracking-wide mb-0.5">Email</div>
                    <a href={`mailto:${email}`} className="font-body font-semibold text-charcoal hover:text-forest transition-colors">
                      {email}
                    </a>
                  </div>
                </div>
              )}
              {(address || city) && (
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-forest/8 rounded-sm flex items-center justify-center border border-forest/15 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <div className="font-body text-charcoal-muted text-xs uppercase tracking-wide mb-0.5">Location</div>
                    <span className="font-body font-semibold text-charcoal">
                      {address || `${city}, ${state}`}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-forest/10 shadow-forest-sm">
              <img
                src="/assets/generated/conroe-tx-map.dim_600x400.png"
                alt="Service area map"
                className="w-full h-48 object-cover"
              />
              <div className="bg-forest px-4 py-2.5">
                <p className="font-body text-white/80 text-xs text-center tracking-wide">
                  Serving Conroe, Katy, The Woodlands &amp; surrounding TX areas
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl border border-forest/10 p-8 shadow-forest-lg">
            <h3 className="font-display text-2xl font-bold text-charcoal mb-2">
              Request Your Free Quote
            </h3>
            <p className="font-body text-charcoal-muted text-sm mb-8">
              Fill out the form and Johnathan will personally reach out within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block font-body text-charcoal font-semibold text-sm mb-1.5">
                  Full Name <span className="text-amber">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Smith"
                  className="w-full border border-forest/15 rounded-sm px-4 py-3 font-body text-charcoal text-sm placeholder:text-charcoal-muted/50 focus:outline-none focus:border-amber focus:ring-2 focus:ring-amber/20 transition-all bg-cream"
                />
              </div>

              {/* Phone + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-body text-charcoal font-semibold text-sm mb-1.5">
                    Phone <span className="text-amber">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="(555) 000-0000"
                    className="w-full border border-forest/15 rounded-sm px-4 py-3 font-body text-charcoal text-sm placeholder:text-charcoal-muted/50 focus:outline-none focus:border-amber focus:ring-2 focus:ring-amber/20 transition-all bg-cream"
                  />
                </div>
                <div>
                  <label className="block font-body text-charcoal font-semibold text-sm mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@email.com"
                    className="w-full border border-forest/15 rounded-sm px-4 py-3 font-body text-charcoal text-sm placeholder:text-charcoal-muted/50 focus:outline-none focus:border-amber focus:ring-2 focus:ring-amber/20 transition-all bg-cream"
                  />
                </div>
              </div>

              {/* Zip + Coverage */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-body text-charcoal font-semibold text-sm mb-1.5">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={form.zipCode}
                    onChange={handleChange}
                    placeholder="77301"
                    className="w-full border border-forest/15 rounded-sm px-4 py-3 font-body text-charcoal text-sm placeholder:text-charcoal-muted/50 focus:outline-none focus:border-amber focus:ring-2 focus:ring-amber/20 transition-all bg-cream"
                  />
                </div>
                <div>
                  <label className="block font-body text-charcoal font-semibold text-sm mb-1.5">
                    Coverage Type <span className="text-amber">*</span>
                  </label>
                  <select
                    name="coverageType"
                    value={form.coverageType}
                    onChange={handleChange}
                    className="w-full border border-forest/15 rounded-sm px-4 py-3 font-body text-charcoal text-sm focus:outline-none focus:border-amber focus:ring-2 focus:ring-amber/20 transition-all bg-cream"
                  >
                    <option value="auto">Auto</option>
                    <option value="home">Home</option>
                    <option value="life">Life</option>
                    <option value="business">Business</option>
                  </select>
                </div>
              </div>

              {/* Best time */}
              <div>
                <label className="block font-body text-charcoal font-semibold text-sm mb-1.5">
                  Best Time to Call
                </label>
                <select
                  name="bestTimeToCall"
                  value={form.bestTimeToCall}
                  onChange={handleChange}
                  className="w-full border border-forest/15 rounded-sm px-4 py-3 font-body text-charcoal text-sm focus:outline-none focus:border-amber focus:ring-2 focus:ring-amber/20 transition-all bg-cream"
                >
                  <option value="morning">Morning (8am–12pm)</option>
                  <option value="afternoon">Afternoon (12pm–5pm)</option>
                  <option value="evening">Evening (5pm–8pm)</option>
                  <option value="anyTime">Any Time</option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-amber hover:bg-amber-light disabled:opacity-60 text-forest-dark font-body font-bold text-base py-4 rounded-sm shadow-amber-glow hover:shadow-amber-glow-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Get My Free Quote
                  </>
                )}
              </button>

              <p className="font-body text-charcoal-muted text-xs text-center">
                No spam. No pressure. Just honest insurance guidance.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
