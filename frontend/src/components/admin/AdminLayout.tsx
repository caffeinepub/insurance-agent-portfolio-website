import React, { useState } from 'react';
import { Outlet, useRouter } from '@tanstack/react-router';
import { Link, useRouterState } from '@tanstack/react-router';
import {
  LayoutDashboard, Users, FileText, UserCheck, BarChart2, Receipt,
  Menu, X, LogOut, Shield, ChevronRight
} from 'lucide-react';
import { useAdminAuth } from '../../hooks/useAdminAuth';

const navItems = [
  { path: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/admin/leads', label: 'Leads', icon: Users },
  { path: '/admin/policy-management', label: 'Policy Management', icon: FileText },
  { path: '/admin/lead-assignment', label: 'Lead Assignment', icon: UserCheck },
  { path: '/admin/analytics', label: 'Analytics', icon: BarChart2 },
  { path: '/admin/pdf-invoices', label: 'PDF Invoices', icon: Receipt },
];

export default function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { logout } = useAdminAuth();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-6 py-5 border-b" style={{ borderColor: '#0f3460' }}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: '#0f3460' }}>
            <Shield className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-tight">Reeves Insurance</p>
            <p className="text-blue-400 text-xs">Agent Portal</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map(({ path, label, icon: Icon }) => {
          const isActive = currentPath === path || currentPath.startsWith(path + '/');
          return (
            <Link
              key={path}
              to={path}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group ${
                isActive ? 'text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              style={isActive ? { background: '#0f3460' } : {}}
            >
              <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-green-400' : 'text-gray-500 group-hover:text-gray-300'}`} />
              <span>{label}</span>
              {isActive && <ChevronRight className="w-3 h-3 ml-auto text-green-400" />}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="px-3 py-4 border-t" style={{ borderColor: '#0f3460' }}>
        <button
          onClick={logout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-red-400 hover:bg-red-900/20 transition-all w-full"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: '#1a1a2e' }}>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-56 flex-shrink-0" style={{ background: '#1a1a2e', borderRight: '1px solid #0f3460' }}>
        <SidebarContent />
      </aside>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <aside className="absolute left-0 top-0 h-full w-64 z-50 flex flex-col" style={{ background: '#1a1a2e', borderRight: '1px solid #0f3460' }}>
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="flex items-center justify-between px-4 md:px-6 py-3 flex-shrink-0" style={{ background: '#16213e', borderBottom: '1px solid #0f3460' }}>
          <div className="flex items-center gap-3">
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-white font-semibold text-sm md:text-base">
                {navItems.find(n => currentPath.startsWith(n.path))?.label || 'Admin Panel'}
              </h1>
              <p className="text-gray-500 text-xs hidden md:block">Reeves Insurance Solutions — Conroe, TX</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-green-400" style={{ background: '#0f3460' }}>
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Admin
            </div>
            <button
              onClick={logout}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-400 transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6" style={{ background: '#16213e' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
