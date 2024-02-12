import React, { CSSProperties, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({ className, src, alt, size = 100 }) => {
    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size,
        };
    }, [size]);

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(style.avatar, {}, [className])}
        />
    );
};
