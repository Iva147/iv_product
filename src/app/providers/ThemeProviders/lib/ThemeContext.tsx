import {createContext} from 'react';

export enum  Themes {
  LIGHT = "light",
  DARK = "dark"
}

interface ThemeContextProps {
  theme: Themes,
  setTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps)

export const LOCAL_STORAGE_THEME_KEY = "theme"