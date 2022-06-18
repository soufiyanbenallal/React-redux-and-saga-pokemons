import { get } from "../../../services/api.service";
import { IParams, IPokemons } from "../../../models/pokemonsModel";

/**
 * fetch pokemon
 * @param limit - number of records to return
 * @param offset - number of records to skip
 * @returns Promise<Array<Object>>
 */
export function requestGetPokemons({limit, offset}: IParams): Promise<IPokemons> {
    return get(`pokemon?limit=${limit}&offset=${offset}`)
}

export function requestGetPokemonById(url: string): any {
    return get(url,'');
}

