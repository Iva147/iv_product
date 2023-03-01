import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  className?: string
  short?: boolean
}
export const LangSwitcher: FC<LangSwitcherProps> = ({ className = '', short }) => {
  const { t, i18n } = useTranslation()

  const toggle = () => {
    i18n
      .changeLanguage(i18n.language === 'eng' ? 'ukr' : 'eng')
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggle}
    >
      {t(short ? 'lang' : 'language')}
    </Button>
  )
}