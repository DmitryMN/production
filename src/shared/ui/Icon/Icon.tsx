import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Icon.module.scss'

interface IconProps {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Icon: React.FC<IconProps> = memo(({ className, Svg }) => {
    return (
        <Svg className={classNames(style.icon, {}, [className])} />
    );
});