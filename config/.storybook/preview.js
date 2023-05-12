import {addDecorator} from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/Decorators/StyleDecorator";
import {ThemeDecorator} from "../../src/shared/config/storybook/Decorators/ThemeDecorator";
import {Themes} from "../../src/app/providers/ThemeProviders/lib/ThemeContext";
import { RouteDecorator } from "../../src/shared/config/storybook/Decorators/RouteDecorator";
import { TranslationDecorator } from "../../src/shared/config/storybook/Decorators/TranslationDecorator";

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
addDecorator(TranslationDecorator)