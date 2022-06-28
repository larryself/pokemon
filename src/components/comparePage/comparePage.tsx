import { Footer, Header, Wrapper } from 'components';
import { Inner, Container } from './style';

export const ComparePage = () => {
  return (
    <>
      <Header/>
      <Inner>
        <main>
          <Wrapper>
            <Container>
              <h1>ComparePage</h1>
            </Container>
          </Wrapper>
        </main>
        <Footer/>
      </Inner>
    </>
  );
};
