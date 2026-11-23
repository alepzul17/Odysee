import Cta from "@/components/home/Cta";
import Destinations from "@/components/home/Destinations";
import Experiences from "@/components/home/Experiences";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Destinations />
      <Experiences />
      <Cta />
    </>
  );
}
