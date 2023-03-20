import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div<{ bgColor: string }>`
  cursor: pointer;
  display: flex;
  overflow: hidden;
  background: ${({theme}) => theme.cartBG};
  align-items: center;
  border-radius: 8px;
  position: relative;
  filter: drop-shadow(4px 4px 4px rgba(33, 33, 33, 0.1));

  &::before {
    content: '';
    display: block;
    width: 35%;
    height: 100%;
    position: absolute;
  }

  &::after {
    content: '';
    display: block;
    width: 65%;
    height: 100%;
    position: absolute;
    background: ${props => props.bgColor};
    right: 0;
  }
`;

export const Info = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px 28px 12px;
  position: relative;
  z-index: 2;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 1.166;
  color: ${({theme}) => theme.cartText};
  text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
  margin-bottom: 17px;
`;

export const Stats = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.166;
  text-align: center;
  color: ${COLORS.BLACK_GREY};
  margin-bottom: 11px;
  gap: 7px;
  
`;

export const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: ${({theme}) => theme.cartText};
`;

export const StatValueBox = styled.div`
  width: 38px;
  height: 37px;
  border-width: 3px;
  border-color: ${({theme}) => theme.cartText};
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.2;
`;

export const StatName = styled.p`
`;
export const Features = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.166;
`;

export const Feature = styled.div<{color:string}>`
  width: 57px;
  text-align: center;
  border-radius: 11px;
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
  background: ${props=> props.color};
`;

export const Inner = styled.div`
  width: 35%;
`;

export const ImgInner = styled.div`
  position: absolute;
  right: 10px;
  z-index: 1;
`;

export const Image = styled.img``;