import { useState } from 'react';
import { useToast } from '../../contexts/ToastContext';

type LeadStatus = 'New' | 'Contacted' | 'Quoted' | 'Closed' | 'Not Interested';

interface Lead {
  id: string;
  name: string;
  city: string;
  coverage: string;
  date: string;
  status: LeadStatus;
}

const sampleLeads: Lead[] = [
  { id: '1', name: 'Sarah M.', city: 'The Woodlands', coverage: 'Home+Auto', date: 'Today', status: 'New' },
  { id: '2', name: 'Robert T.', city: 'Humble', coverage: 'Flood', date: 'Yesterday', status: 'Contacted' },
  { id: '3', name: 'Maria G.', city: 'Spring', coverage: 'Business', date: 'Mar 1', status: 'Quoted' },
  { id: '4', name: 'Jennifer K.', city: 'Magnolia', coverage: 'Auto', date: 'Feb 28', status: 'Contacted' },
  { id: '5', name: 'David L.', city: 'Tomball', coverage: 'Life', date: 'Feb 27', status: 'Closed' },
];

const statusConfig: Record<LeadStatus, { color: string; bg: string; dot: string }> = {
  'New': { color: '#92400e', bg: '#fef3c7', dot: '🟡' },
  'Contacted': { color: '#065f46', bg: '#d1fae5', dot: '🟢' },
  'Quoted': { color: '#1e40af', bg: '#dbeafe', dot: '🔵' },
  'Closed': { color: '#065f46', bg: '#d1fae5', dot: '✅' },
  'Not Interested': { color: '#991b1b', bg: '#fee2e2', dot: '❌' },
};

