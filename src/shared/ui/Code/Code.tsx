import React, { memo, ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Code.module.scss';
import { Button } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/copy.svg';
import { Icon } from 'shared/ui/Icon/Icon';

interface TitleProps {
    className?: string;
    text?: string
}

export const Code: React.FC<TitleProps> = memo(({className, text}) => {

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text])

    return (
        <pre className={classNames(style.code, {}, [className])}>
            <Button className={style.button} onClick={onCopy}>
                <Icon className={style.icon} Svg={CopyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});
