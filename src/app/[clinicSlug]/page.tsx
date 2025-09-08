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
import Carousel from "../components/Carousel";
import { Metadata } from "next";
import WhyUdeti from "../components/sections/WhyUdeti";
import UdetiPricing from "../components/sections/UdetiPricing";
import ContactFormSection from "../components/sections/ContactForm";

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

  // Sample carousel images for Udeti (you can replace with actual images)
  const udetiCarouselImages = [
    '/images/udoti/carousel1.jpg',
    '/images/udoti/carousel2.jpg',
    '/images/udoti/carousel3.jpg',
    '/images/udoti/carousel4.jpg'
  ];

  // Render different layouts based on site type
  const renderUdetiLayout = () => (
    <>
      <Header data={siteData.header} />

      <div style={{ backgroundColor: 'var(--background-color)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <Hero data={siteData.hero} />

        {/* Carousel Section */}
        <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--background-color)' }}>
          <div className="container mx-auto px-6">
            <Carousel
              images={udetiCarouselImages}
              title="The Udeti Solution in Action"
              className="max-w-4xl mx-auto"
            />
          </div>
        </section>

        {/* Why Udeti Section */}
        <WhyUdeti />

        {/* Pricing Section */}
        <UdetiPricing />

        {/* Contact Form Section */}
        <ContactFormSection />

        {/* Metrics */}
        {siteData.metrics && <Metrics data={siteData.metrics} />}

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
          <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--background-color)' }}>
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
          <section className="py-16 md:py-24 bg-slate-50">
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
          <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--background-color)' }}>
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