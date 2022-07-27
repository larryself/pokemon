import { Wrapper, Footer, Header, CartBox, Filter } from 'components';
import { Inner, Title, Container } from './style';
import { usePokemonSelector } from 'store';

export const PokedexPage = () => {
  const {limit} = usePokemonSelector()
  return (
    <>
      <Header/>
      <Inner>
        <main>
          <Wrapper>
            <Container>
              <Title>{limit || '∞'} <b>Pokemons</b> for you to choose your favorite</Title>
              <Filter/>
              <CartBox/>
            </Container>
          </Wrapper>
        </main>
        <Footer/>
      </Inner>
    </>
  );
};
