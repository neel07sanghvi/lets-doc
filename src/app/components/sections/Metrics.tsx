import { SiteData } from "@/types";

type MetricsProps = {
  data: SiteData['metrics'];
};

export default function Metrics({ data }: MetricsProps) {
  // If there's no metrics data for a site, don't render anything.
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <section className="py-8 sm:py-12 lg:py-16" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
          {data.map((metric, index) => (
            <div key={index} className="flex flex-col items-center">
              <p
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2"
                style={{ color: 'var(--primary-color)' }}
              >
                {metric.value}
              </p>
              <p
                className="text-xs sm:text-sm md:text-base lg:text-lg leading-tight"
                style={{ color: 'var(--text-secondary-color)' }}
              >
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}