import React from 'react';
import { Container, List, Item, NavLink } from './style';

export const Menu = () => {
  return (
    <Container>
      <List>
        <Item><NavLink to={'/'}>Home</NavLink></Item>
        <Item><NavLink to={'/pokedex'}>Pokédex</NavLink></Item>
        <Item><NavLink to={'/legend'}>Legendaries</NavLink></Item>
        <Item><NavLink to={'/compare'}>Compare</NavLink></Item>
      </List>
    </Container>
  );
};
