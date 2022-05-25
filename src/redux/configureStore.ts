import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { workerSaga } from "./sagas/root";
import pokemonsReducer from "./features/pokemonsSlice";

const sagaMiddleware = createSagaMiddleware();
const middleware = (getDefaultMiddleware: any )=>(getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware));
const reducer = combineReducers({
    pokemons: pokemonsReducer,
});

const store = configureStore({
    reducer,
    middleware
});

sagaMiddleware.run(workerSaga);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch