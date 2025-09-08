// src/components/sections/Hero.tsx

import { SiteData } from "@/types";
import Image from "next/image";

type HeroProps = {
  data: SiteData['hero'];
};

export default function Hero({ data }: HeroProps) {
  // Don't render anything if the title is missing (for sites like Dr. Ankit)
  if (!data.title) {
    return null;
  }

  return (
    <section className="bg-background text-text-main">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            {data.subtitle && (
              <h2 className="text-primary font-semibold text-lg mb-2">
                {data.subtitle}
              </h2>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-secondary">
              {data.title}
            </h1>
          </div>

          {/* Image */}
          {data.image && (
            <div className="flex justify-center">
              <Image
                src={data.image}
                alt={data.title}
                width={500}
                height={500}
                className="rounded-lg shadow-xl object-cover w-full max-w-md"
                priority // Load the hero image first
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}