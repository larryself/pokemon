import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { BREAKPOINTS } from "../../constants/breakpoints";

export const Wrap = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 50px;
	@media (max-width: ${BREAKPOINTS.sm}) {
		align-items: center;
		flex-direction: column;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 405px;
	@media (min-width: ${BREAKPOINTS.lg}) {
		max-width: 405px;
	}
	@media (max-width: ${BREAKPOINTS.lg}) {
		max-width: 390px;
	}
	@media (max-width: ${BREAKPOINTS.sm}) {
		max-width: none;
	}
`;

export const Img = styled.img`
	@media (min-width: ${BREAKPOINTS.lg}) {
		width: 373px;
		height: 418px;
	}
	@media (max-width: ${BREAKPOINTS.lg}) {
		width: 283px;
		height: 316px;
	}
`;

export const Name = styled.p`
	font-weight: 400;
	font-size: 7.2rem;
	line-height: 1.166;
	letter-spacing: 4px;
	@media (max-width: ${BREAKPOINTS.lg}) {
		font-size: 6.2rem;
		line-height: 1.161;
	}
`;

export const Desc = styled.p`
	margin-bottom: 25px;
`;

export const Stats = styled.div`
	display: grid;
	grid-template: auto / 1fr 1fr;
	grid-row-gap: 28px;
	grid-column-gap: 87px;
`;

export const Stat = styled.div``;

export const StatName = styled.p``;

export const StatValue = styled.p`
	font-weight: 700;
`;

export const StatLine = styled.div<{ value: number }>`
	height: 7px;
	width: 100%;
	background-color: ${COLORS.WHITE};
	position: relative;
	border-radius: 8px;

	&::before {
		content: "";
		display: block;
		background: ${COLORS.THIRD};
		border-radius: 8px;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: ${(props) => (props.value ? `calc(100% - ${props.value}%)` : "0")};
	}
`;
