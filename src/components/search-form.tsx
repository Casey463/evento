"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function SearchForm() {
  const [searchText, setSearchText] = React.useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchText) return;

    router.push(`/events/${searchText}`);
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit} className="w=full sm:w-[580px]">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10"
          placeholder="Search events in any city... "
          spellCheck="false"
        />
      </form>
    </div>
  );
}
