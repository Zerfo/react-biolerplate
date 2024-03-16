import { createSlice } from "@reduxjs/toolkit";

import { TExampleSliceInitialValue } from './types';

const initialState: TExampleSliceInitialValue = {
  isFetching: false,
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {},
  extraReducers: (builder) => { }
});

export default exampleSlice.reducer;