import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Navbar } from 'widgets/NavBar';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProviders/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/Decorators/StoreDecorator';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [
    StoreDecorator({ user: { authData: { username: 'username', password: '123', id: '1' } } })
  ]
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Themes.DARK)];