import { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown, X } from 'lucide-react';
import { useToast } from '../../contexts/ToastContext';

type LeadStatus = 'New' | 'Contacted' | 'Quoted' | 'Closed' | 'Not Interested';

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  coverage: string;
  message: string;
  date: string;
  status: LeadStatus;
  notes: string;
}

const defaultLeads: Lead[] = [
  { id: '1', name: 'Sarah M.', phone: '(281) 555-0101', email: 'sarah.m@email.com', city: 'The Woodlands', coverage: 'Home+Auto', message: 'Looking to bundle home and auto for better rates.', date: '2026-03-02', status: 'New', notes: '' },
  { id: '2', name: 'Robert T.', phone: '(281) 555-0102', email: 'robert.t@email.com', city: 'Humble', coverage: 'Flood', message: "Need flood insurance after last year's flooding.", date: '2026-03-01', status: 'Contacted', notes: 'Called back, interested in NFIP policy.' },
  { id: '3', name: 'Maria G.', phone: '(281) 555-0103', email: 'maria.g@email.com', city: 'Spring', coverage: 'Business', message: 'Small business owner, need general liability.', date: '2026-03-01', status: 'Quoted', notes: 'Sent quote for $1.2M GL policy.' },
  { id: '4', name: 'Jennifer K.', phone: '(281) 555-0104', email: 'jennifer.k@email.com', city: 'Magnolia', coverage: 'Auto', message: 'Two cars, looking for full coverage.', date: '2026-02-28', status: 'Contacted', notes: '' },
  { id: '5', name: 'David L.', phone: '(281) 555-0105', email: 'david.l@email.com', city: 'Tomball', coverage: 'Life', message: 'Term life for family of 4.', date: '2026-02-27', status: 'Closed', notes: 'Closed $500K 20-year term policy.' },
  { id: '6', name: 'Carlos R.', phone: '(281) 555-0106', email: 'carlos.r@email.com', city: 'Conroe', coverage: 'Homeowners', message: 'New home purchase, need homeowners.', date: '2026-02-25', status: 'New', notes: '' },
  { id: '7', name: 'Lisa W.', phone: '(281) 555-0107', email: 'lisa.w@email.com', city: 'Spring', coverage: 'Auto', message: 'Teen driver added to policy.', date: '2026-02-24', status: 'Quoted', notes: '' },
  { id: '8', name: 'Michael B.', phone: '(281) 555-0108', email: 'michael.b@email.com', city: 'The Woodlands', coverage: 'Life', message: 'Whole life for retirement planning.', date: '2026-02-22', status: 'Not Interested', notes: 'Went with employer plan.' },
];

const statusConfig: Record<LeadStatus, { color: string; bg: string; dot: string }> = {
  'New': { color: '#92400e', bg: '#fef3c7', dot: '🟡' },
  'Contacted': { color: '#065f46', bg: '#d1fae5', dot: '🟢' },
  'Quoted': { color: '#1e40af', bg: '#dbeafe', dot: '🔵' },
  'Closed': { color: '#065f46', bg: '#d1fae5', dot: '✅' },
  'Not Interested': { color: '#991b1b', bg: '#fee2e2', dot: '❌' },
};

const cities = ['All Cities', 'The Woodlands', 'Spring', 'Humble', 'Magnolia', 'Tomball', 'Conroe'];
const coverageOptions = ['All Coverage', 'Homeowners', 'Auto', 'Home+Auto', 'Business', 'Flood', 'Life'];
const statusOptions: Array<'All' | LeadStatus> = ['All', 'New', 'Contacted', 'Quoted', 'Closed', 'Not Interested'];

type SortKey = keyof Lead;

