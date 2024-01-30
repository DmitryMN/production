import React, { memo, useCallback, useState } from 'react';
import style from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { LoginModal } from 'features/AuthByUserName';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getAuthUserState, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const authData = useSelector(getAuthUserState);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const modalCloseHandler = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    const logoutHandler = useCallback(() => {
        dispatch(userActions.logout());
        setIsOpen((prev) => !prev);
    }, [dispatch]);

    if (authData) {
        console.log('render logout');
        return (
            <nav className={classNames(style.navbar, {}, [className])}>
                <Button className={style.button} onClick={logoutHandler}>{t('Logout')}</Button>
            </nav>
        );
    }
    console.log('render login');
    return (
        <nav className={classNames(style.navbar, {}, [className])}>
            <Button className={style.button} onClick={modalCloseHandler}>{t('Login')}</Button>
            <LoginModal isOpen={isOpen} modalClose={modalCloseHandler} />
        </nav>
    );
});
