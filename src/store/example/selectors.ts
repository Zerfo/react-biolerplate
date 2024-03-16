import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

export const exampleSelector = (state: RootState) => state.example;

export const isFetchingSelector = createSelector(
  exampleSelector,
  (exampleSelector) => exampleSelector.isFetching
);