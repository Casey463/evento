import H1 from "@/components/h1";

type EventPageProps = {
  params: {
    city: string;
  };
};

export default async function EventsPage({ params }: EventPageProps) {
  const city = params.city;

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events = await response.json();

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1>
        {city === "All" && "All Events"}
        {city !== "All" &&
          `Events in ${city.charAt(0).toUpperCase() + params.city.slice(1)}`}
      </H1>

      {events.map((event) => (
        <section key={event.id} className="mt-8">
          {event.name}
        </section>
      ))}
    </main>
  );
}
