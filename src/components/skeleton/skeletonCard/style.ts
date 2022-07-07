import styled, { keyframes } from 'styled-components';
import { COLORS } from 'constants/colors';

export const Container = styled.div`
  background: ${COLORS.WHITE};
  display: flex;
  filter: drop-shadow(4px 4px 4px rgba(33,33,33,0.1));
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;
export const Info = styled.div`
  padding: 5px  5px  12px 28px;
  width: 35%;
`;
export const StatsInner = styled.div`
  display: flex;
  gap: 7px;
  margin-bottom: 11px;
`;
export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const loading = keyframes`
  0% { transform: translateX(-100%)}
  100% { transform: translateX(100%)}
`;

export const FeaturesInner = styled.div`
  display: flex;
  gap: 12px
`;
export const ShimmerWrapper = styled.div`
  position:absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  animation: ${loading} 2.5s infinite;
`;
export const Shimmer = styled.div`
  width:100%;
  height: 100%;
  background: rgba(255,255,255, 0.2);
  transform: skewX(-20deg);
  box-shadow: 0 0 10px 30px rgba(255,255,255, 0.05);
`;
