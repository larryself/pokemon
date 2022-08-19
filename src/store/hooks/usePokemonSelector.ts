import { createSelector } from "@reduxjs/toolkit";
import { TypeRootState, useAppSelector } from "store";

const selector = createSelector(
	(state: TypeRootState) => state.pokemon,
	(pokemon) => pokemon
);
export const usePokemonSelector = () => {
	const pokemon = useAppSelector(selector);
	return pokemon;
};
