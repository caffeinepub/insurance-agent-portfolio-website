import { MapPin } from 'lucide-react';
import { useBusinessInfo } from '../hooks/useBusinessInfo';

export default function MapSection() {
  const { businessName, address, city, state } = useBusinessInfo();

  return (
    <section style={{ backgroundColor: '#FFFFFF' }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: '#f59e0b' }}>
            Find Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e293b' }}>
            Visit Our Office
          </h2>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5" style={{ color: '#f59e0b' }} />
            <p className="text-base" style={{ color: '#334155' }}>
              {address}, {city}, {state}
            </p>
          </div>
        </div>

        {/* Map placeholder */}
        <div
          className="w-full h-80 rounded-2xl flex items-center justify-center border"
          style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}
        >
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-3" style={{ color: '#f59e0b' }} />
            <p className="text-base font-semibold" style={{ color: '#1e293b' }}>
              {businessName}
            </p>
            <p className="text-sm" style={{ color: '#334155' }}>
              {address}, {city}, {state}
            </p>
            <p className="text-xs mt-2" style={{ color: '#334155' }}>
              Replace this placeholder with a Google Maps embed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
