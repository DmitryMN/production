import React, { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfigProps, routeConfig } from 'shared/config/routeConfig';
import { PageLoader } from 'pages/PageLoader';
import { useSelector } from 'react-redux';
import { getAuthUserState } from 'entities/User';
import { RequireAuth } from './RequireAuth';

export const AppRouter = () => {
    let auth = useSelector(getAuthUserState);

    const renderWrapper = useCallback((route: RouteConfigProps) => {
        return (
            <Route key={route.path} path={route.path} element={route.authOnly ? (<RequireAuth>{route.element}</RequireAuth>) : route.element}/>
        );
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {
                    // routes.map(({ path, element }) => <Route key={path} path={path} element={element} />)
                    routeConfig.map(renderWrapper)
                }
            </Routes>
        </Suspense>
    );
};
