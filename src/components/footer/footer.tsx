import { Wrapper } from 'components';
import { Container, Inner } from './style';

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Inner>
          <p>Make with ❤️ </p>
          <a target="_blank" href="https://github.com/larryself" rel="noreferrer">github</a>
        </Inner>
      </Wrapper>
    </Container>
  );
};
