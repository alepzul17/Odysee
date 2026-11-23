"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const backgroundImages = [
  "bg-[url('/img/hero/hero1.jpg')]",
  "bg-[url('/img/hero/hero2.jpg')]",
  "bg-[url('/img/hero/hero3.jpg')]",
  "bg-[url('/img/hero/hero4.jpg')]",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [previousImage, setPreviousImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousImage(currentImage);
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="relative bg-cover bg-center min-h-svh flex items-center justify-center pt-24 pb-12 px-6 md:pt-0 md:pb-0">
      <div
        className={`${backgroundImages[previousImage]} absolute inset-0 bg-cover bg-center`}
      />
      <div
        className={`${backgroundImages[currentImage]} absolute inset-0 bg-cover bg-center animate-[heroFade_1.5s_ease-in-out]`}
        key={currentImage}
      />
      <div className="absolute inset-0 z-10 bg-forest-green/20"></div>

      <div className="text-warm-cream flex flex-col relative z-20 justify-center items-center w-full max-w-2xl mx-auto">
        <p className="tracking-widest text-xs sm:text-sm text-center mb-3 md:text-base">
          DISCOVER THE WORLD
        </p>
        <h1 className="w-full max-w-lg text-center text-3xl sm:text-4xl md:text-5xl font-semibold font-playfair mb-3 leading-tight md:mb-2">
          THE WORLD IS YOURS TO EXPLORE.
        </h1>
        <p className="text-center w-full max-w-md mb-7 text-sm sm:text-base md:text-xl font-light">
          Discover extraordinary destinations and create unforgettable journeys
          around the world.
        </p>
        <Link
          href="/explore"
          className="text-forest-green bg-warm-cream px-6 py-3.5 rounded-md hover:bg-sand transition-colors duration-300 cursor-pointer text-xs sm:text-sm md:text-base font-medium inline-block text-center"
        >
          EXPLORE DESTINATIONS
        </Link>
      </div>
    </div>
  );
}
