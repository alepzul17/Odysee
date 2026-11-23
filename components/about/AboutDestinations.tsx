import Link from "next/link";
import { ArrowUpRight, Compass, ArrowRight, Sparkles } from "lucide-react";
import { countries } from "@/data/destinations";
import WishlistButton from "@/components/WishlistButton";

const PROMOTED_SLUGS = ["japan", "switzerland", "egypt"];

export default function AboutDestinations() {
  const featuredDestinations = PROMOTED_SLUGS.map((slug) =>
    countries.find((c) => c.slug === slug)
  ).filter((c): c is (typeof countries)[number] => Boolean(c));

  return (
    <section className="bg-warm-cream text-forest-green py-20 md:py-28 px-6 md:px-12 border-b border-forest-green/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-forest-green/80 uppercase mb-3">
              <Sparkles className="w-4 h-4 text-forest-green" />
              <span>HANDPICKED ESCAPES</span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-medium text-forest-green leading-tight mb-4">
              The World Is Waiting to Be Explored.
            </h2>

            <div className="w-12 h-0.5 bg-sand mb-4 rounded-full" />

            <p className="text-gray-700 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              &ldquo;From peaceful mountain escapes to vibrant cultural cities,
              discover destinations that inspire your next adventure.&rdquo;
            </p>
          </div>

          <Link
            href="/explore"
            className="inline-flex items-center gap-2 bg-forest-green text-warm-cream px-6 py-3.5 rounded-xl font-medium text-xs sm:text-sm tracking-wider uppercase hover:bg-forest-green/90 transition-colors shadow-xs shrink-0 self-start md:self-end"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {featuredDestinations.map((country) => (
            <Link
              key={country.slug}
              href={`/${country.slug}`}
              className="group relative h-[440px] sm:h-[480px] rounded-2xl md:rounded-3xl overflow-hidden flex flex-col justify-between p-7 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              style={{
                backgroundImage: `url(${country.image.hero})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-green/95 via-dark-green/45 to-dark-green/15 group-hover:from-dark-green/90 transition-colors" />

              {/* Top Row: Continent Badge & Heart Wishlist Button */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-md text-warm-cream text-xs font-medium tracking-wider rounded-full uppercase">
                  <Compass className="w-3.5 h-3.5 text-sand" />
                  <span>{country.continent}</span>
                </span>

                <WishlistButton
                  slug={country.slug}
                  name={country.name}
                  variant="icon"
                />
              </div>

              {/* Bottom Content & Explicit Action Button */}
              <div className="relative z-10">
                <span className="text-xs text-sand font-medium uppercase tracking-widest block mb-1">
                  Featured Guide
                </span>

                <h3 className="font-playfair text-3xl sm:text-4xl text-warm-cream font-medium mb-2">
                  {country.name}
                </h3>

                <p className="text-xs sm:text-sm text-warm-cream/80 line-clamp-2 font-light mb-5 leading-relaxed">
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
      </div>
    </section>
  );
}
