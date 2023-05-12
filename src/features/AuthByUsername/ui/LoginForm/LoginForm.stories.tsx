import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoginForm } from './LoginForm'
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProviders/lib/ThemeContext';
import { CentralizedAndInvertedDecorator } from 'shared/config/storybook/Decorators/CentralizedAndInvertedDecorator';
import { StoreDecorator } from 'shared/config/storybook/Decorators/StoreDecorator';

export default {
  title: 'feature/LoginForm',
  component: LoginForm,
  decorators: [
    StoreDecorator(
      { user: { authData: { id: '1', username: 'Iv', password: '"123" ' } } }
    )
  ]
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [CentralizedAndInvertedDecorator]
Primary.args = {};

export const Dark = Template.bind({});
Dark.decorators = [
  CentralizedAndInvertedDecorator,
  ThemeDecorator(Themes.DARK)
]
Dark.args = {};

export const PrimaryWithError = Template.bind({});
PrimaryWithError.decorators = [
  CentralizedAndInvertedDecorator,
  StoreDecorator(
    { loginForm: { username: 'Iv', password: '123', error: 'Error' } }
  )
]
PrimaryWithError.args = {};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.decorators = [
  CentralizedAndInvertedDecorator,
  StoreDecorator(
    { loginForm: { isLoading: true } }
  )
]
PrimaryLoading.args = {};