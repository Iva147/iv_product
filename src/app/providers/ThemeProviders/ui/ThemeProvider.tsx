import { Themes, LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../lib/ThemeContext';
import { type FC, useMemo, useState } from 'react';

interface ThemeProviderProps {
  initialTheme?: Themes
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes ?? Themes.LIGHT

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Themes>(initialTheme ?? defaultTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider