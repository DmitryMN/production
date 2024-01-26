import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ className }) => {
    return (
        <div className={classNames('', {}, [className])}>ProfilePage</div>
    );
};

export default ProfilePage;
