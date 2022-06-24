import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const Container = styled.div`
  position: relative;
`;

export const Label = styled.label`
  font-family: 'SourceSansPro';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  position: relative;
  padding-left: 20px;;`;

export const InputField = styled.input`
  appearance: none;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);

  &:checked + span {
    background: ${COLORS.DANGER};
  }
`;
export const Checkbox = styled.span`
  width: 12px;
  height: 12px;
  border: 1px solid ${COLORS.DARK};
  position: absolute;
  background: inherit;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
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
export const Box = styled.div<{ isOpen: boolean }>`
  display: flex;
  ${props => !props.isOpen && ` display: none;`}
  flex-direction: column;
  gap: 8px;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 2;
  background: ${COLORS.WHITE};
  border-radius: 16px;
  padding: 14px 0 13px 22px;
  margin-top: 8px;
  max-height: 136px;
  overflow: auto;
  box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
`;
