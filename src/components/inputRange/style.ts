import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const Container = styled.div`
  position: relative;
`;
export const Label = styled.label`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
  padding-left: 10px;
;`;

export const InputField = styled.input`
  font-family: 'SourceSansPro';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  width: 100%;
  background: #F2F2F2;
  padding: 2px 12px;
  border: none;
  box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
  border-radius: 40px;

  &::placeholder{
    font-family: 'SourceSansPro';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: rgba(33, 33, 33, 0.8);
  }
`;
export const Button = styled.button`
  width: 132px;
  background: #F2F2F2;
  box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
  border-radius: 4px;
  font-family: 'SourceSansPro';
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;
export const Box = styled.div<{isOpen: boolean}>`
  display: flex;
  ${props => !props.isOpen && ` display: none;`}
  flex-direction: column;
  gap: 20px;
  width: 285px;
  position: absolute;
  z-index: 2;
  background: ${COLORS.WHITE};
  box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
  border-radius: 16px;
  padding: 15px 22px;
  margin-top: 8px
`;

export const ButtonApply = styled.button`
  align-self: flex-end;
  background: ${COLORS.GREEN};
  border-radius: 11px;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.065em;
  padding: 0 19px;
`;
export const Inner = styled.div`
  display: flex;
  gap: 24px
`;