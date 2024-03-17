import { configureStore, Middleware } from '@reduxjs/toolkit';

import logger from 'redux-logger';

import example from './example/slice';

const middlewares: Middleware[] = [];

if (process.env.IS_LOGGER === 'true') {
  middlewares.push(logger);
}

export const store = configureStore({
  reducer: {
    example,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
