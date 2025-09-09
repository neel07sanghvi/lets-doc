"use client";

import { SiteData } from "@/types";
import { useState, useMemo } from "react";

// Main component props
type BookingFormProps = {
  data: SiteData['bookingForm'];
  siteName: string;
};

// --- Multi-Step Form Component (The new "Simple" form) ---
const MultiStepForm = ({ availableDoctors }: { availableDoctors: string[] }) => {
  const [step, setStep] = useState({
    doctor: null as string | null,
    date: null as string | null,
    period: 'Morning' as 'Morning' | 'Evening',
    slot: null as string | null,
  });
  const [userDetails, setUserDetails] = useState({ name: '', mobile: '', email: '' });

  // Mock availability data - in a real app, this would come from a database
  const morningSlots = [{ time: '9:00 AM', status: 'Available' }, { time: '9:30 AM', status: 'Available' }, { time: '10:00 AM', status: 'Booked' }, { time: '10:30 AM', status: 'Available' }, { time: '11:00 AM', status: 'Available' }, { time: '11:30 AM', status: 'Booked' }];
  const eveningSlots = [{ time: '4:00 PM', status: 'Available' }, { time: '4:30 PM', status: 'Booked' }, { time: '5:00 PM', status: 'Available' }, { time: '5:30 PM', status: 'Available' }];

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
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto space-y-6">
      {/* Step 1: Select Doctor */}
      <div>
        <h3 className="font-semibold text-lg mb-4" style={{ color: 'var(--secondary-color)' }}>
          Select Your Doctor
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {availableDoctors.map(doctor => (
            <button
              key={doctor}
              onClick={() => setStep({ ...step, doctor, date: null, slot: null })}
              className={`p-4 text-left rounded-lg border-2 transition-all ${step.doctor === doctor
                ? 'border-2'
                : 'bg-white border-slate-200 hover:border-opacity-50'
                }`}
              style={{
                backgroundColor: step.doctor === doctor ? 'var(--primary-color)' + '10' : 'white',
                borderColor: step.doctor === doctor ? 'var(--primary-color)' : '#e2e8f0',
                color: step.doctor === doctor ? 'var(--primary-color)' : 'var(--text-color)'
              }}
            >
              <p className="font-semibold" style={{ color: 'var(--secondary-color)' }}>
                {doctor.split('(')[0]}
              </p>
              <p className="text-sm" style={{ color: 'var(--text-secondary-color)' }}>
                {doctor.split('(')[1].replace(')', '')}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Choose Date (appears after doctor is selected) */}
      {step.doctor && (
        <div className="border-t pt-6">
          <h3 className="font-semibold text-lg mb-4" style={{ color: 'var(--secondary-color)' }}>
            Choose Date
          </h3>
          <input
            type="date"
            onChange={(e) => setStep({ ...step, date: e.target.value, slot: null })}
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:border-transparent"
            style={{
              color: 'var(--text-color)',
            }}
          />
        </div>
      )}

      {/* Step 3 & 4: Choose Period & Slot (appears after date is selected) */}
      {step.date && (
        <div className="border-t pt-6">
          {/* Period Tabs */}
          <div className="flex border border-slate-300 rounded-lg p-1 bg-slate-100 mb-4">
            <button
              onClick={() => setStep({ ...step, period: 'Morning' })}
              className={`flex-1 p-2 rounded-md transition-colors ${step.period === 'Morning' ? 'text-white shadow' : 'hover:bg-slate-200'
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
              className={`flex-1 p-2 rounded-md transition-colors ${step.period === 'Evening' ? 'text-white shadow' : 'hover:bg-slate-200'
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
          <h3 className="font-semibold mb-2" style={{ color: 'var(--secondary-color)' }}>
            Select Slot - <span className="text-sm font-normal">{step.period}</span>
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
            {slotsToShow.map(slot => (
              <button
                key={slot.time}
                onClick={() => setStep({ ...step, slot: slot.time })}
                disabled={slot.status === 'Booked'}
                className={`p-3 text-center rounded-lg border-2 text-sm transition-all disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed ${step.slot === slot.time
                  ? 'border-2'
                  : 'bg-white border-slate-200'
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
        <div className="border-t pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleUserDetailsChange}
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:border-transparent"
            style={{
              color: 'var(--text-color)',
            }}
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            onChange={handleUserDetailsChange}
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:border-transparent"
            style={{
              color: 'var(--text-color)',
            }}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address (Optional)"
            onChange={handleUserDetailsChange}
            className="w-full p-3 border border-slate-300 rounded-lg md:col-span-2 focus:ring-2 focus:border-transparent"
            style={{
              color: 'var(--text-color)',
            }}
          />
        </div>
      )}

      {/* Final Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={!step.slot || !userDetails.name || !userDetails.mobile}
        className="w-full mt-4 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:bg-slate-300 disabled:cursor-not-allowed"
        style={{
          backgroundColor: (!step.slot || !userDetails.name || !userDetails.mobile) ? '#cbd5e1' : 'var(--primary-color)'
        }}
      >
        Confirm Appointment
      </button>
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
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:border-transparent"
          style={{
            color: 'var(--text-color)',
          }}
          required
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          onChange={handleChange}
          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:border-transparent"
          style={{
            color: 'var(--text-color)',
          }}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address (Optional)"
          onChange={handleChange}
          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:border-transparent"
          style={{
            color: 'var(--text-color)',
          }}
        />
        <select
          name="doctor"
          onChange={handleChange}
          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:border-transparent"
          style={{
            color: 'var(--text-color)',
          }}
          required
        >
          <option value="">Choose your preferred doctor</option>
          <option>Dr. Anish Kumar</option>
          <option>Dr. Anurag Aggarwal</option>
        </select>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:border-transparent"
          style={{
            color: 'var(--text-color)',
          }}
          required
        />
      </div>

      <div className="mt-6">
        <h4 className="font-semibold mb-3" style={{ color: 'var(--secondary-color)' }}>
          Select Time
        </h4>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {timeSlots.map(time => (
            <button
              key={time}
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, time }))}
              className={`p-3 rounded-lg border-2 text-sm transition-all ${formData.time === time
                ? 'border-2'
                : 'bg-slate-50 border-slate-200'
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
        className="w-full mt-8 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
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
    <section id="appointment" className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--secondary-color)' }}>
            Book Your Appointment
          </h2>
          <p className="mt-4 text-lg" style={{ color: 'var(--text-secondary-color)' }}>
            Schedule your visit with our expert dentists at {siteName}.
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