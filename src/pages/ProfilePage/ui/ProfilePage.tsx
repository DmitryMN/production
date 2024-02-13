import React, { useCallback, useEffect } from 'react';
import { ProfileCard, fetchProfileData, getProfileError, getProfileLoading, profileReducer, profileActions, getProfileReadonly, getProfileForm } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import style from './ProfilePage.module.scss';
import { Currency } from 'entities/Currency';

interface ProfilePageProps {
    className?: string;
}

const initialReducer: ReducersList = {
    profile: profileReducer
};

const ProfilePage: React.FC<ProfilePageProps> = ({ className }) => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getProfileLoading);
    const profile = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);

    const changeFirstname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ firstname: value || '' }));
    }, [dispatch]);

    const changeLastname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const changeAge = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    }, [dispatch]);

    const changeCity = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const changeUsername = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const changeAvatar = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const changeCurrency = useCallback((value: Currency) => {
        dispatch(profileActions.updateProfile({ currency: value || '' }));
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initialReducer} removeAutoUnmount={true}>
            <div className={classNames(style.profile_page, {}, [className])}>
                <ProfilePageHeader />
                <ProfileCard
                    profile={profile}
                    isLoading={isLoading}
                    error={error}
                    changeFirstname={changeFirstname}
                    changeLastname={changeLastname}
                    readonly={readonly}
                    changeAge={changeAge}
                    changeCity={changeCity}
                    changeUsername={changeUsername}
                    changeAvatar={changeAvatar}
                    changeCurrency={changeCurrency}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
