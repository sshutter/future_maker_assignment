import SearchSection from "@/components/Search";
import SearchResultSection from "@/components/SearchResult";

export default function Home() {
  return (
    <div className="p-24 bg-black min-h-screen">
      <div className="space-y-4">
        <p className="font-bold text-xl">Search Pokemon</p>
        <SearchSection placeholder="Search Pokemon" />
        <SearchResultSection />
      </div>
    </div>
  );
}
