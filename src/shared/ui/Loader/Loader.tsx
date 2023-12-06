import React from 'react';
import { classNames } from 'shared/lib/classNames';
import './Loader.scss'

export const Loader: React.FC = () => {
    return (
        <div className={classNames('lds-ring', {}, [])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
