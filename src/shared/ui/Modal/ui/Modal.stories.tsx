import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal } from 'shared/ui/Modal';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProviders/lib/ThemeContext';
import { ButtonTheme } from 'shared/ui/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quis, sint. Accusamus, blanditiis debitis deserunt eaque eius eligendi facilis id in iusto'
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Themes.DARK)]
Dark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quis, sint. Accusamus, blanditiis debitis deserunt eaque eius eligendi facilis id in iusto'
};