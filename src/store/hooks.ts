import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';

import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from 'store';

import { actions as exampleActions } from './example/slice';
import { thunks as exampleThunks } from './example/thunks';

const rootActions = {
  ...exampleActions,
};

const rootThunks = {
	...exampleThunks,
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

export const useThunks = () => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(rootThunks, dispatch), [dispatch]);
}
