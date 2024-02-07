import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import style from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';

interface ProfileCardProps {
    className?: string;
    profile?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    changeFirstname: (value?: string) => void;
    changeLastname: (value?: string) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ className, profile, isLoading, error, readonly, changeFirstname, changeLastname }) => {
    const { t } = useTranslation('profile');



    if (isLoading) {
        return (
            <div className={classNames(style.card, {}, [className, style.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(style.card, {}, [className, style.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={'Download profile error'}
                    text={'Refresh window please'}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(style.card, {}, [className])}>
            <div className={style.data}>
                <Input value={profile?.firstname} placeHolder={'First name'} className={style.input} onChange={changeFirstname} readonly={readonly}/>
                <Input value={profile?.lastname} placeHolder={'Last name'} className={style.input} onChange={changeLastname} readonly={readonly}/>
            </div>
        </div>
    );
};
