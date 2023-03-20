import styled from 'styled-components';
import { COLORS, GRADIENT, GRADIENT2 } from 'constants/colors';
import { BREAKPOINTS } from 'constants/breakpoints';

export const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 5;
  overflow: hidden;
  overflow-y: auto;
  background: rgba(33, 33, 33, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${BREAKPOINTS.sm}) {
    align-items: flex-start;
  }
`;

export const Wrap = styled.div`
  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
  }
`;

export const Button = styled.button`;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(-100%);

  &:active {
    opacity: .4;
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 32px;
    height: 32px;
    transform: translateY(0);
    top: 15px;
    left: 14px;
    z-index: 3;
  }
`;

export const ImgInner = styled.div<{ color: string }>`
  padding: 16px 10px 6px 12px;
  background: ${props => props.color};
  box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
  border-radius: 8px 0 0 8px;
  position: relative;
  @media (max-width: ${BREAKPOINTS.sm}) {
    border-radius: 0 0 16px;
    display: flex;
    justify-content: center;
    padding: 85px 29px 0;
  }
`;

export const Img = styled.img`
  width: 341px;
  height: 348px;
  @media (max-width: ${BREAKPOINTS.md}) {
    width: 285px;
    height: 291px;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 316px;
    height: 316px;
    z-index: 1;
  }
`;

export const InfoInner = styled.div`
  background: ${GRADIENT2.red};
  padding: 29px 20px 25px 12px;
  border-radius: 0 16px 16px 0;
  position: relative;
  @media (max-width: ${BREAKPOINTS.sm}) {
    border-radius: 16px;
    margin-top: -50px;
  }
`;

export const Name = styled.p`
  font-family: 'Karla';
  font-size: 3.6rem;
  line-height: 1.166;
  color: ${COLORS.GREY};
  text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
  @media (max-width: ${BREAKPOINTS.sm}) {
    position: fixed;
    top: 35px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Stats = styled.div`
  display: flex;
  gap: 23px;
  @media (max-width: ${BREAKPOINTS.lg}) {
    gap: 0;
    justify-content: space-between;
  }
`;

export const Stat = styled.div`
  width: 82px;
  height: 70px;
  background: ${COLORS.GREY};
  color: ${COLORS.BLACK};
  box-shadow: 4px 4px 24px rgba(1, 17, 38, 0.2);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

export const StatName = styled.p`
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.166;
`;

export const StatValue = styled.div`
  width: 36px;
  height: 35px;
  border: 3px solid ${COLORS.DARK};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.187;
`;

export const Abilities = styled.div`
  display: flex;
  flex-direction: column;
  background: ${COLORS.GREY};
  color: ${COLORS.BLACK};
  box-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
  border-radius: 8px;
  margin-bottom: 21px;
  padding: 12px 28px 10px;
`;

export const AbilitiesTitle = styled.p`
  @media (max-width: ${BREAKPOINTS.sm}) {
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    font-size: 31px;
    line-height: 36px;
  }
`;

export const Hp = styled.div`
  background: ${COLORS.GREY};
  color: ${COLORS.BLACK};
  box-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
  border-radius: 8px;
  margin-bottom: 21px;
  padding: 20px 20px 8px 20px;
  display: flex;
  justify-content: space-between;
  gap: 27px;
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    gap: 20px;
    padding: 15px 20px 14px 20px;
  }
`;

export const Column = styled.div`
  width: 50%;
  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 75%;
    display: flex;
    gap: 4px;
    flex-direction: column;
  }
`;

export const Value = styled.p`
  font-weight: 700;
`;

export const Ring = styled.div`
  height: 41px;
  width: 41px;
  border-radius: 50%;
  background: ${COLORS.BUTTON};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${BREAKPOINTS.sm}) {
    order: -1 ;
  }
`;

export const RingValue = styled.p`
  color: ${COLORS.BLACK};
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.187;
  @media (max-width: ${BREAKPOINTS.lg}) {
    font-size: 1.4rem;
    line-height: 1.142;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    font-size: 1.6rem;
    line-height: 1.187;
  }
`;

export const TitleInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const Inner = styled.div`
  display: flex;
  gap: 8px;
  @media (max-width: ${BREAKPOINTS.sm}) {
    align-items: center;
  }
`;

export const SubTitle = styled.p`
  font-family: 'SourceSansPro';
  font-style: normal;
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 1.25;
  color: ${COLORS.GREY};
  align-self: flex-end;
  @media (max-width: ${BREAKPOINTS.lg}) {
    font-size: 2.1rem;
    line-height: 1.23;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    align-self: center;
    font-size: 1.6rem;
    line-height: 1.25;
  }
`;

export const Line = styled.div<{ value: number, type: 'hp' | 'exp' }>`
  height: 4px;
  width: 100%;
  position: relative;
  background: ${COLORS.WHITE};
  border-radius: 8px;
  margin-top: 2px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background: ${props => props.type === 'hp' ? GRADIENT.green : GRADIENT2.yellow};
    border-radius: 8px;
    width: ${props => props.value ? `calc(100% - ${props.value}%)` : '0'}
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    margin-top: 8px;
    height: 8px;
  }
`;

export const Features = styled.div`
  position: absolute;
  left: 0;
  bottom: 15px;
  display: flex;
  gap: 10px;
  transform: translateX(-100%);
  @media (max-width: ${BREAKPOINTS.sm}) {
    position: static;
    transform: translateX(0);
  }
`;

export const Feature = styled.div<{ color: string }>`
  width: 57px;
  text-align: center;
  border-radius: 11px;
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
  background: ${props => props.color};
  text-align: center;
  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 74px;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.16;
    padding: 3px 0;
  }
`;

export const FeatureName = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.16;
  color: ${COLORS.DARK};
`;