import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { themeReducer } from 'store/themeReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  //middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
});

setupListeners(store.dispatch);
export type TypeRootState = ReturnType<typeof store.getState>
