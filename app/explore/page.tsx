import Categories from "@/components/explore/Categories";
import Hero from "@/components/explore/ExploreHero";
import Featured from "@/components/explore/Featured";
import Newsletter from "@/components/explore/Newsletter";
import Search from "@/components/explore/Search";

export default function Explore() {
  return (
    <div className="bg-warm-cream">
      <Hero />
      <Search />
      <Featured />
      <Categories />
      <Newsletter />
    </div>
  );
}
