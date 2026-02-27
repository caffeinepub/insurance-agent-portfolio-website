import React from 'react';
import { useGetAllLeads, useGetAllAppointments } from '../../hooks/useAdminQueries';
import { Users, FileText, TrendingUp, Clock } from 'lucide-react';

export default function AdminDashboard() {
  const { data: leads = [], isLoading: leadsLoading } = useGetAllLeads();
  const { data: appointments = [], isLoading: appointmentsLoading } = useGetAllAppointments();

  const stats = [
    {
      label: 'Total Leads',
      value: leads.length,
      icon: Users,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      label: 'Quote Submissions',
      value: appointments.length,
      icon: FileText,
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      label: 'This Month',
      value: leads.filter(l => {
        const ts = Number(l.timestamp) / 1_000_000;
        const now = Date.now();
        const monthAgo = now - 30 * 24 * 60 * 60 * 1000;
        return ts > monthAgo;
      }).length,
      icon: TrendingUp,
      color: 'text-yellow-600',
      bg: 'bg-yellow-50',
    },
    {
      label: 'Pending Review',
      value: leads.length,
      icon: Clock,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-lg shadow p-5 flex items-center gap-4">
              <div className={`${stat.bg} ${stat.color} p-3 rounded-full`}>
                <Icon size={22} />
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">
                  {leadsLoading || appointmentsLoading ? '...' : stat.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Submissions */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Quote Submissions</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {leadsLoading ? (
            <div className="px-6 py-8 text-center text-gray-400">Loading...</div>
          ) : leads.length === 0 ? (
            <div className="px-6 py-8 text-center text-gray-400">No submissions yet.</div>
          ) : (
            leads.slice(0, 5).map((lead) => (
              <div key={String(lead.id)} className="px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{lead.name}</p>
                  <p className="text-sm text-gray-500">{lead.email} · {lead.phone}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700 capitalize">
                    {String(lead.coverageType)}
                  </span>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(Number(lead.timestamp) / 1_000_000).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
