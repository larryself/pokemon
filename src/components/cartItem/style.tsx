import styled from 'styled-components';
import { COLORS } from "../../constants/colors";

export const Container = styled.div<{ bgColor: string }>`
  cursor: pointer;
  display: flex;
  overflow: hidden;
  background: ${COLORS.WHITE};
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
  font-size: 18px;
  line-height: 21px;
  color: ${COLORS.DARK};
  text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
  margin-bottom: 17px;
`;

export const Stats = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #4B4B4B;
  margin-bottom: 11px;
  gap: 7px;
`;

export const Features = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

export const Feature = styled.div`
  width: 57px;
  text-align: center;
  border-radius: 11px;
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);

  &:nth-child(odd) {
    background: ${COLORS.GREEN};
  }

  &:nth-child(even) {
    background: ${COLORS.BLUE};
  }
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