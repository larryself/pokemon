import { Footer, Header, Button, Wrapper, BannerComplete } from 'components';
import { Inner, Bold, Title, Box, SubTitle, Banner, Container} from './style';

import { COLORS } from "../../constants/colors";

export const HomePage = () => {
  return (
    <>
      <Header/>
      <Inner>
        <main>
          <Wrapper>
            <Container>
              <Box>
                <Title><Bold>Find</Bold> all your
                  favorite <Bold>Pokemon</Bold></Title>
                <SubTitle>You can know the type of Pokemon, its strengths, disadvantages and abilities
                </SubTitle>
                <Button color={COLORS.GREEN} text={'See pokemons'}/>
              </Box>
              <Banner>
                <BannerComplete width={375} height={287}/>
              </Banner>
            </Container>
          </Wrapper>
        </main>
        <Footer/>
      </Inner>
    </>
  );
};
