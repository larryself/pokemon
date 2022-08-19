import styled from "styled-components";
import { BREAKPOINTS } from "../../constants/breakpoints";

export const Container = styled.footer`
	padding: 33px 0;
	@media (max-width: ${BREAKPOINTS.sm}) {
		flex-direction: column;
		padding: 13px 0;
	}
`;
export const Inner = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (max-width: ${BREAKPOINTS.sm}) {
		flex-direction: column;
	}
`;
