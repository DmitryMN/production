import React, { useEffect } from 'react';
import { ProfileCard, fetchProfileData, getProfileError, getProfileLoading, profileReducer, profileActions, getProfileReadonly, getProfileForm } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import style from './ProfilePage.module.scss';

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

    const changeFirstname = (value: string) => {
        dispatch(profileActions.updateProfile({ firstname: value || '' }));
    };

    const changeLastname = (value: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    };


    const changeAge = (value: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    };


    const changeCity = (value: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    };

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
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
