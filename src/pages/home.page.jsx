import CasualInspirations from "../components/CasualInspirations";
import HeroGrid from "../components/HeroGrid";
import TrendingSection from "../components/TrendingSection";
import { useGetAllProductsQuery } from "@/lib/api";

function HomePage() {
   const {
    data: products,
    isLoading,
    isError,
  } = useGetAllProductsQuery();

  if (isLoading) return <p className="text-center py-10">Loading...</p>;
  if (isError) return <p className="text-center py-10 text-red-500">Failed to load products.</p>;


  return (
    <>
      <main className="flex flex-col gap-8 md:gap-12 pb-8">
        <HeroGrid />
        <CasualInspirations />
        <TrendingSection />

        
      </main>
    </>
  );
}

export default HomePage;
