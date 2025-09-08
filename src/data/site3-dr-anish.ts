import { SiteData } from '@/types';

export const drAnishData: SiteData = {
  slug: 'dr-anish',
  name: "Dr. Anish's Dental Clinic",
  theme: {
    primary: '#2563eb', // blue
    secondary: '#1e293b', // dark gray/blue
    background: '#ffffff',
    text: '#1e293b',
    textSecondary: '#475569',
  },
  header: {
    logoText: "Dr. Anish's Dental Clinic",
    navLinks: [
      { label: 'Home', href: '#' },
      { label: 'Book Appointment', href: '#' },
      { label: 'Our Doctors', href: '#' },
      { label: 'Services', href: '#' },
      { label: 'Testimonials', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  hero: {
    title: 'Your Smile, Our Priority',
    subtitle: 'Established in 2003, Dr. Anish\'s Dental Clinic has been serving the community with exceptional dental care, combining traditional values with modern technology.',
    image: '/images/dr-anish/doctor-hero.jpg',
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
      { title: 'Preventive Care', description: 'Regular cleanings...', features: ['Professional Cleaning', 'Oral Examinations', 'Fluoride Treatments'], image: '/images/dr-anish/service1.jpg' },
      { title: 'Restorative Procedures', description: 'Expert restoration services...', features: ['Dental Fillings', 'Crowns & Bridges', 'Root Canal Treatment'], image: '/images/dr-anish/service2.jpg' },
      { title: 'Cosmetic Treatments', description: 'Transform your smile with...', features: ['Teeth Whitening', 'Porcelain Veneers', 'Smile Makeover'], image: '/images/dr-anish/service3.jpg' },
      { title: 'Orthodontics', description: 'Straighten your teeth with...', features: ['Traditional Braces', 'Clear Aligners', 'Retainers'], image: '/images/dr-anish/service4.jpg' }
    ],
  },
  doctors: {
    title: 'Meet Your Dentists',
    description: 'Our experienced team of dental professionals is committed to providing you with the highest quality care.',
    items: [
      {
        name: 'Dr. Anish Kumar',
        title: 'Chief Dentist & Oral Surgeon',
        experience: '20+ Years',
        bio: 'Dr. Anish Kumar is the founder and chief dentist with over two decades of experience in comprehensive dental care. He specializes in oral surgery, dental implants, and complex restorative procedures.',
        image: '/images/dr-anish/doctor-profile.jpg'
      }
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
      email: 'info@dranishdentalclinic.com',
      hours: 'Mon-Sat: 9AM-6PM'
    }
  },
};