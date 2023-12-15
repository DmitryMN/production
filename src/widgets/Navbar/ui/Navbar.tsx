import React from 'react';
import style from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <nav className={classNames(style.navbar, {}, [className])}>
            <div className={style.links}>
            </div>
        </nav>
    )
}
