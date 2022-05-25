import { take, takeEvery, takeLatest } from "redux-saga/effects";
import { getPokemonDetails, getPokemons } from "../features/pokemonsSlice";
import { handleGetPokemonsList, handleGetPokemonDetails } from "./handlers/pokemonsHandler";

export function* workerSaga() {
  // @ts-ignore
  yield takeLatest(getPokemons.type, handleGetPokemonsList);
  // @ts-ignore
  yield takeEvery(getPokemonDetails.type, handleGetPokemonDetails);
}