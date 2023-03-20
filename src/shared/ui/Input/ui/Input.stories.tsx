import React from 'react';
import type { ComponentMeta, ComponentStory, DecoratorFn } from '@storybook/react';

import { Input } from './Input'
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProviders/lib/ThemeContext';
import { CentralizedAndInvertedDecorator } from 'shared/config/storybook/Decorators/CentralizedAndInvertedDecorator';

const decorators: DecoratorFn[] = [
  (Story) => (
    <div style={{ maxWidth: '400px', padding: '20px' }}>
      <Story/>
    </div>
  ),
  CentralizedAndInvertedDecorator
]

export default {
  title: 'shared/Input',
  component: Input,
  args: {
    type: 'text',
    label: 'input label',
    name: 'input',
    value: '123'
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.decorators = decorators
Primary.args = {};

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [...decorators, ThemeDecorator(Themes.DARK)]
PrimaryDark.args = {};