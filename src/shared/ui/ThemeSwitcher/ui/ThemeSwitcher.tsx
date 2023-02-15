import React, {FC} from 'react'
import cls from "./ThemeSwitcher.module.scss"
import {classNames} from 'shared/lib/classNames';
import {useTheme} from 'app/providers/ThemeProviders';
import {Button} from 'shared/ui/Button';
import {ThemeButton} from 'shared/ui/Button/ui/Button';
import {Themes} from 'app/providers/ThemeProviders/lib/ThemeContext';
import ThemeDarkIcon from "shared/assets/icons/theme-dark.svg"
import ThemeLightIcon from "shared/assets/icons/theme-light.svg"

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className = ""}) => {
  const {theme, toggleTheme} = useTheme()
  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={() => toggleTheme()}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
    >
      {theme === Themes.DARK ? <ThemeDarkIcon /> : <ThemeLightIcon />}
    </Button>
  )
}