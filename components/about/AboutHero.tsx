import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="relative min-h-[75vh] md:min-h-[85vh] w-full flex items-center justify-center text-center px-6 pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.pexels.com/photos/40725262/pexels-photo-40725262.jpeg"
        alt="Our Story - Odysse"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Atmospheric Dark Gradient Overlay for optimal readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-green/95 via-dark-green/60 to-dark-green/40" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <p className="tracking-[0.25em] text-xs sm:text-sm font-medium uppercase text-sand mb-4 animate-in fade-in duration-500">
          OUR STORY
        </p>

        <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl font-normal text-warm-cream leading-[1.15] mb-6 tracking-tight">
          Discover More Than Just Destinations.
        </h1>

        <div className="w-12 h-0.5 bg-sand/60 mb-6 rounded-full" />

        <p className="text-warm-cream/90 text-base sm:text-lg md:text-xl font-light italic max-w-2xl mx-auto leading-relaxed">
          &ldquo;Odysse is created for curious travellers who seek meaningful
          experiences, unforgettable places and stories worth remembering.&rdquo;
        </p>
      </div>
    </div>
  );
}
