"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useWishlist } from "@/context/WishlistContext";
import { usePlanTrip } from "@/context/PlanTripContext";

const NAV_LINKS = [
  { label: "HOME", href: "/", number: "01" },
  { label: "EXPLORE", href: "/explore", number: "02" },
  { label: "ABOUT", href: "/about", number: "03" },
  { label: "WISHLIST", href: "/wishlist", number: "04" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { wishlist, isLoaded } = useWishlist();
  const { openPlanTrip } = usePlanTrip();

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav>
      <div className="bg-forest-green/35 backdrop-blur-xs fixed w-80 md:w-340 top-15 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 py-2.5 border border-sand rounded-xl flex justify-between items-center z-20">
        <Link
          href="/"
          className="font-playfair text-2xl tracking-widest text-warm-cream hover:opacity-90 transition-opacity"
        >
          ODYSSE
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex text-warm-cream gap-8 items-center">
          {NAV_LINKS.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 text-sm tracking-wider font-medium transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                  active
                    ? "text-sand"
                    : "text-warm-cream/80 hover:text-warm-cream"
                }`}
              >
                <span>{link.label}</span>
                {link.href === "/wishlist" && isLoaded && wishlist.length > 0 && (
                  <span className="px-1.5 py-0.5 text-[10px] bg-sand text-forest-green font-bold rounded-full leading-none">
                    {wishlist.length}
                  </span>
                )}
                {active && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-sand rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => openPlanTrip()}
          className="hidden md:flex px-4 py-2 bg-warm-cream rounded-lg text-forest-green hover:bg-sand transition-colors duration-300 cursor-pointer text-sm font-medium"
        >
          Plan Your Trip
        </button>

        {/* Mobile Menu Button */}
        <button
          className="flex flex-col gap-1.5 md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open mobile menu"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-warm-cream md:hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-forest-green/10">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="font-playfair text-2xl text-forest-green tracking-wider"
            >
              ODYSSE
            </Link>

            <button
              className="text-forest-green text-xl cursor-pointer p-2"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              ✕
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col px-6 py-8">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`border-b border-forest-green/20 py-5 flex items-center justify-between transition-colors ${
                    active ? "bg-forest-green/5 -mx-6 px-6" : ""
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className={`font-inter text-xs ${
                        active ? "text-forest-green font-bold" : "text-sand"
                      }`}
                    >
                      {link.number}
                    </span>
                    <h2
                      className={`font-playfair text-3xl transition-colors ${
                        active
                          ? "text-forest-green font-semibold"
                          : "text-forest-green/70 hover:text-forest-green"
                      }`}
                    >
                      {link.label.charAt(0) + link.label.slice(1).toLowerCase()}
                    </h2>
                    {link.href === "/wishlist" &&
                      isLoaded &&
                      wishlist.length > 0 && (
                        <span className="px-2 py-0.5 text-xs bg-forest-green text-warm-cream font-medium rounded-full">
                          {wishlist.length}
                        </span>
                      )}
                  </div>

                  {active && (
                    <span className="w-2.5 h-2.5 rounded-full bg-forest-green" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Plan Trip CTA */}
          <div className="px-6 mt-2">
            <button
              type="button"
              onClick={() => {
                setIsMenuOpen(false);
                openPlanTrip();
              }}
              className="w-full bg-forest-green text-warm-cream py-3.5 rounded-xl font-medium text-xs tracking-widest uppercase hover:bg-forest-green/90 transition-colors shadow-sm cursor-pointer"
            >
              Plan Your Trip
            </button>
          </div>

          {/* Footer */}
          <div className="absolute bottom-8 w-full px-6">
            <p className="font-inter text-sm text-forest-green font-light">
              Discover the world.
            </p>

            <div className="mt-3 flex gap-6">
              <a
                href="#"
                className="font-inter text-xs text-forest-green hover:underline"
              >
                Instagram
              </a>
              <a
                href="#"
                className="font-inter text-xs text-forest-green hover:underline"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
