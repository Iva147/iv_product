import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import type { IStateScheme } from './StateScheme';
import counterReducer from 'entities/counterSlice/counterSlice';
import { userReducer } from 'entities/User';

// function for following reusing in different purpose, e.g. storybook
export const createReduxStore = (initialState: IStateScheme) => {
  const rootReducer: ReducersMapObject<IStateScheme> = {
    counter: counterReducer,
    user: userReducer
  }

  return configureStore<IStateScheme>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState ?? {}
  })
}