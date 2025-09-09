import { allSitesData, SiteSlug } from "@/data";
import { notFound } from "next/navigation";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import Hero from "../components/sections/Hero";
import Metrics from "../components/sections/Metrics";
import Testimonials from "../components/sections/Testimonials";
import BookingForm from "../components/sections/BookingForm";
import Carousel from "../components/raw/Carousel";
import { Metadata } from "next";
import WhyUdeti from "../components/sections/WhyUdeti";
import UdetiPricing from "../components/sections/UdetiPricing";
import ContactFormSection from "../components/sections/ContactForm";
import Image from 'next/image';

type ClinicPageProps = {
  params: {
    clinicSlug: string;
  };
};

export async function generateMetadata({ params }: ClinicPageProps): Promise<Metadata> {
  const { clinicSlug } = await params;
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

export default async function ClinicPage({ params }: ClinicPageProps) {
  const { clinicSlug } = await params;

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

  // Render different layouts based on site type
  const renderUdetiLayout = () => (
    <>
      <Header data={siteData.header} />

      <div style={{ backgroundColor: 'var(--background-color)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <Hero data={siteData.hero} />

        {/* Why Udeti Section */}
        <WhyUdeti />

        {/* Pricing Section */}
        <UdetiPricing />

        {/* Contact Form Section */}
        <ContactFormSection />

        <div id="about" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          {/* About Content Section */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16 mb-12 sm:mb-16 lg:mb-20">
            {/* Text Content */}
            <div className="flex-1 order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 lg:mb-10">
                Transform Your Clinic with Udeti
              </h2>
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                  {"Udeti is a comprehensive clinic management solution designed to digitize standalone and small-scale clinics with ease. It seamlessly integrates with the Udeti developed clinic website, ensuring improved patient visibility and engagement. With low or no infrastructure requirements, Udeti delivers the lowest-cost digital solution while providing the optionality of integrating with the ABDM ecosystem."}
                </p>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                  {"The solution has also been selected by the National Health Authority (NHA) and the Governments of Tamil Nadu and Rajasthan, reaffirming its reliability, scalability, and alignment with India's digital health mission."}
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="flex-shrink-0 order-1 lg:order-2">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] mx-auto">
                <Image
                  src="/images/udoti/about.jpg"
                  fill
                  alt="About Udeti"
                  className="object-cover rounded-lg shadow-lg"
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, (max-width: 1280px) 384px, 450px"
                />
              </div>
            </div>
          </div>

          {/* Metrics Section */}
          {siteData.metrics &&
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16">
                Transforming Healthcare by the Numbers
              </h3>
              <Metrics data={siteData.metrics} />
            </div>
          }
        </div>

        {/* Testimonials */}
        {siteData.testimonials && <Testimonials data={siteData.testimonials} />}
      </div>

      <Footer data={siteData.footer} siteName={siteData.name} />
    </>
  );

  const renderClinicLayout = () => (
    <>
      <Header data={siteData.header} />

      <div style={{ backgroundColor: 'var(--background-color)', minHeight: '100vh' }}>
        {/* Gallery Carousel */}
        {siteData.gallery && (
          <section id="clinic" className="py-16 md:py-24" style={{ backgroundColor: 'var(--background-color)' }}>
            <div className="container mx-auto px-6">
              <Carousel
                images={siteData.gallery.images}
                title={siteData.gallery.title}
                className="max-w-4xl mx-auto"
              />
            </div>
          </section>
        )}

        {/* Doctors Carousel */}
        {siteData.doctors && (
          <section id="doctors" className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--secondary-color)' }}>
                  {siteData.doctors.title}
                </h2>
                <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary-color)' }}>
                  {siteData.doctors.description}
                </p>
              </div>
              {siteData.doctors.items.length > 0 && (
                <Carousel
                  images={siteData.doctors.items.map(doctor => doctor.image)}
                  className="max-w-4xl mx-auto"
                />
              )}
            </div>
          </section>
        )}

        {/* Booking Form */}
        {siteData.bookingForm.type !== 'none' && (
          <BookingForm data={siteData.bookingForm} siteName={siteData.name} />
        )}

        {/* Services Carousel */}
        {siteData.services && (
          <section id="services" className="py-16 md:py-24" style={{ backgroundColor: 'var(--background-color)' }}>
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--secondary-color)' }}>
                  {siteData.services.title}
                </h2>
                <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary-color)' }}>
                  {siteData.services.description}
                </p>
              </div>
              <Carousel
                images={siteData.services.items.map(service => service.image)}
                className="max-w-4xl mx-auto"
              />
            </div>
          </section>
        )}

        {/* Metrics */}
        {siteData.metrics && <Metrics data={siteData.metrics} />}

        {/* Testimonials */}
        {siteData.testimonials && <Testimonials data={siteData.testimonials} />}
      </div>

      <Footer data={siteData.footer} siteName={siteData.name} />
    </>
  );

  return (
    <div style={themeStyle}>
      {siteData.slug === 'udoti' ? renderUdetiLayout() : renderClinicLayout()}
    </div>
  );
}