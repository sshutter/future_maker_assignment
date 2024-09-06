"use client";

import { Tilt } from "react-tilt";
import { Pokemon } from "@/interfaces/PokemonInterface";
import Image from "next/image";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Tilt
      className="text-black w-[500px] border-4 border-yellow-300 bg-slate-300 px-4 rounded-lg"
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
  );
}
