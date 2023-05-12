import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProviders/lib/ThemeContext';

export default {
  title: 'shared/Text',
  component: Text
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  text: 'Description lorem ipsum'
};

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [ThemeDecorator(Themes.DARK)]
PrimaryDark.args = {
  title: 'Title',
  text: 'Text'
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title'
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.decorators = [ThemeDecorator(Themes.DARK)]
OnlyTitleDark.args = {
  title: 'Title'
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Description lorem ipsum'
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.decorators = [ThemeDecorator(Themes.DARK)]
OnlyTextDark.args = {
  text: 'Description lorem ipsum'
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title',
  text: 'Description lorem ipsum',
  theme: TextTheme.ERROR
};