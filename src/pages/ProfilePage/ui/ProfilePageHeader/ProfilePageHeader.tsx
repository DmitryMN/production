import React, { useCallback } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import style from './ProfilePageHeader.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getProfileReadonly } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from 'entities/Profile';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader: React.FC<ProfilePageHeaderProps> = ({ className }) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);

    const readonlyHandler = useCallback(() => {
        dispatch(profileActions.changeReadonly());
    }, [dispatch]);

    return (
        <div className={classNames(style.header, {}, [className])}>
            <Text title='Profile' />
            {
                readonly ?
                    (<Button onClick={readonlyHandler} className={style.button}>{t('Edit')}</Button>) :
                    (<Button onClick={readonlyHandler} className={style.button}>{t('Cancel')}</Button>)
            }
        </div>
    );
};
