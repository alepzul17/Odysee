import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function AboutCta() {
  return (
    <section className="relative h-[480px] md:h-[540px] w-full flex items-center justify-center text-center px-6 overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.pexels.com/photos/40973384/pexels-photo-40973384.jpeg"
        alt="Your Next Chapter Starts Here - Odysse"
        fill
        sizes="100vw"
        className="object-cover"
      />

      {/* Atmospheric Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-green/95 via-dark-green/65 to-dark-green/50" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-sand uppercase mb-4">
          <Compass className="w-4 h-4" />
          <span>BEGIN YOUR JOURNEY</span>
        </div>

        <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-normal text-warm-cream leading-tight mb-5">
          Your Next Chapter Starts Here.
        </h2>

        <div className="w-12 h-0.5 bg-sand/70 mb-5 rounded-full" />

        <p className="text-warm-cream/90 text-base sm:text-lg md:text-xl font-light italic leading-relaxed max-w-xl mb-8">
          &ldquo;Let curiosity lead the way. Discover somewhere new and make
          every journey your own.&rdquo;
        </p>

        <Link
          href="/explore"
          className="inline-flex items-center gap-2.5 bg-warm-cream text-forest-green px-8 py-4 rounded-xl font-medium text-xs sm:text-sm tracking-widest uppercase hover:bg-sand transition-all duration-300 shadow-xl hover:scale-105 cursor-pointer"
        >
          <span>EXPLORE DESTINATIONS</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
