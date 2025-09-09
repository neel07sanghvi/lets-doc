"use client";

import { SiteData } from "@/types";
import Image from "next/image";
import { useState } from "react";

type GalleryProps = {
  data: SiteData['gallery'];
};

export default function Gallery({ data }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!data || data.images.length === 0) {
    return null;
  }

  return (
    <>
      <section
        id="clinic"
        className="py-12 sm:py-16 md:py-20 lg:py-24"
        style={{ backgroundColor: '#f8fafc' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
              style={{ color: 'var(--secondary-color)' }}
            >
              {data.title}
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl lg:max-w-4xl mx-auto leading-relaxed"
              style={{ color: 'var(--text-secondary-color)' }}
            >
              Take a virtual tour of our facility designed for your comfort and care.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {data.images.map((src, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer group"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`Clinic Gallery Image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl sm:text-2xl font-bold z-10"
            >
              ✕
            </button>
            <div className="relative w-full h-full">
              <Image
                src={selectedImage}
                alt="Gallery Image"
                width={800}
                height={600}
                className="object-contain w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}