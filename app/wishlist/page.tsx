"use client";

import Link from "next/link";
import {
  Heart,
  Compass,
  ArrowRight,
  Trash2,
  Sparkles,
  MapPin,
  Calendar,
} from "lucide-react";
import { countries, cities } from "@/data/destinations";
import { useWishlist } from "@/context/WishlistContext";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, clearWishlist, isLoaded } =
    useWishlist();

  // Match saved slugs to destination data
  const savedCountries = countries.filter((c) =>
    wishlist.includes(c.slug.toLowerCase())
  );
  const savedCities = cities.filter((c) =>
    wishlist.includes(c.slug.toLowerCase())
  );

  const totalSaved = savedCountries.length + savedCities.length;

  return (
    <div className="bg-warm-cream min-h-screen text-forest-green pt-28 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-forest-green/15 pb-8 mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-sand uppercase mb-2">
              <Sparkles className="w-4 h-4" />
              <span>SAVED JOURNEYS</span>
            </div>
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-normal text-forest-green">
              Your Travel Wishlist
            </h1>
            <p className="text-gray-600 text-sm md:text-base mt-2 max-w-xl font-light">
              Curate your dream destinations and plan your future adventures.
              Your favorites are saved safely on this device.
            </p>
          </div>

          {isLoaded && totalSaved > 0 && (
            <div className="flex items-center gap-4">
              <span className="text-xs sm:text-sm font-medium text-forest-green bg-white px-3.5 py-1.5 rounded-full border border-sand/30 shadow-2xs">
                {totalSaved} {totalSaved === 1 ? "Destination" : "Destinations"}{" "}
                Saved
              </span>
              <button
                type="button"
                onClick={() => {
                  if (
                    confirm(
                      "Are you sure you want to clear all saved destinations?"
                    )
                  ) {
                    clearWishlist();
                  }
                }}
                className="text-xs sm:text-sm text-gray-500 hover:text-rose-600 transition-colors flex items-center gap-1.5 cursor-pointer font-medium"
              >
                <Trash2 className="w-4 h-4" />
                <span>Clear All</span>
              </button>
            </div>
          )}
        </div>

        {/* Loading Skeleton */}
        {!isLoaded && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-96 rounded-2xl bg-forest-green/10 animate-pulse"
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {isLoaded && totalSaved === 0 && (
          <div className="bg-white rounded-3xl border border-sand/20 p-10 md:p-16 text-center max-w-2xl mx-auto shadow-xs">
            <div className="w-20 h-20 rounded-full bg-warm-cream text-forest-green flex items-center justify-center mx-auto mb-6 shadow-inner">
              <Heart className="w-9 h-9 text-sand" />
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl text-forest-green font-normal mb-3">
              Your Wishlist is Empty
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto font-light">
              You haven&apos;t saved any destinations yet. Discover
              extraordinary places and tap the heart icon on any card to save it
              to your wishlist.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/explore"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-forest-green text-warm-cream rounded-xl font-medium hover:bg-forest-green/90 transition-colors text-sm"
              >
                <span>Browse Curated Destinations</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {/* Saved Destinations Grid */}
        {isLoaded && totalSaved > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Countries */}
            {savedCountries.map((country) => (
              <div
                key={country.slug}
                className="group bg-white rounded-2xl overflow-hidden border border-sand/25 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div
                  className="relative h-64 w-full bg-cover bg-center overflow-hidden"
                  style={{ backgroundImage: `url(${country.image.hero})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-green/80 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-md text-warm-cream text-xs font-medium tracking-wider rounded-full uppercase">
                      <Compass className="w-3.5 h-3.5 text-sand" />
                      {country.continent}
                    </span>

                    <button
                      type="button"
                      onClick={() => removeFromWishlist(country.slug)}
                      className="w-9 h-9 rounded-full bg-white text-rose-600 hover:bg-rose-50 hover:scale-105 shadow-md flex items-center justify-center transition-all cursor-pointer"
                      title="Remove from wishlist"
                      aria-label={`Remove ${country.name} from wishlist`}
                    >
                      <Trash2 className="w-4 h-4 text-rose-600" />
                    </button>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                    <h3 className="font-playfair text-3xl font-medium text-warm-cream">
                      {country.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <Calendar className="w-3.5 h-3.5 text-sand" />
                      <span>Best time: {country.bestTimeToVisit}</span>
                    </div>

                    <p className="text-gray-600 text-xs sm:text-sm font-light line-clamp-3 leading-relaxed mb-4">
                      {country.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {country.places.slice(0, 3).map((place, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-warm-cream text-forest-green text-[11px] rounded-md font-medium"
                        >
                          {place}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/${country.slug}`}
                    className="w-full inline-flex items-center justify-between bg-forest-green text-warm-cream px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm hover:bg-forest-green/90 transition-colors shadow-xs"
                  >
                    <span>View Destination Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}

            {/* Cities */}
            {savedCities.map((city) => (
              <div
                key={city.slug}
                className="group bg-white rounded-2xl overflow-hidden border border-sand/25 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div
                  className="relative h-64 w-full bg-cover bg-center overflow-hidden"
                  style={{ backgroundImage: `url(${city.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-green/80 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-md text-warm-cream text-xs font-medium tracking-wider rounded-full uppercase">
                      <MapPin className="w-3.5 h-3.5 text-sand" />
                      {city.country}
                    </span>

                    <button
                      type="button"
                      onClick={() => removeFromWishlist(city.slug)}
                      className="w-9 h-9 rounded-full bg-white text-rose-600 hover:bg-rose-50 hover:scale-105 shadow-md flex items-center justify-center transition-all cursor-pointer"
                      title="Remove from wishlist"
                      aria-label={`Remove ${city.name} from wishlist`}
                    >
                      <Trash2 className="w-4 h-4 text-rose-600" />
                    </button>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                    <h3 className="font-playfair text-3xl font-medium text-warm-cream">
                      {city.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <p className="text-gray-600 text-xs sm:text-sm font-light line-clamp-3 leading-relaxed mb-6">
                    {city.description}
                  </p>

                  <Link
                    href={`/${city.slug}`}
                    className="w-full inline-flex items-center justify-between bg-forest-green text-warm-cream px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm hover:bg-forest-green/90 transition-colors shadow-xs"
                  >
                    <span>View Destination Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
