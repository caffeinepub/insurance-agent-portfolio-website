import { useState, useEffect } from 'react';
import { useToast } from '../../contexts/ToastContext';

export default function AdminJenkinsContactPage() {
  const { showToast } = useToast();
  const [saving, setSaving] = useState(false);
  const [contact, setContact] = useState({
    phone: '(281) 410-8934',
    email: 'cjenkins@twfg.com',
    address: '33018 Tamina Rd, Greater Houston Metro TX',
    hoursMF: 'Monday–Friday: 8AM–6PM CST',
    hoursSat: 'Saturday: 9AM–2PM CST',
    whatsapp: '+12814108934',
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem('jenkinsContactInfo');
      if (stored) setContact(prev => ({ ...prev, ...JSON.parse(stored) }));
    } catch {}
  }, []);

  const handleSave = async () => {
    setSaving(true);
    await new Promise(r => setTimeout(r, 400));
    localStorage.setItem('jenkinsContactInfo', JSON.stringify(contact));
    setSaving(false);
    showToast('✅ Contact info saved successfully!', 'success');
  };

  const inputCls = "w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl font-opensans text-[14px] focus:outline-none transition-colors";

  return (
    <div>
      <h1 className="font-montserrat font-bold text-[28px] mb-6" style={{ color: '#1B3A6B' }}>
        Contact Info Settings
      </h1>

      <div className="bg-white rounded-2xl shadow-sm p-6 max-w-2xl">
        <div className="space-y-4">
          <div>
            <label className="font-opensans text-[13px] font-semibold text-gray-600 block mb-1">Phone Number</label>
            <input
              type="tel"
              value={contact.phone}
              onChange={e => setContact({ ...contact, phone: e.target.value })}
              className={inputCls}
              onFocus={e => (e.target.style.borderColor = '#F4B942')}
              onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
            />
          </div>
          <div>
            <label className="font-opensans text-[13px] font-semibold text-gray-600 block mb-1">Email Address</label>
            <input
              type="email"
              value={contact.email}
              onChange={e => setContact({ ...contact, email: e.target.value })}
              className={inputCls}
              onFocus={e => (e.target.style.borderColor = '#F4B942')}
              onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
            />
          </div>
          <div>
            <label className="font-opensans text-[13px] font-semibold text-gray-600 block mb-1">Physical Address</label>
            <textarea
              value={contact.address}
              onChange={e => setContact({ ...contact, address: e.target.value })}
              rows={2}
              className={`${inputCls} resize-none`}
              onFocus={e => (e.target.style.borderColor = '#F4B942')}
              onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-opensans text-[13px] font-semibold text-gray-600 block mb-1">Mon–Fri Hours</label>
              <input
                type="text"
                value={contact.hoursMF}
                onChange={e => setContact({ ...contact, hoursMF: e.target.value })}
                className={inputCls}
                onFocus={e => (e.target.style.borderColor = '#F4B942')}
                onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
              />
            </div>
            <div>
              <label className="font-opensans text-[13px] font-semibold text-gray-600 block mb-1">Saturday Hours</label>
              <input
                type="text"
                value={contact.hoursSat}
                onChange={e => setContact({ ...contact, hoursSat: e.target.value })}
                className={inputCls}
                onFocus={e => (e.target.style.borderColor = '#F4B942')}
                onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
              />
            </div>
          </div>
          <div>
            <label className="font-opensans text-[13px] font-semibold text-gray-600 block mb-1">WhatsApp Number</label>
            <input
              type="text"
              value={contact.whatsapp}
              onChange={e => setContact({ ...contact, whatsapp: e.target.value })}
              className={inputCls}
              onFocus={e => (e.target.style.borderColor = '#F4B942')}
              onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
            />
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100">
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-8 py-3 rounded-xl text-[15px] font-semibold transition-all hover:opacity-80 disabled:opacity-60 flex items-center gap-2"
            style={{ background: '#F4B942', color: '#1B3A6B' }}
          >
            {saving ? (
              <>
                <div className="w-4 h-4 border-2 border-jenkins-navy/30 border-t-jenkins-navy rounded-full animate-spin" />
                Saving...
              </>
            ) : (
              'Save Changes'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
