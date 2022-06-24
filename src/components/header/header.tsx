import { Menu, ThemeToggler, Wrapper, Logo } from 'components';
import { Burger, BurgerIcon } from 'components/nav/style';
import { Container, Link, Box, Title, LogoInner, Wrap, MenuInner, Blur } from 'components/header/style';
import React, { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Container>
      <Wrapper>
        <Box isOpen={isOpen}>
          <Link href={'/'}>
            <LogoInner isOpen={isOpen}>
              <Logo/>
            </LogoInner>
            <Title>Pokemon</Title>
          </Link>
          <Wrap>
            <Blur isOpen={isOpen}/>
            <Burger isOpen={isOpen} onClick={() => setIsOpen(prevState => !prevState)}>
              <BurgerIcon/>
            </Burger>
            <MenuInner isOpen={isOpen}>
              <Menu isOpen={isOpen}/>
              <ThemeToggler isOpen={isOpen}/>
            </MenuInner>
          </Wrap>
        </Box>
      </Wrapper>
    </Container>
  );
};
