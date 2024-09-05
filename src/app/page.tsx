import Search from "@/components/Search";
import SearchResult from "@/components/SearchResult";
import { GET_POKEMON_BY_NAME } from "@/graphql/queries";
import { Pokemon } from "@/interfaces/PokemonInterface";
import client from "@/libs/ApolloClient";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-24 bg-black min-h-screen">
      <div className="space-y-4">
        <p className="font-bold text-xl">Search Pokemon</p>
        <Search placeholder="Search Pokemon" />
        <SearchResult />
      </div>
    </div>
  );
}
