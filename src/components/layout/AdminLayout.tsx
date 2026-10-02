import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { shellClass, contentWrapperClass, mainClass } from './AdminLayout.styles';

export const AdminLayout: React.FC = () => {
  return (
    <div className={shellClass}>
      <Sidebar />

      <div className={contentWrapperClass}>
        <Header />

        <main className={mainClass}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
