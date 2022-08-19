import React from "react";
import {
	Container,
	Info,
	Stat,
	StatsInner,
	FeaturesInner,
	Shimmer,
	ShimmerWrapper,
} from "./style";
import { SkeletonElement } from "../skeletonElement/skeletonElement";

export const SkeletonCard = () => {
	return (
		<Container>
			<Info>
				<SkeletonElement type={"title"} />
				<StatsInner>
					<Stat>
						<SkeletonElement type={"stats"} />
						<SkeletonElement type={"stats-name"} />
					</Stat>
					<Stat>
						<SkeletonElement type={"stats"} />
						<SkeletonElement type={"stats-name"} />
					</Stat>
				</StatsInner>
				<FeaturesInner>
					<SkeletonElement type={"feature"} />
				</FeaturesInner>
			</Info>
			<SkeletonElement type={"image"} />
			<ShimmerWrapper>
				<Shimmer />
			</ShimmerWrapper>
		</Container>
	);
};
