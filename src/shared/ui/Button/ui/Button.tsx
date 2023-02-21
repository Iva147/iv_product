import React, { type ButtonHTMLAttributes, type FC } from 'react'
import cls from './Button.module.scss'
import { classNames } from 'shared/lib/classNames';

export enum ThemeButton {
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className = '',
    theme,
    children,
    ...others
  } = props

  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...others}
    >
      {children}
    </button>
  )
}