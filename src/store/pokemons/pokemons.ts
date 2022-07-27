import {
  createApi,
  fetchBaseQuery, FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { PokemonProps } from '../../components/cartItem/cartItem';
import axios from 'axios';

interface ListResponse {
  count: number;
  next: string | null;
  prev: string | null;
  results: PokemonProps[];
}

export const fetchAll = async (arr: { name: string, url: string }[]) => {
  debugger
  const dataPokemons = await axios.all(arr.map((item: { url: string }) => axios.get(item.url))).then((res) => res.map((item) => item.data))
  console.log('asd', dataPokemons);
  const dataSpecies = await axios.all(dataPokemons.map((item) => axios.get(item.species.url))).then((res) => res.map((item) => item.data));
  console.log('arr', dataSpecies, dataPokemons);
  const species: { color: string, generation: string }[] = dataSpecies.map((item: { color: { name: string }, generation: { name: string } }) => {
    return {color: item.color.name, generation: item.generation.name};
  });
  const mergedData = dataPokemons.map((item, index) => {
    return {...item, ...species[index]};
  });
  console.log('merge', mergedData);
  return mergedData;
};

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
  endpoints: (builder) => ({
    getPokemon: builder.query<PokemonProps[], void>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const result = await fetchWithBQ('pokemon');
        const data = result.data as ListResponse;
        const limit = data.count;
        const results = await fetchWithBQ(`pokemon/?limit=${limit}`);
        const allLinks = results.data as ListResponse;
        const allPokemons = await fetchAll(allLinks.results);
        return allPokemons
            ? { data: allPokemons as any }
            : { error: result.error as FetchBaseQueryError }
      },
      // query: (limit) => {
      //   //debugger
      //   console.log(limit)
      //   return {url: `pokemon?${limit}`}
      // },
      // async onQueryStarted(arg,{ dispatch, queryFulfilled }) {
      //   debugger
      //   const result = await  queryFulfilled
      //   console.log('query', result)
      // },
      // queryFn: async (args,
      //           {signal, dispatch, getState},
      //           extraOptions,
      //                 fetchWithBQ) => {
      //   debugger
      //   const result = await fetchWithBQ('pokemon')
      //   console.log(result);
      //   return result.data
      //     ? { data: result.data as any }
      //     : { error: result.error as FetchBaseQueryError }
      // },
      // transformResponse: (response: any) =>{
      //   debugger
      //   console.log("response",response)
      //   return response
      // }
    }),
  }),
});

export const {useGetPokemonQuery} = pokemonApi;
