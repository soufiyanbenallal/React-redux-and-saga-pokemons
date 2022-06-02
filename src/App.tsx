/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { IParams, IPokemon, IPokemonsState } from './models/pokemonsModel';
import { useSelector } from 'react-redux';
import { getPokemonDetails, getPokemons, pokemonsSelector } from './redux/features/pokemonsSlice';
import { useAppDispatch } from './hooks';
import PokemonCard from './components/PokemonCard';
import Pagination from './components/Pagination';
/**
 * 
 * redux - saga 
 * hooks - useEffect
 * https://pokeapi.co/
 * 
 */
function App() {
  const [params, setParams] = useState<IParams>({ offset: 0 , limit: 30 })
  const { loading, pokemons, error}: any = useSelector(pokemonsSelector)	
  const dispatch = useAppDispatch();

  // const handleFetch = (params: IParams) => {
  //   setLoading(true)
  //   fetchPokemon(params)
  //     .then(data => {
  //       setPokemons(data)
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  //     .finally(()=>{
  //       setLoading(false)
  //     })
  // }

  useEffect(() => {
    // handleFetch(params)
    dispatch(getPokemons(params))
    console.log("state", pokemons);
    
  }, [params, dispatch])
  
  useEffect(() => {
    if (!loading && pokemons.results && pokemons.results.length > 0) {
      pokemons.results.map((p:IPokemon)=>dispatch(getPokemonDetails(p.url)))
    }
  }, [loading])
  
  useEffect(() => {
    console.log("state", pokemons);
  }, [pokemons])
  
  

  if (loading) {
    return <div className='max-w-7xl mx-auto text-4xl font-bold sm:px-6 lg:px-8 py-16'>Loading...</div>
  }

  if (!pokemons.results && !loading) {
    return <div className='max-w-7xl mx-auto text-4xl font-bold sm:px-6 lg:px-8 py-16'>No pokemons</div>
  }

  return (
    <div className="">
      <div className="bg-white text-gray-800">
        <div className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8 py-16">
          <h2 className="text-4xl font-bold pb-16">Pokemons</h2>

          <div className="-mx-px border-t border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-5">
            {
            pokemons.results && pokemons.results.map((pokemon: IPokemon) => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            )) 
            }
          </div>
          <Pagination />
          </div>
        </div>
    </div>
  );
}

export default App;
