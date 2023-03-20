import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoginForm } from './LoginForm'
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProviders/lib/ThemeContext';
import { CentralizedAndInvertedDecorator } from 'shared/config/storybook/Decorators/CentralizedAndInvertedDecorator';

export default {
  title: 'feature/LoginForm',
  component: LoginForm
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [CentralizedAndInvertedDecorator]
Primary.args = {};

export const Dark = Template.bind({});
Dark.decorators = [CentralizedAndInvertedDecorator, ThemeDecorator(Themes.DARK)]
Dark.args = {};