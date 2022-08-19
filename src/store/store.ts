import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { themeReducer, pokemonApi, pokemonReducer } from "store";

const rootReducer = combineReducers({
	theme: themeReducer,
	pokemon: pokemonReducer,
	[pokemonApi.reducerPath]: pokemonApi.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
