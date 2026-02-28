import React from 'react';
import { FileText, Plus } from 'lucide-react';

const mockPolicies = [
  { id: 'POL-001', client: 'James Anderson', type: 'Auto', status: 'Active', premium: '$1,240/yr' },
  { id: 'POL-002', client: 'Maria Rodriguez', type: 'Home', status: 'Active', premium: '$2,100/yr' },
  { id: 'POL-003', client: 'Robert Thompson', type: 'Life', status: 'Pending', premium: '$890/yr' },
  { id: 'POL-004', client: 'Jennifer Williams', type: 'Auto', status: 'Active', premium: '$1,560/yr' },
  { id: 'POL-005', client: 'Michael Davis', type: 'Commercial', status: 'Review', premium: '$4,200/yr' },
  { id: 'POL-006', client: 'Patricia Martinez', type: 'Home', status: 'Active', premium: '$1,800/yr' },
];

const STATUS_COLORS: Record<string, string> = {
  Active: 'bg-green-900/50 text-green-300 border-green-700',
  Pending: 'bg-yellow-900/50 text-yellow-300 border-yellow-700',
  Review: 'bg-blue-900/50 text-blue-300 border-blue-700',
};

export default function AdminPolicyManagementPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-white">Policy Management</h2>
          <p className="text-gray-400 text-sm mt-1">Manage all client policies and coverage details.</p>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-all"
          style={{ background: '#0f3460' }}
        >
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">New Policy</span>
        </button>
      </div>

      <div className="rounded-xl overflow-hidden" style={{ background: '#1a1a2e', border: '1px solid #0f3460' }}>
        <div className="px-4 py-3 flex items-center gap-2" style={{ borderBottom: '1px solid #0f3460' }}>
          <FileText className="w-4 h-4 text-blue-400" />
          <span className="text-white font-medium text-sm">Active Policies</span>
          <span className="ml-auto text-xs text-gray-500">{mockPolicies.length} total</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr style={{ borderBottom: '1px solid #0f3460' }}>
                {['Policy ID', 'Client', 'Type', 'Status', 'Premium'].map(h => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockPolicies.map((p, i) => (
                <tr key={p.id} className="hover:bg-white/3 transition-colors" style={{ borderBottom: i < mockPolicies.length - 1 ? '1px solid #0f3460' : 'none' }}>
                  <td className="px-4 py-3 text-blue-400 text-sm font-mono">{p.id}</td>
                  <td className="px-4 py-3 text-white text-sm font-medium">{p.client}</td>
                  <td className="px-4 py-3 text-gray-300 text-sm">{p.type}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${STATUS_COLORS[p.status] || 'text-gray-400'}`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-green-400 text-sm font-medium">{p.premium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
