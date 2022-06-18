import React from "react";
import { IPokemon } from "../models/pokemonsModel";

export default function PokemonCard({ pokemon }: { pokemon: IPokemon }) {
  return (
    <a
      href={pokemon.url}
      className="group relative p-4 border-r border-b border-gray-200 sm:p-6"
    >
      <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
        {pokemon.completed ? (
          <img
            src={pokemon.image || "https://via.placeholder.com/150"}
            alt={pokemon.name}
            className="w-full h-full aspect-square object-center object-cover"
          />
        ) : (
          <div className="animate-pulse flex opacity-20 bg-slate-700 aspect-square w-full"></div>
        )}
      </div>
      <div className="pt-10 pb-4 text-center">
        <h3 className="text-sm font-medium text-gray-900">
          <span aria-hidden="true" className="absolute inset-0" />
          {pokemon.name}
        </h3>
      </div>
    </a>
  );
}
