import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPokemon, IPokemons, IPokemonsState } from '../../models/pokemonsModel'

export const initialState: IPokemonsState = {
  loading: false,
  error: null,
  pokemons: {} as IPokemons,
}

// A slice for Pokemons with our 3 reducers
const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    // start loading and trigger saga to get pokemons
    getPokemons: (state, { payload }) => {
      state.loading = true
    },

    // successed fetching pokemons
    getPokemonsSuccess: (state, { payload }: PayloadAction<IPokemons>) => {
      state.pokemons = payload
      state.loading = false
      state.error = null
    },

    // i use any because i dont know the type of error will return from the request
    getPokemonsFailure: (state, { payload }: PayloadAction<any>) => {
      state.loading = false
      state.error = payload
    },

    // trigger saga to get pokemon details
    // we need payload to catch the pokemon url
    getPokemonDetails: (state, { payload }) => {},

    // successed fetching pokemon details
    getPokemonDetailsSuccess: (state, { payload }: PayloadAction<IPokemon>) => {
      const index = state.pokemons.results?.findIndex(pokemon => pokemon.name === payload.name)
      if (index !== -1) {
        state.pokemons.results[index] = {
          ...state.pokemons.results[index],
          image: payload?.sprites?.front_default,
          completed: true,
        }
      }
    },
    // failed fetching pokemon details
    getPokemonDetailsFailure: (state, { payload }: PayloadAction<any>) => {
      state.error = payload
    }
  },

})

// Three actions generated from the slice
export const { getPokemons, getPokemonsSuccess, getPokemonsFailure, getPokemonDetails, getPokemonDetailsSuccess, getPokemonDetailsFailure } = pokemonsSlice.actions

// the selectore 
export const pokemonsSelector = (state : IPokemonsState) => state.pokemons

// The reducer 
export default pokemonsSlice.reducer