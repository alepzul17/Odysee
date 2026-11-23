"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

interface WishlistButtonProps {
  slug: string;
  name?: string;
  variant?: "icon" | "button";
  className?: string;
}

export default function WishlistButton({
  slug,
  name,
  variant = "icon",
  className = "",
}: WishlistButtonProps) {
  const { isInWishlist, toggleWishlist, isLoaded } = useWishlist();
  const active = isInWishlist(slug);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(slug);
  };

  if (variant === "button") {
    return (
      <button
        type="button"
        onClick={handleClick}
        disabled={!isLoaded}
        className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 text-sm flex items-center gap-2 cursor-pointer ${
          active
            ? "bg-rose-700 text-white hover:bg-rose-800 shadow-sm"
            : "border border-forest-green/30 text-forest-green hover:bg-forest-green/5"
        } ${className}`}
        aria-label={
          active
            ? `Remove ${name || slug} from wishlist`
            : `Save ${name || slug} to wishlist`
        }
      >
        <Heart
          className={`w-4 h-4 transition-transform duration-300 ${
            active ? "fill-white text-white scale-110" : "text-forest-green"
          }`}
        />
        <span>{active ? "Saved in Wishlist" : "Save to Wishlist"}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={!isLoaded}
      className={`w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md ${
        active
          ? "bg-white text-rose-600 hover:scale-110"
          : "bg-black/35 text-white hover:bg-black/55 hover:text-rose-300 hover:scale-105"
      } ${className}`}
      aria-label={
        active
          ? `Remove ${name || slug} from wishlist`
          : `Add ${name || slug} to wishlist`
      }
      title={active ? "Remove from Wishlist" : "Save to Wishlist"}
    >
      <Heart
        className={`w-4 h-4 transition-transform duration-300 ${
          active ? "fill-rose-600 text-rose-600 scale-110" : ""
        }`}
      />
    </button>
  );
}
