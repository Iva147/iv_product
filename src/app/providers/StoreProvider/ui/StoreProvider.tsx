import type { FC, ReactNode } from 'react'
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import type { IStateScheme } from '../config/StateScheme';
import type { DeepPartial } from '@reduxjs/toolkit';

interface StoreProviderProps {
  children: ReactNode
  initialState?: DeepPartial<IStateScheme>
}
export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
  const store = createReduxStore(initialState as IStateScheme)

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}