import Image from "next/image";
import Link from "next/link";
import { Compass, Sparkles, MapPin, ArrowRight } from "lucide-react";

export default function OurStory() {
  return (
    <section className="bg-white text-forest-green py-20 md:py-28 px-6 md:px-12 border-b border-sand/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Image with Elegant Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[380px] sm:h-[480px] md:h-[540px] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/15040246/pexels-photo-15040246.jpeg"
                alt="A Journey Begins With Curiosity - Odysse"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-green/40 via-transparent to-transparent opacity-60" />

              {/* Floating Pill Badge */}
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-warm-cream/90 backdrop-blur-md text-forest-green text-xs font-medium rounded-full shadow-md">
                  <Compass className="w-3.5 h-3.5 text-sand" />
                  <span>Curated for curious souls</span>
                </span>
              </div>
            </div>

            {/* Decorative Offset Border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-sand/35 rounded-2xl md:rounded-3xl -z-10 hidden sm:block" />
          </div>

          {/* Right Column: Editorial Story Content */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-sand uppercase mb-3">
              <Sparkles className="w-4 h-4" />
              <span>THE INSPIRATION</span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-medium text-forest-green leading-tight mb-6">
              A Journey Begins With Curiosity.
            </h2>

            <div className="w-12 h-0.5 bg-sand/60 mb-6 rounded-full" />

            <p className="text-gray-700 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-6">
              &ldquo;Every journey starts with a simple desire to explore.
              Odysse was created to bring inspiration, destinations and travel
              experiences together in one place, helping travellers discover the
              world in their own way.&rdquo;
            </p>

            <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed mb-8">
              We believe travel is more than ticking places off a list. It is
              about connecting with local traditions, finding tranquility in
              hidden corners, and returning with perspectives that stay with you
              long after the journey ends.
            </p>

            {/* Value Pillars */}
            <div className="grid grid-cols-2 gap-4 w-full mb-8 pt-4 border-t border-sand/20">
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-warm-cream text-forest-green mt-0.5">
                  <Compass className="w-4 h-4 text-forest-green" />
                </div>
                <div>
                  <h4 className="font-playfair font-semibold text-sm text-forest-green">
                    Authentic Places
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Carefully chosen destinations
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-warm-cream text-forest-green mt-0.5">
                  <MapPin className="w-4 h-4 text-forest-green" />
                </div>
                <div>
                  <h4 className="font-playfair font-semibold text-sm text-forest-green">
                    Tailored Journeys
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Your style, your pace
                  </p>
                </div>
              </div>
            </div>

            {/* Action CTA Link */}
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 bg-forest-green text-warm-cream px-6 py-3.5 rounded-xl font-medium text-xs sm:text-sm tracking-wider uppercase hover:bg-forest-green/90 transition-colors shadow-xs"
            >
              <span>Explore Our Destinations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
