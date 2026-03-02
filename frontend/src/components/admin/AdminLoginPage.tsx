import { useState } from 'react';
import { Eye, EyeOff, Shield } from 'lucide-react';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    await new Promise(resolve => setTimeout(resolve, 600));

    if (password === 'admin123') {
      sessionStorage.setItem('adminAuthenticated', 'true');
      window.location.href = '/admin/dashboard';
    } else {
      setError('Incorrect password. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #0D2347 100%)' }}
    >
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="px-8 py-8 text-center" style={{ background: '#1B3A6B' }}>
            <div className="flex justify-center mb-4">
              <img
                src="/assets/generated/jenkins-logo.dim_300x80.png"
                alt="Jenkins Insurance"
                className="h-12 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Shield className="w-6 h-6" style={{ color: '#F4B942' }} />
              <h1 className="font-montserrat font-bold text-white text-[22px]">
                Jenkins Insurance
              </h1>
            </div>
            <p className="font-opensans text-[14px]" style={{ color: '#F4B942' }}>
              Admin Panel
            </p>
          </div>

          {/* Form */}
          <div className="px-8 py-8">
            <h2 className="font-montserrat font-bold text-[20px] mb-2" style={{ color: '#1B3A6B' }}>
              Agent Login
            </h2>
            <p className="font-opensans text-[14px] text-gray-500 mb-6">
              Enter your password to access the admin panel.
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-lg font-opensans focus:outline-none transition-colors"
                  style={{ color: '#2C2C2C' }}
                  onFocus={e => (e.target.style.borderColor = '#F4B942')}
                  onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-[14px] font-opensans">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg text-[16px] font-semibold flex items-center justify-center gap-2 disabled:opacity-70 transition-all"
                style={{ background: '#F4B942', color: '#1B3A6B' }}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-jenkins-navy/30 border-t-jenkins-navy rounded-full animate-spin" />
                    Logging in...
                  </>
                ) : (
                  'Login →'
                )}
              </button>
            </form>

            <p className="text-center font-opensans text-[12px] text-gray-400 mt-6">
              Demo password: <span className="font-semibold" style={{ color: '#1B3A6B' }}>admin123</span>
            </p>
          </div>
        </div>

        <p className="text-center font-opensans text-[12px] mt-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
          © {new Date().getFullYear()} Jenkins Insurance Agency
        </p>
      </div>
    </div>
  );
}
