import React, { FC } from 'react';
import { Wrap, Container, Img, Name, Desc, Stats, Stat, StatName, StatValue, StatLine } from './style';
import { PokemonProps } from '../cartItem/cartItem';

interface Props {
  pokemon: PokemonProps | null;
}

export const Card: FC<Props> = ({pokemon}) => {
  return pokemon && (
    <Wrap>
      <Img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name}/>
      <Container>
        <Name>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</Name>
        <Desc>A strange seed was planted on its back at birth. The plant sprouts and grows wit this POKéMON. It can go for days without eating a single morsel. In the bulb on its back, it stores energy.</Desc>
        <Stats>
          {pokemon.stats.map((stat) => (
            <Stat>
              <StatName>{stat.stat.name[0].toUpperCase()+stat.stat.name.slice(1)}</StatName>
              <StatValue>{stat.base_stat},000</StatValue>
              <StatLine value={(stat.base_stat / 10)}/>
            </Stat>
          ))}
        </Stats>
      </Container>
    </Wrap>
  );
};
