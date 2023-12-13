import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import style from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(style.notFoundPage , {}, [className])}>
            { t('Page not found') }
        </div>
    )
}
