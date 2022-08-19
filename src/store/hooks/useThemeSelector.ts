import { createSelector } from "@reduxjs/toolkit";
import { TypeRootState, useAppSelector } from "store";

const selector = createSelector(
	(state: TypeRootState) => state.theme,
	(theme) => theme
);
export const useThemeSelector = () => {
	const theme = useAppSelector(selector);
	return theme;
};
