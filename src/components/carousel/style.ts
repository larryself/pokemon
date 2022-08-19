import styled from "styled-components";
import { BREAKPOINTS } from "../../constants/breakpoints";
import { COLORS, GRADIENT2 } from "../../constants/colors";

export const Container = styled.div`
	display: flex;
	overflow: hidden;
	gap: 30px;

	@media (max-width: ${BREAKPOINTS.md}) {
		gap: 20px;
	}
	@media (max-width: ${BREAKPOINTS.sm}) {
		gap: 10px;
	}
`;

export const Prev = styled.button``;

export const Next = styled.button``;

export const Wrap = styled.div`
	display: flex;
	overflow: hidden;
	flex-grow: 1;
`;

export const WrapImg = styled.div`
	flex-grow: 1;
`;

export const Inner = styled.div`
	padding: 0 20px;
	position: relative;
	@media (max-width: ${BREAKPOINTS.lg}) {
		padding: 0 15px;
	}
`;

export const Item = styled.div<{ isActive: boolean }>`
	width: 128px;
	height: 180px;
	display: flex;
	flex-direction: column;
	opacity: ${(props) => !props.isActive && "0.7"};
	background: ${GRADIENT2.gold};
	border-radius: 18px;
	@media (max-width: ${BREAKPOINTS.lg}) {
		width: 86px;
		height: 122px;
	}
`;

export const Box = styled.div`
	background: ${GRADIENT2.yellow};
	padding: 19px 8px 12px 8px;
	border-radius: 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (max-width: ${BREAKPOINTS.lg}) {
		padding: 10px 5px 4px;
	}
`;

export const Name = styled.div`
	color: ${COLORS.DARK_GREEN};
`;

export const Img = styled.img`
	display: block;
	width: 171px;
	height: 147px;
	position: absolute;
	left: 0;
	@media (max-width: ${BREAKPOINTS.lg}) {
		width: 115px;
		height: 100px;
	}
`;

export const List = styled.ul<{ offset: number }>`
	display: flex;
	transform: ${(props) =>
		props.offset > 0 ? `translateX(-${168 * props.offset}px)` : "none"};
	@media (max-width: ${BREAKPOINTS.lg}) {
		transform: ${(props) =>
			props.offset > 0 ? `translateX(-${116 * props.offset}px)` : "none"};
	}
`;
