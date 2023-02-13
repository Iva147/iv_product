import {Link} from 'react-router-dom';
import React, {FC} from 'react'
import cls from "./Navbar.module.scss"
import {classNames} from 'shared/lib/classNames';
import {AppLink} from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string
}
export const Navbar: FC<NavbarProps> = ({className = ""}) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to="/" className={cls.mainLink}>Home</AppLink>
        <AppLink to="/about">About</AppLink>
      </div>

    </div>
  )
}
