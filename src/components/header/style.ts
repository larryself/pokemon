import { BREAKPOINTS } from 'constants/breakpoints';
import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({theme}) => theme.bgHeader};
  box-shadow: 0 4px 16px rgba(1, 28, 64, 0.2);
`;

export const Box = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0 16px;
  @media (max-width: ${BREAKPOINTS.tablet}) {
    padding: 24px 0 ;
  }
  @media (max-width: ${BREAKPOINTS.mobile}) {
    padding: ${props => props.isOpen ? '37px 0' : '22px 20px'};
    justify-content: ${props => props.isOpen && 'center'};
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;
export const MenuInner = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    flex-direction: column;
    background-color: ${({theme}) => theme.bgHeader};
    transform: ${props => props.isOpen ? 'scaleY(1)' : 'scaleY(0)'};
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
  }`
export const Link = styled.a`

`;

export const Title = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
export const LogoInner = styled.div<{ isOpen: boolean }>`
  width: 158px;
  height: 63px;
  @media (max-width: ${BREAKPOINTS.tablet}) {
    width: 121px;
    height: 45px;
  }
  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: ${props => props.isOpen ? '138px' : '59px'};
    height: ${props => props.isOpen ? '51px' : '22px'};
  }

  & > svg {
    width: 100%;
    height: 100%;
  }
`;
export const Blur = styled.div<{ isOpen: boolean }>`
  ${props => props.isOpen && `@media (max-width: ${BREAKPOINTS.mobile}) {
    backdrop-filter: blur(2px);
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  `};`;