import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig';
import { PageLoader } from 'pages/PageLoader';

export const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {
                    routeConfig.map(({ path, element }) => <Route key={path} path={path} element={element} />)
                }
            </Routes>
        </Suspense>
    )
}
