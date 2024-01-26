import React from 'react';
import { AppRoutes } from 'shared/config/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg'

export interface SidebarItemType {
    path: string
    text: string
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: AppRoutes.MAIN,
        text: 'Main',
        Icon: HomeIcon
    },
    {
        path: AppRoutes.ABOUT,
        text: 'About',
        Icon: AboutIcon
    },
    {
        path: AppRoutes.PROFILE,
        text: 'Profile',
        Icon: ProfileIcon
    },
]