import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Container } from './style';
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
  }, [data.limit, pokemons.length, setPage]);


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
    if (!data.filter.name) {
      return arr;
    }
    return data.filter.name ? arr.filter((pokemon) => pokemon.name.indexOf(data.filter.name.toLowerCase()) >= 0) : arr;
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
    return arr.filter((pokemon) => pokemon.base_experience >= exp[0] && pokemon.base_experience <= exp[1]);
  };
  const fiterPokemons = (arr: PropsPokemon[]) => {
    const filteredByType = !data.filter.type.length ? arr : filterByTypes(arr);
    const filteredByName = !data.filter.name ? filteredByType : filterByName(filteredByType);
    const filteredByAttack = !data.filter.attack.length ? filteredByName : filterByAttack(filteredByName);
    const filteredByExp = !data.filter.exp.length ? filteredByAttack : filterByExp(filteredByAttack);
    return filteredByExp;
  };

  useEffect(() => {
    if (result.status === 'fulfilled' || data.pokemons.length) {
      setPokemons(data.pokemons);
    }
  }, [data.pokemons, result.status]);

  const filteredPokemons: PropsPokemon[] = fiterPokemons(pokemons);
  return (
    <>
      <Container>
        {!pokemons.length && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((item, index) => (
          <SkeletonCard key={index}/>))}
        {filteredPokemons.slice(0, (data.currentPage * data.pokemonPerPage)).map((el: PropsPokemon, index, array) => {
            if (array.length - 1 === index) {
              return (
                <li key={el.id} ref={lastUserRef}>
                  <CartItem data={el}/>
                </li>);
            }
            return (
              <li key={el.id}>
                <CartItem data={el}/>
              </li>);
          },
        )
        }
      </Container>
      {data.modalIsOpen && <ModalCard pokemon={data.modalIsOpen}/>}
    </>
  );
};
