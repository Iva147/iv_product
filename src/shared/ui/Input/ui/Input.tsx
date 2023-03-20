import type { ChangeEvent, FC, InputHTMLAttributes } from 'react'
import cls from './Input.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  type?: string
  label: string
  name: string
}

export const Input: FC<InputProps> = (props) => {
  const {
    className = '',
    value,
    onChange,
    type = 'text',
    label,
    name,
    ...others
  } = props

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className={classNames(cls.Input, {}, [className])}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChangeHandler}
        name={name}
        {...others}
      />
    </div>
  )
}