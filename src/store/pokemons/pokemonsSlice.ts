import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { pokemonApi } from 'store';
import { PokemonProps } from '../../components/cartItem/cartItem';

type ProduceState = {
  modalIsOpen: PokemonProps | null,
  pokemons: PokemonProps[],
  filter: { type: string[], name: string, attack: number[], exp: number[] }
  isFiltering: boolean,
  offset: string | null,
  limit: number,
  pokemonPerPage: number,
  currentPage: number,
}
const initialState: ProduceState = {
  modalIsOpen: null,
  pokemons: [],
  filter: {
    type: [],
    name: '',
    attack: [],
    exp: [],
  },
  isFiltering: false,
  offset: '',
  limit: 0,
  pokemonPerPage: 20,
  currentPage: 1,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    openCart: (state, {payload}: PayloadAction<PokemonProps>) => {
      state.modalIsOpen = payload;
    },
    closeCart: (state) => {
      state.modalIsOpen = null;
    },
    setPage: (state) => {
      if (Math.round(state.limit / state.pokemonPerPage) > state.currentPage) {
        state.currentPage++;
      }
    },
    setName: (state, {payload}) => {
      state.filter.name = payload;
    },
    setAttack: (state, {payload}) => {
      state.filter.attack = payload;
    },
    setExp: (state, {payload}) => {
      state.filter.exp = payload;
    },
    setLoading: (state, {payload}) => {
      state.isFiltering = payload;
    },
    setFilterType: (state, {payload}) => {
      if (payload.checked) {
        state.filter.type.push(payload.value);
      } else {
        state.filter.type = state.filter.type.filter((item) => item !== payload.value);
      }

    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      pokemonApi.endpoints.getPokemon.matchFulfilled,
      (state, {payload}) => {
        console.log(123);
        debugger
        console.log('state', payload);

        state.limit = payload.length;
        state.pokemons = state.pokemons.concat(payload);
        console.log(state.pokemons);
      },
    );
  },
});
export const pokemonReducer = pokemonSlice.reducer;

export const pokemonActions = pokemonSlice.actions;