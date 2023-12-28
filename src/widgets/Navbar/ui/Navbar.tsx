import React, { useState } from 'react';
import style from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { LoginModal } from 'features/AuthByUserName';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const { t } = useTranslation();

    const modalCloseHandler = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <nav className={classNames(style.navbar, {}, [className])}>
            <Button className={style.button} onClick={modalCloseHandler}>{t('Login')}</Button>
            <LoginModal isOpen={isOpen} modalClose={modalCloseHandler} />
        </nav>
    );
};