export default function AdminJenkinsDashboard() {
  const { showToast } = useToast();
  const [leads, setLeads] = useState<Lead[]>(sampleLeads);

  const statCards = [
    {
      icon: '📋',
      value: '12',
      label: 'Quote Requests This Month',
      sub: '↑ +3 from last month',
      subColor: '#27AE60',
      bg: '#1B3A6B',
      textColor: 'white',
    },
    {
      icon: '⭐',
      value: '4.9',
      label: 'Google Rating',
      sub: '127 total reviews',
      subColor: 'rgba(27,58,107,0.6)',
      bg: '#F4B942',
      textColor: '#1B3A6B',
    },
    {
      icon: '💰',
      value: '$4,200',
      label: 'Est. Revenue This Month',
      sub: 'Based on 12 leads × avg policy',
      subColor: 'rgba(255,255,255,0.7)',
      bg: '#27AE60',
      textColor: 'white',
    },
    {
      icon: '👁️',
      value: '847',
      label: 'Website Visitors This Month',
      sub: '↑ +23% from last month',
      subColor: '#27AE60',
      bg: '#1B3A6B',
      textColor: 'white',
    },
  ];

  const markContacted = (id: string) => {
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status: 'Contacted' as LeadStatus } : l));
    showToast('✅ Lead marked as Contacted!', 'success');
  };

  const downloadCSV = () => {
    const headers = ['Name', 'City', 'Coverage', 'Date', 'Status'];
    const rows = leads.map(l => [l.name, l.city, l.coverage, l.date, l.status]);
    const csv = [headers, ...rows].map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'jenkins-leads.csv';
    a.click();
    URL.revokeObjectURL(url);
    showToast('✅ CSV downloaded!', 'success');
  };

  return (
    <div>
      <h1 className="font-montserrat font-bold text-[28px] mb-6" style={{ color: '#1B3A6B' }}>
        Dashboard
      </h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {statCards.map((card, i) => (
          <div
            key={i}
            className="rounded-2xl p-6 shadow-sm"
            style={{ background: card.bg, color: card.textColor }}
          >
            <div className="text-3xl mb-2">{card.icon}</div>
            <div className="font-montserrat font-extrabold text-[32px] leading-tight">{card.value}</div>
            <div className="font-opensans font-semibold text-[14px] mt-1 opacity-90">{card.label}</div>
            <div className="font-opensans text-[12px] mt-2" style={{ color: card.subColor }}>
              {card.sub}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Recent Quote Requests */}
        <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-montserrat font-bold text-[18px]" style={{ color: '#1B3A6B' }}>
              Recent Quote Requests
            </h2>
            <a
              href="/admin/quotes"
              className="font-opensans text-[13px] font-semibold hover:underline"
              style={{ color: '#F4B942' }}
            >
              View All →
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ background: '#F8F9FA' }}>
                  {['Name', 'City', 'Coverage', 'Date', 'Status', 'Actions'].map(h => (
                    <th key={h} className="px-4 py-3 text-left font-opensans font-semibold text-[12px] uppercase tracking-wide" style={{ color: '#888' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => {
                  const sc = statusConfig[lead.status];
                  return (
                    <tr key={lead.id} className="border-t border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-opensans font-semibold text-[14px]" style={{ color: '#2C2C2C' }}>{lead.name}</td>
                      <td className="px-4 py-3 font-opensans text-[14px] text-gray-500">{lead.city}</td>
                      <td className="px-4 py-3 font-opensans text-[14px] text-gray-500">{lead.coverage}</td>
                      <td className="px-4 py-3 font-opensans text-[14px] text-gray-500">{lead.date}</td>
                      <td className="px-4 py-3">
                        <span
                          className="px-2.5 py-1 rounded-full font-opensans font-semibold text-[12px]"
                          style={{ background: sc.bg, color: sc.color }}
                        >
                          {sc.dot} {lead.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <a
                            href="/admin/quotes"
                            className="px-3 py-1.5 rounded-lg text-[12px] font-semibold text-white transition-all hover:opacity-80"
                            style={{ background: '#1B3A6B' }}
                          >
                            View
                          </a>
                          {lead.status === 'New' && (
                            <button
                              onClick={() => markContacted(lead.id)}
                              className="px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all hover:opacity-80"
                              style={{ background: '#F4B942', color: '#1B3A6B' }}
                            >
                              Mark Contacted
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="font-montserrat font-bold text-[18px] mb-5" style={{ color: '#1B3A6B' }}>
            Quick Actions
          </h2>
          <div className="space-y-3">
            <a
              href="/admin/reviews"
              className="w-full block text-center py-3 rounded-xl text-[14px] font-semibold transition-all hover:opacity-80"
              style={{ background: '#F4B942', color: '#1B3A6B' }}
            >
              + Add New Review
            </a>
            <a
              href="/admin/contact"
              className="w-full block text-center py-3 rounded-xl text-[14px] font-semibold text-white transition-all hover:opacity-80"
              style={{ background: '#1B3A6B' }}
            >
              Edit Phone Number
            </a>
            <a
              href="/admin/content"
              className="w-full block text-center py-3 rounded-xl text-[14px] font-semibold text-white transition-all hover:opacity-80"
              style={{ background: '#1B3A6B' }}
            >
              Update Business Hours
            </a>
            <button
              onClick={downloadCSV}
              className="w-full py-3 rounded-xl text-[14px] font-semibold text-white transition-all hover:opacity-80"
              style={{ background: '#1B3A6B' }}
            >
              Download All Leads CSV
            </button>
          </div>

          {/* Mini Stats */}
          <div className="mt-6 pt-5 border-t border-gray-100">
            <h3 className="font-opensans font-semibold text-[13px] uppercase tracking-wide mb-3" style={{ color: '#888' }}>
              This Week
            </h3>
            <div className="space-y-2">
              {[
                { label: 'New Leads', value: '3', color: '#1B3A6B' },
                { label: 'Quotes Sent', value: '2', color: '#1B3A6B' },
                { label: 'Policies Closed', value: '1', color: '#27AE60' },
              ].map(item => (
                <div key={item.label} className="flex justify-between">
                  <span className="font-opensans text-[13px] text-gray-500">{item.label}</span>
                  <span className="font-montserrat font-bold" style={{ color: item.color }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
