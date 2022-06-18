import React, { useEffect, useState } from "react";
import { IParams, IPokemon } from "./models/pokemonsModel";
import { useSelector } from "react-redux";
import {
  getPokemonDetails,
  getPokemons,
  pokemonsSelector,
} from "./redux/features/pokemonsSlice";
import { useAppDispatch } from "./hooks";
import PokemonCard from "./components/PokemonCard";
import Pagination from "./components/Pagination";
import Main from "./layout/Main";

function App() {
  const [params, setParams] = useState<IParams>({ offset: 0, limit: 30 });
  const { loading, pokemons, error }: any = useSelector(pokemonsSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPokemons(params)); // handleFetch(params)
  }, [params, dispatch]);

  useEffect(() => {
    if (!loading && pokemons.results && pokemons.results.length > 0) {
      pokemons.results.map((p: IPokemon) => dispatch(getPokemonDetails(p.url)));
    }
  }, [loading]);

  return (
    <Main
      title={<span>Pokemons</span>}
      empty={!pokemons.results && !loading}
      error={error}
      loading={loading}
    >
      <div className="-mx-px border-t border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-5">
        {pokemons.results &&
          pokemons.results.map((pokemon: IPokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
      </div>
      <Pagination />
    </Main>
  );
}

export default App;
