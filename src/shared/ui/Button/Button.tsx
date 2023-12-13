import React, { ButtonHTMLAttributes } from 'react';
import style from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button: React.FC<ButtonProps> = ({ className, children, theme, ...otherProps }) => {
    return (
        <button className={classNames(style.button, {}, [className, style[theme]])} {...otherProps}>
            {children}
        </button>
    )
}
