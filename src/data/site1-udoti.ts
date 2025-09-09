import { SiteData } from '@/types';

export const udotiData: SiteData = {
  slug: 'udoti',
  name: 'Udeti by LetsDoc',
  theme: {
    primary: '#16a34a', // green
    secondary: '#f97316', // orange
    background: '#f8fafc',
    text: '#1e293b',
    textSecondary: '#475569',
  },
  header: {
    logoText: 'LetsDoc',
    navLinks: [
      { label: 'Solution', href: '#solution' },
      { label: 'Why Udeti', href: '#why-udeti' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Contact Us', href: '#contact-us' },
      { label: 'About Us', href: '#about' },
      { label: 'Testimonials', href: '#testimonials' },
    ],
    buttonNavLink: {
      label: "Request Demo",
      href: "#contact-us"
    }
  },
  hero: {
    title: 'The Udeti Solution',
    subtitle: 'Comprehensive digital transformation for your healthcare practice',
    images: ['/images/udoti/hero-carousel.jpg', '/images/udoti/hero-carousel2.jpg'],
    hrefId: "solution"
  },
  metrics: [
    { value: '20%-40%', label: 'Revenue Growth for Clinics' },
    { value: '500+', label: 'Udeti Installations' },
    { value: '1M+', label: 'Patient Records Digitized' },
    { value: '4.7', label: 'User Ratings' },
  ],
  testimonials: {
    title: 'Testimonials from our Doctors',
    items: [
      {
        quote: 'With Udeti, patients are now able to book appointment directly from my website, making life easier. Also, now that I have a website link in my google business account, it improves user engagement and reviews over time.',
        authorName: 'Dr. Manasa Madhuri',
        authorTitle: 'Senior Physician, Hyderabad, Telangana',
      },
      {
        quote: 'The system automatically sends reminders to patients ahead of appointments and also for follow-ups improving clinic utilization by 10%-20%. Additionally I am able to broadcast to my patients about any camps in my clinic',
        authorName: 'Dr. Rajesh Kumar',
        authorTitle: 'General Practitioner, Bangalore, Karnataka',
      },
      {
        quote: 'Finally, a solution that understands the Indian healthcare ecosystem. Simple, cost effective and easy to use. Onboarding old new staff on their own mobile phones has never been this easy.',
        authorName: 'Dr. Priya Mehta',
        authorTitle: 'Family Medicine, Delhi, India',
      },
    ],
  },
  bookingForm: {
    type: 'none'
  },
  footer: {
    about: 'Digitizing healthcare in India since 2015. Empowering healthcare providers with cutting-edge digital solutions.',
    quickLinks: [
      { label: 'About Udeti', href: '#' },
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Request Demo', href: '#' },
    ],
    contactInfo: {
      address: 'LetsDoc Healthcare Technologies Pvt. Ltd, Bengaluru, Pin: 560016',
      phone: '+91 88844 81035',
      email: 'bd@letsdoc.in',
      hours: 'Mon-Sat: 9AM-6PM'
    }
  },
};