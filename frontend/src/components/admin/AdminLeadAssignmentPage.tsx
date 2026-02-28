import React, { useState } from 'react';
import { UserCheck, CheckCircle } from 'lucide-react';
import { mockLeads } from '../../data/mockLeads';

const agents = ['Agent A — Carlos Reyes', 'Agent B — Sandra Kim', 'Agent C — Marcus Webb', 'Agent D — Tina Flores'];

export default function AdminLeadAssignmentPage() {
  const [assignments, setAssignments] = useState<Record<number, string>>({});
  const [toasts, setToasts] = useState<string[]>([]);

  const assign = (leadId: number, agent: string) => {
    setAssignments(prev => ({ ...prev, [leadId]: agent }));
    const lead = mockLeads.find(l => l.id === leadId);
    const msg = `${lead?.name} assigned to ${agent.split(' — ')[0]}`;
    setToasts(prev => [...prev, msg]);
    setTimeout(() => setToasts(prev => prev.slice(1)), 3000);
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-white">Lead Assignment</h2>
        <p className="text-gray-400 text-sm mt-1">Assign incoming leads to your agents.</p>
      </div>

      {/* Toast notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map((msg, i) => (
          <div key={i} className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-white shadow-lg" style={{ background: '#0f3460' }}>
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            {msg}
          </div>
        ))}
      </div>

      <div className="rounded-xl overflow-hidden" style={{ background: '#1a1a2e', border: '1px solid #0f3460' }}>
        <div className="px-4 py-3 flex items-center gap-2" style={{ borderBottom: '1px solid #0f3460' }}>
          <UserCheck className="w-4 h-4 text-green-400" />
          <span className="text-white font-medium text-sm">Unassigned Leads</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr style={{ borderBottom: '1px solid #0f3460' }}>
                {['Name', 'Phone', 'Policy', 'Status', 'Assign Agent'].map(h => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockLeads.map((lead, i) => (
                <tr key={lead.id} className="hover:bg-white/3 transition-colors" style={{ borderBottom: i < mockLeads.length - 1 ? '1px solid #0f3460' : 'none' }}>
                  <td className="px-4 py-3 text-white text-sm font-medium">{lead.name}</td>
                  <td className="px-4 py-3 text-gray-300 text-sm font-mono">{lead.phone}</td>
                  <td className="px-4 py-3 text-gray-300 text-sm">{lead.policy}</td>
                  <td className="px-4 py-3">
                    <span className="text-xs text-gray-400">{lead.status}</span>
                  </td>
                  <td className="px-4 py-3">
                    <select
                      value={assignments[lead.id] || ''}
                      onChange={e => assign(lead.id, e.target.value)}
                      className="px-2 py-1.5 rounded-lg text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500 w-full max-w-[180px]"
                      style={{ background: '#16213e', border: '1px solid #0f3460' }}
                    >
                      <option value="">Select agent...</option>
                      {agents.map(a => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
