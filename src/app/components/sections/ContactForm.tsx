"use client";

import { useState } from 'react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    emailAddress: '',
    city: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon to transform your clinic.');
    // Reset form
    setFormData({
      fullName: '',
      contactNumber: '',
      emailAddress: '',
      city: ''
    });
  };

  return (
    <section id='contact-us' className="py-16 md:py-24" style={{ backgroundColor: 'var(--background-color)' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--secondary-color)' }}>
              Ready to Transform Your Clinic?
            </h2>
            <p className="text-lg" style={{ color: 'var(--text-secondary-color)' }}>
              Get started with Udeti today and revolutionize your healthcare practice.
              Fill out the form below and our team will contact you within 24 hours.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--secondary-color)' }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-all duration-200"
                    style={{
                      color: 'var(--text-color)'
                    }}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contactNumber"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--secondary-color)' }}
                  >
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-all duration-200"
                    style={{
                      color: 'var(--text-color)'
                    }}
                    placeholder="Enter your contact number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="emailAddress"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--secondary-color)' }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-all duration-200"
                    style={{
                      color: 'var(--text-color)'
                    }}
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--secondary-color)' }}
                  >
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-all duration-200"
                    style={{
                      color: 'var(--text-color)'
                    }}
                    placeholder="Enter your city"
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 text-lg min-w-48"
                  style={{ backgroundColor: 'var(--primary-color)' }}
                >
                  Get Started Today
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}