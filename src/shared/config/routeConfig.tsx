import React, { ReactNode } from 'react';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN = '/',
    ABOUT = '/about',
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
        path: AppRoutes.NOT_FOUND,
        element: <NotFoundPage />
    }
]
