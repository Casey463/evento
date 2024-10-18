"use client";
import React from "react";

export default function SearchForm() {
  const [search, setSearch] = React.useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit} className="w=full sm:w-[580px]">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10"
          placeholder="Search events in any city... "
          spellCheck="false"
        />
      </form>
    </div>
  );
}