export default function AdminJenkinsQuotesPage() {
  const { showToast } = useToast();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState('');
  const [cityFilter, setCityFilter] = useState('All Cities');
  const [coverageFilter, setCoverageFilter] = useState('All Coverage');
  const [statusFilter, setStatusFilter] = useState<'All' | LeadStatus>('All');
  const [sortKey, setSortKey] = useState<SortKey>('date');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [editNotes, setEditNotes] = useState('');
  const [editStatus, setEditStatus] = useState<LeadStatus>('New');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('jenkinsQuoteLeads');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setLeads(parsed);
          return;
        }
      }
    } catch {}
    setLeads(defaultLeads);
    localStorage.setItem('jenkinsQuoteLeads', JSON.stringify(defaultLeads));
  }, []);

  const saveLeads = (updated: Lead[]) => {
    setLeads(updated);
    localStorage.setItem('jenkinsQuoteLeads', JSON.stringify(updated));
  };

  const filtered = leads
    .filter(l => {
      const q = search.toLowerCase();
      if (q && !l.name.toLowerCase().includes(q) && !l.email.toLowerCase().includes(q)) return false;
      if (cityFilter !== 'All Cities' && l.city !== cityFilter) return false;
      if (coverageFilter !== 'All Coverage' && l.coverage !== coverageFilter) return false;
      if (statusFilter !== 'All' && l.status !== statusFilter) return false;
      return true;
    })
    .sort((a, b) => {
      const av = String(a[sortKey]);
      const bv = String(b[sortKey]);
      return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
    });

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDir('asc'); }
  };

  const deleteLead = (id: string) => {
    if (!window.confirm('Are you sure you want to delete this lead?')) return;
    saveLeads(leads.filter(l => l.id !== id));
    showToast('Lead deleted.', 'info');
  };

  const openModal = (lead: Lead) => {
    setSelectedLead(lead);
    setEditNotes(lead.notes);
    setEditStatus(lead.status);
  };

  const saveModal = () => {
    if (!selectedLead) return;
    const updated = leads.map(l =>
      l.id === selectedLead.id ? { ...l, notes: editNotes, status: editStatus } : l
    );
    saveLeads(updated);
    setSelectedLead(null);
    showToast('✅ Lead updated successfully!', 'success');
  };

  const exportCSV = () => {
    const headers = ['#', 'Name', 'Phone', 'Email', 'City', 'Coverage', 'Message', 'Date', 'Status'];
    const rows = filtered.map((l, i) => [i + 1, l.name, l.phone, l.email, l.city, l.coverage, `"${l.message}"`, l.date, l.status]);
    const csv = [headers, ...rows].map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'jenkins-quote-requests.csv';
    a.click();
    URL.revokeObjectURL(url);
    showToast('✅ CSV exported!', 'success');
  };

  const SortIcon = ({ col }: { col: SortKey }) => (
    <span className="inline-flex flex-col ml-1 align-middle">
      <ChevronUp className={`w-3 h-3 ${sortKey === col && sortDir === 'asc' ? 'text-yellow-500' : 'text-gray-300'}`} />
      <ChevronDown className={`w-3 h-3 -mt-1 ${sortKey === col && sortDir === 'desc' ? 'text-yellow-500' : 'text-gray-300'}`} />
    </span>
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-montserrat font-bold text-[28px]" style={{ color: '#1B3A6B' }}>
          All Quote Requests
        </h1>
        <button
          onClick={exportCSV}
          className="px-5 py-2.5 rounded-xl text-[14px] font-semibold transition-all hover:opacity-80"
          style={{ background: '#F4B942', color: '#1B3A6B' }}
        >
          Export to CSV
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-sm p-5 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="px-4 py-2.5 border-2 border-gray-200 rounded-xl font-opensans text-[14px] focus:outline-none transition-colors"
            onFocus={e => (e.target.style.borderColor = '#F4B942')}
            onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
          />
          <select
            value={cityFilter}
            onChange={e => setCityFilter(e.target.value)}
            className="px-4 py-2.5 border-2 border-gray-200 rounded-xl font-opensans text-[14px] focus:outline-none transition-colors bg-white"
          >
            {cities.map(c => <option key={c}>{c}</option>)}
          </select>
          <select
            value={coverageFilter}
            onChange={e => setCoverageFilter(e.target.value)}
            className="px-4 py-2.5 border-2 border-gray-200 rounded-xl font-opensans text-[14px] focus:outline-none transition-colors bg-white"
          >
            {coverageOptions.map(c => <option key={c}>{c}</option>)}
          </select>
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value as 'All' | LeadStatus)}
            className="px-4 py-2.5 border-2 border-gray-200 rounded-xl font-opensans text-[14px] focus:outline-none transition-colors bg-white"
          >
            {statusOptions.map(s => <option key={s}>{s}</option>)}
          </select>
          <div className="text-[13px] font-opensans text-gray-500 flex items-center">
            {filtered.length} result{filtered.length !== 1 ? 's' : ''}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ background: '#F8F9FA' }}>
                {[
                  { key: 'id' as SortKey, label: '#' },
                  { key: 'name' as SortKey, label: 'Name' },
                  { key: 'phone' as SortKey, label: 'Phone' },
                  { key: 'email' as SortKey, label: 'Email' },
                  { key: 'city' as SortKey, label: 'City' },
                  { key: 'coverage' as SortKey, label: 'Coverage' },
                  { key: 'date' as SortKey, label: 'Date' },
                  { key: 'status' as SortKey, label: 'Status' },
                ].map(col => (
                  <th
                    key={col.key}
                    className="px-4 py-3 text-left font-opensans font-semibold text-[12px] uppercase tracking-wide cursor-pointer hover:bg-gray-100 transition-colors"
                    style={{ color: '#888' }}
                    onClick={() => handleSort(col.key)}
                  >
                    {col.label}<SortIcon col={col.key} />
                  </th>
                ))}
                <th className="px-4 py-3 text-left font-opensans font-semibold text-[12px] uppercase tracking-wide" style={{ color: '#888' }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((lead, i) => {
                const sc = statusConfig[lead.status];
                return (
                  <tr key={lead.id} className="border-t border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-opensans text-[13px] text-gray-400">{i + 1}</td>
                    <td className="px-4 py-3 font-opensans font-semibold text-[14px]" style={{ color: '#2C2C2C' }}>{lead.name}</td>
                    <td className="px-4 py-3 font-opensans text-[13px] text-gray-500">{lead.phone}</td>
                    <td className="px-4 py-3 font-opensans text-[13px] text-gray-500">{lead.email}</td>
                    <td className="px-4 py-3 font-opensans text-[13px] text-gray-500">{lead.city}</td>
                    <td className="px-4 py-3 font-opensans text-[13px] text-gray-500">{lead.coverage}</td>
                    <td className="px-4 py-3 font-opensans text-[13px] text-gray-500">{lead.date}</td>
                    <td className="px-4 py-3">
                      <span
                        className="px-2.5 py-1 rounded-full font-opensans font-semibold text-[11px] whitespace-nowrap"
                        style={{ background: sc.bg, color: sc.color }}
                      >
                        {sc.dot} {lead.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1.5">
                        <button
                          onClick={() => openModal(lead)}
                          className="px-3 py-1.5 rounded-lg text-[12px] font-semibold text-white transition-all hover:opacity-80"
                          style={{ background: '#1B3A6B' }}
                        >
                          View
                        </button>
                        <button
                          onClick={() => deleteLead(lead.id)}
                          className="px-3 py-1.5 rounded-lg text-[12px] font-semibold text-white transition-all hover:opacity-80"
                          style={{ background: '#dc2626' }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={9} className="px-4 py-12 text-center font-opensans text-gray-400">
                    No leads found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="font-montserrat font-bold text-[18px]" style={{ color: '#1B3A6B' }}>
                Lead Details
              </h3>
              <button onClick={() => setSelectedLead(null)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 py-5 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-opensans text-[12px] text-gray-400 uppercase tracking-wide">Name</p>
                  <p className="font-opensans font-semibold text-[15px]" style={{ color: '#2C2C2C' }}>{selectedLead.name}</p>
                </div>
                <div>
                  <p className="font-opensans text-[12px] text-gray-400 uppercase tracking-wide">City</p>
                  <p className="font-opensans font-semibold text-[15px]" style={{ color: '#2C2C2C' }}>{selectedLead.city}</p>
                </div>
                <div>
                  <p className="font-opensans text-[12px] text-gray-400 uppercase tracking-wide">Phone</p>
                  <a href={`tel:${selectedLead.phone}`} className="font-opensans font-semibold text-[15px]" style={{ color: '#1B3A6B' }}>{selectedLead.phone}</a>
                </div>
                <div>
                  <p className="font-opensans text-[12px] text-gray-400 uppercase tracking-wide">Email</p>
                  <a href={`mailto:${selectedLead.email}`} className="font-opensans font-semibold text-[14px]" style={{ color: '#1B3A6B' }}>{selectedLead.email}</a>
                </div>
                <div>
                  <p className="font-opensans text-[12px] text-gray-400 uppercase tracking-wide">Coverage</p>
                  <p className="font-opensans font-semibold text-[15px]" style={{ color: '#2C2C2C' }}>{selectedLead.coverage}</p>
                </div>
                <div>
                  <p className="font-opensans text-[12px] text-gray-400 uppercase tracking-wide">Date</p>
                  <p className="font-opensans font-semibold text-[15px]" style={{ color: '#2C2C2C' }}>{selectedLead.date}</p>
                </div>
              </div>

              <div>
                <p className="font-opensans text-[12px] text-gray-400 uppercase tracking-wide mb-1">Message</p>
                <p className="font-opensans text-[14px] text-gray-600 bg-gray-50 rounded-lg p-3">{selectedLead.message || '—'}</p>
              </div>

              <div>
                <label className="font-opensans text-[12px] text-gray-400 uppercase tracking-wide block mb-1">Status</label>
                <select
                  value={editStatus}
                  onChange={e => setEditStatus(e.target.value as LeadStatus)}
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl font-opensans text-[14px] focus:outline-none bg-white"
                  onFocus={e => (e.target.style.borderColor = '#F4B942')}
                  onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
                >
                  {(['New', 'Contacted', 'Quoted', 'Closed', 'Not Interested'] as LeadStatus[]).map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-opensans text-[12px] text-gray-400 uppercase tracking-wide block mb-1">Notes</label>
                <textarea
                  value={editNotes}
                  onChange={e => setEditNotes(e.target.value)}
                  rows={3}
                  placeholder="Add notes about this lead..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl font-opensans text-[14px] focus:outline-none resize-none"
                  onFocus={e => (e.target.style.borderColor = '#F4B942')}
                  onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
                />
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href={`https://wa.me/${selectedLead.phone.replace(/\D/g, '')}?text=Hi%20${encodeURIComponent(selectedLead.name)}%2C%20this%20is%20C.%20Jenkins%20from%20Jenkins%20Insurance!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 rounded-xl text-[13px] font-semibold text-white transition-all hover:opacity-80"
                  style={{ background: '#25D366' }}
                >
                  💬 Send WhatsApp
                </a>
                <a
                  href={`mailto:${selectedLead.email}?subject=Your%20Insurance%20Quote%20from%20Jenkins%20Insurance`}
                  className="flex-1 text-center py-2.5 rounded-xl text-[13px] font-semibold text-white transition-all hover:opacity-80"
                  style={{ background: '#1B3A6B' }}
                >
                  📧 Send Email
                </a>
              </div>

              <button
                onClick={() => {
                  setEditStatus('Closed');
                  saveModal();
                  showToast('🎉 $749 Won! Lead marked as Closed!', 'success');
                }}
                className="w-full py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-80"
                style={{ background: '#F4B942', color: '#1B3A6B' }}
              >
                ✅ Mark Closed — $749 Won!
              </button>

              <button
                onClick={saveModal}
                className="w-full py-2.5 rounded-xl text-[14px] font-semibold text-white transition-all hover:opacity-80"
                style={{ background: '#1B3A6B' }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
