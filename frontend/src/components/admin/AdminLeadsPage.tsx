import React from 'react';
import LeadsTable from './LeadsTable';

export default function AdminLeadsPage() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-white">Leads Management</h2>
        <p className="text-gray-400 text-sm mt-1">View, filter, and export all incoming leads.</p>
      </div>
      <LeadsTable />
    </div>
  );
}
