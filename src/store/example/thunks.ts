import { createAsyncThunk } from "@reduxjs/toolkit";


export const toggleFetch = createAsyncThunk('example/toggleFetch', (isFetching: boolean) => {
  return isFetching;
});

export const thunks =  { toggleFetch };