// src/components/sections/Hero.tsx

import { SiteData } from "@/types";
import Image from "next/image";
import Carousel from "../raw/Carousel";

type HeroProps = {
  data: SiteData['hero'];
};

export default function Hero({ data }: HeroProps) {
  // Don't render anything if the title is missing (for sites like Dr. Ankit)
  if (!data.title) {
    return null;
  }

  return (
    <section id={data.hrefId} className="bg-background text-text-main">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col justify-center items-center">
          {/* Text Content */}
          <div className="text-center md:text-left flex flex-col justify-center items-center">
            <span className="text-4xl md:text-5xl font-extrabold leading-tight text-secondary">
              {data.title}
            </span>
            {data.subtitle && (
              <h2 className="text-primary font-semibold text-lg mb-2">
                {data.subtitle}
              </h2>
            )}
          </div>

          {/* Image */}
          {data.images && (
            <div className="container">
              <Carousel
                images={data.images}
                className="max-w-3xl mx-auto"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}