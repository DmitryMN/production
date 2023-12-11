import React from 'react';
import { classNames } from 'shared/lib/classNames';
import './PageError.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: React.FC<PageErrorProps> = ({ className }) => {
    return (
        <div className={classNames('pageError', {}, [className])}>
            <p>Error: reaload page F5</p>
        </div>
    );
};
