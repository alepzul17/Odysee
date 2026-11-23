import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-dark-green h-187.5 px-6 pt-12 text-warm-cream md:h-full md:px-25">
      <div className="md:flex justify-between items-start md:pb-6">
        <div className="md:w-1/3">
          <div className="flex flex-col w-fit items-center">
            <Image
              src={"/icon.png"}
              width={22}
              height={22}
              alt="Odysse"
              className="md:w-8"
            />
            <h1 className="font-playfair font-semibold text-2xl md:text-3xl">
              ODYSSE
            </h1>
          </div>
          <p className="mt-2 font-light md:text-xl  ">
            Discover extraordinary destinations and create unforgettable
            journeys around the world.
          </p>
        </div>
        <div className="my-6 flex flex-col gap-5 md:my-0">
          <h3 className="font-semibold mb-2">Connect</h3>
          <Link
            href={"/"}
            className="hover:text-sand transition-colors duration-300 cursor-pointer"
          >
            Connect
          </Link>
          <Link
            href={"/"}
            className="hover:text-sand transition-colors duration-300 cursor-pointer"
          >
            Contact Us
          </Link>
          <Link
            href={"/"}
            className="hover:text-sand transition-colors duration-300 cursor-pointer"
          >
            Instagram
          </Link>
          <Link
            href={"/"}
            className="hover:text-sand transition-colors duration-300 cursor-pointer"
          >
            Facebook
          </Link>
        </div>
        <div className="mt-12 flex flex-col gap-5 md:mt-0">
          <h3 className="font-semibold mb-2">Explore</h3>
          <Link
            href={"/"}
            className="hover:text-sand transition-colors duration-300 cursor-pointer"
          >
            Home
          </Link>
          <Link
            href={"/explore"}
            className="hover:text-sand transition-colors duration-300 cursor-pointer"
          >
            Destinations
          </Link>
          <Link
            href={"/explore"}
            className="hover:text-sand transition-colors duration-300 cursor-pointer"
          >
            Experiences
          </Link>
        </div>
      </div>
      <hr className="bg-warm-cream mt-6 mb-2" />
      <p className="font-extralight text-xs mb-1">
        © 2026 ODYSSE. ALL RIGHTS RESERVED.
      </p>
      <p className="font-extralight text-xs pb-4">EXPLORE THE WORLD</p>
    </div>
  );
}
