import { profileReducer } from 'entities/Profile';
import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

interface ProfilePageProps {
    className?: string;
}

const initialReducer: ReducersList = {
    profile: profileReducer
}

const ProfilePage: React.FC<ProfilePageProps> = ({ className }) => {
    return (
        <DynamicModuleLoader reducers={initialReducer} removeAutoUnmount={true}>
            <div className={classNames('', {}, [className])}>ProfilePage</div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
