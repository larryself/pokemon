import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { themeActions, pokemonActions } from "store";

const allActions = {
	...themeActions,
	...pokemonActions,
};

export const useAction = () => {
	const dispatch = useDispatch();
	return bindActionCreators(allActions, dispatch);
};
