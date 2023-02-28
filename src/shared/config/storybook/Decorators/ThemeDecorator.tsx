import 'app/styles/index.scss';
import type { Story } from '@storybook/react';
import type { Themes } from 'app/providers/ThemeProviders/lib/ThemeContext';

export const ThemeDecorator = (theme: Themes) => (StoryComponent: Story) => (
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
)