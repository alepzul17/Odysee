import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Categories() {
  return (
    <section className="flex flex-col gap-10 py-16 px-6 bg-white border-t border-sand/20">
      <div className="flex flex-col gap-2 items-center md:items-start max-w-7xl mx-auto w-full">
        <p className="text-xs uppercase tracking-widest font-semibold text-sand">
          EXPLORE BY CATEGORY
        </p>
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-playfair font-normal text-forest-green md:text-start">
          Find Your Kind of Journey
        </h2>
        <p className="text-gray-600 text-sm sm:text-base font-light">
          Choose the travel experience that matches your style.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 md:flex-row max-w-7xl mx-auto w-full">
        {/* Adventure -> Switzerland */}
        <Link
          href="/switzerland"
          className="group bg-[url('/img/ExplorePage/adventure3.jpg')] bg-center bg-cover w-full h-48 md:w-1/3 md:h-72 rounded-2xl flex flex-col justify-end p-6 text-white relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-dark-green/90 via-dark-green/30 to-transparent" />
          <div className="relative z-10 flex items-end justify-between">
            <div>
              <span className="text-[10px] tracking-widest uppercase text-sand block font-medium">
                Alpine & Peaks
              </span>
              <h3 className="font-playfair text-2xl md:text-3xl font-medium">
                ADVENTURE
              </h3>
              <p className="text-xs sm:text-sm font-light text-warm-cream/90 mt-1">
                Challenge yourself with thrilling outdoor experiences.
              </p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-sand shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </Link>

        {/* Relaxation -> Malaysia */}
        <Link
          href="/malaysia"
          className="group bg-[url('/img/ExplorePage/relaxition.jpg')] bg-center bg-cover w-full h-48 md:w-1/3 md:h-72 rounded-2xl flex flex-col justify-end p-6 text-white relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-dark-green/90 via-dark-green/30 to-transparent" />
          <div className="relative z-10 flex items-end justify-between">
            <div>
              <span className="text-[10px] tracking-widest uppercase text-sand block font-medium">
                Coastal Retreat
              </span>
              <h3 className="font-playfair text-2xl md:text-3xl font-medium">
                RELAXATION
              </h3>
              <p className="text-xs sm:text-sm font-light text-warm-cream/90 mt-1">
                Unwind in peaceful places and beautiful surroundings.
              </p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-sand shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </Link>

        {/* Cultural -> Japan */}
        <Link
          href="/japan"
          className="group bg-[url('/img/ExplorePage/traditional.jpg')] bg-center bg-cover w-full h-48 md:w-1/3 md:h-72 rounded-2xl flex flex-col justify-end p-6 text-white relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-dark-green/90 via-dark-green/30 to-transparent" />
          <div className="relative z-10 flex items-end justify-between">
            <div>
              <span className="text-[10px] tracking-widest uppercase text-sand block font-medium">
                Living Heritage
              </span>
              <h3 className="font-playfair text-2xl md:text-3xl font-medium">
                CULTURAL
              </h3>
              <p className="text-xs sm:text-sm font-light text-warm-cream/90 mt-1">
                Discover rich traditions, history and local culture.
              </p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-sand shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </Link>
      </div>
    </section>
  );
}
