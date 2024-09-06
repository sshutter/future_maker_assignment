"use client";

import { Pokemon, PokemonAttackInterface } from "@/interfaces/PokemonInterface";
import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import { Tilt } from "react-tilt";
import { LinearProgress } from "@mui/material";

const EvoCard = ({ pokemon }: { pokemon: Pokemon }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleEvo = (name: string) => {
    const params = new URLSearchParams(searchParams);

    if (name) {
      params.set("query", name);
    } else {
      params.delete("query");
    }
    router.replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div onClick={() => handleEvo(pokemon.name)}>
      <Tilt
        className="text-black w-[500px] border-4 border-yellow-300 bg-slate-300 px-4 rounded-lg hover:cursor-pointer hover:bg-slate-400"
        title="Click the card to evolution!"
        options={{
          max: 15,
          scale: 1,
          speed: 1000,
        }}
      >
        <div className="w-full font-bold self-center text-4xl text-center py-2">
          {pokemon.name}
        </div>
        <div className="w-full h-auto justify-items-center items-center flex flex-col">
          <Image
            src={pokemon.image}
            alt={`${pokemon.name}'s image`}
            width={200}
            height={200}
            className="border-2 border-yellow-300"
          />
        </div>
        <div className="py-4 space-y-1">
          <p>
            <span className="font-bold text-xl pr-4">ID</span>
            {pokemon.id}
          </p>
          <p>
            <span className="font-bold text-xl pr-4">Number</span>
            {pokemon.number}
          </p>
          <p>
            <span className="font-bold text-xl pr-4">Weight</span>
            {pokemon.weight.minimum}-{pokemon.weight.maximum}
          </p>
          <p>
            <span className="font-bold text-xl pr-4">Height</span>
            {pokemon.height.minimum}-{pokemon.height.maximum}
          </p>
          <p>
            <span className="font-bold text-xl pr-4">Classification</span>
            {pokemon.classification}
          </p>
          <p>
            <span className="font-bold text-xl pr-4">Types </span>
            {pokemon.types.map((type, index) => (
              <span key={index}>
                {type}
                {index < pokemon.types.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
          <p>
            <span className="font-bold text-xl pr-4">Resistant </span>
            {pokemon.resistant.map((resistant, index) => (
              <span key={index}>
                {resistant}
                {index < pokemon.resistant.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
          <p>
            <span className="font-bold text-xl pr-4">Weaknesses</span>
            {pokemon.weaknesses.map((weakness, index) => (
              <span key={index}>
                {weakness}
                {index < pokemon.weaknesses.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
          <p>
            <span className="font-bold text-xl pr-4">Flee Rate</span>
            {pokemon.fleeRate}
          </p>
          <p>
            <span className="font-bold text-xl pr-4">Max HP</span>
            {pokemon.maxHP}
          </p>
          <p>
            <span className="font-bold text-xl pr-4">Max CP</span>
            {pokemon.maxCP}
          </p>
        </div>
      </Tilt>
    </div>
  );
};

export default function EvoCardSection({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Suspense fallback={<LinearProgress />}>
      <EvoCard pokemon={pokemon} />
    </Suspense>
  );
}
