export interface Theme {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  textSecondary: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Service {
  image: string;
  title: string;
  description: string;
  features: string[];
}

export interface Doctor {
  name: string;
  title: string;
  experience: string;
  bio: string;
  image: string;
  education?: string;
  specialty?: string;
  areasOfInterest?: string[];
}

export interface Testimonial {
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage?: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}

// This is the main data structure for an entire site
export interface SiteData {
  slug: string;
  name: string;
  theme: Theme;
  header: {
    logoText: string;
    navLinks: NavLink[];
  };
  hero: {
    title: string;
    subtitle: string;
    image: string;
  };
  metrics?: Metric[];
  services?: {
    title: string;
    description: string;
    items: Service[];
  };
  doctors?: {
    title: string;
    description: string;
    items: Doctor[];
  };
  testimonials?: {
    title: string;
    items: Testimonial[];
  };
  gallery?: {
    title: string;
    images: string[];
  };
  bookingForm: {
    type: 'simple' | 'detailed' | 'none';
    availableDoctors?: string[];
  };
  footer: {
    about: string;
    quickLinks: NavLink[];
    contactInfo: ContactInfo;
  };
}