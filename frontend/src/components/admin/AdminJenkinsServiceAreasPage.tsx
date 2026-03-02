import { useState, useEffect } from 'react';
import { Plus, X } from 'lucide-react';
import { useToast } from '../../contexts/ToastContext';

const defaultCities = [
  'The Woodlands', 'Spring', 'Humble', 'Magnolia', 'Tomball', 'Conroe',
];

export default function AdminJenkinsServiceAreasPage() {
  const { showToast } = useToast();
  const [saving, setSaving] = useState(false);
  const [cities, setCities] = useState<string[]>(defaultCities);
  const [enabled, setEnabled] = useState<Record<string, boolean>>({});
  const [newCity, setNewCity] = useState('');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('jenkinsServiceAreas');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.cities) setCities(parsed.cities);
        if (parsed.enabled) setEnabled(parsed.enabled);
        return;
      }
    } catch {}
    // Default all enabled
    const defaultEnabled: Record<string, boolean> = {};
    defaultCities.forEach(c => { defaultEnabled[c] = true; });
    setEnabled(defaultEnabled);
  }, []);

  const toggleCity = (city: string) => {
    setEnabled(prev => ({ ...prev, [city]: !prev[city] }));
  };

  const addCity = () => {
    const trimmed = newCity.trim();
    if (!trimmed || cities.includes(trimmed)) return;
    const updated = [...cities, trimmed];
    setCities(updated);
    setEnabled(prev => ({ ...prev, [trimmed]: true }));
    setNewCity('');
  };

  const removeCity = (city: string) => {
    if (defaultCities.includes(city)) return; // can't remove defaults
    setCities(prev => prev.filter(c => c !== city));
    setEnabled(prev => {
      const next = { ...prev };
      delete next[city];
      return next;
    });
  };

  const handleSave = async () => {
    setSaving(true);
    await new Promise(r => setTimeout(r, 400));
    localStorage.setItem('jenkinsServiceAreas', JSON.stringify({ cities, enabled }));
    setSaving(false);
    showToast('✅ Service areas saved successfully!', 'success');
  };

  return (
    <div>
      <h1 className="font-montserrat font-bold text-[28px] mb-6" style={{ color: '#1B3A6B' }}>
        Service Areas
      </h1>

      <div className="bg-white rounded-2xl shadow-sm p-6 max-w-2xl">
        <p className="font-opensans text-[14px] text-gray-500 mb-6">
          Manage the cities you serve. Toggle cities on/off or add new service areas.
        </p>

        {/* City List */}
        <div className="space-y-3 mb-6">
          {cities.map(city => (
            <div
              key={city}
              className="flex items-center justify-between p-4 rounded-xl border-2 transition-all"
              style={{ borderColor: enabled[city] ? '#F4B942' : '#e5e7eb', background: enabled[city] ? 'rgba(244,185,66,0.05)' : '#fff' }}
            >
              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleCity(city)}
                  className="relative w-11 h-6 rounded-full transition-all duration-200 focus:outline-none"
                  style={{ background: enabled[city] ? '#F4B942' : '#d1d5db' }}
                >
                  <span
                    className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200"
                    style={{ transform: enabled[city] ? 'translateX(20px)' : 'translateX(0)' }}
                  />
                </button>
                <span className="font-opensans font-semibold text-[15px]" style={{ color: '#2C2C2C' }}>
                  {city}
                </span>
                {defaultCities.includes(city) && (
                  <span className="text-[11px] font-opensans text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                    Default
                  </span>
                )}
              </div>
              {!defaultCities.includes(city) && (
                <button
                  onClick={() => removeCity(city)}
                  className="text-gray-400 hover:text-red-500 transition-colors p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Add City */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={newCity}
            onChange={e => setNewCity(e.target.value)}
            placeholder="Add a new city..."
            className="flex-1 px-4 py-2.5 border-2 border-gray-200 rounded-xl font-opensans text-[14px] focus:outline-none transition-colors"
            onFocus={e => (e.target.style.borderColor = '#F4B942')}
            onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
            onKeyDown={e => e.key === 'Enter' && addCity()}
          />
          <button
            onClick={addCity}
            className="px-4 py-2.5 rounded-xl font-semibold text-[14px] flex items-center gap-2 transition-all hover:opacity-80"
            style={{ background: '#1B3A6B', color: 'white' }}
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
        </div>

        <div className="pt-4 border-t border-gray-100">
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
