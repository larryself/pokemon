import styled from "styled-components";
import { BREAKPOINTS } from "constants/breakpoints";

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(180px, 1fr));
  grid-column-gap: 34px;
  grid-row-gap: 45px;
  max-height: calc(100vh - 350px);
  overflow: auto;
  @media (max-width: ${BREAKPOINTS.tablet}){
    grid-template-columns: repeat(2,  minmax(180px, 1fr));
  }
  @media (max-width: ${BREAKPOINTS.mobile}){
     grid-template-columns: repeat(1, minmax(180px, 1fr));
   }
`;