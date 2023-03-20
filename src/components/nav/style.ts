import { BREAKPOINTS } from 'constants/breakpoints';
import { NavLink as BaseNavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from 'constants/colors';

export const Container = styled.nav`
  display: flex;
`;

export const Burger = styled.button`
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: block;
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
      left: 0
    }

    &::before {
      content: '';
      position: absolute;
      width: 31px;
      height: 5.5px;
      border-radius: 2px;
      background: ${COLORS.DARK};
      bottom: 0;
      left: 0;
    }
  }
`;

export const BurgerIcon = styled.span`
  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 31px;
    height: 5.5px;
    border-radius: 2px;
    background: ${COLORS.DARK};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 66px;
  font: 2.5rem 'Karla', sans-serif;
  @media (max-width: ${BREAKPOINTS.xxl}) {
    gap: 44px;
  }
  @media (max-width: ${BREAKPOINTS.md}) {
    gap: 34px;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;
export const Item = styled.li`
`;

export const NavLink = styled(BaseNavLink)`
  position: relative;
  color: ${({theme}) => theme.textHeader};
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 1.166;

  &.active {
    color: ${({theme}) => theme.linkActiveHeader};
  }

  &.active::after {
    content: '';
    width: 85%;
    height: 3px;
    border-radius: 15px;
    background-color: ${({theme}) => theme.linkActiveHeader};
    position: absolute;
    left: 0;
    bottom: -5px;
  }

  @media (max-width: ${BREAKPOINTS.md}) {
    font-size: 1.9rem;
    line-height: 1.157;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    font-size: 2.7rem;
    line-height: 1.185;
    text-shadow: 4px 4px 20px rgba(1, 28, 64, 0.2);
  }
`;
