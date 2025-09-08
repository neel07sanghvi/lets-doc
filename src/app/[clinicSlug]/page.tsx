import { allSitesData, SiteSlug } from "@/data";
import { notFound } from "next/navigation";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import Hero from "../components/sections/Hero";
import Metrics from "../components/sections/Metrics";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import Doctors from "../components/sections/Doctors";
import Gallery from "../components/sections/Gallery";
import BookingForm from "../components/sections/BookingForm";
import { Metadata } from "next";

type ClinicPageProps = {
  params: {
    clinicSlug: string;
  };
};

export async function generateMetadata({ params }: ClinicPageProps): Promise<Metadata> {
  const { clinicSlug } = params;
  const siteData = allSitesData[clinicSlug as SiteSlug];

  if (!siteData) {
    return {
      title: 'Page Not Found',
    }
  }

  return {
    title: siteData.name,
    description: `Book an appointment at ${siteData.name}. ${siteData.footer.about}`,
  };
}

export async function generateStaticParams() {
  const slugs = Object.keys(allSitesData);
  return slugs.map((slug) => ({
    clinicSlug: slug,
  }));
}

export default function ClinicPage({ params }: ClinicPageProps) {
  const { clinicSlug } = params;

  const isValidSlug = Object.keys(allSitesData).includes(clinicSlug);
  if (!isValidSlug) {
    notFound();
  }

  const siteData = allSitesData[clinicSlug as SiteSlug];

  // This object defines our CSS variables for the theme
  const themeStyle = {
    '--primary-color': siteData.theme.primary,
    '--secondary-color': siteData.theme.secondary,
    '--background-color': siteData.theme.background,
    '--text-color': siteData.theme.text,
    '--text-secondary-color': siteData.theme.textSecondary,
  } as React.CSSProperties;


  return (
    <div style={themeStyle}>
      <Header data={siteData.header} />

      <Hero data={siteData.hero} />

      {siteData.metrics && <Metrics data={siteData.metrics} />}

      <main className="min-h-screen" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>

        {siteData.services && <Services data={siteData.services} />}

        {siteData.testimonials && <Testimonials data={siteData.testimonials} />}

        {siteData.doctors && <Doctors data={siteData.doctors} />}

        {siteData.gallery && <Gallery data={siteData.gallery} />}

        {siteData.bookingForm.type !== 'none' && <BookingForm data={siteData.bookingForm} siteName={siteData.name} />}
      </main>

      <Footer data={siteData.footer} siteName={siteData.name} />
    </div>
  );
}