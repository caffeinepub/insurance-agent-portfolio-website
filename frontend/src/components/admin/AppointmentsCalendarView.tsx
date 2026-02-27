import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { QuoteSubmission } from '../../hooks/useAdminQueries';

interface Props {
  appointments: QuoteSubmission[];
}

const coverageColors: Record<string, string> = {
  auto: '#2563eb',
  home: '#16a34a',
  life: '#d97706',
  business: '#7c3aed',
};

const coverageBg: Record<string, string> = {
  auto: 'rgba(37,99,235,0.12)',
  home: 'rgba(22,163,74,0.12)',
  life: 'rgba(217,119,6,0.12)',
  business: 'rgba(124,58,237,0.12)',
};

export default function AppointmentsCalendarView({ appointments }: Props) {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  // QuoteSubmission.timestamp is bigint nanoseconds from backend
  const getAppointmentsForDay = (day: number) => {
    return appointments.filter((a) => {
      const ms = Number(a.timestamp) / 1_000_000;
      const d = new Date(ms);
      return (
        d.getFullYear() === year &&
        d.getMonth() === month &&
        d.getDate() === day
      );
    });
  };

  const days: React.ReactElement[] = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className="min-h-[80px]" />);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayAppts = getAppointmentsForDay(day);
    const isToday =
      day === today.getDate() && month === today.getMonth() && year === today.getFullYear();

    days.push(
      <div
        key={day}
        className="min-h-[80px] p-1 rounded-lg border"
        style={{
          backgroundColor: isToday ? 'rgba(30,58,138,0.05)' : '#FFFFFF',
          borderColor: isToday ? '#1e3a8a' : '#e2e8f0',
        }}
      >
        <p
          className="text-xs font-semibold mb-1 w-6 h-6 flex items-center justify-center rounded-full"
          style={{
            backgroundColor: isToday ? '#1e3a8a' : 'transparent',
            color: isToday ? '#FFFFFF' : '#1e293b',
          }}
        >
          {day}
        </p>
        {dayAppts.map((appt) => {
          const coverageKey = String(appt.coverageType);
          return (
            <div
              key={String(appt.id)}
              className="text-xs px-1 py-0.5 rounded mb-0.5 truncate"
              style={{
                backgroundColor: coverageBg[coverageKey] ?? 'rgba(0,0,0,0.05)',
                color: coverageColors[coverageKey] ?? '#1e293b',
              }}
            >
              {appt.name}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className="rounded-xl border p-4 shadow-sm"
      style={{ backgroundColor: '#FFFFFF', borderColor: '#e2e8f0' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => {
            if (month === 0) { setMonth(11); setYear((y) => y - 1); }
            else setMonth((m) => m - 1);
          }}
          className="p-2 rounded-lg hover:opacity-70"
          style={{ color: '#1e293b' }}
        >
          <ChevronLeft className="w-5 h-5" style={{ color: '#1e293b' }} />
        </button>
        <span className="font-bold" style={{ color: '#1e293b' }}>
          {monthNames[month]} {year}
        </span>
        <button
          onClick={() => {
            if (month === 11) { setMonth(0); setYear((y) => y + 1); }
            else setMonth((m) => m + 1);
          }}
          className="p-2 rounded-lg hover:opacity-70"
          style={{ color: '#1e293b' }}
        >
          <ChevronRight className="w-5 h-5" style={{ color: '#1e293b' }} />
        </button>
      </div>

      {/* Day Names */}
      <div className="grid grid-cols-7 mb-2">
        {dayNames.map((d) => (
          <div key={d} className="text-center text-xs font-semibold py-1" style={{ color: '#334155' }}>
            {d}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">{days}</div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mt-4 pt-3 border-t" style={{ borderColor: '#e2e8f0' }}>
        {Object.entries(coverageColors).map(([key, color]) => (
          <div key={key} className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
            <span className="text-xs capitalize" style={{ color: '#334155' }}>{key}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
