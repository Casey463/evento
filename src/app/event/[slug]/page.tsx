import H1 from "@/components/h1";
import { getEvent } from "@/lib/serverUtils";

import { get } from "http";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const event = await getEvent(params.slug);
  return {
    title: event.name,
    description: event.description,
  };
}

// export function generateStaticParams() {
//   // "top 100 most popular events" rendred at build time to improve performance
//   return [{ slug: "comedy-extravaganza" }, { slug: "dj-practice-session" }];
// }

export default async function EventPage({ params }: Props) {
  const event = await getEvent(params.slug);
  console.log(event);
  return (
    <main>
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

        <div className="z-1 flex relative gap-6 lg:gap-x-16 flex-col md:flex-row py-14 md:py-20">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover"
          />

          <div className="flex flex-col">
            <p className=" text-white/75 ">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>

            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button className="bg-white/20 text-lg capitalize mt-5 md:mt-auto  w-[300px] rounded-md border-white/10 border-2 sm:w-full py-2 state-effects">
              Get tickets
            </button>
          </div>
        </div>
      </section>

      <div className="min-h-[75vh] text-center px-5 py-16">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className=" max-w-4xl text-lg mx-auto leading-8 text-white/75">
      {children}
    </p>
  );
}
