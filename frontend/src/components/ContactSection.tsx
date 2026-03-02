import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Users } from 'lucide-react';
import { useSubmitQuote } from '../hooks/useQueries';
import { CoverageType, BestTimeToCall } from '../backend';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zipCode: '',
    coverageType: 'auto' as keyof typeof CoverageType,
    bestTimeToCall: 'anyTime' as keyof typeof BestTimeToCall,
  });
  const [submitted, setSubmitted] = useState(false);
  const { mutate: submitQuote, isPending } = useSubmitQuote();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitQuote(
      {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        zipCode: formData.zipCode,
        coverageType: CoverageType[formData.coverageType],
        bestTimeToCall: BestTimeToCall[formData.bestTimeToCall],
      },
      {
        onSuccess: () => setSubmitted(true),
      }
    );
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Proof Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10 md:mb-12 p-4 rounded-2xl bg-forest-dark/5 border border-forest/10">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-forest flex-shrink-0" />
            <a href="tel:+18329360000" className="text-forest-dark font-bold text-sm md:text-base hover:text-forest transition-colors">
              (832) 936-XXXX — Houston Developer
            </a>
          </div>
          <div className="hidden sm:block w-px h-6 bg-gray-300" />
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-amber-500 flex-shrink-0" />
            <span className="text-forest-dark font-bold text-sm md:text-base">
              100+ Texas agents live
            </span>
          </div>
        </div>

        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-semibold uppercase tracking-wide mb-3">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest-dark mb-3">
            Get Your Free Quote Today
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Fill out the form below and Johnathan will personally reach out within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl p-5 md:p-6" style={{ background: 'linear-gradient(135deg, #1a2e1a, #0d1f0d)' }}>
              <h3 className="text-white font-bold text-lg mb-5">Contact Information</h3>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: 'Phone', value: '(832) 936-XXXX', href: 'tel:+18329360000' },
                  { icon: Mail, label: 'Email', value: 'john@reevesinsurance.com', href: 'mailto:john@reevesinsurance.com' },
                  { icon: MapPin, label: 'Location', value: 'Conroe, TX 77301', href: null },
                  { icon: Clock, label: 'Hours', value: 'Mon–Fri 8am–6pm', href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-400/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">{label}</p>
                      {href ? (
                        <a href={href} className="text-white text-sm font-medium hover:text-amber-400 transition-colors">{value}</a>
                      ) : (
                        <p className="text-white text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social proof inside contact card */}
              <div className="mt-5 pt-5 border-t border-white/10">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-400 font-bold text-sm">100+ Texas agents live</span>
                </div>
                <p className="text-gray-400 text-xs">Houston developer — local TX support</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden">
              <img
                src="/assets/generated/conroe-tx-map.dim_600x400.png"
                alt="Conroe TX Map"
                className="w-full h-40 md:h-48 object-cover"
              />
            </div>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-green-50 border border-green-200">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-forest-dark mb-2">Quote Request Received!</h3>
                <p className="text-gray-600 text-sm">Johnathan will contact you within 24 hours with your personalized quote.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                      placeholder="(832) 555-0000"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      placeholder="john@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">ZIP Code *</label>
                    <input
                      type="text"
                      required
                      value={formData.zipCode}
                      onChange={e => setFormData(p => ({ ...p, zipCode: e.target.value }))}
                      placeholder="77301"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Coverage Type *</label>
                    <select
                      value={formData.coverageType}
                      onChange={e => setFormData(p => ({ ...p, coverageType: e.target.value as keyof typeof CoverageType }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest text-sm bg-white"
                    >
                      <option value="auto">Auto Insurance</option>
                      <option value="home">Home Insurance</option>
                      <option value="life">Life Insurance</option>
                      <option value="business">Business Insurance</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Best Time to Call *</label>
                    <select
                      value={formData.bestTimeToCall}
                      onChange={e => setFormData(p => ({ ...p, bestTimeToCall: e.target.value as keyof typeof BestTimeToCall }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest text-sm bg-white"
                    >
                      <option value="morning">Morning (8am–12pm)</option>
                      <option value="afternoon">Afternoon (12pm–5pm)</option>
                      <option value="evening">Evening (5pm–8pm)</option>
                      <option value="anyTime">Any Time</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm md:text-base text-forest-dark bg-amber-400 hover:bg-amber-300 transition-all disabled:opacity-60 shadow-amber-glow min-h-[48px]"
                >
                  {isPending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-forest-dark/30 border-t-forest-dark rounded-full animate-spin" />
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
