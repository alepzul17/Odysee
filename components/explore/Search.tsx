"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MapPin, Search as SearchIcon } from "lucide-react";
import { countries } from "@/data/destinations";

export default function Search() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const trimmed = query.trim().toLowerCase();
    const matched = countries.find(
      (c) =>
        c.slug.toLowerCase().includes(trimmed) ||
        c.name.toLowerCase().includes(trimmed) ||
        c.continent.toLowerCase().includes(trimmed) ||
        c.places.some((p) => p.toLowerCase().includes(trimmed))
    );

    if (matched) {
      router.push(`/${matched.slug}`);
    } else {
      router.push(`/${trimmed}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 px-5.5 py-8 md:py-14 md:px-24 md:gap-6">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-playfair font-normal text-forest-green">
        WHERE WOULD YOU LIKE TO GO?
      </h1>

      <form
        onSubmit={handleSearch}
        className="flex flex-col gap-3 w-full max-w-3xl md:flex-row"
      >
        <div className="flex items-center px-4 py-2 bg-white w-full h-14 border-2 border-warm-cream/60 gap-3 rounded-xl shadow-xs focus-within:border-forest-green transition-colors md:flex-1">
          <MapPin className="text-sand w-5 h-5 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Japan, Egypt, Switzerland, Malaysia..."
            className="w-full focus:outline-none text-forest-green placeholder:text-gray-400 text-sm md:text-base bg-transparent"
          />
        </div>

        <button
          type="submit"
          className="w-full md:w-auto px-8 py-4 bg-forest-green text-warm-cream font-medium rounded-xl hover:bg-forest-green/90 transition-colors flex items-center justify-center gap-2 cursor-pointer text-sm tracking-wider"
        >
          <SearchIcon className="w-4 h-4" />
          <span>SEARCH</span>
        </button>
      </form>

      {/* Quick Access Destination Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-forest-green/80 mt-1">
        <span className="font-medium text-gray-500">Popular Guides:</span>
        {countries.map((c) => (
          <Link
            key={c.slug}
            href={`/${c.slug}`}
            className="px-3 py-1 bg-white border border-sand/40 rounded-full hover:bg-forest-green hover:text-warm-cream transition-colors font-medium shadow-2xs"
          >
            {c.name} →
          </Link>
        ))}
      </div>
    </div>
  );
}
