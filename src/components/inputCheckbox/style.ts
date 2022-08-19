import styled from "styled-components";
import { COLORS } from "constants/colors";
import { BREAKPOINTS } from "constants/breakpoints";

export const Container = styled.div`
	position: relative;
	@media (max-width: ${BREAKPOINTS.sm}) {
		padding: 0 17px;
	}
`;

export const Label = styled.label`
	font-family: "SourceSansPro";
	font-style: normal;
	font-weight: 400;
	font-size: 1.6rem;
	line-height: 1.25;
	position: relative;
	padding-left: 20px;
	color: ${({ theme }) => theme.filterText};
`;

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
	border: 1px solid ${({ theme }) => theme.filterText};
	background: inherit;
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
`;
export const Button = styled.button`
	width: 132px;
	background: ${({ theme }) => theme.filterBG};
	color: ${({ theme }) => theme.filterText};
	box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
	border-radius: 4px;
	display: flex;
	align-items: center;
	padding: 0 7px;
	@media (max-width: ${BREAKPOINTS.sm}) {
		padding: 0;
		background-color: inherit;
		box-shadow: none;
	}
`;
export const TitleInner = styled.span`
	font-family: "SourceSansPro";
	font-weight: 400;
	font-size: 1.6rem;
	line-height: 1.25;
	width: 100%;
	@media (max-width: ${BREAKPOINTS.sm}) {
		font-size: 2.3rem;
		line-height: 1.17;
		text-align: left;
	}
`;
export const IconInner = styled.span<{ isOpen: boolean }>`
	display: flex;
	transform: ${(props) => props.isOpen && "rotate(180deg)"};
	@media (max-width: ${BREAKPOINTS.sm}) {
		visibility: hidden;
	}
`;
export const Box = styled.ul<{ isOpen: boolean }>`
	display: ${(props) => (props.isOpen ? "flex" : "none")};
	flex-direction: column;
	gap: 8px;
	position: absolute;
	left: 0;
	right: 0;
	z-index: 2;
	background: ${({ theme }) => theme.filterBG};
	box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
	border-radius: 16px;
	padding: 14px 0 13px 22px;
	margin-top: 8px;
	max-height: 136px;
	overflow: auto;
	@media (max-width: ${BREAKPOINTS.sm}) {
		display: grid;
		justify-content: space-between;
		margin-top: 19px;
		background: ${({ theme }) => theme.bgHeader};
		box-shadow: none;
		grid-template-columns: repeat(3, 1fr);
		max-height: none;
		position: static;
		padding: 0;
		border-radius: 0;
	}
`;
