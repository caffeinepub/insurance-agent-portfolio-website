import React, { useState } from 'react';
import { Download, Search, Filter } from 'lucide-react';
import { mockLeads, Lead, LeadStatus } from '../../data/mockLeads';

const STATUS_COLORS: Record<LeadStatus, string> = {
  New: 'bg-blue-900/50 text-blue-300 border-blue-700',
  Called: 'bg-yellow-900/50 text-yellow-300 border-yellow-700',
  Won: 'bg-green-900/50 text-green-300 border-green-700',
};

const POLICY_COLORS: Record<string, string> = {
  Auto: 'text-blue-400',
  Home: 'text-green-400',
  Life: 'text-purple-400',
  Commercial: 'text-orange-400',
};

interface LeadsTableProps {
  compact?: boolean;
}

export default function LeadsTable({ compact = false }: LeadsTableProps) {
  const [statusFilter, setStatusFilter] = useState<LeadStatus | 'All'>('All');
  const [search, setSearch] = useState('');

  const filtered = mockLeads.filter(lead => {
    const matchStatus = statusFilter === 'All' || lead.status === statusFilter;
    const matchSearch = search === '' ||
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase()) ||
      lead.phone.includes(search);
    return matchStatus && matchSearch;
  });

  const displayLeads = compact ? filtered.slice(0, 5) : filtered;

  const exportCSV = () => {
    const headers = ['Name', 'Phone', 'Email', 'Policy', 'Status', 'Date'];
    const rows = filtered.map(l => [l.name, l.phone, l.email, l.policy, l.status, l.date]);
    const csv = [headers, ...rows].map(r => r.map(v => `"${v}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'leads.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: '#1a1a2e', border: '1px solid #0f3460' }}>
      {/* Toolbar */}
      {!compact && (
        <div className="px-4 py-3 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between" style={{ borderBottom: '1px solid #0f3460' }}>
          <div className="flex items-center gap-2 flex-wrap">
            {(['All', 'New', 'Called', 'Won'] as const).map(s => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  statusFilter === s ? 'text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                style={statusFilter === s ? { background: '#0f3460' } : {}}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
              <input
                type="text"
                placeholder="Search leads..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="pl-8 pr-3 py-1.5 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full sm:w-48"
                style={{ background: '#16213e', border: '1px solid #0f3460' }}
              />
            </div>
            <button
              onClick={exportCSV}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-green-400 hover:text-white transition-all flex-shrink-0"
              style={{ background: '#0f3460', border: '1px solid #0f3460' }}
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr style={{ borderBottom: '1px solid #0f3460' }}>
              {['Name', 'Phone', 'Email', 'Policy', 'Status', 'Date'].map(h => (
                <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wide">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayLeads.map((lead, i) => (
              <tr
                key={lead.id}
                className="hover:bg-white/3 transition-colors"
                style={{ borderBottom: i < displayLeads.length - 1 ? '1px solid #0f3460' : 'none' }}
              >
                <td className="px-4 py-3">
                  <span className="text-white text-sm font-medium">{lead.name}</span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-gray-300 text-sm font-mono">{lead.phone}</span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-gray-400 text-sm">{lead.email}</span>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-sm font-medium ${POLICY_COLORS[lead.policy] || 'text-gray-300'}`}>{lead.policy}</span>
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${STATUS_COLORS[lead.status]}`}>
                    {lead.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-gray-500 text-sm">{lead.date}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {displayLeads.length === 0 && (
        <div className="py-12 text-center text-gray-500 text-sm">No leads found matching your filters.</div>
      )}
    </div>
  );
}
