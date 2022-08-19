import styled from "styled-components";

export const Inner = styled.div`
	background: ${({ theme }) => theme.bgContentPokedex};
	color: ${({ theme }) => theme.text};
	display: flex;
	flex-direction: column;
	height: 100%;
`;

export const Container = styled.div`
	display: flex;
	padding-top: 39px;
	padding-bottom: 50px;
`;
