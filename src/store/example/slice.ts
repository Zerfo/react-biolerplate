import { createSlice } from "@reduxjs/toolkit";

import { toggleFetch } from './thunks';

import { TExampleSliceInitialValue } from './types';

const initialState: TExampleSliceInitialValue = {
  isFetching: false,
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    toggleFetching: (state, action) => {
      state.isFetching = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(toggleFetch.fulfilled, (state, action) => {
        state.isFetching = action.payload;
      });
  }
});

export default exampleSlice.reducer;

export const { actions } = exampleSlice;