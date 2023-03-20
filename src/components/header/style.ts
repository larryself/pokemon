import { BREAKPOINTS } from 'constants/breakpoints';
import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({theme}) => theme.bgHeader};
  position: relative;
  box-shadow: 0 4px 16px rgba(1, 28, 64, 0.2);
`;

export const Box = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0 16px;
  @media (min-width: ${BREAKPOINTS.xxl}) {
    margin: 0 auto;
    max-width: 1125px;
  }
  @media (max-width: ${BREAKPOINTS.xxl}) {
    padding-left: 156px;
    padding-right: 82px;
    margin: 0 ;
    max-width: none;
  }
  @media (max-width: ${BREAKPOINTS.xl}) {
    padding-left: 36px;
    padding-right: 36px;
  }
  @media (max-width: ${BREAKPOINTS.lg}) {
    padding: 24px 12px 24px 20px ;
  }
  @media (max-width: ${BREAKPOINTS.md}) {
    padding: 24px 12px 24px 20px ;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    padding: 22px 20px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Inner = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    border-radius: 0 0 16px 16px;
    padding-bottom: ${props => props.isOpen && '37px'};
    background-color: ${({theme}) => theme.bgHeader};
    position: fixed;
    z-index: 3;
    left: 0;
    right: 0;
    top: ${props => props.isOpen ? '0' : '-100%'};
    transition-duration: .25s;
  }
`;
export const MenuInner = styled.div<{ isOpen: boolean }>`
 
  @media (max-width: ${BREAKPOINTS.sm}) {
    ${props => props.isOpen && 'margin-bottom: 22px;'};
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  }
`;
export const ThemeToggleInner = styled.div<{ isOpen: boolean }>`
  @media (max-width: ${BREAKPOINTS.sm}) {

    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  }
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

export const LogoInner = styled.div`
  @media (min-width: ${BREAKPOINTS.xxl}) {
    width: 158px;
    height: 63px;
  }
  @media (max-width: ${BREAKPOINTS.xxl}) {
    width: 121px;
    height: 45px;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 59px;
    height: 22px;
  }

  & > svg {
    width: 100%;
    height: 100%;
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
    background: #212121;
    opacity: 0.5;
  `};
`;
export const WrapLogo = styled.div<{ isOpen: boolean }>`
  display: none;

  & > svg {
    width: 100%;
    height: 100%;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    ${props => props.isOpen && `
  width: 138px;
  height: 51px;
  display: block;
  margin: 37px 0;
  `}
  }
`;