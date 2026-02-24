import { useState } from 'react';
import { Calendar, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useGetAllAppointments, useUpdateAppointmentStatus, AppointmentStatus, type Appointment } from '@/hooks/useAdminQueries';
import AppointmentsCalendarView from './AppointmentsCalendarView';
import { toast } from 'sonner';

export default function AdminAppointmentsPage() {
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const { data: appointments = [], isLoading } = useGetAllAppointments();
  const updateStatusMutation = useUpdateAppointmentStatus();

  // Filter appointments
  const filteredAppointments = appointments.filter((appointment) => {
    if (statusFilter === 'all') return true;
    return appointment.status === statusFilter;
  });

  // Handle status update
  const handleStatusUpdate = async (id: bigint, newStatus: AppointmentStatus) => {
    try {
      await updateStatusMutation.mutateAsync({ id, status: newStatus });
      toast.success('Appointment status updated');
    } catch (error) {
      toast.error('Failed to update appointment status');
    }
  };

  // Format date
  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1000000);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Loading appointments...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>

        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="scheduled">Scheduled</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="canceled">Canceled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList>
          <TabsTrigger value="list" className="flex items-center gap-2">
            <List className="w-4 h-4" />
            List View
          </TabsTrigger>
          <TabsTrigger value="calendar" className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Calendar View
          </TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="mt-6">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client Name</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAppointments.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center text-gray-500 py-8">
                      No appointments found
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredAppointments.map((appointment) => (
                    <TableRow key={appointment.id.toString()}>
                      <TableCell className="font-medium">{appointment.clientName}</TableCell>
                      <TableCell>{formatDate(appointment.date)}</TableCell>
                      <TableCell>{appointment.contactInfo.phone}</TableCell>
                      <TableCell>{appointment.contactInfo.email}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            appointment.status === 'scheduled'
                              ? 'bg-blue-100 text-blue-800'
                              : appointment.status === 'completed'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Select
                          value={appointment.status}
                          onValueChange={(value) => handleStatusUpdate(appointment.id, value as AppointmentStatus)}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value={AppointmentStatus.scheduled}>Scheduled</SelectItem>
                            <SelectItem value={AppointmentStatus.completed}>Completed</SelectItem>
                            <SelectItem value={AppointmentStatus.canceled}>Canceled</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="calendar" className="mt-6">
          <AppointmentsCalendarView appointments={filteredAppointments} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
