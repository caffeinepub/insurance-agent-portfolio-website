import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Appointment } from '@/hooks/useAdminQueries';

interface AppointmentsCalendarViewProps {
  appointments: Appointment[];
}

export default function AppointmentsCalendarView({ appointments }: AppointmentsCalendarViewProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Get calendar data
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();

  // Navigate months
  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // Get appointments for a specific day
  const getAppointmentsForDay = (day: number) => {
    return appointments.filter((appointment) => {
      const appointmentDate = new Date(Number(appointment.date) / 1000000);
      return (
        appointmentDate.getDate() === day &&
        appointmentDate.getMonth() === month &&
        appointmentDate.getFullYear() === year
      );
    });
  };

  // Generate calendar days
  const calendarDays: React.ReactElement[] = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="h-24 bg-gray-50"></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayAppointments = getAppointmentsForDay(day);
    calendarDays.push(
      <div key={day} className="h-24 border border-gray-200 p-2 overflow-y-auto">
        <div className="font-semibold text-sm mb-1">{day}</div>
        {dayAppointments.map((appointment) => (
          <div
            key={appointment.id.toString()}
            className={`text-xs p-1 mb-1 rounded ${
              appointment.status === 'scheduled'
                ? 'bg-blue-100 text-blue-800'
                : appointment.status === 'completed'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
            }`}
          >
            {appointment.clientName}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <Button onClick={previousMonth} variant="outline" size="icon">
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <h2 className="text-xl font-bold">
          {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </h2>

        <Button onClick={nextMonth} variant="outline" size="icon">
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-0">
        {/* Day headers */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center font-semibold text-sm py-2 bg-gray-100 border border-gray-200">
            {day}
          </div>
        ))}

        {/* Calendar days */}
        {calendarDays}
      </div>
    </div>
  );
}
