import type { Story } from '@storybook/react'
import type { IStateScheme } from 'app/providers/StoreProvider/config/StateScheme';
import type { DeepPartial } from '@reduxjs/toolkit';
import { StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (initialState: DeepPartial<IStateScheme>) => (StoryComponent: Story) => (
  <StoreProvider initialState={initialState}>
    <StoryComponent />
  </StoreProvider>
)