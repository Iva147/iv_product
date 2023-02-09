import {LOCAL_STORAGE_THEME_KEY, Themes} from './ThemeContext';
import {useState} from 'react';

interface UseThemeResult {
  toggleTheme: () => void
  theme: Themes
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.LIGHT

const useTheme = (): UseThemeResult => {
  const [theme, setTheme] = useState<Themes>(defaultTheme)

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? Themes.LIGHT : Themes.DARK
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    setTheme(newTheme)
  }

  return {theme, toggleTheme}
}

export default useTheme