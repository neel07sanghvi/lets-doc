// src/components/sections/Gallery.tsx

import { SiteData } from "@/types";
import Image from "next/image";

type GalleryProps = {
  data: SiteData['gallery'];
};

export default function Gallery({ data }: GalleryProps) {
  if (!data || data.images.length === 0) {
    return null;
  }

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            {data.title}
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Take a virtual tour of our facility designed for your comfort and care.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.images.map((src, index) => (
            <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-xl hover:scale-105">
              <Image
                src={src}
                alt={`Clinic Gallery Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}