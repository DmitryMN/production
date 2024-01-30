import React, { ButtonHTMLAttributes, memo } from 'react';
import style from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = memo(({ className, children, theme, disabled, ...props }) => {
    return (
        <button className={classNames(style.button, {}, [className, style[theme]])} disabled={disabled} {...props}>
            {children}
        </button>
    );
});
