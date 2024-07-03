import { createSelector } from '@reduxjs/toolkit';
import { getAuthUserState } from 'entities/User';
import { AppRoutes } from 'shared/config/routeConfig';
import { SidebarItemType } from '../types/sidebar';
import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export const getSidebarItems = createSelector([getAuthUserState], (userData) => {
    const SidebarItemsList: SidebarItemType[] = [
        {
            path: AppRoutes.MAIN,
            text: 'Main',
            Icon: HomeIcon
        },
        {
            path: AppRoutes.ABOUT,
            text: 'About',
            Icon: AboutIcon
        }
    ];

    if (userData) {
        SidebarItemsList.push(
            {
                path: AppRoutes.PROFILE + userData.id,
                text: 'Profile',
                Icon: ProfileIcon,
                authOnly: true,
            });
    }

    return SidebarItemsList;

});