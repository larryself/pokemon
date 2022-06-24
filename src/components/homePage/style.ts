import styled from "styled-components";
import { COLORS } from "constants/colors";
import { BREAKPOINTS } from "constants/breakpoints";

export const Inner = styled.div`
  background: ${({theme}) => theme.bgContent};
  color: ${({theme}) => theme.text};
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;
export const Container = styled.div`
  display: flex;
  height: 100%;
  padding-top: 73px;
  @media (max-width: ${BREAKPOINTS.tablet}) {
    padding-top: 18px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const Box = styled.div`
  max-width: 516px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin-top: 54px;
  @media (max-width: ${BREAKPOINTS.tablet}) {
    max-width: 100%;
    order: 1;
    gap: 6px;
    align-items: center;
    & :last-child {
      margin: 33px 0
    }
  }
`;
export const Title = styled.h1`font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  line-height: 84px;
  color: ${({theme}) => theme.text};
  letter-spacing: 4px;
  @media (max-width: ${BREAKPOINTS.tablet}) {
    font-size: 72px;
    line-height: 84px;
    text-align: center;

  }
  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 42px;
    line-height: 49px;
    text-align: center;
  }
`;
export const Bold = styled.span`font-weight: 700;
`
export const SubTitle = styled.h2`font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  max-width: 515px;
  @media (max-width: ${BREAKPOINTS.tablet}) {
    text-align: center;
    font-size: 24px;
    line-height: 28px;
    max-width: 639px;
  }
`;
export const Banner = styled.div`
  position: relative;
  max-width: 888px;
  max-height: 678px;

  & > svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${BREAKPOINTS.tablet}) {
    max-width: 706px;
    max-height: 539px;
  }
  @media (max-width: ${BREAKPOINTS.mobile}) {
    max-width: 375px;
    max-height: 287px;
  }
`;
