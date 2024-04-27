import React, { CSSProperties } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Sceleton.module.scss';

interface SceletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string
}

export const Sceleton: React.FC<SceletonProps> = ({ className, height, width, border }) => {

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border
    }

    return (
        <div style={styles} className={classNames(style.sceleton, {}, [className])}></div>
    );
};