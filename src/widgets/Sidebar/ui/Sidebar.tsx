import React, { type FC, useState } from 'react'
import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/ui/LangSwitcher';
import { Button } from 'shared/ui/Button';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home-page.svg'
import AboutIcon from 'shared/assets/icons/about-page.svg'

interface SidebarProps {
  className?: string
}
export const Sidebar: FC<SidebarProps> = ({ className = '' }) => {
  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => { setCollapsed(prev => !prev); }
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button
        onClick={toggle}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        className={cls.collapsedBtn}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={cls.items}>
        <AppLink
          to={RoutePaths.home}
          theme={AppLinkTheme.INVERTED_PRIMARY}
          className={cls.item}
        >
          <HomeIcon className={cls.icon}/>
          <span className={cls.linkText}>
            {t('Home')}
          </span>
        </AppLink>
        <AppLink
          to={RoutePaths.about}
          theme={AppLinkTheme.INVERTED_PRIMARY}
          className={cls.item}
        >
          <AboutIcon className={cls.icon}/>
          <span className={cls.linkText}>
            {t('About')}
          </span>
        </AppLink>
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short />
      </div>
    </div>
  )
}