import styled from 'styled-components';
import { Wrapper } from 'components';
import { BREAKPOINTS } from '../../constants/breakpoints';

export const Container = styled.footer`
  padding-top: 33px;
  padding-bottom: 33px;
`;
export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${BREAKPOINTS.sm}){
    flex-direction: column;
  }
`;
export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Inner>
          <p>Make with ❤️ </p>
          <a target='_blank' href='https://github.com/larryself' rel="noreferrer">github</a>
        </Inner>
      </Wrapper>
    </Container>
  );
};
