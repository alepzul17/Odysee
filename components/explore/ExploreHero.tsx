import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-[url('/img/ExplorePage/expriences-hero.jpg')] bg-center bg-cover h-120 md:min-h-screen">
      <div className="absolute inset-0 bg-linear-to-br from-[#F4F0E8] via-[#F4F0E8]/90 via-55% to-transparent to-80% flex flex-col justify-center pl-6 gap-3 md:pl-12">
        <p className="text-xs font-medium text-forest-green tracking-wide md:text-sm">
          YOUR NEXT ADVENTURE STARTS HERE
        </p>
        <h1 className="font-playfair text-4xl w-2/3 text-forest-green md:text-6xl md:w-1/3">
          DISCOVER THE WORLD
        </h1>
        <p className="text-xs w-2/3 md:text-sm">
          Explore extraordinary places and find inspiration for your next
          journey
        </p>
        <Link
          href="#featured-destinations"
          className="mt-4 px-6 py-3 bg-forest-green hover:bg-forest-green/90 transition-colors w-fit text-warm-cream text-xs tracking-wider font-medium rounded-sm inline-block"
        >
          START EXPLORING
        </Link>
      </div>
    </div>
  );
}
