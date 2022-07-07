import {
  createApi,
  fetchBaseQuery, FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { PokemonProps } from '../../components/cartItem/cartItem';

interface ListResponse {
  count: number;
  next: string | null;
  prev: string | null;
  results: PokemonProps[];
}

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
  endpoints: (builder) => ({
    getPokemon: builder.query<ListResponse, void>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const results = await fetchWithBQ('pokemon');
        if (results.error)
          return {error: results.error as FetchBaseQueryError};
        const data = results.data as ListResponse;
        const limit = data.count;
        const result = await fetchWithBQ(`pokemon/?limit=${limit}`);
        return result.data
          ? {data: result.data as ListResponse}
          : {error: result.error as FetchBaseQueryError};
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
