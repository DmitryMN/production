import { classNames } from 'shared/lib/classNames/classNames';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import style from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ className }) => {
    const isLoading = useSelector(getProfileLoading);
    const profile = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const { t } = useTranslation('profile');
    
    return (
        <div className={classNames(style.card, {}, [className])}>
            <div className={style.header}>
                <Text title='Profile' />
                <Button className={style.button}>{ t('Edit')}</Button>
            </div>
            <div className={style.data}>
                <Input value={profile?.firstname} placeHolder={'First name'} className={style.input}/>
                <Input value={profile?.lastname} placeHolder={'Last name'} className={style.input}/>
            </div>
        </div>
    );
};
