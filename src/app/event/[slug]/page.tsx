import H1 from "@/components/h1";
import Image from "next/image";

type EventPageProps = {
  params: {
    slug: string;
  };
};

export default async function EventPage({ params }: EventPageProps) {
  const slug = params.slug;
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event = await response.json();
  console.log(event);
  return (
    <main>
      <section></section>
      <section className="relative overflow-hidden flex justify-center items-center">
        <Image
          src={event.imageUrl}
          className="z-0 object-cover blur-3xl"
          alt="Event background image"
          fill
          quality={50}
          sizes="(max-width:1280px) 100vw, 1280px"
          priority
        />
      <div></div>
    </main>
  );
}
