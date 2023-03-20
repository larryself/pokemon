import styled from "styled-components";
import { BREAKPOINTS } from "constants/breakpoints";

export const Inner = styled.div`
  background: ${({theme}) => theme.bgContentPokedex};
  color: ${({theme}) => theme.text};
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  padding-top: 39px;
  padding-bottom: 50px;
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 3.5rem;
  line-height: 1.171;
  text-align: center;
  letter-spacing: 3px;
  @media(max-width: ${BREAKPOINTS.xs}){
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 1.169;
  }
`;
