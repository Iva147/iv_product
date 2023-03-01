import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProviders/lib/ThemeContext';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/'
  },
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'AppLink'
};

export const PrimaryInverted = Template.bind({});
PrimaryInverted.args = {
  children: 'AppLink',
  theme: AppLinkTheme.INVERTED_PRIMARY
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'AppLink'
};
PrimaryDark.decorators = [ThemeDecorator(Themes.DARK)]

export const PrimaryInvertedDark = Template.bind({});
PrimaryInvertedDark.args = {
  children: 'AppLink',
  theme: AppLinkTheme.INVERTED_PRIMARY
};
PrimaryInvertedDark.decorators = [ThemeDecorator(Themes.DARK)]