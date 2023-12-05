import React, { ReactNode } from 'react';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

export enum AppRoutes {
    MAIN = '/',
    ABOUT = '/about'
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
]
