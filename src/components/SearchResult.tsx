"use client";

import PokemonCard from "./PokemonCard"; // Assuming this is your component
import { Pokemon } from "@/interfaces/PokemonInterface";
import { GET_POKEMON_BY_NAME } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { useSearchParams } from "next/navigation";
import AttackTable from "./AttackTable";
import { Suspense } from "react";
import EvoCardSection from "./EvoCard";
import { LinearProgress } from "@mui/material";

const SearchResult = () => {
  const searchParams = useSearchParams();
  const pokemonName = searchParams.get("query");

  const { data } = useQuery(GET_POKEMON_BY_NAME, {
    variables: { name: pokemonName },
    skip: !pokemonName,
  });

  if (!pokemonName) return <></>;
  if (!data?.pokemon) return <p>Not found</p>;

  const pokemon = data.pokemon;

  return (
    <div className="flex flex-col items-center justify-center">
      <PokemonCard pokemon={pokemon} />
      <AttackTable pokemonAtk={pokemon.attacks.fast} attackType="Fast" />
      <AttackTable pokemonAtk={pokemon.attacks.special} attackType="Special" />
      {pokemon.evolutions &&
        pokemon.evolutions.map((evolution: Pokemon) => (
          <div
            className="py-6 w-full flex flex-col items-center justify-center"
            key={evolution.id}
          >
            <EvoCardSection pokemon={evolution} />
            <AttackTable
              pokemonAtk={evolution.attacks.fast}
              attackType="Fast"
            />
            <AttackTable
              pokemonAtk={evolution.attacks.special}
              attackType="Special"
            />
          </div>
        ))}
    </div>
  );
};

export default function SearchResultSection() {
  return (
    <Suspense fallback={<LinearProgress />}>
      <SearchResult />
    </Suspense>
  );
}
