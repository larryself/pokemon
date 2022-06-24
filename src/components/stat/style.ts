import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;`
export const StatValue = styled.div`
  width: 38px;
  height: 37px;
  border: 3px solid ${COLORS.DARK};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
`;