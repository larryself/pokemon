import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { themeActions } from 'store/themeReducer';

const allActions = {
  ...themeActions
}

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch)
}
