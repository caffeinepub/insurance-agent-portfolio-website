import React from 'react';
import { TrendingUp, Phone, Award, Users } from 'lucide-react';
import LeadsChart from './LeadsChart';
import PolicyPieChart from './PolicyPieChart';
import LeadsTable from './LeadsTable';

const statCards = [
  {
    label: 'Total Leads',
    value: '127',
    trend: '+15%',
    trendUp: true,
    sub: 'This month',
    icon: Users,
    color: '#3b82f6',
  },
  {
    label: 'Quotes Sent',
    value: '23',
    trend: '18% conv.',
    trendUp: true,
    sub: 'Conversion rate',
    icon: TrendingUp,
    color: '#10b981',
  },
  {
    label: 'Calls Made',
    value: '45',
    trend: '+8 this week',
    trendUp: true,
    sub: 'Follow-ups',
    icon: Phone,
    color: '#f59e0b',
  },
  {
    label: 'Policies Won',
    value: '8',
    trend: '$24K revenue',
    trendUp: true,
    sub: 'This month',
    icon: Award,
    color: '#8b5cf6',
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-white">Dashboard Overview</h2>
        <p className="text-gray-400 text-sm mt-1">Welcome back — here's what's happening today.</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map(({ label, value, trend, trendUp, sub, icon: Icon, color }) => (
          <div
            key={label}
            className="rounded-xl p-4 md:p-5 flex flex-col gap-3"
            style={{ background: '#1a1a2e', border: '1px solid #0f3460' }}
          >
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wide">{label}</span>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: color + '22' }}>
                <Icon className="w-4 h-4" style={{ color }} />
              </div>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">{value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{sub}</p>
            </div>
            <div className={`flex items-center gap-1 text-xs font-medium ${trendUp ? 'text-green-400' : 'text-red-400'}`}>
              <TrendingUp className="w-3 h-3" />
              {trend}
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <LeadsChart />
        </div>
        <div>
          <PolicyPieChart />
        </div>
      </div>

      {/* Leads Table */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Recent Leads</h3>
        <LeadsTable compact />
      </div>
    </div>
  );
}
