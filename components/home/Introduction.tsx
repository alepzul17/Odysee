import Image from "next/image";
import Link from "next/link";

export default function Introduction() {
  return (
    <section className="h-187.5 w-full bg-warm-cream flex flex-col items-center justify-center md:h-175 md:flex-row md:justify-center md:items-center">
      <div className="flex flex-col items-center md:flex-row md:items-start md:gap-15 3xl:gap-40">
        <Image
          src="/img/introduction/img2.jpg"
          width={342}
          height={300}
          alt="Kyoto"
          className="h-75 object-cover md:w-140 md:h-130 rounded-2xl"
        />

        <div className="flex flex-col w-85.5 mt-6 items-start md:mt-0 text-forest-green">
          <p className="tracking-widest text-sm font-medium md:text-base">
            THE ART OF TRAVEL
          </p>

          <h2 className="font-semibold font-playfair text-3xl mt-4 md:text-4xl md:w-113">
            TRAVEL BEYOND THE ORDINARY.
          </h2>

          <p className="text-lg tracking-wide mt-4 md:w-135 font-light">
            We believe every journey should be as unique as the traveller.
            Discover meaningful experiences and extraordinary destinations
            around the world.
          </p>

          <Link
            href="/about"
            className="px-6 py-2.5 bg-forest-green text-warm-cream mt-6 transition-colors duration-300 hover:bg-sand hover:text-forest-green cursor-pointer text-sm font-medium rounded-md inline-block"
          >
            DISCOVER MORE
          </Link>
        </div>
      </div>
    </section>
  );
}
