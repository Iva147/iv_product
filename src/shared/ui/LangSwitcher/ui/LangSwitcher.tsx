import React, {FC} from 'react'
import cls from "./LangSwitcher.module.scss"
import {classNames} from 'shared/lib/classNames';
import {Button} from 'shared/ui/Button';
import {ThemeButton} from 'shared/ui/Button/ui/Button';
import {useTranslation} from 'react-i18next';

interface LangSwitcherProps {
  className?: string
}
export const LangSwitcher: FC<LangSwitcherProps> = ({className = ""}) => {
  const {t, i18n} = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "eng" ? "ukr" : "eng")
  }

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.LangSwitcher, {}, [className])}
      onClick={toggle}
    >
      {t("lang")}
    </Button>
  )
}