import styled from 'styled-components';
import { BREAKPOINTS } from 'constants/breakpoints';

export const Inner = styled.div`
  background: ${({theme}) => theme.bgContent};
  color: ${({theme}) => theme.text};
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

export const Container = styled('div')`
  display: flex;
  padding-top: 73px;
  @media (max-width: ${BREAKPOINTS.lg}) {
    padding-top: 18px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin-top: 54px;
  @media (min-width: ${BREAKPOINTS.lg}) {
    width: 48%;
  }
  @media (max-width: ${BREAKPOINTS.lg}) {
    order: 1;
    gap: 6px;
    align-items: center;
    margin-top: 0;
    & :last-child {
      margin: 27px 0 20px
    }
  }
`;

export const Title = styled.h1`font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 7.2rem;
  line-height: 1.166;
  color: ${({theme}) => theme.text};
  letter-spacing: 4px;
  @media (min-width: ${BREAKPOINTS.lg}) {
    max-width: 506px;
  }
  @media (max-width: ${BREAKPOINTS.lg}) {
    text-align: center;
  }
  @media (max-width: ${BREAKPOINTS.md}) {
    font-size: 7.2rem;
    line-height: 1.166;
    text-align: center;
  }
  @media (max-width: ${BREAKPOINTS.xs}) {
    font-size: 4.2rem;
    line-height: 1.166;
    text-align: center;
  }
`;

export const SubTitle = styled.h2`font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 3.2rem;
  line-height: 1.156;
  @media (min-width: ${BREAKPOINTS.lg}) {
    max-width: 515px;
  }
  @media (max-width: ${BREAKPOINTS.lg}) {
    text-align: center;
  }
  @media (max-width: ${BREAKPOINTS.md}) {
    text-align: center;
    font-size: 2.4rem;
    line-height: 1.169;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
  }
`;

export const Banner = styled.div`
  position: relative;
  width: 100%;
  @media (min-width: ${BREAKPOINTS.lg}) {
    width: 50%;
    & > svg {
      position: absolute;
      width: 888px;
      height: 647px;
    }
  }
  @media (max-width: ${BREAKPOINTS.lg}) {
    max-width: 706px;

  }
  @media (max-width: ${BREAKPOINTS.xs}) {
    max-width: 375px;
  }
`;
