import React from 'react';
import { BarChart2, TrendingUp, DollarSign, Target } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const funnelData = [
  { stage: 'Leads', count: 127 },
  { stage: 'Contacted', count: 89 },
  { stage: 'Quoted', count: 45 },
  { stage: 'Closed', count: 23 },
  { stage: 'Won', count: 8 },
];

const monthlyData = [
  { month: 'Sep', revenue: 18000 },
  { month: 'Oct', revenue: 21000 },
  { month: 'Nov', revenue: 19500 },
  { month: 'Dec', revenue: 24000 },
  { month: 'Jan', revenue: 22000 },
  { month: 'Feb', revenue: 24000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="px-3 py-2 rounded-lg text-sm" style={{ background: '#0f3460', border: '1px solid #1a1a2e' }}>
        <p className="text-gray-300">{label}</p>
        <p className="text-green-400 font-bold">{payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-white">Analytics</h2>
        <p className="text-gray-400 text-sm mt-1">Performance metrics and business insights.</p>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: 'Conversion Rate', value: '18%', icon: Target, color: '#10b981' },
          { label: 'Avg Deal Size', value: '$3,000', icon: DollarSign, color: '#f59e0b' },
          { label: 'Monthly Revenue', value: '$24K', icon: TrendingUp, color: '#3b82f6' },
          { label: 'Active Leads', value: '127', icon: BarChart2, color: '#8b5cf6' },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="rounded-xl p-4" style={{ background: '#1a1a2e', border: '1px solid #0f3460' }}>
            <div className="flex items-center gap-2 mb-2">
              <Icon className="w-4 h-4" style={{ color }} />
              <span className="text-gray-400 text-xs">{label}</span>
            </div>
            <p className="text-2xl font-bold text-white">{value}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-xl p-4 md:p-5" style={{ background: '#1a1a2e', border: '1px solid #0f3460' }}>
          <h3 className="text-white font-semibold text-sm mb-1">Lead Conversion Funnel</h3>
          <p className="text-gray-500 text-xs mb-4">Leads through each stage</p>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={funnelData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#0f3460" />
                <XAxis dataKey="stage" tick={{ fill: '#6b7280', fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#6b7280', fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl p-4 md:p-5" style={{ background: '#1a1a2e', border: '1px solid #0f3460' }}>
          <h3 className="text-white font-semibold text-sm mb-1">Monthly Revenue Trends</h3>
          <p className="text-gray-500 text-xs mb-4">Revenue over the last 6 months</p>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#0f3460" />
                <XAxis dataKey="month" tick={{ fill: '#6b7280', fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#6b7280', fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2.5} dot={{ fill: '#10b981', r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
