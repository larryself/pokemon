import { Wrapper, Footer, Header } from 'components';
import { Inner, Title, Container } from './style';

export const PokedexPage = () => {
  return (
    <>
      <Header/>
      <Inner>
        <main>
          <Wrapper>
            <Container>
              <Title>800 <b>Pokemons</b> for you to choose your favorite</Title>
            </Container>
          </Wrapper>
        </main>
        <Footer/>
      </Inner>
    </>
  );
};
