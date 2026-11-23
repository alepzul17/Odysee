import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import OurMission from "@/components/about/OurMission";
import WhatWeBelieve from "@/components/about/WhatWeBelieve";
import AboutDestinations from "@/components/about/AboutDestinations";
import AboutCta from "@/components/about/AboutCta";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Our Story, Mission & Values — About ODYSSE | Discover the World",
  description:
    "Discover the world with Odysse. From peaceful mountain escapes to vibrant cultural cities, discover destinations that inspire your next adventure.",
};

export default function AboutPage() {
  return (
    <div className="bg-warm-cream min-h-screen">
      <AboutHero />
      <OurStory />
      <OurMission />
      <WhatWeBelieve />
      <AboutDestinations />
      <AboutCta />
      <Newsletter />
    </div>
  );
}
