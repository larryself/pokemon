import React, { FC } from 'react';
import { Container, Info, Name, Stats, Features, ImgInner, Image, Feature } from './style'
import { gradConverter } from "./grad";
import { Stat } from "../stat/stat";

export interface PokemonProps {
  id: number,
  name: string,
  stats: { base_stat: string, stat: { name: string } }[]
  color: string,
  url: string,
  types: { type: { name: string } }[],
  sprites: { other: { dream_world: { front_default: string } } },
  onClick: () => void,
  weight: string
}

export const CartItem: FC<PokemonProps> = (data) => {
  return (
    <Container bgColor={gradConverter(data.color)} onClick={data.onClick}>
      <Info>
        <Name>{data.name[0].toUpperCase() + data.name.slice(1)}</Name>
        <Stats>
          <Stat value={data.stats[1].base_stat} name={'Attack'}/>
          <Stat value={data.stats[2].base_stat} name={'Defense'}/>
        </Stats>
        <Features>
          {data.types &&
          data.types.map((type: { type: { name: string } }) => (
            <Feature>
              <p>{type.type.name[0].toUpperCase() + type.type.name.slice(1)}</p>
            </Feature>
          ))
          }
        </Features>
      </Info>
      <ImgInner>
        {data.sprites &&
        <Image src={data.sprites.other.dream_world.front_default} alt={data.name} width={168} height={156}/>}
      </ImgInner>
    </Container>
  );
};
