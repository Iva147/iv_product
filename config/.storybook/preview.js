import {addDecorator} from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/Decorators/StyleDecorator";
import {ThemeDecorator} from "../../src/shared/config/storybook/Decorators/ThemeDecorator";
import {Themes} from "app/providers/ThemeProviders/lib/ThemeContext";
import { RouteDecorator } from "shared/config/storybook/Decorators/RouteDecorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Themes.LIGHT))
addDecorator(RouteDecorator)