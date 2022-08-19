import { Button } from "components";
import { COLORS } from "constants/colors";
import { Container, Error404, Title, WhiteText } from "./style";

export const ErrorPage = () => {
	return (
		<Container>
			<Error404 />
			<Title>
				<WhiteText>The rocket team</WhiteText> has won this time.
			</Title>
			<Button text={"Return"} color={COLORS.BUTTON} linkTo={"/"} />
		</Container>
	);
};
