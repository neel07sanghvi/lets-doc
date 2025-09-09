// src/data/site5-dr-anurag.ts
import { SiteData } from '@/types';

export const drAnuragData: SiteData = {
  slug: 'dr-anurag',
  name: "Dr. Anurag's Dental Clinic",
  theme: {
    primary: '#b45309', // brownish-gold / ochre
    secondary: '#1e293b', // dark gray
    background: '#ffffff',
    text: '#1e293b',
    textSecondary: '#475569',
  },
  header: {
    logoText: "Dr. Anurag's Dental Clinic",
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
    title: 'Your Smile, Our Priority',
    subtitle: 'Established in 2003, Dr. Anurag\'s Dental Clinic has been serving the community with exceptional dental care, combining traditional values with modern technology.',
    images: ['/images/dr-anurag/doctor-hero.jpg'],
  },
  metrics: [
    { value: '20+', label: 'Years of Experience' },
    { value: '10,000+', label: 'Patients Treated' },
    { value: '100+', label: 'Dental Camps Conducted' },
    { value: '4.9/5', label: 'Patient Rating' },
  ],
  services: {
    title: 'Our Dental Services',
    description: 'Comprehensive dental care services designed to meet all your oral health needs.',
    items: [
      { title: 'Preventive Care', description: 'Regular cleanings...', features: ['Professional Cleaning', 'Oral Examinations', 'Fluoride Treatments'], image: '/images/dr-anurag/service1.jpg' },
      { title: 'Restorative Procedures', description: 'Expert restoration services...', features: ['Dental Fillings', 'Crowns & Bridges', 'Root Canal Treatment'], image: '/images/dr-anurag/service2.jpg' },
      { title: 'Cosmetic Treatments', description: 'Transform your smile with...', features: ['Teeth Whitening', 'Porcelain Veneers', 'Smile Makeover'], image: '/images/dr-anurag/service3.jpg' },
    ],
  },
  gallery: {
    title: 'Our Clinic in Pics',
    images: [
      '/images/dr-anurag/gallery1.jpg',
      '/images/dr-anurag/gallery2.jpg',
      '/images/dr-anurag/gallery3.jpg',
    ]
  },
  doctors: {
    title: 'Meet Your Dentists',
    description: 'Our experienced team of dental professionals is committed to providing you with the highest quality care.',
    items: [
      {
        name: 'Dr. Anurag Aggarwal',
        title: 'Chief Dentist & Oral Surgeon',
        experience: '20+ Years',
        bio: 'Dr. Anurag Aggarwal is the founder and chief dentist with over two decades of experience in comprehensive dental care. He specializes in oral surgery, dental implants, and complex restorative procedures.',
        image: '/images/dr-anurag/doctor-profile.jpg'
      }
    ]
  },
  testimonials: {
    title: 'What Our Patients Say',
    items: [
      {
        quote: 'Dr. Anurag and his team provided exceptional care during my root canal treatment. The entire process was pain-free and the staff made me feel comfortable throughout. Highly recommend!',
        authorName: 'Fatima Khan',
        authorTitle: 'Teacher, 45',
      },
      {
        quote: 'The teeth whitening treatment exceeded my expectations! Dr. Kavya explained every step and the results were amazing. My confidence has improved significantly.',
        authorName: 'Arjun Mehta',
        authorTitle: 'Software Engineer, 32',
      },
      {
        quote: 'After losing several teeth, I thought I\'d never smile confidently again. The dental implants Dr. Anurag provided have given me back my smile and ability to eat properly. Excellent work!',
        authorName: 'Ramesh Gupta',
        authorTitle: 'Retired Government Officer, 68',
      },
    ]
  },
  bookingForm: {
    type: 'detailed',
  },
  footer: {
    about: 'Committed to providing exceptional dental care with compassion, expertise, and cutting-edge technology. Your smile is our priority, and your comfort is our commitment.',
    quickLinks: [
      { label: 'Home', href: '#' },
      { label: 'Book Appointment', href: '#' },
      { label: 'Our Doctors', href: '#' },
      { label: 'Services', href: '#' },
      { label: 'Testimonials', href: '#' },
    ],
    contactInfo: {
      address: '123 Medical Complex, MG Road, Mumbai, Maharashtra 400001',
      phone: '+91 9876543210',
      email: 'info@dranuragdentalclinic.com',
      hours: 'Mon-Sat: 9AM-6PM'
    }
  },
};