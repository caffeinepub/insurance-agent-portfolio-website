import React, { useState } from 'react';
import { useSubmitQuote } from '../../hooks/useQueries';
import { CoverageType, BestTimeToCall } from '../../backend';
import { MapPin, Phone, Mail, MessageCircle, Clock, Shield, Star } from 'lucide-react';

const coverageOptions = [
  { value: CoverageType.home, label: 'Homeowners' },
  { value: CoverageType.auto, label: 'Auto' },
  { value: CoverageType.business, label: 'Business' },
  { value: CoverageType.life, label: 'Life' },
];

const timeOptions = [
  { value: BestTimeToCall.morning, label: 'Morning (8AM–12PM)' },
  { value: BestTimeToCall.afternoon, label: 'Afternoon (12PM–5PM)' },
  { value: BestTimeToCall.evening, label: 'Evening (5PM–8PM)' },
  { value: BestTimeToCall.anyTime, label: 'Any Time' },
];

export default function JenkinsQuoteContact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    zipCode: '',
    coverageType: CoverageType.home as CoverageType,
    bestTimeToCall: BestTimeToCall.anyTime as BestTimeToCall,
    currentInsurer: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const { mutate: submitQuote, isPending } = useSubmitQuote();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullName = `${form.firstName} ${form.lastName}`.trim();
    submitQuote(
      {
        name: fullName,
        phone: form.phone,
        email: form.email,
        zipCode: form.zipCode,
        coverageType: form.coverageType,
        bestTimeToCall: form.bestTimeToCall,
      },
      {
        onSuccess: () => setSubmitted(true),
      }
    );
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #D0D0D0',
    fontFamily: "'Open Sans', sans-serif",
    fontSize: '15px',
    color: '#2C2C2C',
    backgroundColor: '#FFFFFF',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: '13px',
    fontWeight: 600,
    color: 'rgba(255,255,255,0.85)',
    display: 'block',
    marginBottom: '6px',
  };

  return (
    <section
      id="quote"
      style={{
        background: 'linear-gradient(135deg, #1B3A6B 0%, #2E5FA3 100%)',
        padding: '90px 0',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <div>
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(26px, 3.5vw, 36px)',
                color: '#FFFFFF',
                marginBottom: '12px',
              }}
            >
              Get Your Free Texas Quote
            </h2>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: '16px',
                color: 'rgba(255,255,255,0.80)',
                marginBottom: '32px',
                lineHeight: 1.6,
              }}
            >
              Takes 2 minutes. No spam ever. Response within 24 hours guaranteed.
            </p>

            {submitted ? (
              <div
                style={{
                  backgroundColor: 'rgba(39,174,96,0.15)',
                  border: '2px solid #27AE60',
                  borderRadius: '16px',
                  padding: '40px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 800,
                    fontSize: '24px',
                    color: '#FFFFFF',
                    marginBottom: '12px',
                  }}
                >
                  Quote Request Sent!
                </h3>
                <p style={{ fontFamily: "'Open Sans', sans-serif", color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: 1.6 }}>
                  C. Jenkins will contact you within 24 hours with your personalized quote comparison from 20+ carriers.
                </p>
                <p style={{ fontFamily: "'Open Sans', sans-serif", color: '#F4B942', fontSize: '15px', marginTop: '16px', fontWeight: 600 }}>
                  Questions? Call (281) 410-8934 anytime.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Name Row */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label style={labelStyle}>First Name *</label>
                    <input
                      type="text"
                      required
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      placeholder="First Name"
                      style={inputStyle}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = '#F4B942'; }}
                      onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = '#D0D0D0'; }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Last Name *</label>
                    <input
                      type="text"
                      required
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      placeholder="Last Name"
                      style={inputStyle}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = '#F4B942'; }}
                      onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = '#D0D0D0'; }}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <label style={labelStyle}>Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(281) 555-0000"
                    style={inputStyle}
                    onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = '#F4B942'; }}
                    onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = '#D0D0D0'; }}
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label style={labelStyle}>Email Address *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = '#F4B942'; }}
                    onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = '#D0D0D0'; }}
                  />
                </div>

                {/* ZIP */}
                <div className="mb-4">
                  <label style={labelStyle}>ZIP Code *</label>
                  <input
                    type="text"
                    required
                    value={form.zipCode}
                    onChange={(e) => setForm({ ...form, zipCode: e.target.value })}
                    placeholder="77354"
                    style={inputStyle}
                    onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = '#F4B942'; }}
                    onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = '#D0D0D0'; }}
                  />
                </div>

                {/* Coverage Type */}
                <div className="mb-4">
                  <label style={labelStyle}>Coverage Needed *</label>
                  <select
                    required
                    value={form.coverageType}
                    onChange={(e) => setForm({ ...form, coverageType: e.target.value as CoverageType })}
                    style={inputStyle}
                    onFocus={(e) => { (e.target as HTMLSelectElement).style.borderColor = '#F4B942'; }}
                    onBlur={(e) => { (e.target as HTMLSelectElement).style.borderColor = '#D0D0D0'; }}
                  >
                    {coverageOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                {/* Best Time */}
                <div className="mb-4">
                  <label style={labelStyle}>Best Time to Call *</label>
                  <select
                    required
                    value={form.bestTimeToCall}
                    onChange={(e) => setForm({ ...form, bestTimeToCall: e.target.value as BestTimeToCall })}
                    style={inputStyle}
                    onFocus={(e) => { (e.target as HTMLSelectElement).style.borderColor = '#F4B942'; }}
                    onBlur={(e) => { (e.target as HTMLSelectElement).style.borderColor = '#D0D0D0'; }}
                  >
                    {timeOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                {/* Current Insurer */}
                <div className="mb-4">
                  <label style={labelStyle}>Current Insurance Company</label>
                  <input
                    type="text"
                    value={form.currentInsurer}
                    onChange={(e) => setForm({ ...form, currentInsurer: e.target.value })}
                    placeholder="e.g. State Farm, Allstate"
                    style={inputStyle}
                    onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = '#F4B942'; }}
                    onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = '#D0D0D0'; }}
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label style={labelStyle}>Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your current coverage and what you want to save on..."
                    rows={3}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = '#F4B942'; }}
                    onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = '#D0D0D0'; }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isPending}
                  style={{
                    width: '100%',
                    height: '56px',
                    backgroundColor: isPending ? '#D9A030' : '#F4B942',
                    color: '#1B3A6B',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: '18px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: isPending ? 'not-allowed' : 'pointer',
                    transition: 'background-color 0.2s ease, transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isPending) {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#D9A030';
                      (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.01)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isPending) {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#F4B942';
                      (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
                    }
                  }}
                >
                  {isPending ? '⏳ Sending...' : 'Send My Free Quote Request →'}
                </button>

                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.70)',
                    textAlign: 'center',
                    marginTop: '12px',
                  }}
                >
                  🔒 100% Private — Your information is never sold or shared with third parties. Ever.
                </p>
              </form>
            )}
          </div>

          {/* Right: Contact Info */}
          <div>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 40px rgba(0,0,0,0.2)',
              }}
            >
              <h3
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: '22px',
                  color: '#1B3A6B',
                  marginBottom: '28px',
                }}
              >
                Or Reach Us Directly
              </h3>

              {/* Contact Items */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(27,58,107,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={18} style={{ color: '#1B3A6B' }} />
                  </div>
                  <div>
                    <a
                      href="tel:+12814108934"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '18px', color: '#1B3A6B', textDecoration: 'none' }}
                    >
                      (281) 410-8934
                    </a>
                    <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '13px', color: '#666', marginTop: '2px' }}>Call or text anytime</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(27,58,107,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={18} style={{ color: '#1B3A6B' }} />
                  </div>
                  <div>
                    <a
                      href="mailto:cjenkins@twfg.com"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '16px', color: '#1B3A6B', textDecoration: 'none' }}
                    >
                      cjenkins@twfg.com
                    </a>
                    <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '13px', color: '#666', marginTop: '2px' }}>Reply within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(27,58,107,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={18} style={{ color: '#1B3A6B' }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '15px', color: '#1B3A6B' }}>
                      33018 Tamina Rd
                    </p>
                    <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '14px', color: '#666', marginTop: '2px' }}>
                      The Woodlands, TX 77354
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(37,211,102,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MessageCircle size={18} style={{ color: '#25D366' }} />
                  </div>
                  <div>
                    <a
                      href="https://wa.me/12814108934?text=Hi%2C%20I%27d%20like%20a%20free%20insurance%20quote."
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '15px', color: '#25D366', textDecoration: 'none' }}
                    >
                      WhatsApp Available
                    </a>
                    <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '13px', color: '#666', marginTop: '2px' }}>Message us anytime</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(27,58,107,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={18} style={{ color: '#1B3A6B' }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '14px', color: '#1B3A6B' }}>Office Hours</p>
                    <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '13px', color: '#666', marginTop: '2px' }}>
                      Monday–Friday: 8AM – 6PM CST<br />
                      Saturday: 9AM – 2PM CST
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div
                style={{
                  backgroundColor: '#F8F9FA',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center',
                  marginTop: '24px',
                  border: '1px solid #E0E0E0',
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>📍</div>
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '14px', color: '#555', marginBottom: '8px' }}>
                  The Woodlands, TX 77354
                </p>
                <a
                  href="https://maps.google.com/?q=33018+Tamina+Rd+The+Woodlands+TX+77354"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '13px', color: '#F4B942', textDecoration: 'none' }}
                >
                  Open in Google Maps →
                </a>
              </div>

              {/* Badges */}
              <div className="flex gap-3 mt-6 flex-wrap">
                <span
                  style={{
                    backgroundColor: 'rgba(27,58,107,0.08)',
                    border: '1px solid rgba(27,58,107,0.2)',
                    borderRadius: '20px',
                    padding: '6px 14px',
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#1B3A6B',
                  }}
                >
                  🛡️ Licensed TX Agent
                </span>
                <span
                  style={{
                    backgroundColor: 'rgba(244,185,66,0.1)',
                    border: '1px solid rgba(244,185,66,0.4)',
                    borderRadius: '20px',
                    padding: '6px 14px',
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#1B3A6B',
                  }}
                >
                  ⭐ 5-Star Rated
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
