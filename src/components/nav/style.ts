import { BREAKPOINTS } from 'constants/breakpoints';
import { NavLink as BaseNavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from "../../constants/colors";

export const Container = styled.nav`
  display: flex;
`;

export const Burger = styled.div<{isOpen: boolean}>`
  cursor: pointer;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: ${props=> props.isOpen? 'none': 'block'};
    width: 31px;
    height: 22px;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      width: 31px;
      height: 5.5px;
      border-radius: 2px;
      background: ${COLORS.DARK};
      top: 0;
    }

    &::before {
      content: '';
      position: absolute;
      width: 31px;
      height: 5.5px;
      border-radius: 2px;
      background: ${COLORS.DARK};
      bottom: 0;
    }
  }
`;

export const BurgerIcon = styled.span`
  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 31px;
    height: 5.5px;
    border-radius: 2px;
    background: ${COLORS.DARK};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const List = styled.ul<{isOpen: boolean}>`
  display: flex;
  gap: 66px;
  font: 2.5rem 'Karla', sans-serif;
  @media (max-width: ${BREAKPOINTS.tablet}){
    gap: 44px;}
  @media (max-width: ${BREAKPOINTS.mobile}){
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;
export const Item = styled.li`
`

export const NavLink = styled(BaseNavLink)`
  position: relative;
  color:  ${({ theme }) => theme.textHeader};
  &.active {
    color:  ${({ theme }) => theme.linkActiveHeader};
  }
  &.active::after{
    content: '';
    width: 85%;
    height: 3px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.linkActiveHeader};
    position: absolute;
    left: 0;
    bottom: -5px;
  }
  
`
