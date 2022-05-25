import { call, put } from "redux-saga/effects";
// import { setUser } from "../../ducks/userSlice";
import { requestGetPokemonById, requestGetPokemons } from "../requests/pokemonsRequests";
import { getPokemonsSuccess, getPokemonsFailure, getPokemonDetailsSuccess } from "../../features/pokemonsSlice"
import { IParams, IPokemon, IPokemons } from "../../../models/pokemonsModel";

/**
 * handle pokemon request saga
 * @param action 
 */

export function* handleGetPokemonsList(action: IParams) {
  try {
    const res: IPokemons = yield call((params: any) => requestGetPokemons(params.payload), action);
    yield put(getPokemonsSuccess(res));
    console.log("after requestGetPokemons", res);
    
  } catch (error) {
    yield put(getPokemonsFailure(error));
    console.log(error);
  }
}

/**
 * handle pokemon request saga
 * @param action 
 */

export function* handleGetPokemonDetails(action: string) {
  try {
    const res: IPokemon = yield call((params: any) => requestGetPokemonById(params.payload), action);
    console.log("res",res);
    
    yield put(getPokemonDetailsSuccess(res));
  } catch (error) {
    // yield put(getPokemonsFailure(error));
    console.log(error);
  }
}
