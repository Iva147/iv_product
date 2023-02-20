import { LOCAL_STORAGE_THEME_KEY, Themes, ThemeContext } from './ThemeContext';
import { useContext } from 'react';

interface UseThemeResult {
  toggleTheme: () => void
  theme: Themes
}

const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? Themes.LIGHT : Themes.DARK
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return { theme, toggleTheme }
}

export default useTheme