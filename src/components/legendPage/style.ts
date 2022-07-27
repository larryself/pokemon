import styled from 'styled-components';
import { BREAKPOINTS } from '../../constants/breakpoints';

export const Inner = styled.div`
  background: ${({theme}) => theme.bgContentPokedex};
  color: ${({theme}) => theme.text};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 39px;
  padding-bottom: 50px;
`;

export const Title = styled.h2`
  font-family: 'Karla';
  font-weight: 400;
  font-size: 7.2rem;
  line-height: 1.166;
  letter-spacing: 4px;
  color: ${({theme}) => theme.text};
  @media (max-width: ${BREAKPOINTS.sm}) {
    font-size: 4.4rem;
    line-height: 1.159;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({theme}) => theme.text};
  margin-bottom: 45px;
`;
