import { Footer, Header, Wrapper, Carousel, Card } from "components";
import { Container, Inner, Line, Title } from "./style";
import { useGetPokemonQuery, usePokemonSelector } from "store";
import { useEffect, useState } from "react";
import { PokemonProps } from "../cartItem/cartItem";

export const LegendPage = () => {
	const { pokemons } = usePokemonSelector();
	const [legend, setLegend] = useState<PokemonProps | null>(null);
	const [strong, setStrong] = useState<PokemonProps | null>(null);
	const [waek, setWeak] = useState<PokemonProps | null>(null);
	const [legendPokemon, setLegendPokemon] = useState<PokemonProps[]>([]);
	const [strongPokemon, setStrongPokemon] = useState<PokemonProps[]>([]);
	const [weakPokemon, setWeakPokemon] = useState<PokemonProps[]>([]);
	const result = useGetPokemonQuery();

	const getLegendPokemon = (pokemons: PokemonProps[]) => {
		return pokemons.filter((pokemon) => {
			const stat = pokemon.stats.reduce((acc, item) => item.base_stat + acc, 0);
			return stat > 550;
		});
	};

	const getStrongerPokemon = (pokemons: PokemonProps[]) => {
		return pokemons.filter((pokemon) => {
			return (
				pokemon.stats[1].base_stat >= 100 && pokemon.stats[3].base_stat >= 100
			);
		});
	};

	const getWeaketPokemon = (pokemons: PokemonProps[]) => {
		return pokemons.filter((pokemon) => {
			return (
				pokemon.stats[1].base_stat <= 30 && pokemon.stats[3].base_stat <= 30
			);
		});
	};

	useEffect(() => {
		if (result.status === "fulfilled" || pokemons.length > 0) {
			const legends = getLegendPokemon(pokemons);
			const weakers = getWeaketPokemon(pokemons);
			const strongers = getStrongerPokemon(pokemons);
			setWeakPokemon(weakers);
			setStrongPokemon(strongers);
			setLegendPokemon(legends);
		}
	}, [pokemons, result.status]);
	return (
		<>
			<Header />
			<Inner>
				<main>
					<Wrapper>
						<Container>
							<Title>Legendaries</Title>
							<Line />
							<Card pokemon={legend} />
							<Carousel pokemons={legendPokemon} selectPokemon={setLegend} />
							<Title>Stronger</Title>
							<Line />
							<Card pokemon={strong} />
							<Carousel pokemons={strongPokemon} selectPokemon={setStrong} />
							<Title>Weaker</Title>
							<Line />
							<Card pokemon={waek} />
							<Carousel pokemons={weakPokemon} selectPokemon={setWeak} />
						</Container>
					</Wrapper>
				</main>
				<Footer />
			</Inner>
		</>
	);
};
