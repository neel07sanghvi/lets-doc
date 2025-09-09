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
    <section
      id="doctors"
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
            {data.description}
          </p>
        </div>

        {/* Doctor Profiles */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {data.items.map((doctor, index) => (
            <div
              key={doctor.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden max-w-5xl mx-auto transform transition-all duration-300 hover:shadow-xl"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-3 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Doctor Image */}
                <div className={`relative w-full h-64 sm:h-80 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-3' : 'lg:col-start-1'}`}>
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Doctor Info */}
                <div className={`p-4 sm:p-6 lg:p-8 lg:col-span-2 ${index % 2 === 1 ? 'lg:col-start-1' : 'lg:col-start-2'}`}>
                  <div className="h-full flex flex-col">
                    {/* Basic Info */}
                    <div className="mb-4 sm:mb-6">
                      <h3
                        className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2"
                        style={{ color: 'var(--secondary-color)' }}
                      >
                        {doctor.name}
                      </h3>
                      <p
                        className="text-base sm:text-lg lg:text-xl font-semibold mb-1"
                        style={{ color: 'var(--primary-color)' }}
                      >
                        {doctor.title}
                      </p>
                      <p
                        className="text-sm sm:text-base"
                        style={{ color: 'var(--text-secondary-color)' }}
                      >
                        {doctor.experience}
                      </p>
                    </div>

                    {/* Bio */}
                    <p
                      className="text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 flex-grow"
                      style={{ color: 'var(--text-secondary-color)' }}
                    >
                      {doctor.bio}
                    </p>

                    {/* Additional Details */}
                    <div className="space-y-3 sm:space-y-4">
                      {doctor.specialty && (
                        <div>
                          <h4
                            className="font-semibold text-sm sm:text-base lg:text-lg mb-1"
                            style={{ color: 'var(--secondary-color)' }}
                          >
                            Specialty
                          </h4>
                          <p
                            className="text-sm sm:text-base"
                            style={{ color: 'var(--text-secondary-color)' }}
                          >
                            {doctor.specialty}
                          </p>
                        </div>
                      )}

                      {doctor.education && (
                        <div>
                          <h4
                            className="font-semibold text-sm sm:text-base lg:text-lg mb-1"
                            style={{ color: 'var(--secondary-color)' }}
                          >
                            Education
                          </h4>
                          <p
                            className="text-sm sm:text-base leading-relaxed"
                            style={{ color: 'var(--text-secondary-color)' }}
                          >
                            {doctor.education}
                          </p>
                        </div>
                      )}

                      {doctor.areasOfInterest && doctor.areasOfInterest.length > 0 && (
                        <div>
                          <h4
                            className="font-semibold text-sm sm:text-base lg:text-lg mb-2 sm:mb-3"
                            style={{ color: 'var(--secondary-color)' }}
                          >
                            Areas of Interest
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {doctor.areasOfInterest.map((interest, interestIndex) => (
                              <span
                                key={interestIndex}
                                className="text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full"
                                style={{
                                  backgroundColor: 'var(--primary-color)' + '10',
                                  color: 'var(--primary-color)'
                                }}
                              >
                                {interest}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}