import React, { useLayoutEffect, useState } from 'react';
import { Container } from "./style";
import { PokemonProps } from "../cartItem/cartItem";
import axios from "axios";
import { Modal, CartItem } from "components";

export const CartBox = () => {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([])
  const [species, setSpecies] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const fetchDatas = async () => {
    const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100');
    await fetchDataAll(data.results)
  }
  const fetchData = async (url: string) => {
    const {data} = await axios.get(url);
    return data
  }
  const fetchDataAll = async (arr: { name: string, url: string }[]) => {
    const dataPokemons = await axios.all(arr.map(async (item: { url: string }) => await fetchData(item.url)))
    const dataSpecies = await axios.all(dataPokemons.map(async (item) => await fetchData(item.species.url)))
    console.log('data123', dataPokemons)
    setPokemons(dataPokemons)
    console.log('data123', dataPokemons)
    setSpecies(dataSpecies.map((item: { color: { name: string } }) => item.color.name))

  }
  useLayoutEffect(() => {
    fetchDatas()
  }, [])

  return (
    <>
      <Container>
        {pokemons.map((el: PokemonProps, index) => (
          <li key={el.id}><CartItem {...el} color={species[index]} onClick={() => {
            setIsOpen(true)
          }}/></li>)
        )}
      </Container>
      {isOpen &&
      <Modal isOpen={isOpen} onClick={() => setIsOpen(false)} data={pokemons.find(pokemon => pokemon.id === 6)}/>}
    </>
  );
};
