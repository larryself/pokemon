import React, { FC } from 'react';
import { Container, List, Item, NavLink } from './style';

interface MenuProps {
  isOpen: boolean
}

export const Menu: FC<MenuProps> = ({isOpen}) => {
  return (
    <Container>
      <List isOpen={isOpen}>
        <Item><NavLink isOpen={isOpen} to={'/'}>Home</NavLink></Item>
        <Item><NavLink isOpen={isOpen} to={'/pokedex'}>Pokédex</NavLink></Item>
        <Item><NavLink isOpen={isOpen} to={'/legend'}>Legendaries</NavLink></Item>
        <Item><NavLink isOpen={isOpen} to={'/compare'}>Compare</NavLink></Item>
      </List>
    </Container>
  );
};
