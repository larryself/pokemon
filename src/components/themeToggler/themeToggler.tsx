import { Sun, Moon } from "components";
import React from "react";
import { useThemeSelector, useAction } from "store";
import { Container, Input, Label, Ball } from "./style";

export const ThemeToggler = () => {
	const { theme } = useThemeSelector();
	const { setTheme } = useAction();
	return (
		<Container>
			<Input type="checkbox" id="checkbox" />
			<Label htmlFor="checkbox" onClick={() => setTheme()}>
				<Ball>{theme === "LightTheme" ? <Sun /> : <Moon />}</Ball>
			</Label>
		</Container>
	);
};
