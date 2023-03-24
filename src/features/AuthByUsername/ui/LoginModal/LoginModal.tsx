import { type FC } from 'react'
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
  lazy?: boolean
}

export const LoginModal: FC<LoginModalProps> = ({ className = '', isOpen, onClose, lazy }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy={lazy}>
      <LoginForm />
    </Modal>
  )
}