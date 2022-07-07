import {
  Container,
  Wrap,
  Content,
  ImgInner,
  Img,
  InfoInner,
  Name,
  Button,
  Stats,
  Stat,
  StatName,
  StatValue,
  Abilities,
  AbilitiesTitle,
  Hp,
  Column,
  Value,
  TitleInner,
  Ring,
  RingValue,
  Inner,
  SubTitle,
  Line,
  Features,
  Feature,
  FeatureName,
} from './style';
import { PokemonProps } from '../cartItem/cartItem';
import { Close } from 'components';
import React from 'react';
import { featuresColors, GRADIENT } from 'constants/colors';
import { useAction } from 'store';

export const ModalCard = ({pokemon}: { pokemon: PokemonProps }) => {
  const {closeCart} = useAction();
  return (
    <>
      <Container onClick={closeCart}>
        <Wrap onClick={(e) => e.stopPropagation()} isOpen={true}>
          <Content>
            <Button type={'button'} onClick={closeCart}><Close/></Button>
            <ImgInner color={GRADIENT['red']}>
              <Img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name}/>
            </ImgInner>
            <InfoInner>
              <TitleInner>
                <Name>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</Name>
                <Inner>
                  <SubTitle>{pokemon.generation[0].toUpperCase() + pokemon.generation.slice(1)}</SubTitle>
                  <Ring>
                    <RingValue>{pokemon.id}</RingValue>
                  </Ring>
                </Inner>
                <Features>
                  {pokemon.types.map(item => (
                    <Feature color={featuresColors[item.type.name] || ''}>
                      <FeatureName>{item.type.name[0].toUpperCase() + item.type.name.slice(1)}</FeatureName>
                    </Feature>
                  ))}
                </Features>
              </TitleInner>
              <Abilities>
                <AbilitiesTitle>Abilities</AbilitiesTitle>
                <div>
                  {pokemon.abilities.map(item => (
                    <span>{item.ability.name[0].toUpperCase() + item.ability.name.slice(1)} </span>))}
                </div>
              </Abilities>
              <Hp>
                <Column>
                  <p>Healthy Points</p>
                  <Value>{pokemon.stats[0].base_stat}</Value>
                  <Line value={100 - (pokemon.stats[0].base_stat / 10)} type={'hp'}/>
                </Column>
                <Column>
                  <p>Experience</p>
                  <Value>{pokemon.base_experience}</Value>
                  <Line value={100 - (pokemon.base_experience / 10)} type={'exp'}/>
                </Column>
              </Hp>
              <Stats>
                <Stat>
                  <StatValue>
                    <p>{pokemon.stats[1].base_stat}</p>
                  </StatValue>
                  <StatName>Defense</StatName>
                </Stat>
                <Stat>
                  <StatValue>
                    <p>{pokemon.stats[2].base_stat}</p>
                  </StatValue>
                  <StatName>Attack</StatName>
                </Stat>
                <Stat>
                  <StatValue>
                    <p>{pokemon.stats[3].base_stat}</p>
                  </StatValue>
                  <StatName>Sp Defense</StatName>
                </Stat>
                <Stat>
                  <StatValue>
                    <p>{pokemon.stats[4].base_stat}</p>
                  </StatValue>
                  <StatName>Sp Attack</StatName>
                </Stat>
              </Stats>
            </InfoInner>
          </Content>
        </Wrap>
      </Container>
    </>
  );
};
