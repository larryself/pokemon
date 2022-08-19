import React, { FC } from "react";
import {
	Container,
	Info,
	Name,
	Stats,
	Features,
	ImgInner,
	Image,
	Feature,
	StatBox,
	StatValueBox,
	StatName,
} from "./style";
import { featuresColors, GRADIENT } from "constants/colors";
import { useAction } from "store";

export interface PokemonProps {
	id: number;
	base_experience: number;
	name: string;
	stats: { base_stat: number; stat: { name: string } }[];
	color: string;
	generation: string;
	url: string;
	types: { type: { name: string } }[];
	sprites: { other: { "official-artwork": { front_default: string } } };
	weight: number;
	abilities: { ability: { name: string } }[];
}

export interface Props {
	data: PokemonProps;
}

export const CartItem: FC<Props> = (props) => {
	const { openCart } = useAction();
	return (
		<Container
			bgColor={GRADIENT[props.data.color]}
			onClick={() => openCart(props.data)}
		>
			<Info>
				<Name>
					{props.data.name[0].toUpperCase() + props.data.name.slice(1)}
				</Name>
				<Stats>
					<StatBox>
						<StatValueBox>
							<p>{props.data.stats[1].base_stat}</p>
						</StatValueBox>
						<StatName>{"Attack"}</StatName>
					</StatBox>
					<StatBox>
						<StatValueBox>
							<p>{props.data.stats[2].base_stat}</p>
						</StatValueBox>
						<StatName>{"Defense"}</StatName>
					</StatBox>
				</Stats>
				<Features>
					{props.data.types &&
						props.data.types.map((type: { type: { name: string } }) => (
							<Feature
								key={type.type.name}
								color={!type.type.name ? "" : featuresColors[type.type.name]}
							>
								<p>
									{type.type.name[0].toUpperCase() + type.type.name.slice(1)}
								</p>
							</Feature>
						))}
				</Features>
			</Info>
			<ImgInner>
				{props.data.sprites && (
					<Image
						src={
							props.data.sprites.other["official-artwork"].front_default || ""
						}
						alt={props.data.name}
						width={168}
						height={156}
					/>
				)}
			</ImgInner>
		</Container>
	);
};
