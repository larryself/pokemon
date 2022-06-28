import { Footer, Header, Wrapper } from 'components';
import { Inner, Container } from './style';

export const LegendPage = () => {
  return (
    <>
      <Header/>
      <Inner>
        <main>
          <Wrapper>
            <Container>
              <h1>LegendPage</h1>
            </Container>
          </Wrapper>
        </main>
        <Footer/>
      </Inner>
    </>
  );
};
