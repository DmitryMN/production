import React, { ReactNode } from 'react';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';

export enum AppRoutes {
    MAIN = '/',
    ABOUT = '/about',
    PROFILE = '/profile',
    NOT_FOUND = '*'
}

export interface RouteConfigProps {
    path: AppRoutes
    element: ReactNode
}

export const routeConfig: RouteConfigProps[] = [
    {
        path: AppRoutes.MAIN,
        element: <MainPage />
    },
    {
        path: AppRoutes.ABOUT,
        element: <AboutPage />
    },
    {
        path: AppRoutes.PROFILE,
        element: <ProfilePage />
    },
    {
        path: AppRoutes.NOT_FOUND,
        element: <NotFoundPage />
    }
]
