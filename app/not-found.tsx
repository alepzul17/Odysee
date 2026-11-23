import Link from "next/link";
import { Compass, ArrowRight, Home } from "lucide-react";
import { countries } from "@/data/destinations";

export default function NotFound() {
  return (
    <div className="bg-warm-cream min-h-screen text-forest-green flex items-center justify-center px-6 pt-32 pb-24">
      <div className="max-w-2xl w-full text-center flex flex-col items-center">
        {/* Decorative Compass Icon */}
        <div className="w-20 h-20 rounded-full bg-forest-green/10 text-forest-green flex items-center justify-center mb-6 shadow-inner animate-pulse">
          <Compass className="w-10 h-10 text-forest-green" />
        </div>

        {/* Badge */}
        <span className="inline-block px-3.5 py-1.5 bg-sand/25 text-forest-green text-xs font-semibold tracking-[0.25em] uppercase rounded-full mb-4">
          404 • PAGE NOT FOUND
        </span>

        {/* Heading */}
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-normal text-forest-green leading-tight mb-4">
          You&apos;ve Wandered Off the Map.
        </h1>

        <div className="w-12 h-0.5 bg-sand mb-6 rounded-full" />

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-lg mb-8">
          The destination or path you are looking for does not exist or may have
          been moved. Let curiosity guide you back to our curated journeys.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center w-full max-w-md mb-12">
          <Link
            href="/explore"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-forest-green text-warm-cream py-3.5 px-6 rounded-xl font-medium text-xs sm:text-sm tracking-wider uppercase hover:bg-forest-green/90 transition-colors shadow-xs"
          >
            <span>Explore Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-white border border-sand/40 text-forest-green py-3.5 px-6 rounded-xl font-medium text-xs sm:text-sm tracking-wider uppercase hover:bg-forest-green/5 transition-colors shadow-2xs"
          >
            <Home className="w-4 h-4 text-sand" />
            <span>Return Home</span>
          </Link>
        </div>

        {/* Quick Suggestions */}
        <div className="pt-8 border-t border-forest-green/15 w-full">
          <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-3">
            Or Jump Straight into a Destination Guide:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {countries.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="px-3 py-1 bg-white border border-sand/40 rounded-full text-xs font-medium text-forest-green hover:bg-forest-green hover:text-warm-cream transition-colors shadow-2xs"
              >
                {c.name} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
