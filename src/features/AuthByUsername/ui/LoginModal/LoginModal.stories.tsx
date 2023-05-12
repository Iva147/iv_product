import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoginModal } from './LoginModal'
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProviders/lib/ThemeContext';
import { CentralizedAndInvertedDecorator } from 'shared/config/storybook/Decorators/CentralizedAndInvertedDecorator';
import { StoreDecorator } from 'shared/config/storybook/Decorators/StoreDecorator';

export default {
  title: 'feature/LoginModal',
  component: LoginModal,
  args: {
    isOpen: true
  }
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [
  CentralizedAndInvertedDecorator,
  StoreDecorator(
    { loginForm: { username: 'Iv', password: '123' } }
  )
]
Primary.args = {};

export const Dark = Template.bind({});
Dark.decorators = [
  CentralizedAndInvertedDecorator,
  StoreDecorator(
    { loginForm: { username: 'Iv', password: '123' } }
  ),
  ThemeDecorator(Themes.DARK)
]
Dark.args = {}