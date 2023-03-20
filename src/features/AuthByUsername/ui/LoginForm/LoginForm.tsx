import { type FC } from 'react'
import cls from './LoginForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';

interface LoginFormProps {
  className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className = '' }) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        type="text"
        className={cls.input}
        label={t('username')}
        name='username'
        autoFocus
      />
      <Input
        type="text"
        className={cls.input}
        label={t('password')}
        name='password'
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
      >
        {t('Enter')}
      </Button>
    </div>
  )
}