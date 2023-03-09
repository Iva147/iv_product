import React, { type FC, useCallback, useState } from 'react'
import cls from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string
}
export const Navbar: FC<NavbarProps> = ({ className = '' }) => {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const { t } = useTranslation()

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        className={cls.links}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onToggleModal}
      >
        {t('enter')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {t('Lorem')}
      </Modal>
    </div>
  )
}