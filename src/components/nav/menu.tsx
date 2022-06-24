import React, { FC } from 'react';
import { Container, List, Item, NavLink } from './style';

interface MenuProps {
  isOpen: boolean
}

export const Menu: FC<MenuProps> = ({isOpen}) => {
  return (
    <Container>
      <List isOpen={isOpen}>
        <Item><NavLink to={'/'}>Home</NavLink></Item>
        <Item><NavLink to={'/pokedex'}>Pokédex</NavLink></Item>
        <Item><NavLink to={'/legend'}>Legendaries</NavLink></Item>
        <Item><NavLink to={'/compare'}>Compare</NavLink></Item>
      </List>
    </Container>
  );
};
