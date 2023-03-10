import { configureStore } from '@reduxjs/toolkit';
import type { IStateScheme } from './StateScheme';
import counterReducer from 'entries/counterSlice/counterSlice'

// function for following reusing in different purpose, e.g. storybook
export const createReduxStore = (initialState: IStateScheme) => {
  return configureStore<IStateScheme>({
    reducer: {
      counter: counterReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState ?? {}
  })
}