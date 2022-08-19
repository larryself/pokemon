import React, { FC } from "react";
import { Container } from "./style";

interface Props {
	type: "stats" | "stats-name" | "title" | "feature" | "image";
}

export const SkeletonElement: FC<Props> = ({ type }) => {
	return <Container type={type} />;
};
