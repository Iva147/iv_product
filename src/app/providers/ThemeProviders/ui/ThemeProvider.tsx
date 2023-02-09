import {Themes, LOCAL_STORAGE_THEME_KEY, ThemeContext} from '../lib/ThemeContext';
import {FC, useMemo, useState} from 'react';
import useTheme from '../lib/useTheme';


const ThemeProvider: FC = ({children}) => {
  const {theme, toggleTheme} = useTheme()

  const defaultProps = useMemo(() => ({
    theme,
    setTheme: toggleTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider