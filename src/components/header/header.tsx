import { Menu, ThemeToggler, Logo } from "components";
import { Burger, BurgerIcon } from "components/nav/style";
import {
	Container,
	Box,
	Title,
	LogoInner,
	Wrap,
	Inner,
	ThemeToggleInner,
	MenuInner,
	Blur,
	WrapLogo,
} from "components/header/style";
import React, { useState } from "react";

export const Header = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<>
			<Container>
				<Box>
					<a href={"/"}>
						<LogoInner>
							<Logo />
						</LogoInner>
						<Title>Pokemon</Title>
					</a>
					<Wrap>
						<Burger onClick={() => setIsOpen((prevState) => !prevState)}>
							<BurgerIcon />
						</Burger>
						<Inner isOpen={isOpen}>
							<WrapLogo isOpen={isOpen}>
								<Logo />
							</WrapLogo>
							<MenuInner>
								<Menu />
							</MenuInner>
							<ThemeToggleInner>
								<ThemeToggler />
							</ThemeToggleInner>
						</Inner>
					</Wrap>
				</Box>
			</Container>
			<Blur isOpen={isOpen} onClick={() => setIsOpen(false)} />
		</>
	);
};
