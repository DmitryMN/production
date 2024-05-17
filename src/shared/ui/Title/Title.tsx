import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Title.module.scss';

export enum TitleTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TitleAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

export enum TitleSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large'
}

interface TitleProps {
    className?: string;
    title?: string;
    theme?: TitleTheme;
    align?: TitleAlign;
    size?: TitleSize
}

export const Title: React.FC<TitleProps> = memo(({ className, title, theme, align=TitleAlign.LEFT, size=TitleSize.MEDIUM }) => {
    const mods = {
        [style[theme]]: true,
        [style[align]]: true,
        [style[size]]: true, 
    }

    return (
        <p className={classNames(style.title, mods, [className])}>
            {title}
        </p>
    );
});
