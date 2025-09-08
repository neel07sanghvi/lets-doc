// src/components/sections/Doctors.tsx

import { SiteData } from "@/types";
import Image from "next/image";

type DoctorsProps = {
  data: SiteData['doctors'];
};

export default function Doctors({ data }: DoctorsProps) {
  if (!data || data.items.length === 0) {
    return null;
  }

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            {data.title}
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Doctor Profiles */}
        <div className="space-y-12">
          {data.items.map((doctor) => (
            <div key={doctor.name} className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3">
                {/* Doctor Image */}
                <div className="relative w-full h-80 md:h-auto">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    layout="fill"
                    objectFit="cover"
                    className="md:rounded-l-lg md:rounded-r-none"
                  />
                </div>

                {/* Doctor Info */}
                <div className="p-8 md:col-span-2">
                  <h3 className="text-2xl font-bold text-secondary">{doctor.name}</h3>
                  <p className="text-primary font-semibold mt-1">{doctor.title}</p>
                  <p className="text-sm text-text-secondary mb-4">{doctor.experience}</p>
                  <p className="text-text-secondary leading-relaxed mb-6">{doctor.bio}</p>

                  {doctor.specialty && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-secondary">Specialty</h4>
                      <p className="text-text-secondary">{doctor.specialty}</p>
                    </div>
                  )}

                  {doctor.education && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-secondary">Education</h4>
                      <p className="text-text-secondary">{doctor.education}</p>
                    </div>
                  )}

                  {doctor.areasOfInterest && (
                    <div>
                      <h4 className="font-semibold text-secondary mb-2">Areas of Interest</h4>
                      <div className="flex flex-wrap gap-2">
                        {doctor.areasOfInterest.map(interest => (
                          <span key={interest} className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}