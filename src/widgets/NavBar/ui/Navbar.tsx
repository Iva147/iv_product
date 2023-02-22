import React, { type FC } from 'react'
import cls from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string
}
export const Navbar: FC<NavbarProps> = ({ className = '' }) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to="/" className={cls.mainLink}>{t('Home')}</AppLink>
        <AppLink to="/about">{t('About')}</AppLink>
      </div>

    </div>
  )
}