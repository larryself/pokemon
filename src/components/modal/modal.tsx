import {
  Container,
  Wrap,
  Content,
  ImgInner,
  InfoInner,
  Name,
  Button,
  Stats,
  Stat,
  StatName,
  StatValue,
  Abilities,
  Hp,
  TitleInner,
  Ring,
  RingValue,
  Inner,
  SubTitle
} from './style';
import { PokemonProps } from "../cartItem/cartItem";
import { gradConverter } from "../cartItem/grad";
import { Close } from "components";

export const Modal = ({isOpen, onClick, data}: { isOpen: boolean, onClick: () => void, data: PokemonProps }) => {
  console.log(data)
  return (
    <Container onClick={onClick}>
      <Wrap onClick={(e) => e.stopPropagation()}>
        <Content>
          <Button type={'button'} onClick={onClick}><Close/></Button>
          <ImgInner color={gradConverter('red')}>
            <img src={data.sprites?.other?.dream_world?.front_default} alt={data.name} width={341} height={348}/>
          </ImgInner>
          <InfoInner>
            <TitleInner>
              <Name>{data.name[0].toUpperCase() + data.name.slice(1)}</Name>
              <Inner>
                <SubTitle>Generation 1</SubTitle>
                <Ring>
                  <RingValue>{data.weight}</RingValue>
                </Ring>
              </Inner>
            </TitleInner>
            <Abilities>
              <div>
                <p>Abilities</p>
              </div>
            </Abilities>
            <Hp>
              <div>
                <p>Healthy Points</p>
              </div>
              <div>
                <p>Experience</p>
              </div>
            </Hp>
            <Stats>
              <Stat>
                <StatValue>
                  <p>{data.stats[1].base_stat}</p>
                </StatValue>
                <StatName>Defense</StatName>
              </Stat>
              <Stat>
                <StatValue>
                  <p>{data.stats[2].base_stat}</p>
                </StatValue>
                <StatName>Attack</StatName>
              </Stat>
              <Stat>
                <StatValue>
                  <p>{data.stats[3].base_stat}</p>
                </StatValue>
                <StatName>Sp Defense</StatName>
              </Stat>
              <Stat>
                <StatValue>
                  <p>{data.stats[4].base_stat}</p>
                </StatValue>
                <StatName>Sp Attack</StatName>
              </Stat>
            </Stats>
          </InfoInner>
        </Content>
      </Wrap>
    </Container>
  );
};
