import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppRoutes } from '@/enums/routes.enum';
import { LoginPage } from '@/features/auth/pages/LoginPage';
import { DashboardPage } from '@/features/dashboard/pages/DashboardPage';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
      
      <Route element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route path={AppRoutes.DASHBOARD} element={<DashboardPage />} />
        </Route>
      </Route>

      <Route path={AppRoutes.NOT_FOUND} element={<Navigate to={AppRoutes.DASHBOARD} replace />} />
    </Routes>
  );
};
