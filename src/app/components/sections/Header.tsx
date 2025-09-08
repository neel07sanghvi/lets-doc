import { SiteData } from "@/types";
import Link from "next/link";

type HeaderProps = {
  data: SiteData['header'];
};

export default function Header({ data }: HeaderProps) {
  return (
    <header className="bg-background shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-secondary">
          {data.logoText}
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {data.navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="text-text-secondary font-medium hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <a href="#" className="hidden md:block px-6 py-2.5 rounded-lg text-white font-semibold transition-transform hover:scale-105 bg-primary shadow-sm">
          Book Appointment
        </a>

        <div className="md:hidden">
          <button className="text-text-secondary focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}