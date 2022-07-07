import { createSlice } from '@reduxjs/toolkit';

type themeState = {
  theme: 'LightTheme' | 'DarkTheme'
}
const initialState: themeState = {
  theme: 'LightTheme',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state) => {
      state.theme === 'LightTheme' ? state.theme = 'DarkTheme' : state.theme = 'LightTheme';
    },
  },
});
export const themeReducer = themeSlice.reducer;


export const themeActions = themeSlice.actions;
