import React, { FC, useState } from 'react';
import { PokemonProps } from '../cartItem/cartItem';
import { Container, Prev, Next, Wrap, WrapImg, Item, Box, Name, Img, List, Inner } from './style';
import { ArrowLeft, ArrowRight, Pokeball } from 'components';

interface Props {
  pokemons: PokemonProps[];
  selectPokemon: (any: any) => void;
}

export const Carousel: FC<Props> = ({pokemons, selectPokemon}) => {
  const [offset, setOffset] = useState(0);
  const handleRightClick = () => {
    setOffset((prev) => {
      if (prev >= pokemons.length - 1) {
        return prev;
      }
      return prev + 1;
    });
  };
  const handleLeftClick = () => {
    setOffset((prev) => {
      if (prev === 0) {
        return 0;
      }
      return prev - 1;
    });
  };
  return (
    <Container>
      <Prev onClick={handleLeftClick}>
        <ArrowLeft/>
      </Prev>
      <Wrap>
        <List offset={offset}>
          {pokemons.map((pokemon, index) => {
            const isActive = offset === index;
            if (isActive) selectPokemon(pokemon);
            return (
              <li key={pokemon.id}>
                <Inner>
                  <Item isActive={isActive}>
                    <WrapImg>
                      <Img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name}/>
                    </WrapImg>
                    <Box>
                      <Name>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</Name>
                      <Pokeball/>
                    </Box>
                  </Item>
                </Inner>
              </li>
            );
          })}
        </List>
      </Wrap>
      <Next onClick={handleRightClick}>
        <ArrowRight/>
      </Next>
    </Container>
  );
};
