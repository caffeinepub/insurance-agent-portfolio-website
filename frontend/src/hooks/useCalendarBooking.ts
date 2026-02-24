import { useMemo } from 'react';

interface TimeSlot {
  time: string;
  available: boolean;
}

export function useCalendarBooking() {
  // Define available time slots (9 AM to 5 PM, excluding lunch 12-1 PM)
  const timeSlots = useMemo<string[]>(() => {
    return [
      '09:00 AM',
      '09:30 AM',
      '10:00 AM',
      '10:30 AM',
      '11:00 AM',
      '11:30 AM',
      '01:00 PM',
      '01:30 PM',
      '02:00 PM',
      '02:30 PM',
      '03:00 PM',
      '03:30 PM',
      '04:00 PM',
      '04:30 PM',
      '05:00 PM',
    ];
  }, []);

  // Simulate booked slots (in a real app, this would come from backend)
  const bookedSlots = useMemo<Record<string, string[]>>(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    return {
      [today.toDateString()]: ['10:00 AM', '02:00 PM', '04:00 PM'],
      [tomorrow.toDateString()]: ['09:00 AM', '11:30 AM', '03:00 PM'],
    };
  }, []);

  const getAvailableTimeSlots = (date: Date): string[] => {
    const dateKey = date.toDateString();
    const booked = bookedSlots[dateKey] || [];
    
    // Filter out past time slots for today
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();
    
    return timeSlots.filter((slot) => {
      // Check if slot is not booked
      if (booked.includes(slot)) {
        return false;
      }
      
      // If it's today, filter out past time slots
      if (isToday) {
        const [time, period] = slot.split(' ');
        const [hours, minutes] = time.split(':').map(Number);
        let slotHours = hours;
        
        if (period === 'PM' && hours !== 12) {
          slotHours += 12;
        } else if (period === 'AM' && hours === 12) {
          slotHours = 0;
        }
        
        const slotTime = new Date();
        slotTime.setHours(slotHours, minutes, 0, 0);
        
        return slotTime > now;
      }
      
      return true;
    });
  };

  const isTimeSlotAvailable = (date: Date, time: string): boolean => {
    const availableSlots = getAvailableTimeSlots(date);
    return availableSlots.includes(time);
  };

  const bookAppointment = async (
    date: Date,
    time: string,
    name: string,
    email: string,
    phone: string
  ): Promise<boolean> => {
    // In a real application, this would make an API call to the backend
    // For now, we'll simulate a successful booking
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Booking appointment:', { date, time, name, email, phone });
        resolve(true);
      }, 1000);
    });
  };

  return {
    timeSlots,
    getAvailableTimeSlots,
    isTimeSlotAvailable,
    bookAppointment,
  };
}
