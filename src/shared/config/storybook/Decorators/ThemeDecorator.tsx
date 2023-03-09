import 'app/styles/index.scss';
import type { Story } from '@storybook/react';
import type { Themes } from 'app/providers/ThemeProviders/lib/ThemeContext';
import { ThemeProvider } from 'app/providers/ThemeProviders';

export const ThemeDecorator = (theme: Themes) => (StoryComponent: Story) => (
  <ThemeProvider initialTheme={theme}>
    <div className={'app'}>
      <StoryComponent />
    </div>
  </ThemeProvider>
)