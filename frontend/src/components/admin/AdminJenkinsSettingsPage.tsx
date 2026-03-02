import { useState, useEffect } from 'react';
import { useToast } from '../../contexts/ToastContext';

interface NotificationSettings {
  newQuoteEmail: boolean;
  whatsappAlerts: boolean;
  weeklySummary: boolean;
  monthlyReport: boolean;
}

interface ProfileSettings {
  agentName: string;
  licenseNumber: string;
  agencyName: string;
}

interface WebsiteSettings {
  customDomain: string;
  googleMapsUrl: string;
  facebookUrl: string;
  linkedinUrl: string;
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className="relative w-12 h-6 rounded-full transition-all duration-200 focus:outline-none flex-shrink-0"
      style={{ background: checked ? '#F4B942' : '#d1d5db' }}
    >
      <span
        className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200"
        style={{ transform: checked ? 'translateX(24px)' : 'translateX(0)' }}
      />
    </button>
  );
}

export default function AdminJenkinsSettingsPage() {
  const { showToast } = useToast();
  const [savingSection, setSavingSection] = useState<string | null>(null);

  const [profile, setProfile] = useState<ProfileSettings>({
    agentName: 'C. Jenkins',
    licenseNumber: 'TX-INS-CJ-2024',
    agencyName: 'Jenkins Insurance Agency',
  });

  const [notifications, setNotifications] = useState<NotificationSettings>({
    newQuoteEmail: true,
    whatsappAlerts: true,
    weeklySummary: true,
    monthlyReport: true,
  });

  const [website, setWebsite] = useState<WebsiteSettings>({
    customDomain: '',
    googleMapsUrl: '',
    facebookUrl: '',
    linkedinUrl: '',
  });

  const [passwords, setPasswords] = useState({
    current: '',
    newPass: '',
    confirm: '',
  });
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    try {
      const p = localStorage.getItem('jenkinsProfile');
      if (p) setProfile(prev => ({ ...prev, ...JSON.parse(p) }));
      const n = localStorage.getItem('jenkinsNotifications');
      if (n) setNotifications(prev => ({ ...prev, ...JSON.parse(n) }));
      const w = localStorage.getItem('jenkinsWebsite');
      if (w) setWebsite(prev => ({ ...prev, ...JSON.parse(w) }));
    } catch {}
  }, []);

  const saveSection = async (key: string, data: unknown) => {
    setSavingSection(key);
    await new Promise(r => setTimeout(r, 400));
    localStorage.setItem(key, JSON.stringify(data));
    setSavingSection(null);
    showToast('✅ Saved successfully!', 'success');
  };

  const handlePasswordUpdate = async () => {
    setPasswordError('');
    if (!passwords.current) { setPasswordError('Please enter your current password.'); return; }
    if (passwords.current !== 'admin123') { setPasswordError('Current password is incorrect.'); return; }
    if (passwords.newPass.length < 6) { setPasswordError('New password must be at least 6 characters.'); return; }
    if (passwords.newPass !== passwords.confirm) { setPasswordError('New passwords do not match.'); return; }
    setSavingSection('password');
    await new Promise(r => setTimeout(r, 400));
    setSavingSection(null);
    setPasswords({ current: '', newPass: '', confirm: '' });
    showToast('✅ Password updated successfully!', 'success');
  };

  const inputCls = "w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl font-opensans text-[14px] focus:outline-none transition-colors";
  const focusBlur = {
    onFocus: (e: React.FocusEvent<HTMLInputElement>) => (e.target.style.borderColor = '#F4B942'),
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => (e.target.style.borderColor = '#e5e7eb'),
  };

  const SaveBtn = ({ sectionKey, onClick }: { sectionKey: string; onClick: () => void }) => (
    <button
      onClick={onClick}
      disabled={savingSection === sectionKey}
      className="px-6 py-2.5 rounded-xl text-[14px] font-semibold transition-all hover:opacity-80 disabled:opacity-60 flex items-center gap-2"
      style={{ background: '#F4B942', color: '#1B3A6B' }}
    >
      {savingSection === sectionKey ? (
        <>
          <div className="w-4 h-4 border-2 border-jenkins-navy/30 border-t-jenkins-navy rounded-full animate-spin" />
          Saving...
        </>
      ) : (
        'Save Changes'
      )}
    </button>
  );

  return (
    <div>
      <h1 className="font-montserrat font-bold text-[28px] mb-6" style={{ color: '#1B3A6B' }}>
        Account Settings
      </h1>

      <div className="space-y-6 max-w-2xl">
        {/* Profile */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="font-montserrat font-bold text-[18px] mb-5" style={{ color: '#1B3A6B' }}>
            👤 Profile
          </h2>
          <div className="space-y-4">
            <div>
              <label className="font-opensans text-[13px] font-semibold text-gray-600 block mb-1">Agent Full Name</label>
              <input
                type="text"
                value={profile.agentName}
                onChange={e => setProfile({ ...profile, agentName: e.target.value })}
                className={inputCls}
                {...focusBlur}
              />
            </div>
            <div>
              <label className="font-opensans text-[13px] font-semibold text-gray-600 block mb-1">License Number (TX Dept of Insurance)</label>
              <input
                type="text"
                value={profile.licenseNumber}
                onChange={e => setProfile({ ...profile, licenseNumber: e.target.value })}
                className={inputCls}
                {...focusBlur}
              />
            </div>
            <div>
              <label className="font-opensans text-[13px] font-semibold text-gray-600 block mb-1">Agency Name</label>
              <input
                type="text"
                value={profile.agencyName}
                onChange={e => setProfile({ ...profile, agencyName: e.target.value })}
                className={inputCls}
                {...focusBlur}
              />
            </div>
            <div>
              <label className="font-opensans text-[13px] font-semibold text-gray-600 block mb-2">Profile Photo</label>
              <label className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl cursor-pointer font-opensans font-semibold text-[14px] text-white transition-all hover:opacity-80" style={{ background: '#1B3A6B' }}>
                📷 Upload Photo
                <input type="file" accept="image/*" className="hidden" />
              </label>
            </div>
          </div>
          <div className="mt-5 pt-4 border-t border-gray-100">
            <SaveBtn sectionKey="jenkinsProfile" onClick={() => saveSection('jenkinsProfile', profile)} />
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="font-montserrat font-bold text-[18px] mb-5" style={{ color: '#1B3A6B' }}>
            🔔 Notifications
          </h2>
          <div className="space-y-4">
            {[
              { key: 'newQuoteEmail' as keyof NotificationSettings, label: 'Email me when new quote arrives' },
              { key: 'whatsappAlerts' as keyof NotificationSettings, label: 'WhatsApp alert for new leads' },
              { key: 'weeklySummary' as keyof NotificationSettings, label: 'Weekly summary email' },
              { key: 'monthlyReport' as keyof NotificationSettings, label: 'Monthly analytics report' },
            ].map(item => (
              <div key={item.key} className="flex items-center justify-between py-2">
                <span className="font-opensans text-[15px] text-gray-700">{item.label}</span>
                <Toggle
                  checked={notifications[item.key]}
                  onChange={v => setNotifications({ ...notifications, [item.key]: v })}
                />
              </div>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-gray-100">
            <SaveBtn sectionKey="jenkinsNotifications" onClick={() => saveSection('jenkinsNotifications', notifications)} />
          </div>
        </div>

        {/* Website */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="font-montserrat font-bold text-[18px] mb-5" style={{ color: '#1B3A6B' }}>
            🌐 Website
          </h2>
          <div className="space-y-4">
            <div>
              <label className="font-opensans text-[13px] font-semibold text-gray-600 block mb-1">Custom Domain</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={website.customDomain}
                  onChange={e => setWebsite({ ...website, customDomain: e.target.value })}
                  placeholder="yourname.com"
                  className={`${inputCls} flex-1`}
                  {...focusBlur}
                />
                <button
                  className="px-4 py-2.5 rounded-xl font-opensans font-semibold text-[14px] text-white transition-all hover:opacity-80 whitespace-nowrap"
                  style={{ background: '#1B3A6B' }}
                >
                  Connect Domain
                </button>
              </div>
            </div>
            <div>
              <label className="font-opensans text-[13px] font-semibold text-gray-600 block mb-1">Google Maps Embed URL</label>
              <input
                type="url"
                value={website.googleMapsUrl}
                onChange={e => setWebsite({ ...website, googleMapsUrl: e.target.value })}
                placeholder="https://maps.google.com/..."
                className={inputCls}
                {...focusBlur}
              />
            </div>
            <div>
              <label className="font-opensans text-[13px] font-semibold text-gray-600 block mb-1">Facebook Page URL</label>
              <input
                type="url"
                value={website.facebookUrl}
                onChange={e => setWebsite({ ...website, facebookUrl: e.target.value })}
                placeholder="https://facebook.com/yourpage"
                className={inputCls}
                {...focusBlur}
              />
            </div>
            <div>
              <label className="font-opensans text-[13px] font-semibold text-gray-600 block mb-1">LinkedIn Profile URL</label>
              <input
                type="url"
                value={website.linkedinUrl}
                onChange={e => setWebsite({ ...website, linkedinUrl: e.target.value })}
                placeholder="https://linkedin.com/in/yourprofile"
                className={inputCls}
                {...focusBlur}
              />
            </div>
          </div>
          <div className="mt-5 pt-4 border-t border-gray-100">
            <SaveBtn sectionKey="jenkinsWebsite" onClick={() => saveSection('jenkinsWebsite', website)} />
          </div>
        </div>

        {/* Change Password */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="font-montserrat font-bold text-[18px] mb-5" style={{ color: '#1B3A6B' }}>
            🔒 Change Password
          </h2>
          <div className="space-y-4">
            <div>
              <label className="font-opensans text-[13px] font-semibold text-gray-600 block mb-1">Current Password</label>
              <input
                type="password"
                value={passwords.current}
                onChange={e => setPasswords({ ...passwords, current: e.target.value })}
                placeholder="Enter current password"
                className={inputCls}
                {...focusBlur}
              />
            </div>
            <div>
              <label className="font-opensans text-[13px] font-semibold text-gray-600 block mb-1">New Password</label>
              <input
                type="password"
                value={passwords.newPass}
                onChange={e => setPasswords({ ...passwords, newPass: e.target.value })}
                placeholder="Enter new password"
                className={inputCls}
                {...focusBlur}
              />
            </div>
            <div>
              <label className="font-opensans text-[13px] font-semibold text-gray-600 block mb-1">Confirm New Password</label>
              <input
                type="password"
                value={passwords.confirm}
                onChange={e => setPasswords({ ...passwords, confirm: e.target.value })}
                placeholder="Confirm new password"
                className={inputCls}
                {...focusBlur}
              />
            </div>
            {passwordError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-[14px] font-opensans">
                {passwordError}
              </div>
            )}
          </div>
          <div className="mt-5 pt-4 border-t border-gray-100">
            <button
              onClick={handlePasswordUpdate}
              disabled={savingSection === 'password'}
              className="px-6 py-2.5 rounded-xl text-[14px] font-semibold text-white transition-all hover:opacity-80 disabled:opacity-60 flex items-center gap-2"
              style={{ background: '#1B3A6B' }}
            >
              {savingSection === 'password' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Updating...
                </>
              ) : (
                'Update Password'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
