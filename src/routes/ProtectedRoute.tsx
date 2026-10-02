import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@/store';
import { AppRoutes } from '@/enums/routes.enum';

export const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to={AppRoutes.LOGIN} replace />;
  }

  return <Outlet />;
};
