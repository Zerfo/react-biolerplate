import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

export const exampleSelector = (state: RootState) => state.example;

export const isFetchingSelector = createSelector(
  exampleSelector,
  (exampleState) => exampleState.isFetching,
);
