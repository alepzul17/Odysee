import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Coins,
  Compass,
  Languages,
  MapPin,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { countries, cities } from "@/data/destinations";
import WishlistButton from "@/components/WishlistButton";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const countryParams = countries.map((c) => ({ slug: c.slug }));
  const cityParams = cities.map((c) => ({ slug: c.slug }));
  return [...countryParams, ...cityParams];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const country = countries.find(
    (c) => c.slug.toLowerCase() === slug.toLowerCase(),
  );
  if (country) {
    return {
      title: `${country.name} — Destination Guide | ODYSSE`,
      description: country.description,
    };
  }

  const city = cities.find((c) => c.slug.toLowerCase() === slug.toLowerCase());
  if (city) {
    return {
      title: `${city.name}, ${city.country} | ODYSSE`,
      description: city.description,
    };
  }

  return {
    title: "Destination Not Found | ODYSSE",
  };
}

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const lowerSlug = slug.toLowerCase();

  const country = countries.find((c) => c.slug.toLowerCase() === lowerSlug);
  const city = !country
    ? cities.find((c) => c.slug.toLowerCase() === lowerSlug)
    : null;

  if (!country && !city) {
    notFound();
  }

  // If a city was requested, render city detail with reference to country
  if (city) {
    return (
      <div className="bg-warm-cream min-h-screen text-forest-green">
        {/* City Hero */}
        <div className="relative h-[70vh] min-h-120 w-full flex items-end">
          <Image
            src={city.image}
            alt={city.name}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-green/90 via-dark-green/40 to-transparent" />

          <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-12">
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 text-warm-cream/80 hover:text-warm-cream text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Explore
            </Link>

            <span className="inline-block px-3 py-1 bg-sand/30 backdrop-blur-xs text-warm-cream text-xs font-medium tracking-widest uppercase rounded-full mb-3">
              {city.type} • {city.country}
            </span>

            <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl font-semibold text-warm-cream mb-4">
              {city.name}
            </h1>
            <p className="text-warm-cream/90 text-base md:text-xl max-w-2xl font-light">
              {city.description}
            </p>

            {city.countrySlug && (
              <div className="mt-6">
                <Link
                  href={`/${city.countrySlug}`}
                  className="inline-flex items-center gap-2 bg-warm-cream text-forest-green px-5 py-2.5 rounded-lg font-medium hover:bg-sand transition-colors text-sm"
                >
                  Explore {city.country} Country Guide
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Country Detail View
  const imageRecord = country!.image as unknown as Record<string, string>;
  const aboutImage =
    imageRecord["about"] || Object.values(imageRecord)[1] || country!.image.hero;

  const galleryImages = Object.entries(country!.image)
    .filter(([key]) => key !== "hero")
    .map(([key, src]) => ({
      key,
      title:
        key.charAt(0).toUpperCase() +
        key
          .slice(1)
          .replace(/([A-Z])/g, " $1")
          .trim(),
      src: src as string,
    }));

  return (
    <div className="bg-warm-cream min-h-screen text-forest-green">
      {/* Hero Banner */}
      <div className="relative h-[80vh] min-h-135 w-full flex items-end">
        <Image
          src={country!.image.hero}
          alt={country!.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-dark-green/95 via-dark-green/50 to-transparent" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-14">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 text-warm-cream/80 hover:text-warm-cream text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Explore
          </Link>

          <div className="flex items-center gap-2 text-sand text-xs md:text-sm font-medium tracking-widest uppercase mb-2">
            <Compass className="w-4 h-4" />
            <span>{country!.continent}</span>
          </div>

          <h1 className="font-playfair text-5xl sm:text-7xl md:text-8xl font-normal text-warm-cream mb-4 tracking-tight">
            {country!.name}
          </h1>

          <p className="text-warm-cream/90 text-base sm:text-lg md:text-2xl max-w-2xl font-light leading-relaxed">
            {country!.description}
          </p>
        </div>
      </div>

      {/* Quick Travel Facts Bar */}
      <div className="max-w-6xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-sand/20 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-warm-cream text-forest-green">
              <Calendar className="w-5 h-5 text-forest-green" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                Best Time
              </p>
              <p className="font-semibold text-sm sm:text-base text-forest-green">
                {country!.bestTimeToVisit}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-warm-cream text-forest-green">
              <Coins className="w-5 h-5 text-forest-green" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                Currency
              </p>
              <p className="font-semibold text-sm sm:text-base text-forest-green">
                {country!.currency}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-warm-cream text-forest-green">
              <Languages className="w-5 h-5 text-forest-green" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                Language
              </p>
              <p className="font-semibold text-sm sm:text-base text-forest-green truncate">
                {country!.language}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-warm-cream text-forest-green">
              <MapPin className="w-5 h-5 text-forest-green" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                Region
              </p>
              <p className="font-semibold text-sm sm:text-base text-forest-green">
                {country!.continent}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content: Overview & Featured Image */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-forest-green/80 text-xs font-semibold tracking-widest uppercase mb-3">
              <Sparkles className="w-4 h-4 text-sand" />
              <span>DESTINATION OVERVIEW</span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-medium text-forest-green leading-tight mb-6">
              Experience the Timeless Wonders of {country!.name}
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6 font-light">
              {country!.description} Whether you are drawn to historic
              landmarks, breathtaking landscapes, or vibrant local life,{" "}
              {country!.name} offers unforgettable moments at every turn.
            </p>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg font-light mb-8">
              Plan your journey around {country!.bestTimeToVisit} to enjoy ideal
              weather and seasonal festivities.
            </p>

            <div className="flex flex-wrap gap-3 items-center">
              <Link
                href="/explore"
                className="px-6 py-3 bg-forest-green text-warm-cream rounded-lg font-medium hover:bg-forest-green/90 transition-colors text-sm"
              >
                Explore More Countries
              </Link>
              <WishlistButton
                slug={country!.slug}
                name={country!.name}
                variant="button"
              />
            </div>
          </div>

          {aboutImage && (
            <div className="relative h-105 sm:h-120 w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={aboutImage}
                alt={`${country!.name} Overview`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-dark-green/40 to-transparent" />
            </div>
          )}
        </div>
      </section>

      {/* Highlights / Curated Experiences */}
      <section className="bg-white py-20 border-y border-sand/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-widest font-semibold text-sand mb-2">
              CURATED JOURNEYS
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-forest-green font-normal">
              Unmissable Experiences
            </h2>
            <p className="text-gray-600 mt-3 text-sm md:text-base">
              Handpicked activities to immerse yourself in the culture, nature,
              and spirit of {country!.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {country!.experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-warm-cream/50 border border-sand/20 p-6 rounded-xl hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-forest-green text-warm-cream flex items-center justify-center font-playfair font-semibold text-lg mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="font-playfair text-xl text-forest-green font-medium mb-2">
                    {exp}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Immerse yourself in authentic local moments and create
                    lifelong travel memories.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-xs text-forest-green/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-forest-green" />
                  <span>Must-do highlight</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Places / Destinations within the Country */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold text-sand mb-2">
              MUST-SEE PLACES
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-forest-green font-normal">
              Iconic Locations in {country!.name}
            </h2>
          </div>
          <p className="text-gray-600 text-sm md:text-base max-w-md">
            From world-renowned landmarks to breathtaking regions worth visiting
            on your trip.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {country!.places.map((place, idx) => (
            <div
              key={idx}
              className="bg-white border border-sand/20 rounded-xl p-5 text-center hover:border-forest-green transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-sand/20 text-forest-green flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-4 h-4" />
              </div>
              <h3 className="font-playfair font-semibold text-lg text-forest-green">
                {place}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{country!.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Photo Gallery */}
      {galleryImages.length > 0 && (
        <section className="bg-dark-green text-warm-cream py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs uppercase tracking-widest font-semibold text-sand mb-2">
                PHOTO GALLERY
              </p>
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-normal">
                Glimpses of {country!.name}
              </h2>
              <p className="text-warm-cream/70 mt-3 text-sm md:text-base">
                Discover the beauty, colors, and landscapes that await you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((imgItem, idx) => (
                <div
                  key={idx}
                  className="group relative h-72 rounded-2xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={imgItem.src}
                    alt={`${country!.name} - ${imgItem.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-dark-green/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs text-sand font-medium uppercase tracking-wider">
                      {country!.name}
                    </p>
                    <h3 className="font-playfair text-xl text-warm-cream font-medium">
                      {imgItem.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Plan Trip CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="bg-forest-green text-warm-cream rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="text-xs font-medium tracking-widest uppercase text-sand mb-3">
              START YOUR ADVENTURE
            </p>
            <h2 className="font-playfair text-3xl sm:text-5xl font-semibold mb-4">
              Ready to Explore {country!.name}?
            </h2>
            <p className="text-warm-cream/80 text-sm md:text-base mb-8">
              Let us help you curate an unforgettable itinerary tailored to your
              travel style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/explore"
                className="bg-warm-cream text-forest-green px-8 py-3.5 rounded-lg font-medium hover:bg-sand transition-colors text-sm"
              >
                Browse All Destinations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
