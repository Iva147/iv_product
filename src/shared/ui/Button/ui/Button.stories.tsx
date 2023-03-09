import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProviders/lib/ThemeContext';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Button'
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Button',
  theme: ButtonTheme.CLEAR
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Button',
  theme: ButtonTheme.CLEAR_INVERTED
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE
};

export const OutlineDark = Template.bind({});
OutlineDark.decorators = [ThemeDecorator(Themes.DARK)]
OutlineDark.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE
};

export const Background = Template.bind({});
Background.decorators = [ThemeDecorator(Themes.DARK)]
Background.args = {
  children: 'Button',
  theme: ButtonTheme.BACKGROUND
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Button',
  theme: ButtonTheme.BACKGROUND_INVERTED
};

export const Square = Template.bind({})
Square.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.M
};

export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L
};

export const SquareSizeXL = Template.bind({})
SquareSizeXL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL
};