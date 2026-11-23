import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WishlistProvider } from "@/context/WishlistContext";
import { PlanTripProvider } from "@/context/PlanTripContext";
import PlanTripModal from "@/components/PlanTripModal";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-family",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair-family",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ODYSSE | Discover the World",
  description:
    "Discover extraordinary destinations and create unforgettable journeys around the world.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <WishlistProvider>
          <PlanTripProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <PlanTripModal />
          </PlanTripProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}
