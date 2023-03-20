import styled from "styled-components";
import { COLORS } from "constants/colors";
import { BREAKPOINTS } from 'constants/breakpoints';

export const Container = styled.div`
  position: relative;
  @media (max-width: ${BREAKPOINTS.sm}) {
    padding: 0 17px;
  }
`;
export const Label = styled.label`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.166;
  color: ${({theme}) => theme.filterText};
  padding-left: 10px;
;`;

export const InputField = styled.input`
  font-family: 'SourceSansPro';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.25;
  width: 100%;
  color: ${COLORS.BLACK};
  background: ${COLORS.LIGHT_GREY};
  padding: 2px 12px;
  border: none;
  box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
  border-radius: 40px;

  &::placeholder{
    font-family: 'SourceSansPro';
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.25;
    color: rgba(33, 33, 33, 0.8);
  }
`;
export const Button = styled.button`
  width: 132px;
  background:  ${({theme}) => theme.filterBG};
  color: ${({theme}) => theme.filterText};
  box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 7px;
  @media (max-width: ${BREAKPOINTS.sm}) {
    box-shadow: none;
    background-color: inherit;
  }
`;

export const TitleInner = styled.span`
  font-family: 'SourceSansPro';
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.25;
  width: 100%;
  @media (max-width: ${BREAKPOINTS.sm}) {
    font-size: 2.3rem;
    line-height: 1.17;
    text-align: left;
  }
`;

export const IconInner = styled.span<{isOpen: boolean}>`
  display: flex;
  transform: ${props => props.isOpen && 'rotate(180deg)'};
  @media (max-width: ${BREAKPOINTS.sm}) {
    visibility: hidden;
  }
`;

export const Box = styled.div<{isOpen: boolean}>`
  display:${props => props.isOpen ? `flex` : 'none'};
  flex-direction: column;
  gap: 20px;
  width: 285px;
  position: absolute;
  z-index: 2;
  background: ${({theme}) => theme.filterBG};
  box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
  border-radius: 16px;
  padding: 15px 22px;
  margin-top: 8px;
  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 100%;
    box-shadow: none;
    position: static;
    display: flex;
  }
`;

export const ButtonApply = styled.button`
  align-self: flex-end;
  background: ${COLORS.GREEN};
  border-radius: 11px;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.153;
  letter-spacing: -0.065em;
  padding: 0 19px;
`;
export const Inner = styled.div`
  display: flex;
  gap: 24px;
  color: ${({theme}) => theme.filterText};
`;

export const Line = styled.div`
  min-width: 15px;
  height: 2px;
  background-color: ${COLORS.DARK};
  align-self: flex-end;
  margin-bottom: 9px;
`;