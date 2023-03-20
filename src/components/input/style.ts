import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  width: 100%;
  padding: 24px 0;
`;

export const InputField = styled.input`
  width: 100%;
  background: ${COLORS.LIGHT_GREY};
  padding: 8px 20px;
  border: none;
  box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
  border-radius: 40px;

  &::placeholder {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.25;
    color: rgba(33, 33, 33, 0.8);
  }
`;