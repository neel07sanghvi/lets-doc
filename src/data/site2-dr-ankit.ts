// src/data/site2-dr-ankit.ts
import { SiteData } from '@/types';

export const drAnkitData: SiteData = {
  slug: 'dr-ankit',
  name: "Dr. Ankit Clinic",
  theme: {
    primary: '#f97316', // orange
    secondary: '#1e293b', // dark gray
    background: '#ffffff',
    text: '#1e293b',
    textSecondary: '#475569',
  },
  header: {
    logoText: 'Dr. Ankit Clinic',
    navLinks: [
      { label: 'Clinic', href: '#clinic' },
      { label: 'Doctors', href: '#doctors' },
      { label: 'Book Appointment', href: '#appointment' },
      { label: 'Services', href: '#services' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ]
  },
  hero: {
    title: "Book Your Appointment",
    subtitle: "Select a doctor to begin.",
    images: [],
  },
  metrics: [
    { value: '22+', label: 'Years of Experience' },
    { value: '12,000+', label: 'Patients Treated' },
    { value: '120+', label: 'Dental Camps Conducted' },
    { value: '4.9/5', label: 'Patient Rating' },
  ],
  services: {
    title: 'Our Services',
    description: 'Comprehensive dental care tailored to your needs, from routine cleanings to advanced treatments.',
    items: [
      { title: 'Preventive Care', description: 'Regular cleanings, examinations, and preventive treatments.', features: ['Professional Cleaning', 'Oral Examinations', 'Fluoride Treatments', 'Sealants'], image: '/images/dr-ankit/service1.jpg' },
      { title: 'Cosmetic Dentistry', description: 'Enhance your smile with our cosmetic procedures.', features: ['Teeth Whitening', 'Veneers', 'Bonding'], image: '/images/dr-ankit/service2.jpg' },
      { title: 'Restorative Dentistry', description: 'Repairing and restoring your teeth to full function.', features: ['Fillings', 'Crowns', 'Bridges'], image: '/images/dr-ankit/service3.jpg' },
    ],
  },
  gallery: {
    title: 'Our Clinic in Pics',
    images: [
      '/images/dr-ankit/gallery1.jpg',
      '/images/dr-ankit/gallery2.jpg',
      '/images/dr-ankit/gallery3.jpg',
      '/images/dr-ankit/gallery4.jpg',
    ]
  },
  doctors: {
    title: 'Meet Your Dentists',
    description: 'Our experienced team of dental professionals is committed to providing you with the highest quality care.',
    items: [
      {
        name: 'Dr. Ankit',
        title: 'Chief Medical Officer & Founder',
        experience: '22+ Years Experience',
        bio: 'Dr. Ankit is a distinguished internal medicine specialist and the founder of our clinic. With over two decades of experience, he has dedicated his career to providing comprehensive healthcare with a focus on preventive medicine and patient education.',
        image: '/images/dr-ankit/doctor-profile.jpg',
        specialty: 'Internal Medicine, Cardiology & Preventive Care',
        education: 'MBBS, MD (Internal Medicine), All Institute of Medical Sciences, New Delhi',
        areasOfInterest: ['Preventive Cardiology', 'Diabetes Management', 'Hypertension Care']
      },
    ]
  },
  testimonials: {
    title: 'What Our Patients Say',
    items: [
      {
        quote: 'Dr. Ankit and his team provided exceptional care during my treatment. The entire process was comfortable and the staff made me feel at ease throughout. Highly recommend!',
        authorName: 'Fatima Khan',
        authorTitle: 'Teacher, 45',
      },
      {
        quote: 'The teeth whitening treatment exceeded my expectations! Dr. Priya explained every step and the results were amazing. My confidence has improved significantly.',
        authorName: 'Arjun Mehta',
        authorTitle: 'Software Engineer, 32',
      },
      {
        quote: 'After my health issues, I thought I\'d never feel confident again. The comprehensive care Dr. Ankit provided has given me back my confidence and quality of life. Excellent work!',
        authorName: 'Ramesh Gupta',
        authorTitle: 'Retired Government Officer, 68',
      },
    ],
  },
  bookingForm: {
    type: 'simple',
    availableDoctors: ['Dr. Ankit (General Medicine)', 'Dr. Priya Sharma (Orthodontics)', 'Dr. Rajesh Kumar (Oral Surgery)'],
  },
  footer: {
    about: 'Committed to providing exceptional healthcare with compassion, expertise, and cutting-edge technology. Your health is our priority, and your comfort is our commitment.',
    quickLinks: [
      { label: 'Clinic', href: '#' },
      { label: 'Doctors', href: '#' },
      { label: 'Book Appointment', href: '#' },
      { label: 'Services', href: '#' },
      { label: 'Testimonials', href: '#' },
    ],
    contactInfo: {
      address: '123 Medical Complex, MG Road, Mumbai, Maharashtra 400001',
      phone: '+91 9876543210',
      email: 'info@drankitclinic.com',
      hours: 'Mon-Sat: 9AM-6PM'
    }
  },
};