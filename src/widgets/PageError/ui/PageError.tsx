import { type FC } from 'react'
import cls from './PageError.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';

interface PageErrorProps {
  className?: string
}
export const PageError: FC<PageErrorProps> = ({ className = '' }) => {
  const { t } = useTranslation()

  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('page error')}</p>
      <Button theme={ButtonTheme.CLEAR} onClick={reloadPage}>
        {t('reload page')}
      </Button>
    </div>
  )
}