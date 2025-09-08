import { SiteData } from "@/types";
import Link from "next/link";

type FooterProps = {
  data: SiteData['footer'];
  siteName: string;
};

export default function Footer({ data, siteName }: FooterProps) {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-2xl font-bold mb-4">{siteName}</h3>
          <p className="text-gray-300 leading-relaxed">{data.about}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {data.quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <address className="not-italic text-gray-300 space-y-3">
            <p><strong>Address:</strong> {data.contactInfo.address}</p>
            <p><strong>Phone:</strong> {data.contactInfo.phone}</p>
            <p><strong>Email:</strong> {data.contactInfo.email}</p>
            <p><strong>Hours:</strong> {data.contactInfo.hours}</p>
          </address>
        </div>
      </div>
      <div className="bg-black bg-opacity-25 text-center py-4">
        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} {siteName}. All Rights Reserved.</p>
      </div>
    </footer>
  );
}