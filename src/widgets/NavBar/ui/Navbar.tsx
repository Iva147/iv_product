import React, { type FC, useCallback, useState } from 'react'
import cls from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
  className?: string
}
export const Navbar: FC<NavbarProps> = ({ className = '' }) => {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const { t } = useTranslation()

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        className={cls.links}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onOpenModal}
      >
        {t('enter')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} lazy />
    </div>
  )
}