import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProviders } from '@/providers/AppProviders';
import { AppRouter } from '@/routes/AppRoutes';

export const App: React.FC = () => {
  return (
    <AppProviders>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppProviders>
  );
};

export default App;
