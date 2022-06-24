import styled from "styled-components";
import { BREAKPOINTS } from "constants/breakpoints";

export const Inner = styled.div`
  background: ${({theme}) => theme.bgContentPokedex};
  color: ${({theme}) => theme.text};
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const Title = styled.h2`
  font-weight: 400;
  font-size: 35px;
  line-height: 41px;
  text-align: center;
  letter-spacing: 3px;
  @media(max-width: ${BREAKPOINTS.mobile}){
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
  }
`;
export const Bold = styled.span`
  font-weight: 700;
`;