import Link from "next/link";
import WishlistButton from "@/components/WishlistButton";

export default function Destinations() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 gap-15">
      <div className="flex flex-col gap-5 text-forest-green">
        <p className="text-center text-sm font-medium tracking-wide">
          EXPLORE THE WORLD
        </p>
        <h1 className="font-playfair text-center text-4xl font-semibold">
          FIND YOUR NEXT ESCAPE
        </h1>
        <p className="text-center ">
          Explore our handpicked destinations and discover places that inspire
          unforgettable journeys.
        </p>
      </div>
      <div className="flex flex-col gap-12 md:flex-row">
        <Link
          href="/japan"
          className="relative w-85.5 h-90 bg-[url('/img/destinations/japan1.jpg')] bg-cover bg-center flex flex-col justify-between p-6 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="absolute inset-0 z-10 bg-forest-green/20"></div>
          <div className="relative z-20 flex justify-end">
            <WishlistButton slug="japan" name="Tokyo, Japan" variant="icon" />
          </div>
          <div className="relative z-20">
            <h3 className="text-white font-playfair text-3xl font-semibold">
              Tokyo,
            </h3>
            <p className="text-white">Japan</p>
          </div>
        </Link>
        <Link
          href="/vestland"
          className="relative w-85.5 h-90 bg-[url('/img/destinations/norway.jpg')] bg-cover bg-center flex flex-col justify-between p-6 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="absolute inset-0 z-10 bg-forest-green/20"></div>
          <div className="relative z-20 flex justify-end">
            <WishlistButton
              slug="vestland"
              name="Vestland, Norway"
              variant="icon"
            />
          </div>
          <div className="relative z-20">
            <h3 className="text-white font-playfair text-3xl font-semibold">
              Vestland,
            </h3>
            <p className="text-white">Norway</p>
          </div>
        </Link>
        <Link
          href="/athens"
          className="relative w-85.5 h-90 bg-[url('/img/destinations/greece.jpg')] bg-cover bg-center flex flex-col justify-between p-6 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="absolute inset-0 z-10 bg-forest-green/20"></div>
          <div className="relative z-20 flex justify-end">
            <WishlistButton
              slug="athens"
              name="Athens, Greece"
              variant="icon"
            />
          </div>
          <div className="relative z-20">
            <h3 className="text-white font-playfair text-3xl font-semibold">
              Athens,
            </h3>
            <p className="text-white">Greece</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
