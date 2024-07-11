import React, { HTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = memo(({ className, children, ...otherProps }) => {
    return (
        <div className={classNames(style.card, {}, [className])} {...otherProps}>
            {children}
        </div>
    );
});