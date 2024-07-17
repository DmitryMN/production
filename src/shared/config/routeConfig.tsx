import React, { ReactNode } from 'react';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticlesPage } from 'pages/ArticlesPage';

export enum AppRoutes {
    MAIN = '/',
    ABOUT = '/about',
    PROFILE = '/profile/',
    ARTICLES = '/articles',
    ARTICLE_DETAILS = '/articles/',
    NOT_FOUND = '*'
}

export interface RouteConfigProps {
    path: string
    element: ReactNode
    authOnly?: boolean
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
        path: `${AppRoutes.PROFILE}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    {
        path: AppRoutes.ARTICLES,
        element: <ArticlesPage/>,
        authOnly: true
    },
    {
        path: `${AppRoutes.ARTICLE_DETAILS}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true
    },
    {
        path: AppRoutes.NOT_FOUND,
        element: <NotFoundPage />
    }
]
