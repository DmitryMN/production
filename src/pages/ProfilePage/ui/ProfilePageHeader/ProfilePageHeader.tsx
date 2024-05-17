import React, { useCallback } from 'react';
import { Button } from 'shared/ui/Button/Button';
import style from './ProfilePageHeader.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getProfileReadonly, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from 'entities/Profile';
import { Title } from 'shared/ui/Title/Title';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader: React.FC<ProfilePageHeaderProps> = ({ className }) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);

    const setReadonly = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const cancelReadonly = useCallback(() => {
        dispatch(profileActions.cancelReadonly());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch]);

    return (
        <div className={classNames(style.header, {}, [className])}>
            <Title title='Profile'/>
            {
                readonly ?
                    (<Button onClick={setReadonly} className={style.button}>{t('Edit')}</Button>) :
                    (
                        <div>
                            <Button style={{marginRight: '5px'}} onClick={cancelReadonly} className={style.button}>{t('Cancel')}</Button>
                            <Button className={style.button} onClick={onSave}>{t('Save')}</Button>
                        </div>
                    )
            }
        </div >
    );
};3
