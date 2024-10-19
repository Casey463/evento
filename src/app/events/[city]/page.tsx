import H1 from "@/components/h1";

type EventPageProps = {
  params: {
    city: string;
  };
};

export default function EventsPage({ params }: EventPageProps) {
  const city = params.city.charAt(0).toUpperCase() + params.city.slice(1);
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1>
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${city}`}
      </H1>
    </main>
  );
}
