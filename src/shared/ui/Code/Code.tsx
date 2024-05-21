import React, { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Code.module.scss';

interface TitleProps {
    className?: string;
    children?: ReactNode
}

export const Code: React.FC<TitleProps> = memo(({className, children}) => {

    return (
        <pre className={classNames(style.code, {}, [className])}>
            <code>
                {children}
            </code>
        </pre>
    );
});
