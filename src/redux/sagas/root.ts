import { takeEvery, takeLatest } from "redux-saga/effects";
import { getPokemonDetails, getPokemons } from "../features/pokemonsSlice";
import { handleGetPokemonsList, handleGetPokemonDetails } from "./handlers/pokemonsHandler";

export function* workerSaga() {
  yield takeLatest(getPokemons.type as any , handleGetPokemonsList);
  yield takeEvery(getPokemonDetails.type as any, handleGetPokemonDetails);
}