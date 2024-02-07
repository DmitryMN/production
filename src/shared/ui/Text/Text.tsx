import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text: React.FC<TextProps> = ({ className, title, text, theme, align=TextAlign.LEFT }) => {
    const mods = {
        [style[theme]]: true,
        [style[align]]: true,
    }

    return (
        <div className={classNames('', mods, [className])}>
            {title && <p className={style.title}>{title}</p>}
            {text && <p className={style.text}>{text}</p>}
        </div>
    );
};
