import { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, CheckCircle, Calendar } from 'lucide-react';
import { useCalendarBooking } from '../hooks/useCalendarBooking';

export default function CalendarBooking() {
  const { getAvailableTimeSlots, isTimeSlotAvailable, bookAppointment } = useCalendarBooking();

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [step, setStep] = useState<'calendar' | 'form' | 'confirmed'>('calendar');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', notes: '' });
  const [loading, setLoading] = useState(false);

  const monthNames = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December',
  ];
  const dayNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const availableSlots = selectedDate ? getAvailableTimeSlots(selectedDate) : [];

  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime('');
  };

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;
    if (!isTimeSlotAvailable(selectedDate, selectedTime)) return;
    setLoading(true);
    await bookAppointment(selectedDate, selectedTime, formData.name, formData.email, formData.phone);
    setLoading(false);
    setStep('confirmed');
  };

  if (step === 'confirmed') {
    return (
      <div
        className="max-w-md mx-auto rounded-2xl p-8 text-center shadow-xl"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: '#f59e0b' }} />
        <h3 className="text-xl font-bold mb-2" style={{ color: '#1e293b' }}>
          Appointment Confirmed!
        </h3>
        <p className="text-sm mb-4" style={{ color: '#334155' }}>
          Your consultation has been scheduled for{' '}
          <strong style={{ color: '#1e293b' }}>
            {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </strong>{' '}
          at <strong style={{ color: '#1e293b' }}>{selectedTime}</strong>.
        </p>
        <p className="text-sm" style={{ color: '#334155' }}>
          A confirmation will be sent to{' '}
          <strong style={{ color: '#1e293b' }}>{formData.email}</strong>.
        </p>
      </div>
    );
  }

  if (step === 'form') {
    return (
      <div
        className="max-w-md mx-auto rounded-2xl p-8 shadow-xl"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <button
          onClick={() => setStep('calendar')}
          className="flex items-center gap-1 text-sm mb-6 transition-opacity hover:opacity-70"
          style={{ color: '#334155' }}
        >
          <ChevronLeft className="w-4 h-4" style={{ color: '#334155' }} />
          <span style={{ color: '#334155' }}>Back to Calendar</span>
        </button>

        <h3 className="text-xl font-bold mb-1" style={{ color: '#1e293b' }}>
          Complete Your Booking
        </h3>
        <p className="text-sm mb-6" style={{ color: '#334155' }}>
          {selectedDate?.toLocaleDateString()} at {selectedTime}
        </p>

        <form onSubmit={handleBooking} className="space-y-4">
          {[
            { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith', required: true },
            { label: 'Email', name: 'email', type: 'email', placeholder: 'john@example.com', required: true },
            { label: 'Phone', name: 'phone', type: 'tel', placeholder: '(555) 000-0000', required: true },
          ].map(({ label, name, type, placeholder, required }) => (
            <div key={name}>
              <label className="block text-sm font-semibold mb-1" style={{ color: '#1e293b' }}>
                {label} {required && '*'}
              </label>
              <input
                type={type}
                required={required}
                value={formData[name as keyof typeof formData]}
                onChange={(e) => setFormData((p) => ({ ...p, [name]: e.target.value }))}
                placeholder={placeholder}
                className="w-full px-4 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2"
                style={{ borderColor: '#e2e8f0', color: '#1e293b', backgroundColor: '#FFFFFF' }}
              />
            </div>
          ))}
          <div>
            <label className="block text-sm font-semibold mb-1" style={{ color: '#1e293b' }}>
              Notes (Optional)
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData((p) => ({ ...p, notes: e.target.value }))}
              rows={3}
              placeholder="Any specific questions or topics you'd like to discuss..."
              className="w-full px-4 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 resize-none"
              style={{ borderColor: '#e2e8f0', color: '#1e293b', backgroundColor: '#FFFFFF' }}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-bold text-base transition-all hover:opacity-90 disabled:opacity-50"
            style={{ backgroundColor: '#f59e0b', color: '#FFFFFF' }}
          >
            <span style={{ color: '#FFFFFF' }}>{loading ? 'Booking...' : 'Confirm Appointment'}</span>
          </button>
        </form>
      </div>
    );
  }

  return (
    <div
      className="max-w-lg mx-auto rounded-2xl p-6 shadow-xl"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="w-6 h-6" style={{ color: '#f59e0b' }} />
        <h3 className="text-xl font-bold" style={{ color: '#1e293b' }}>
          Schedule a Consultation
        </h3>
      </div>

      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={goToPrevMonth}
          className="p-2 rounded-lg transition-colors hover:opacity-70"
          style={{ color: '#1e293b' }}
        >
          <ChevronLeft className="w-5 h-5" style={{ color: '#1e293b' }} />
        </button>
        <span className="font-semibold" style={{ color: '#1e293b' }}>
          {monthNames[currentMonth]} {currentYear}
        </span>
        <button
          onClick={goToNextMonth}
          className="p-2 rounded-lg transition-colors hover:opacity-70"
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
      <div className="grid grid-cols-7 gap-1 mb-6">
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const date = new Date(currentYear, currentMonth, day);
          const isSelected =
            selectedDate?.getFullYear() === currentYear &&
            selectedDate?.getMonth() === currentMonth &&
            selectedDate?.getDate() === day;
          const isToday =
            day === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear();
          const isPast = date < new Date(new Date().toDateString());

          return (
            <button
              key={day}
              onClick={() => !isPast && handleSelectDate(date)}
              disabled={isPast}
              className="aspect-square rounded-lg text-sm font-medium transition-all"
              style={{
                backgroundColor: isSelected
                  ? '#f59e0b'
                  : isToday
                  ? 'rgba(245,158,11,0.1)'
                  : 'transparent',
                color: isSelected ? '#FFFFFF' : isPast ? '#94a3b8' : '#1e293b',
                cursor: isPast ? 'not-allowed' : 'pointer',
              }}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Time Slots */}
      {selectedDate && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-4 h-4" style={{ color: '#f59e0b' }} />
            <span className="text-sm font-semibold" style={{ color: '#1e293b' }}>
              Available Times
            </span>
          </div>
          {availableSlots.length === 0 ? (
            <p className="text-sm text-center py-4" style={{ color: '#334155' }}>
              No available slots for this date.
            </p>
          ) : (
            <div className="grid grid-cols-3 gap-2 mb-6">
              {availableSlots.map((slot) => {
                const isSelectedSlot = selectedTime === slot;
                return (
                  <button
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className="py-2 px-3 rounded-lg text-xs font-medium transition-all"
                    style={{
                      backgroundColor: isSelectedSlot ? '#f59e0b' : '#f8fafc',
                      color: isSelectedSlot ? '#FFFFFF' : '#1e293b',
                    }}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          )}

          {selectedTime && (
            <button
              onClick={() => setStep('form')}
              className="w-full py-3 rounded-lg font-bold text-base transition-all hover:opacity-90"
              style={{ backgroundColor: '#f59e0b', color: '#FFFFFF' }}
            >
              <span style={{ color: '#FFFFFF' }}>Continue with {selectedTime}</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
