import styled from 'styled-components';
import { BREAKPOINTS } from 'constants/breakpoints';
import { COLORS } from 'constants/colors';

export const Container = styled.div`
  width: 100%;
  padding: 24px 19px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputField = styled.input`
  width: 100%;
  background: ${({theme}) => theme.filterBG};
  padding: 8px 20px;
  border: none;
  box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
  border-radius: 40px;
  color: ${({theme}) => theme.filterText};

  &::placeholder {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.25;
    color: ${({theme}) => theme.filterInputPl};
  }
`;
export const Burger = styled.button<{ isOpen: boolean }>`
  display: none;
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: block;
    background: ${({theme}) => theme.filterBG};
    color: ${({theme}) => theme.filterText};
    box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
    border-radius: 8px;
    width: 77px;
    height: 20px;
    font-family: 'SourceSansPro';
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.25;
  }
`;
export const Inner = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 64px;
  margin-left: 30px;
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    gap: 25px;
    border-radius: 0 0 16px 16px;
    padding: 34px 27px 27px;
    background-color: ${({theme}) => theme.bgHeader};
    position: fixed;
    z-index: 3;
    left: 0;
    right: 0;
    margin: 0;
    top: ${props => props.isOpen ? '0' : '-100%'};
    transition-duration: .25s;
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  }
`;
export const Blur = styled.div<{ isOpen: boolean }>`
  ${props => props.isOpen && `
  @media (max-width: ${BREAKPOINTS.sm}) {
    backdrop-filter: blur(2px);
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    background: ${COLORS.DARK};
    opacity: 0.5;
  `};
`;
export const Line = styled.div`
  display: none;
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: block;
    height: 2px;
    width: 100%;
    background-color: ${COLORS.LIGHT_GREY};
  }
`;
export const Button = styled.button`
  display: none;
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: block;
    position: absolute;
    top: 16px;
    right: 26px;
  }
`;