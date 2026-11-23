import Image from "next/image";
import { Compass, Users, Sparkles } from "lucide-react";

const VALUES = [
  {
    number: "01",
    title: "Discovery",
    tagline: "Explore places beyond the ordinary.",
    description:
      "We believe true wanderlust is about stepping off the beaten path, seeking hidden sanctuaries, and discovering breathtaking wonders that inspire wonder.",
    image: "https://images.pexels.com/photos/30563253/pexels-photo-30563253.jpeg",
    icon: Compass,
  },
  {
    number: "02",
    title: "Connection",
    tagline: "Connect with cultures and people.",
    description:
      "Travel is deeply human. We celebrate the beauty of shared stories, authentic traditions, and meaningful exchanges that bridge distant worlds together.",
    image: "https://images.pexels.com/photos/18600912/pexels-photo-18600912.jpeg",
    icon: Users,
  },
  {
    number: "03",
    title: "Experience",
    tagline: "Create memories that last a lifetime.",
    description:
      "Beyond souvenirs and snapshots, it is the sensory moments, peace of mind, and unforgettable journeys that stay etched in our hearts forever.",
    image: "https://images.pexels.com/photos/23020756/pexels-photo-23020756.jpeg",
    icon: Sparkles,
  },
];

export default function WhatWeBelieve() {
  return (
    <section className="bg-white text-forest-green py-20 md:py-28 px-6 md:px-12 border-b border-sand/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-sand uppercase mb-3">
            <Sparkles className="w-4 h-4" />
            <span>OUR CORE VALUES</span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-medium text-forest-green leading-tight mb-4">
            What We Believe
          </h2>

          <div className="w-12 h-0.5 bg-sand mx-auto mb-6 rounded-full" />

          <p className="text-gray-600 text-sm sm:text-base md:text-lg font-light leading-relaxed">
            At the heart of Odysse are three guiding principles that shape every
            destination we curate and every journey we inspire.
          </p>
        </div>

        {/* 3 Values Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {VALUES.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className="group relative h-[480px] sm:h-[520px] rounded-2xl md:rounded-3xl overflow-hidden flex flex-col justify-between p-7 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background Image */}
                <Image
                  src={val.image}
                  alt={`${val.title} - Odysse Value`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Atmospheric Dark Gradient Overlay for flawless text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-green/95 via-dark-green/55 to-dark-green/20 group-hover:from-dark-green/90 transition-colors" />

                {/* Top Badge: Number and Category Icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black/40 backdrop-blur-md text-warm-cream text-xs font-medium tracking-widest rounded-full uppercase">
                    <Icon className="w-3.5 h-3.5 text-sand" />
                    <span>{val.number}</span>
                  </span>
                  <span className="text-xs text-warm-cream/80 uppercase tracking-widest font-light">
                    Value
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10">
                  <h3 className="font-playfair text-3xl sm:text-4xl text-warm-cream font-medium mb-1.5">
                    {val.title}
                  </h3>

                  <p className="text-sand text-sm sm:text-base font-medium mb-3">
                    {val.tagline}
                  </p>

                  <div className="w-8 h-0.5 bg-sand/60 mb-3 rounded-full" />

                  <p className="text-warm-cream/85 text-xs sm:text-sm font-light leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
