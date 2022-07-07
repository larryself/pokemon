import styled from 'styled-components';
import { BREAKPOINTS } from 'constants/breakpoints';
import { COLORS } from 'constants/colors';

export const Container = styled.div`
  @media (max-width: ${BREAKPOINTS.xs}) {
    display: flex;
    flex-direction: column;
  }
`;

export const Label = styled.label`
  cursor: pointer;
  position: relative;
  display: flex;
  width: 80px;
  height: 44px;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 1px rgba(255, 255, 255, 0.24), inset 0 1px 1px rgba(0, 0, 0, 0.14);
  border-radius: 22px;
`;

export const Ball = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.WHITE};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right: 2px;
  height: 40px;
  width: 40px;
  transform: translate(0px, -50%);
  transition: transform 0.2s linear;
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;

  &:checked + ${Label} ${Ball} {
    transform: translate(-90%, -50%);
  }
`;
