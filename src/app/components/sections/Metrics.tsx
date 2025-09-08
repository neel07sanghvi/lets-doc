// src/components/sections/Metrics.tsx

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
    <section className="bg-slate-50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {data.map((metric) => (
            <div key={metric.label}>
              <p className="text-4xl lg:text-5xl font-bold text-primary">
                {metric.value}
              </p>
              <p className="mt-2 text-sm lg:text-base text-text-secondary">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}