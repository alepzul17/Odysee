import Image from "next/image";
import { Compass, Target, Heart, CheckCircle2 } from "lucide-react";

export default function OurMission() {
  return (
    <section className="bg-warm-cream text-forest-green py-20 md:py-28 px-6 md:px-12 border-b border-forest-green/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Mission Content (Order 2 on mobile, Order 1 on desktop) */}
          <div className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-forest-green/80 uppercase mb-3">
              <Target className="w-4 h-4 text-forest-green" />
              <span>OUR MISSION</span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-medium text-forest-green leading-tight mb-6">
              Making Every Journey Meaningful.
            </h2>

            <div className="w-12 h-0.5 bg-sand mb-6 rounded-full" />

            <p className="text-forest-green text-base sm:text-lg md:text-xl font-light leading-relaxed mb-6 italic">
              &ldquo;Our mission is to inspire people to explore beyond the
              familiar, discover new perspectives and create meaningful
              memories through travel.&rdquo;
            </p>

            <p className="text-gray-700 text-sm sm:text-base font-light leading-relaxed mb-8">
              We believe that genuine travel transforms how we view the world and
              ourselves. That is why we dedicate ourselves to uncovering paths
              less traveled, connecting curious explorers with extraordinary
              places, and encouraging mindful journeys that leave a positive
              mark.
            </p>

            {/* 3 Core Commitments */}
            <div className="flex flex-col gap-4 w-full">
              <div className="flex items-start gap-3 p-4 bg-white/70 backdrop-blur-xs rounded-xl border border-sand/30">
                <CheckCircle2 className="w-5 h-5 text-forest-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-playfair font-semibold text-sm sm:text-base text-forest-green">
                    Explore Beyond the Familiar
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 font-light mt-0.5">
                    Unveiling rare perspectives, hidden corners, and authentic
                    traditions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white/70 backdrop-blur-xs rounded-xl border border-sand/30">
                <CheckCircle2 className="w-5 h-5 text-forest-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-playfair font-semibold text-sm sm:text-base text-forest-green">
                    Mindful Exploration
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 font-light mt-0.5">
                    Respecting local heritage, communities, and natural
                    landscapes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white/70 backdrop-blur-xs rounded-xl border border-sand/30">
                <CheckCircle2 className="w-5 h-5 text-forest-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-playfair font-semibold text-sm sm:text-base text-forest-green">
                    Stories Worth Remembering
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 font-light mt-0.5">
                    Designing travel around deep experiences rather than rushed
                    checklists.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Image with Elegant Frame (Order 1 on mobile, Order 2 on desktop) */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="relative h-[380px] sm:h-[480px] md:h-[540px] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/40725269/pexels-photo-40725269.jpeg"
                alt="Making Every Journey Meaningful - Odysse Mission"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-green/60 via-transparent to-transparent opacity-70" />

              {/* Floating Pill Badge */}
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-forest-green/90 backdrop-blur-md text-warm-cream text-xs font-medium rounded-full shadow-md">
                  <Heart className="w-3.5 h-3.5 text-sand" />
                  <span>Purpose-driven travel</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-warm-cream/90 backdrop-blur-md text-forest-green text-[11px] font-medium rounded-full shadow-sm">
                  <Compass className="w-3 h-3 text-forest-green" />
                  <span>Odysse Way</span>
                </span>
              </div>
            </div>

            {/* Decorative Offset Border */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-forest-green/20 rounded-2xl md:rounded-3xl -z-10 hidden sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
