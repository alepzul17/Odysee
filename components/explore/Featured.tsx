import Link from "next/link";
import { ArrowUpRight, Compass } from "lucide-react";
import { countries } from "@/data/destinations";
import WishlistButton from "@/components/WishlistButton";

export default function Featured() {
  return (
    <section
      id="featured-destinations"
      className="py-12 px-6 md:py-20 md:px-12 max-w-7xl mx-auto w-full"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <p className="text-xs uppercase tracking-widest font-semibold text-sand mb-2">
            FEATURED DESTINATIONS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-normal text-forest-green">
            Popular Places
          </h2>
        </div>
        <p className="text-gray-600 text-sm md:text-base max-w-md">
          Explore our handpicked destination guides with curated itineraries,
          local highlights, and travel tips.
        </p>
      </div>

      {/* Destination Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {countries.map((country) => (
          <Link
            key={country.slug}
            href={`/${country.slug}`}
            className="group relative h-96 rounded-2xl overflow-hidden flex flex-col justify-between p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 cursor-pointer"
            style={{
              backgroundImage: `url(${country.image.hero})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-green/95 via-dark-green/40 to-dark-green/10 group-hover:from-dark-green/90 transition-colors" />

            {/* Top Continent Badge & Wishlist Heart */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sand/30 backdrop-blur-xs text-warm-cream text-xs font-medium tracking-wider rounded-full uppercase">
                <Compass className="w-3.5 h-3.5" />
                {country.continent}
              </span>
              <WishlistButton
                slug={country.slug}
                name={country.name}
                variant="icon"
              />
            </div>

            {/* Bottom Content & Explicit Access Button */}
            <div className="relative z-10">
              <h3 className="font-playfair text-3xl sm:text-4xl text-warm-cream font-medium mb-1">
                {country.name}
              </h3>
              <p className="text-xs text-warm-cream/80 line-clamp-2 font-light mb-4 leading-relaxed">
                {country.description}
              </p>

              {/* Explicit Access Button */}
              <div className="w-full bg-warm-cream text-forest-green px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm flex items-center justify-between group-hover:bg-sand transition-colors shadow-xs">
                <span>Explore {country.name} Guide</span>
                <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
