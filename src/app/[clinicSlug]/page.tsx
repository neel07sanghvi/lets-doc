type ClinicPageProps = {
  params: {
    clinicSlug: string;
  };
};

export default function ClinicPage({ params }: ClinicPageProps) {
  return (
    <main>
      <h1>This is the page for: {params.clinicSlug}</h1>
    </main>
  );
}