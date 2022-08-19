import { COLORS } from "constants/colors";
import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
	background-color: ${COLORS.DANGER};
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
export const Title = styled.h1`
	color: ${COLORS.BLACK};
`;
export const WhiteText = styled.span`
	color: ${COLORS.LIGHT_GREY};
`;
export const Error404 = styled.div`
	width: 100%;
	height: 100%;
	background: url("/teamRocket.png") no-repeat 50% 50% / 50%,
		url("/404.svg") no-repeat 50% 50% / 100%;
`;
