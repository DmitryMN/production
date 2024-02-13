import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import style from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CurrencySelect } from 'entities/Currency/ui/CurrencySelect/CurrencySelect';
import { Currency } from 'entities/Currency';

interface ProfileCardProps {
    className?: string;
    profile?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    changeFirstname?: (value?: string) => void;
    changeLastname?: (value?: string) => void;
    changeAge?: (value?: string) => void;
    changeCity?: (value?: string) => void;
    changeUsername?: (value?: string) => void;
    changeAvatar?: (value?: string) => void;
    changeCurrency?: (value?: Currency) => void
}

export const ProfileCard: React.FC<ProfileCardProps> = (props) => {

    const {
        className,
        profile,
        isLoading,
        error,
        readonly,
        changeFirstname,
        changeLastname,
        changeAge,
        changeCity,
        changeUsername,
        changeAvatar,
        changeCurrency
    } = props;

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
                {profile?.avatar && (
                    <div className={style.avatar_wrapp}>
                        <Avatar src={profile.avatar} alt={'some images'} size={150} />
                    </div>
                )}
                <Input value={profile?.firstname} placeHolder={'First name'} className={style.input} onChange={changeFirstname} readonly={readonly} />
                <Input value={profile?.lastname} placeHolder={'Last name'} className={style.input} onChange={changeLastname} readonly={readonly} />
                <Input value={profile?.age} placeHolder={'Age'} className={style.input} onChange={changeAge} readonly={readonly} />
                <Input value={profile?.city} placeHolder={'City'} className={style.input} onChange={changeCity} readonly={readonly} />
                <Input value={profile?.username} placeHolder={'Username'} className={style.input} onChange={changeUsername} readonly={readonly} />
                <Input value={profile?.avatar} placeHolder={'Avatar'} className={style.input} onChange={changeAvatar} readonly={readonly} />
                <CurrencySelect value={profile?.currency} changeCurrency={changeCurrency} className={style.currencySelect} readonly={readonly}/>
            </div>
        </div>
    );
};
