"use client";

import PokemonCard from "./PokemonCard"; // Assuming this is your component
import { Pokemon } from "@/interfaces/PokemonInterface";
import { GET_POKEMON_BY_NAME } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import AttackTable from "./AttackTable";
import EvoCard from "./EvoCardt";

const SearchResult = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const pokemonName = searchParams.get("query");

  const { loading, error, data } = useQuery(GET_POKEMON_BY_NAME, {
    variables: { name: pokemonName },
  });

  if (loading) return <p>Loading...</p>;
  if (!data?.pokemon) return <p>Not found</p>;

  const pokemon = data.pokemon;
  console.log(pokemon);

  return (
    <div className="flex flex-col items-center justify-center">
      <PokemonCard pokemon={pokemon} />
      <AttackTable pokemonAtk={pokemon.attacks.fast} attackType="Fast" />
      <AttackTable pokemonAtk={pokemon.attacks.special} attackType="Special" />
      {pokemon.evolutions &&
        pokemon.evolutions.map((evolution: Pokemon) => (
          <div className="py-6 w-full flex flex-col items-center justify-center">
            <EvoCard key={evolution.id} pokemon={evolution} />
            <AttackTable
              key={evolution.id}
              pokemonAtk={evolution.attacks.fast}
              attackType="Fast"
            />
            <AttackTable
              key={evolution.id}
              pokemonAtk={evolution.attacks.special}
              attackType="Special"
            />
          </div>
        ))}
    </div>
  );
};

export default SearchResult;
