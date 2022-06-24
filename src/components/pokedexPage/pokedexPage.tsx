import { CartBox, Wrapper, Filter, Footer, Header } from "components";
import { Inner, Bold, Title } from './style';

export const PokedexPage = () => {
  return (
    <>
      <Header/>
      <Inner>
        <main>
          <Wrapper>
            <Title>800 <Bold>Pokemons</Bold> for you to choose your favorite</Title>
            <Filter/>
            <CartBox/>
          </Wrapper>
        </main>
        <Footer/>
      </Inner>
    </>
  );
};
