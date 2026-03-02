import { useState, useEffect } from 'react';
import { Outlet, Link } from '@tanstack/react-router';
import { Menu, X, Bell, ExternalLink, LogOut } from 'lucide-react';
import { ToastProvider } from '../../contexts/ToastContext';

const menuItems = [
  { icon: '🏠', label: 'Dashboard', path: '/admin/dashboard' },
  { icon: '📋', label: 'Quote Requests', path: '/admin/quotes' },
  { icon: '⭐', label: 'Reviews Manager', path: '/admin/reviews' },
  { icon: '✏️', label: 'Edit Website Content', path: '/admin/content' },
  { icon: '📞', label: 'Contact Info', path: '/admin/contact' },
  { icon: '🌆', label: 'Service Areas', path: '/admin/service-areas' },
  { icon: '📊', label: 'Analytics', path: '/admin/analytics' },
  { icon: '⚙️', label: 'Settings', path: '/admin/settings' },
];

export default function AdminJenkinsLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const auth = sessionStorage.getItem('adminAuthenticated');
    if (auth !== 'true') {
      window.location.href = '/admin';
    }
  }, []);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  });

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuthenticated');
    window.location.href = '/admin';
  };

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <ToastProvider>
      <div className="min-h-screen" style={{ background: '#F8F9FA' }}>
        {/* Sidebar */}
        <aside
          className={`fixed left-0 top-0 z-[100] flex flex-col transition-transform duration-300 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
          style={{ width: '260px', minHeight: '100vh', background: '#1B3A6B' }}
        >
          {/* Logo */}
          <div className="px-6 py-5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🛡️</span>
              <div>
                <div className="font-montserrat font-bold text-white text-[16px] leading-tight">
                  Jenkins Insurance
                </div>
                <div className="font-opensans text-[11px]" style={{ color: '#F4B942' }}>
                  Admin Panel
                </div>
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex-1 py-4 overflow-y-auto">
            {menuItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-6 py-3 font-opensans font-semibold text-[14px] transition-all duration-200 ${
                    isActive
                      ? 'bg-white/10 border-r-4'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  style={isActive ? { color: '#F4B942', borderRightColor: '#F4B942' } : {}}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="px-4 py-4 border-t border-white/10">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-lg font-opensans font-semibold text-[14px] transition-all duration-200"
            >
              <LogOut className="w-5 h-5" />
              🚪 Logout
            </button>
          </div>
        </aside>

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-[99]"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="md:ml-[260px] flex flex-col min-h-screen">
          {/* Top Bar */}
          <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
            <div className="flex items-center gap-4">
              <button
                className="md:hidden"
                style={{ color: '#1B3A6B' }}
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <div>
                <p className="font-montserrat font-bold text-[16px]" style={{ color: '#1B3A6B' }}>
                  Welcome, C. Jenkins
                </p>
                <p className="font-opensans text-[12px] text-gray-400">{today}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Bell */}
              <div className="relative">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" style={{ color: '#1B3A6B' }}>
                  <Bell className="w-5 h-5" />
                </button>
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
              </div>

              {/* View Website */}
              <a
                href="/"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-semibold transition-all"
                style={{ background: '#F4B942', color: '#1B3A6B' }}
              >
                View My Website
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </ToastProvider>
  );
}
