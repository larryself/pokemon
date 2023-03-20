import { createSelector } from '@reduxjs/toolkit';
import { TypeRootState } from 'store/store';
import { useAppSelector } from 'store/useAppSelector';

const selector = createSelector((state: TypeRootState) => state.theme, (theme) => theme)
export const useThemeSelector = () => {
  const theme = useAppSelector(selector);
  return theme;
}
