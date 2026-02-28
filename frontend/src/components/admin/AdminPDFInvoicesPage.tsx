import React from 'react';
import { Receipt, Printer } from 'lucide-react';

const mockInvoices = [
  { id: 'INV-2026-001', client: 'James Anderson', policy: 'Auto Insurance', amount: '$1,240.00', date: 'Feb 20, 2026', status: 'Paid' },
  { id: 'INV-2026-002', client: 'Maria Rodriguez', policy: 'Home Insurance', amount: '$2,100.00', date: 'Feb 18, 2026', status: 'Paid' },
  { id: 'INV-2026-003', client: 'Robert Thompson', policy: 'Life Insurance', amount: '$890.00', date: 'Feb 15, 2026', status: 'Pending' },
  { id: 'INV-2026-004', client: 'Jennifer Williams', policy: 'Auto Insurance', amount: '$1,560.00', date: 'Feb 12, 2026', status: 'Paid' },
  { id: 'INV-2026-005', client: 'Michael Davis', policy: 'Commercial Insurance', amount: '$4,200.00', date: 'Feb 10, 2026', status: 'Overdue' },
  { id: 'INV-2026-006', client: 'Patricia Martinez', policy: 'Home Insurance', amount: '$1,800.00', date: 'Feb 8, 2026', status: 'Paid' },
];

const STATUS_COLORS: Record<string, string> = {
  Paid: 'bg-green-900/50 text-green-300 border-green-700',
  Pending: 'bg-yellow-900/50 text-yellow-300 border-yellow-700',
  Overdue: 'bg-red-900/50 text-red-300 border-red-700',
};

function generateInvoiceHTML(inv: typeof mockInvoices[0]) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Invoice ${inv.id}</title>
      <style>
        body { font-family: Arial, sans-serif; max-width: 700px; margin: 40px auto; color: #1a1a2e; }
        .header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 40px; }
        .company { font-size: 22px; font-weight: bold; color: #0f3460; }
        .invoice-id { font-size: 14px; color: #666; margin-top: 4px; }
        .badge { background: #0f3460; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; }
        .section { margin-bottom: 24px; }
        .label { font-size: 11px; text-transform: uppercase; color: #999; letter-spacing: 1px; margin-bottom: 4px; }
        .value { font-size: 15px; color: #1a1a2e; }
        table { width: 100%; border-collapse: collapse; margin-top: 24px; }
        th { background: #f5f5f5; padding: 10px 14px; text-align: left; font-size: 12px; text-transform: uppercase; color: #666; }
        td { padding: 12px 14px; border-bottom: 1px solid #eee; font-size: 14px; }
        .total { font-size: 20px; font-weight: bold; color: #0f3460; text-align: right; margin-top: 20px; }
        .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #999; text-align: center; }
        @media print { body { margin: 20px; } }
      </style>
    </head>
    <body>
      <div class="header">
        <div>
          <div class="company">Reeves Insurance Solutions</div>
          <div class="invoice-id">Conroe, TX 77301 | (936) 441-2301</div>
        </div>
        <div>
          <div class="badge">INVOICE</div>
          <div style="font-size:13px;color:#666;margin-top:6px;">${inv.id}</div>
        </div>
      </div>
      <div style="display:flex;gap:60px;margin-bottom:32px;">
        <div class="section">
          <div class="label">Bill To</div>
          <div class="value" style="font-weight:600;">${inv.client}</div>
          <div style="font-size:13px;color:#666;">Conroe, TX</div>
        </div>
        <div class="section">
          <div class="label">Invoice Date</div>
          <div class="value">${inv.date}</div>
        </div>
        <div class="section">
          <div class="label">Status</div>
          <div class="value" style="color:${inv.status === 'Paid' ? '#10b981' : inv.status === 'Overdue' ? '#ef4444' : '#f59e0b'};font-weight:600;">${inv.status}</div>
        </div>
      </div>
      <table>
        <thead><tr><th>Description</th><th>Qty</th><th>Amount</th></tr></thead>
        <tbody>
          <tr><td>${inv.policy} — Annual Premium</td><td>1</td><td>${inv.amount}</td></tr>
        </tbody>
      </table>
      <div class="total">Total: ${inv.amount}</div>
      <div class="footer">Thank you for choosing Reeves Insurance Solutions. Questions? Call (936) 441-2301</div>
      <script>window.onload = () => window.print();</script>
    </body>
    </html>
  `;
}

export default function AdminPDFInvoicesPage() {
  const handleGenerate = (inv: typeof mockInvoices[0]) => {
    const win = window.open('', '_blank');
    if (win) {
      win.document.write(generateInvoiceHTML(inv));
      win.document.close();
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-white">PDF Invoices</h2>
        <p className="text-gray-400 text-sm mt-1">Generate and print client invoices.</p>
      </div>

      <div className="rounded-xl overflow-hidden" style={{ background: '#1a1a2e', border: '1px solid #0f3460' }}>
        <div className="px-4 py-3 flex items-center gap-2" style={{ borderBottom: '1px solid #0f3460' }}>
          <Receipt className="w-4 h-4 text-blue-400" />
          <span className="text-white font-medium text-sm">Invoice History</span>
          <span className="ml-auto text-xs text-gray-500">{mockInvoices.length} invoices</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[550px]">
            <thead>
              <tr style={{ borderBottom: '1px solid #0f3460' }}>
                {['Invoice ID', 'Client', 'Policy', 'Amount', 'Date', 'Status', 'Action'].map(h => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockInvoices.map((inv, i) => (
                <tr key={inv.id} className="hover:bg-white/3 transition-colors" style={{ borderBottom: i < mockInvoices.length - 1 ? '1px solid #0f3460' : 'none' }}>
                  <td className="px-4 py-3 text-blue-400 text-sm font-mono">{inv.id}</td>
                  <td className="px-4 py-3 text-white text-sm font-medium">{inv.client}</td>
                  <td className="px-4 py-3 text-gray-300 text-sm">{inv.policy}</td>
                  <td className="px-4 py-3 text-green-400 text-sm font-semibold">{inv.amount}</td>
                  <td className="px-4 py-3 text-gray-500 text-sm">{inv.date}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${STATUS_COLORS[inv.status] || 'text-gray-400'}`}>
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleGenerate(inv)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white hover:opacity-90 transition-all"
                      style={{ background: '#0f3460' }}
                    >
                      <Printer className="w-3 h-3" />
                      Generate PDF
                    </button>
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
