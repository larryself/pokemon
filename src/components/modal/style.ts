import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(33, 33, 33, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrap = styled.div`

`;
export const Content = styled.div`
  display: flex;
  position: relative;
`;

export const Button = styled.button`;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(-100%);

  &:active {
    opacity: .4;
  }
`;

export const ImgInner = styled.div<{ color: string }>`
  padding: 16px 10px 6px 12px;
  background: ${props => props.color};
  box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
  border-radius: 8px 0 0 8px;
`;

export const InfoInner = styled.div`
  background: linear-gradient(180deg, #732119 42.19%, #D93E30 100%);
  padding: 29px 20px 25px 12px;
  border-radius: 0 16px 16px 0;

`;

export const Name = styled.p`
  font-family: 'Karla';
  font-size: 36px;
  line-height: 42px;
  color: #FDFDFD;
  text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
`;

export const Stats = styled.div`
  display: flex;
  gap: 23px;
`;

export const Stat = styled.div`
  width: 82px;
  height: 70px;
  background: #FDFDFD;
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
  font-size: 12px;
  line-height: 14px;
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
  font-size: 16px;
  line-height: 19px;
`;
export const Abilities = styled.div`
  background: #FDFDFD;
  box-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
  border-radius: 8px;
  margin-bottom: 21px;
  padding: 12px 28px 10px;
`;
export const Hp = styled.div`
  background: #FDFDFD;
  box-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
  border-radius: 8px;
  margin-bottom: 21px;
  padding: 20px 20px 8px 20px;
`;
export const Ring = styled.div`
  height: 41px;
  width: 41px;
  border-radius: 50%;
  background: ${COLORS.BUTTON};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RingValue = styled.p`
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
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
`;
export const SubTitle = styled.p`
  font-family: 'SourceSansPro';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #FDFDFD;
  align-self: flex-end;
`;