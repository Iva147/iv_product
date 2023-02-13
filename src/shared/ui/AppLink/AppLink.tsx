import React, {FC} from 'react'
import cls from "./AppLink.module.scss"
import {classNames} from 'shared/lib/classNames';
import {Link, LinkProps} from 'react-router-dom';
import {Themes} from 'app/providers/ThemeProviders/lib/ThemeContext';

enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary"
}
interface AppLinkProps extends LinkProps{
  className?: string
  theme?: AppLinkTheme
}
export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className= "",
    children ,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props
  return (
    <Link
      className={classNames(cls.navbar, {}, [className, cls[theme]])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  )
}

