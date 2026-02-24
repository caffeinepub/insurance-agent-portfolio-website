import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useCalendarBooking } from '../hooks/useCalendarBooking';
import { toast } from 'sonner';
import { Calendar as CalendarIcon, Clock, CheckCircle2, Loader2 } from 'lucide-react';

export default function CalendarBooking() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const { getAvailableTimeSlots, isTimeSlotAvailable } = useCalendarBooking();

  const availableSlots = selectedDate ? getAvailableTimeSlots(selectedDate) : [];

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime || !name || !email || !phone) {
      toast.error('Please fill in all fields and select a date and time');
      return;
    }

    if (!isTimeSlotAvailable(selectedDate, selectedTime)) {
      toast.error('This time slot is no longer available. Please select another time.');
      return;
    }

    setIsSubmitting(true);

    // Simulate booking submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
      toast.success('Appointment booked successfully! You will receive a confirmation email shortly.');
    }, 1500);
  };

  const handleReset = () => {
    setSelectedDate(undefined);
    setSelectedTime('');
    setName('');
    setEmail('');
    setPhone('');
    setIsConfirmed(false);
  };

  if (isConfirmed) {
    return (
      <div className="glass-card p-8 rounded-2xl text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-accent-gold/20 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-accent-gold" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-heading font-bold text-foreground mb-2">Appointment Confirmed!</h3>
          <p className="text-foreground/70 font-body">
            Your consultation is scheduled for{' '}
            <span className="text-accent-gold font-semibold">
              {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </span>{' '}
            at <span className="text-accent-gold font-semibold">{selectedTime}</span>
          </p>
        </div>
        <div className="p-4 rounded-lg bg-accent-blue/10 border border-accent-blue/30">
          <p className="text-sm text-foreground/80 font-body">
            A confirmation email has been sent to <span className="text-accent-blue font-semibold">{email}</span>
          </p>
        </div>
        <Button
          onClick={handleReset}
          variant="outline"
          className="border-accent-gold text-accent-gold hover:bg-accent-gold/10"
        >
          Book Another Appointment
        </Button>
      </div>
    );
  }

  return (
    <div className="glass-card p-8 rounded-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center">
          <CalendarIcon className="w-5 h-5 text-accent-blue" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-foreground">Book Your Consultation</h3>
      </div>

      <form onSubmit={handleBooking} className="space-y-6">
        {/* Personal Information */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="booking-name" className="text-foreground font-body mb-2 block">
              Full Name *
            </Label>
            <Input
              id="booking-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="bg-luxury-dark/50 border-accent-gold/30 text-foreground focus:border-accent-gold"
              required
            />
          </div>

          <div>
            <Label htmlFor="booking-email" className="text-foreground font-body mb-2 block">
              Email Address *
            </Label>
            <Input
              id="booking-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="bg-luxury-dark/50 border-accent-gold/30 text-foreground focus:border-accent-gold"
              required
            />
          </div>

          <div>
            <Label htmlFor="booking-phone" className="text-foreground font-body mb-2 block">
              Phone Number *
            </Label>
            <Input
              id="booking-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 XXXXX XXXXX"
              className="bg-luxury-dark/50 border-accent-gold/30 text-foreground focus:border-accent-gold"
              required
            />
          </div>
        </div>

        {/* Calendar */}
        <div>
          <Label className="text-foreground font-body mb-3 block">Select Date *</Label>
          <div className="flex justify-center">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) => date < new Date() || date.getDay() === 0}
              className="rounded-lg border border-accent-gold/30 bg-luxury-dark/30 p-3"
              classNames={{
                months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
                month: 'space-y-4',
                caption: 'flex justify-center pt-1 relative items-center text-foreground',
                caption_label: 'text-sm font-medium',
                nav: 'space-x-1 flex items-center',
                nav_button: 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 text-foreground',
                nav_button_previous: 'absolute left-1',
                nav_button_next: 'absolute right-1',
                table: 'w-full border-collapse space-y-1',
                head_row: 'flex',
                head_cell: 'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
                row: 'flex w-full mt-2',
                cell: 'text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
                day: 'h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-accent-gold/20 rounded-md text-foreground',
                day_selected: 'bg-accent-gold text-luxury-dark hover:bg-accent-gold hover:text-luxury-dark focus:bg-accent-gold focus:text-luxury-dark',
                day_today: 'bg-accent-blue/20 text-accent-blue',
                day_outside: 'text-muted-foreground opacity-50',
                day_disabled: 'text-muted-foreground opacity-50 line-through',
                day_hidden: 'invisible',
              }}
            />
          </div>
        </div>

        {/* Time Slots */}
        {selectedDate && (
          <div>
            <Label className="text-foreground font-body mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent-blue" />
              Select Time *
            </Label>
            <div className="grid grid-cols-3 gap-2">
              {availableSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedTime(slot)}
                  className={`p-3 rounded-lg border text-sm font-body transition-all ${
                    selectedTime === slot
                      ? 'bg-accent-gold text-luxury-dark border-accent-gold font-semibold'
                      : 'bg-luxury-dark/50 border-accent-gold/30 text-foreground hover:bg-accent-gold/10 hover:border-accent-gold/50'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
            {availableSlots.length === 0 && (
              <p className="text-sm text-foreground/60 font-body mt-2">
                No available slots for this date. Please select another date.
              </p>
            )}
          </div>
        )}

        <Button
          type="submit"
          disabled={!selectedDate || !selectedTime || !name || !email || !phone || isSubmitting}
          className="w-full bg-cta-bright hover:bg-cta-bright/90 text-luxury-dark font-bold text-lg py-6 shadow-glow-gold"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Booking...
            </>
          ) : (
            <>
              <CalendarIcon className="mr-2 h-5 w-5" />
              Confirm Appointment
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
