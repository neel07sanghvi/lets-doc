"use client";

import { SiteData } from "@/types";
import Carousel from "../raw/Carousel";

type HeroProps = {
  data: SiteData['hero'];
};

export default function Hero({ data }: HeroProps) {
  // Don't render anything if the title is missing
  if (!data.title) {
    return null;
  }

  return (
    <section
      id={data.hrefId}
      className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
      style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center text-center">
          {/* Text Content */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-4 sm:mb-6"
              style={{ color: 'var(--secondary-color)' }}
            >
              {data.title}
            </h1>
            {data.subtitle && (
              <h2
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold max-w-3xl mx-auto"
                style={{ color: 'var(--primary-color)' }}
              >
                {data.subtitle}
              </h2>
            )}
          </div>

          {/* Image Carousel */}
          {data.images && data.images.length > 0 && (
            <div className="w-full max-w-5xl mx-auto">
              <Carousel
                images={data.images}
                className="w-full"
                autoSlide={true}
                slideInterval={4000}
                showDots={data.images.length > 1}
                showArrows={data.images.length > 1}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}