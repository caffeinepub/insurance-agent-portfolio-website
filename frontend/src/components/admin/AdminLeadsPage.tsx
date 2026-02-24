import { useState } from 'react';
import { Search, Download } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useGetAllLeads, type Lead } from '@/hooks/useAdminQueries';

export default function AdminLeadsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [coverageFilter, setCoverageFilter] = useState<string>('all');

  const { data: leads = [], isLoading } = useGetAllLeads();

  // Filter leads
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phoneNumber.includes(searchTerm);

    const matchesCoverage = coverageFilter === 'all' || lead.coverageAmount === coverageFilter;

    return matchesSearch && matchesCoverage;
  });

  // Export to CSV
  const exportToCSV = () => {
    const headers = ['Name', 'Phone', 'Email', 'ZIP Code', 'Coverage Amount', 'TCPA Agreed'];
    const rows = filteredLeads.map((lead) => [
      lead.fullName,
      lead.phoneNumber,
      lead.email,
      lead.zipCode,
      lead.coverageAmount,
      lead.agreedToTcpA ? 'Yes' : 'No',
    ]);

    const csvContent = [headers, ...rows].map((row) => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Loading leads...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Leads</h1>
        <Button onClick={exportToCSV} variant="outline" className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export CSV
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search by name, email, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <Select value={coverageFilter} onValueChange={setCoverageFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filter by coverage" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Coverage</SelectItem>
            <SelectItem value="amount50k">$50,000</SelectItem>
            <SelectItem value="amount100k">$100,000</SelectItem>
            <SelectItem value="amount250k">$250,000</SelectItem>
            <SelectItem value="amount500k">$500,000</SelectItem>
            <SelectItem value="amount1m">$1,000,000</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>ZIP Code</TableHead>
              <TableHead>Coverage Amount</TableHead>
              <TableHead>TCPA</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLeads.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-gray-500 py-8">
                  No leads found
                </TableCell>
              </TableRow>
            ) : (
              filteredLeads.map((lead, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{lead.fullName}</TableCell>
                  <TableCell>{lead.phoneNumber}</TableCell>
                  <TableCell>{lead.email}</TableCell>
                  <TableCell>{lead.zipCode}</TableCell>
                  <TableCell>{lead.coverageAmount}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        lead.agreedToTcpA ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {lead.agreedToTcpA ? 'Yes' : 'No'}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
