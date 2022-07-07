import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Container } from './style';
import axios from 'axios';
import { ModalCard, CartItem } from 'components';
import { SkeletonCard } from '../skeleton/skeletonCard/skeletonCard';
import { usePokemonSelector, useGetPokemonQuery, useAction } from 'store';

interface PropsPokemon {
  id: number,
  base_experience: number,
  name: string,
  stats: { base_stat: number, stat: { name: string } }[]
  color: string,
  generation: string,
  url: string,
  types: { type: { name: string } }[],
  sprites: { other: { 'official-artwork': { front_default: string } } },
  weight: number,
  abilities: { ability: { name: string } }[]
}

export const CartBox = () => {
  const data = usePokemonSelector();
  const {setPage} = useAction();
  const result = useGetPokemonQuery();
  const [pokemons, setPokemons] = useState<PropsPokemon[]>([]);
  const ref = useRef<IntersectionObserver | null>(null);
  const lastUserRef = useCallback((node: HTMLElement | null) => {
    if (ref.current) ref.current.disconnect();
    ref.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && pokemons.length !== data.limit) {
        setPage();
      }
    });
    if (node) ref.current.observe(node);
  }, [data.pokemons]);
  const fetchData = async (url: string) => {
    const {data} = await axios.get(url);
    return data;
  };
  const filterByTypes = (arr: PropsPokemon[]) => {
    if (!data.filter.type.length) {
      return arr;
    }
    return arr.filter((item) => {
      const arr = item.types.filter((type) => data.filter.type.includes(type.type.name));
      return arr.length;
    });
  };
  const filterByName = (arr: PropsPokemon[]) => {
    debugger
    console.log(!Boolean(data.filter.name), data.filter.name);
    if (!data.filter.name) {
      return arr;
    }
    debugger
    return data.filter.name ? arr.filter((pokemon) => pokemon.name.indexOf(data.filter.name) >= 0) : arr;
  };
  const filterByAttack = (arr: PropsPokemon[]) => {
    const attack = data.filter.attack;
    if (!attack.length) {
      return arr;
    }
    return arr.filter((pokemon) => pokemon.stats[1].base_stat >= attack[0] && pokemon.stats[1].base_stat <= attack[1]);

  };
  const filterByExp = (arr: PropsPokemon[]) => {
    const exp = data.filter.exp;
    if (!exp.length) {
      return arr;
    }
    debugger
    console.log(arr.filter((pokemon) => pokemon.base_experience >= exp[0] && pokemon.base_experience <= exp[1]));
    return arr.filter((pokemon) => pokemon.base_experience >= exp[0] && pokemon.base_experience <= exp[1]);
  };
  const fiterPokemons = (arr: PropsPokemon[]) => {
    const filteredByType = !data.filter.type.length ? arr : filterByTypes(arr);
    console.log('filteredByType', filteredByType);
    const filteredByName = !data.filter.name ? filteredByType : filterByName(filteredByType);
    const filteredByAttack = !data.filter.attack.length ? filteredByName : filterByAttack(filteredByName);
    const filteredByExp = !data.filter.exp.length ? filteredByAttack : filterByExp(filteredByAttack);
    return filteredByExp;
  };
  const fetchDataAll = async (arr: { url: string, name: string }[]) => {
    const dataPokemons = await axios.all(arr.map(async (item: { url: string }) => await fetchData(item.url)));
    const dataSpecies = await axios.all(dataPokemons.map(async (item) => await fetchData(item.species.url)));
    console.log(dataPokemons, dataSpecies);
    const species: { color: string, generation: string }[] = dataSpecies.map((item: { color: { name: string }, generation: { name: string } }) => {
      return {color: item.color.name, generation: item.generation.name};
    });
    const mergedData = dataPokemons.map((item, index) => {
      return {...item, ...species[index]};
    });
    setPokemons(mergedData);
  };

  useEffect(() => {
    if (data.pokemons.length) {
      fetchDataAll(data.pokemons);
    }
  }, [data.pokemons]);
  useEffect(() => {
    console.log('  console.log(result.isSuccess)', result.isSuccess);

  }, [result.isSuccess]);

  const filteredPokemons: PropsPokemon[] = fiterPokemons(pokemons);
  // console.log('filterredPokemons', filteredPokemons);
  return (
    <>
      <Container>
        {!pokemons.length && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((item, index) => (
          <SkeletonCard key={index}/>))}
        {filteredPokemons.slice(0, (data.currentPage * data.pokemonPerPage)).map((el: PropsPokemon) =>
          (
            <li key={el.id}>
              <CartItem data={el}/>
            </li>),
        )}
        <li ref={lastUserRef} key={'ref'}/>

      </Container>
      {data.modalIsOpen && <ModalCard pokemon={data.modalIsOpen}/>}
    </>
  );
};
