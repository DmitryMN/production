import { getAuthUserState } from 'entities/User';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { AppRoutes } from 'shared/config/routeConfig';

export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const auth = useSelector(getAuthUserState);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={AppRoutes.MAIN} state={{ from: location }} replace />;
  }

  return children;
};