"use client";

import React, {
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";

interface WishlistContextType {
  wishlist: string[];
  addToWishlist: (slug: string) => void;
  removeFromWishlist: (slug: string) => void;
  toggleWishlist: (slug: string) => void;
  isInWishlist: (slug: string) => boolean;
  clearWishlist: () => void;
  isLoaded: boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

const STORAGE_KEY = "odysse_wishlist";
const WISHLIST_EVENT = "odysse_wishlist_change";

function getSnapshot(): string {
  if (typeof window === "undefined") {
    return "[]";
  }
  return localStorage.getItem(STORAGE_KEY) || "[]";
}

function getServerSnapshot(): string {
  return "[]";
}

function subscribe(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};

  const handleCustomEvent = () => callback();
  const handleStorageEvent = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      callback();
    }
  };

  window.addEventListener(WISHLIST_EVENT, handleCustomEvent);
  window.addEventListener("storage", handleStorageEvent);

  return () => {
    window.removeEventListener(WISHLIST_EVENT, handleCustomEvent);
    window.removeEventListener("storage", handleStorageEvent);
  };
}

function saveToStorage(items: string[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event(WISHLIST_EVENT));
  } catch (e) {
    console.error("Failed to save wishlist to localStorage:", e);
  }
}

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const rawWishlist = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const wishlist = useMemo(() => {
    try {
      const parsed = JSON.parse(rawWishlist);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }, [rawWishlist]);

  const isLoaded = typeof window !== "undefined";

  const addToWishlist = (slug: string) => {
    const cleanSlug = slug.toLowerCase();
    if (!wishlist.includes(cleanSlug)) {
      saveToStorage([...wishlist, cleanSlug]);
    }
  };

  const removeFromWishlist = (slug: string) => {
    const cleanSlug = slug.toLowerCase();
    saveToStorage(wishlist.filter((item) => item !== cleanSlug));
  };

  const toggleWishlist = (slug: string) => {
    const cleanSlug = slug.toLowerCase();
    if (wishlist.includes(cleanSlug)) {
      saveToStorage(wishlist.filter((item) => item !== cleanSlug));
    } else {
      saveToStorage([...wishlist, cleanSlug]);
    }
  };

  const isInWishlist = (slug: string) => {
    return wishlist.includes(slug.toLowerCase());
  };

  const clearWishlist = () => {
    saveToStorage([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isInWishlist,
        clearWishlist,
        isLoaded,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
