"use client";

import { SiteData } from "@/types";
import Link from "next/link";
import { useState } from "react";

type HeaderProps = {
  data: SiteData['header'];
};

export default function Header({ data }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-sm" style={{ backgroundColor: 'var(--background-color)' }}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--secondary-color)' }}>
            {data.logoText}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {data.navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-medium hover:transition-colors duration-200"
                style={{
                  color: 'var(--text-secondary-color)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--primary-color)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary-color)';
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <a
            href={data.buttonNavLink?.href || "#appointment"}
            className="hidden lg:block px-4 xl:px-6 py-2 xl:py-2.5 rounded-lg text-white font-semibold transition-transform hover:scale-105 shadow-sm text-sm xl:text-base"
            style={{ backgroundColor: 'var(--primary-color)' }}
          >
            {data.buttonNavLink?.label || "Book Appointment"}
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: 'var(--text-secondary-color)' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-opacity-20" style={{ borderColor: 'var(--text-secondary-color)' }}>
            <div className="flex flex-col space-y-3 pt-4">
              {data.navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-medium py-2 transition-colors duration-200"
                  style={{ color: 'var(--text-secondary-color)' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={data.buttonNavLink?.href || "#appointment"}
                className="mt-3 px-4 py-2.5 rounded-lg text-white font-semibold text-center"
                style={{ backgroundColor: 'var(--primary-color)' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {data.buttonNavLink?.label || "Book Appointment"}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}