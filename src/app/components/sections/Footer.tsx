import { SiteData } from "@/types";
import Link from "next/link";

type FooterProps = {
  data: SiteData['footer'];
  siteName: string;
};

export default function Footer({ data, siteName }: FooterProps) {
  return (
    <footer
      id="contact"
      className="text-white"
      style={{ backgroundColor: 'var(--secondary-color)' }}
    >
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* About Section */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 lg:mb-6">
              {siteName}
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
              {data.about}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 lg:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {data.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 lg:mb-6">
              Contact Information
            </h3>
            <address className="not-italic text-gray-300 space-y-3 sm:space-y-4 text-sm sm:text-base">
              <div>
                <strong className="text-white block mb-1">Address:</strong>
                <span className="leading-relaxed">{data.contactInfo.address}</span>
              </div>
              <div>
                <strong className="text-white block mb-1">Phone:</strong>
                <a
                  href={`tel:${data.contactInfo.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {data.contactInfo.phone}
                </a>
              </div>
              <div>
                <strong className="text-white block mb-1">Email:</strong>
                <a
                  href={`mailto:${data.contactInfo.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {data.contactInfo.email}
                </a>
              </div>
              <div>
                <strong className="text-white block mb-1">Hours:</strong>
                <span>{data.contactInfo.hours}</span>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div
        className="text-center py-3 sm:py-4 lg:py-6 border-t border-white border-opacity-20"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
      >
        <p className="text-gray-400 text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} {siteName}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}