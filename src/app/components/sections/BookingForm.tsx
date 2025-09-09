"use client";

import { SiteData } from "@/types";
import { useState, useMemo } from "react";

// Main component props
type BookingFormProps = {
  data: SiteData['bookingForm'];
  siteName: string;
};

// --- Multi-Step Form Component (The "Simple" form) ---
const MultiStepForm = ({ availableDoctors }: { availableDoctors: string[] }) => {
  const [step, setStep] = useState({
    doctor: null as string | null,
    date: null as string | null,
    period: 'Morning' as 'Morning' | 'Evening',
    slot: null as string | null,
  });
  const [userDetails, setUserDetails] = useState({ name: '', mobile: '', email: '' });

  // Mock availability data - in a real app, this would come from a database
  const morningSlots = [
    { time: '9:00 AM', status: 'Available' },
    { time: '9:30 AM', status: 'Available' },
    { time: '10:00 AM', status: 'Booked' },
    { time: '10:30 AM', status: 'Available' },
    { time: '11:00 AM', status: 'Available' },
    { time: '11:30 AM', status: 'Booked' }
  ];
  const eveningSlots = [
    { time: '4:00 PM', status: 'Available' },
    { time: '4:30 PM', status: 'Booked' },
    { time: '5:00 PM', status: 'Available' },
    { time: '5:30 PM', status: 'Available' }
  ];

  const slotsToShow = useMemo(() => {
    if (!step.date) return [];
    return step.period === 'Morning' ? morningSlots : eveningSlots;
  }, [step.date, step.period, morningSlots, eveningSlots]);

  const handleUserDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!step.doctor || !step.date || !step.slot || !userDetails.name || !userDetails.mobile) {
      alert('Please fill in all required fields.');
      return;
    }
    const finalAppointment = { ...step, ...userDetails };
    console.log('CONFIRMING APPOINTMENT:', finalAppointment);
    alert(`Appointment confirmed for ${userDetails.name} with ${step.doctor} on ${step.date} at ${step.slot}.`);
  };

  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg max-w-4xl mx-auto space-y-6 sm:space-y-8">
      {/* Step 1: Select Doctor */}
      <div>
        <h3
          className="font-semibold text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6"
          style={{ color: 'var(--secondary-color)' }}
        >
          Select Your Doctor
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {availableDoctors.map(doctor => (
            <button
              key={doctor}
              onClick={() => setStep({ ...step, doctor, date: null, slot: null })}
              className={`p-3 sm:p-4 text-left rounded-lg border-2 transition-all ${step.doctor === doctor ? 'border-2' : 'bg-white border-slate-200 hover:border-opacity-50'
                }`}
              style={{
                backgroundColor: step.doctor === doctor ? 'var(--primary-color)' + '10' : 'white',
                borderColor: step.doctor === doctor ? 'var(--primary-color)' : '#e2e8f0',
                color: step.doctor === doctor ? 'var(--primary-color)' : 'var(--text-color)'
              }}
            >
              <p
                className="font-semibold text-sm sm:text-base"
                style={{ color: 'var(--secondary-color)' }}
              >
                {doctor.split('(')[0]}
              </p>
              <p
                className="text-xs sm:text-sm mt-1"
                style={{ color: 'var(--text-secondary-color)' }}
              >
                {doctor.split('(')[1].replace(')', '')}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Choose Date (appears after doctor is selected) */}
      {step.doctor && (
        <div className="border-t pt-6 sm:pt-8" style={{ borderColor: 'var(--text-secondary-color)' }}>
          <h3
            className="font-semibold text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6"
            style={{ color: 'var(--secondary-color)' }}
          >
            Choose Date
          </h3>
          <input
            type="date"
            min={new Date().toISOString().split('T')[0]}
            onChange={(e) => setStep({ ...step, date: e.target.value, slot: null })}
            className="w-full sm:w-auto p-3 sm:p-4 border border-slate-300 rounded-lg focus:ring-2 focus:border-transparent text-sm sm:text-base"
            style={{ color: 'var(--text-color)' }}
          />
        </div>
      )}

      {/* Step 3 & 4: Choose Period & Slot (appears after date is selected) */}
      {step.date && (
        <div className="border-t pt-6 sm:pt-8" style={{ borderColor: 'var(--text-secondary-color)' }}>
          {/* Period Tabs */}
          <div className="flex border border-slate-300 rounded-lg p-1 bg-slate-100 mb-4 sm:mb-6 max-w-md">
            <button
              onClick={() => setStep({ ...step, period: 'Morning' })}
              className={`flex-1 p-2 sm:p-3 rounded-md transition-colors text-sm sm:text-base ${step.period === 'Morning' ? 'text-white shadow' : 'hover:bg-slate-200'
                }`}
              style={{
                backgroundColor: step.period === 'Morning' ? 'var(--primary-color)' : 'transparent',
                color: step.period === 'Morning' ? 'white' : 'var(--text-color)'
              }}
            >
              Morning
            </button>
            <button
              onClick={() => setStep({ ...step, period: 'Evening' })}
              className={`flex-1 p-2 sm:p-3 rounded-md transition-colors text-sm sm:text-base ${step.period === 'Evening' ? 'text-white shadow' : 'hover:bg-slate-200'
                }`}
              style={{
                backgroundColor: step.period === 'Evening' ? 'var(--primary-color)' : 'transparent',
                color: step.period === 'Evening' ? 'white' : 'var(--text-color)'
              }}
            >
              Evening
            </button>
          </div>

          {/* Slot Grid */}
          <h3
            className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg"
            style={{ color: 'var(--secondary-color)' }}
          >
            Select Slot - <span className="text-sm font-normal">{step.period}</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
            {slotsToShow.map(slot => (
              <button
                key={slot.time}
                onClick={() => setStep({ ...step, slot: slot.time })}
                disabled={slot.status === 'Booked'}
                className={`p-2 sm:p-3 text-center rounded-lg border-2 text-xs sm:text-sm transition-all disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed ${step.slot === slot.time ? 'border-2' : 'bg-white border-slate-200'
                  }`}
                style={{
                  backgroundColor: step.slot === slot.time ? 'var(--primary-color)' + '10' : 'white',
                  borderColor: step.slot === slot.time ? 'var(--primary-color)' : '#e2e8f0',
                  color: slot.status === 'Booked' ? '#94a3b8' : 'var(--text-color)'
                }}
              >
                {slot.time}
                <span className={`block text-xs mt-1 ${slot.status === 'Available' ? 'text-green-500' : 'text-red-500'
                  }`}>
                  {slot.status}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 5: User Details (appears after slot is selected) */}
      {step.slot && (
        <div className="border-t pt-6 sm:pt-8 space-y-4" style={{ borderColor: 'var(--text-secondary-color)' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={userDetails.name}
              onChange={handleUserDetailsChange}
              className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg focus:ring-2 focus:border-transparent text-sm sm:text-base"
              style={{ color: 'var(--text-color)' }}
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number *"
              value={userDetails.mobile}
              onChange={handleUserDetailsChange}
              className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg focus:ring-2 focus:border-transparent text-sm sm:text-base"
              style={{ color: 'var(--text-color)' }}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email Address (Optional)"
            value={userDetails.email}
            onChange={handleUserDetailsChange}
            className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg focus:ring-2 focus:border-transparent text-sm sm:text-base"
            style={{ color: 'var(--text-color)' }}
          />
        </div>
      )}

      {/* Final Submit Button */}
      {step.slot && (
        <button
          onClick={handleSubmit}
          disabled={!step.slot || !userDetails.name || !userDetails.mobile}
          className="w-full mt-6 sm:mt-8 text-white font-bold py-3 sm:py-4 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:bg-slate-300 disabled:cursor-not-allowed text-sm sm:text-base lg:text-lg"
          style={{
            backgroundColor: (!step.slot || !userDetails.name || !userDetails.mobile) ? '#cbd5e1' : 'var(--primary-color)'
          }}
        >
          Confirm Appointment
        </button>
      )}
    </div>
  );
};

// --- Detailed Form Component ---
const DetailedForm = () => {
  const [formData, setFormData] = useState({
    doctor: '',
    date: '',
    time: '',
    name: '',
    mobile: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.time) {
      alert('Please select a time slot.');
      return;
    }
    console.log('SUBMITTING APPOINTMENT:', formData);
    alert(`Thank you, ${formData.name}! Your appointment request has been sent.`);
  };

  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'];

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg focus:ring-2 focus:border-transparent text-sm sm:text-base"
          style={{ color: 'var(--text-color)' }}
          required
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number *"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg focus:ring-2 focus:border-transparent text-sm sm:text-base"
          style={{ color: 'var(--text-color)' }}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address (Optional)"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg focus:ring-2 focus:border-transparent text-sm sm:text-base"
          style={{ color: 'var(--text-color)' }}
        />
        <select
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg focus:ring-2 focus:border-transparent text-sm sm:text-base"
          style={{ color: 'var(--text-color)' }}
          required
        >
          <option value="">Choose your preferred doctor</option>
          <option>Dr. Anish Kumar</option>
          <option>Dr. Anurag Aggarwal</option>
        </select>
        <input
          type="date"
          name="date"
          value={formData.date}
          min={new Date().toISOString().split('T')[0]}
          onChange={handleChange}
          className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg focus:ring-2 focus:border-transparent text-sm sm:text-base sm:col-span-2 lg:col-span-1"
          style={{ color: 'var(--text-color)' }}
          required
        />
      </div>

      <div className="mb-6 sm:mb-8">
        <h4
          className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg"
          style={{ color: 'var(--secondary-color)' }}
        >
          Select Time
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {timeSlots.map(time => (
            <button
              key={time}
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, time }))}
              className={`p-2 sm:p-3 rounded-lg border-2 text-xs sm:text-sm transition-all ${formData.time === time ? 'border-2' : 'bg-slate-50 border-slate-200'
                }`}
              style={{
                backgroundColor: formData.time === time ? 'var(--primary-color)' + '10' : '#f8fafc',
                borderColor: formData.time === time ? 'var(--primary-color)' : '#e2e8f0',
                color: 'var(--text-color)'
              }}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full text-white font-bold py-3 sm:py-4 px-6 rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base lg:text-lg"
        style={{ backgroundColor: 'var(--primary-color)' }}
      >
        Book Appointment
      </button>
    </form>
  );
};

// --- Main Router Component ---
export default function BookingForm({ data, siteName }: BookingFormProps) {
  if (data.type === 'none') return null;

  return (
    <section
      id="appointment"
      className="py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: '#f8fafc' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
            style={{ color: 'var(--secondary-color)' }}
          >
            Book Your Appointment
          </h2>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary-color)' }}
          >
            Schedule your visit with our expert doctors at {siteName}.
          </p>
        </div>

        {data.type === 'simple' && data.availableDoctors && (
          <MultiStepForm availableDoctors={data.availableDoctors} />
        )}
        {data.type === 'detailed' && <DetailedForm />}
      </div>
    </section>
  );
}