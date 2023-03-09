import type { FC, ReactNode, MouseEvent } from 'react'
import cls from './Modal.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';

interface ModalProps {
  className?: string
  children: ReactNode
  isOpen: boolean
  onClose?: () => void
}

const ANIMATION_DELAY = 300

export const Modal: FC<ModalProps> = ({ className = '', children, isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>()

  const closeHandler = useCallback(() => {
    if(onClose) {
      setIsClosing(true)
      timer.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onContentClick = useCallback((e: MouseEvent) => {
    e.stopPropagation()
  }, [])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if(e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if(isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      timer.current && clearTimeout(timer.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])} >
        <div className={cls.overlay} onClick={closeHandler}>
          <div
            className={cls.content}
            onClick={onContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}