import React, { type FC, useState } from 'react'
import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  className?: string
}
export const Sidebar: FC<SidebarProps> = ({ className = '' }) => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const toggle = () => { setCollapsed(prev => !prev); }

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button onClick={toggle}>{t('toggle')}</button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}