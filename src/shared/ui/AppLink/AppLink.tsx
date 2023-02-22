import React, { type FC } from 'react'
import cls from './AppLink.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, type LinkProps } from 'react-router-dom';

enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}
interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}
export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className = '',
    children,
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