export interface IPokemons{
    count: number;
    next: string;
    previous: string;
    results: IPokemon[];
}


export interface IPokemon {
    [x: string]: any;
    name?: string;
    url: string;
    img?: string;
    completed?: boolean;
}

export interface IPokemonsState {
    loading: boolean;
    pokemons: IPokemons;
    error: any;
}


export interface IParams {
    offset: number;
    limit: number;
}

// Define a type for the slice state
export interface CounterState {
    value: number
  }
