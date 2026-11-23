import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Experiences() {
  return (
    <section className="flex flex-col items-center justify-center bg-warm-cream py-16 px-4 gap-12">
      <div className="flex flex-col gap-4 text-forest-green text-center max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-widest font-semibold text-sand">
          MORE THAN JUST A DESTINATION
        </p>
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-semibold">
          EXPERIENCES THAT STAY WITH YOU.
        </h2>
        <p className="text-gray-600 text-sm sm:text-base font-light">
          From immersive cultural encounters to peaceful escapes, discover
          experiences that make every journey unforgettable.
        </p>
      </div>

      <div className="flex flex-col gap-8 md:flex-row w-full max-w-6xl justify-center items-center">
        {/* Cultural Journeys -> Japan */}
        <Link
          href="/japan"
          className="group relative w-full sm:w-85.5 h-96 bg-[url('/img/experiences/cultural2.jpg')] bg-cover bg-center flex flex-col justify-end p-6 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark-green/90 via-dark-green/30 to-transparent"></div>
          <div className="relative z-20 flex items-center justify-between text-white">
            <div>
              <span className="text-[10px] tracking-widest uppercase text-sand block font-medium">
                Heritage & Traditions
              </span>
              <h3 className="font-playfair text-2xl font-semibold">
                CULTURAL JOURNEYS
              </h3>
            </div>
            <ArrowUpRight className="w-5 h-5 text-sand transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </Link>

        {/* Island Escape -> Malaysia */}
        <Link
          href="/malaysia"
          className="group relative w-full sm:w-85.5 h-96 bg-[url('/img/experiences/island.jpg')] bg-cover bg-center flex flex-col justify-end p-6 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark-green/90 via-dark-green/30 to-transparent"></div>
          <div className="relative z-20 flex items-center justify-between text-white">
            <div>
              <span className="text-[10px] tracking-widest uppercase text-sand block font-medium">
                Coastal Sanctuary
              </span>
              <h3 className="font-playfair text-2xl font-semibold">
                ISLAND ESCAPE
              </h3>
            </div>
            <ArrowUpRight className="w-5 h-5 text-sand transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </Link>

        {/* Adventure Trails -> Switzerland */}
        <Link
          href="/switzerland"
          className="group relative w-full sm:w-85.5 h-96 bg-[url('/img/experiences/adventure2.jpg')] bg-cover bg-center flex flex-col justify-end p-6 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark-green/90 via-dark-green/30 to-transparent"></div>
          <div className="relative z-20 flex items-center justify-between text-white">
            <div>
              <span className="text-[10px] tracking-widest uppercase text-sand block font-medium">
                Alpine Discovery
              </span>
              <h3 className="font-playfair text-2xl font-semibold">
                ADVENTURE TRAILS
              </h3>
            </div>
            <ArrowUpRight className="w-5 h-5 text-sand transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </Link>
      </div>
    </section>
  );
}
