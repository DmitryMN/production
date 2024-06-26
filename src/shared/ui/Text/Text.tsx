import React, { memo } from 'react';
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

export enum TextSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large'
}

interface TextProps {
    className?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize
}

export const Text: React.FC<TextProps> = memo(({ className, text, theme, align=TextAlign.LEFT, size=TextSize.MEDIUM }) => {
    const mods = {
        [style[theme]]: true,
        [style[align]]: true,
        [style[size]]: true, 
    }

    return (
        <p className={classNames(style.text, mods, [className])}>
            {text}
        </p>
    );
});
