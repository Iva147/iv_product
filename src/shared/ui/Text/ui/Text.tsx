import { type FC } from 'react'
import cls from './Text.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
}

export const Text: FC<TextProps> = (props) => {
  const {
    className = '',
    title,
    text,
    theme = TextTheme.PRIMARY
  } = props
  return (
    <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
      {title && <div className={cls.title}>{title}</div>}
      {text && <div className={cls.text}>{text}</div>}
    </div>
  )
}