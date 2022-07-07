import styled from 'styled-components';
import { BREAKPOINTS } from "constants/breakpoints";

export const Container = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Karla';
  background-color: ${props => props.color && props.color};
  width: 231px;
  height: 66px;
  box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
  font-size: 2.3rem;
  font-weight: 700;
  @media (max-width: ${BREAKPOINTS.xs}) {
    width: 100%;
    max-width: 312px;
    height: 55px;
  }
`;