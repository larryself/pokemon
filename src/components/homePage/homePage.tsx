import { Footer, Header, Button, BannerComplete, Wrapper } from 'components';
import { Inner, Wrap, Title, Box, SubTitle, Banner, Container } from './style';
import { COLORS } from 'constants/colors';

export const HomePage = () => {
  return (
    <>
      <Header/>
      <Inner>
        <main>
          <Wrap>
            <Wrapper>
              <Container>
                <Box>
                  <Title><b>Find</b> all your favorite <b>Pokemon</b></Title>
                  <SubTitle>You can know the type of Pokemon, its strengths, disadvantages and abilities</SubTitle>
                  <Button color={COLORS.GREEN} text={'See pokemons'} linkTo={'/pokedex'}/>
                </Box>
                <Banner>
                  <BannerComplete/>
                </Banner>
              </Container>
            </Wrapper>
          </Wrap>
        </main>
        <Footer/>
      </Inner>
    </>
  );
};
