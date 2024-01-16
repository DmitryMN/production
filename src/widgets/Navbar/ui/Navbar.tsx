import React, { useState } from 'react';
import style from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { LoginModal } from 'features/AuthByUserName';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getAuthUserState } from 'entities/User';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const authData = useSelector(getAuthUserState);

    const { t } = useTranslation();

    const modalCloseHandler = () => {
        setIsOpen((prev) => !prev);
    };

    if (authData) {
        return <nav className={classNames(style.navbar, {}, [className])}>
            <Button className={style.button} onClick={modalCloseHandler}>{t('Logout')}</Button>
            <LoginModal isOpen={isOpen} modalClose={modalCloseHandler} />
        </nav>;
    }

    return (
        <nav className={classNames(style.navbar, {}, [className])}>
            <Button className={style.button} onClick={modalCloseHandler}>{t('Login')}</Button>
            <LoginModal isOpen={isOpen} modalClose={modalCloseHandler} />
        </nav>
    );
};
