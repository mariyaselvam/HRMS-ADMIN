export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1';

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
  },
  DASHBOARD: {
    STATS: '/dashboard',
  },
  EMPLOYEES: {
    BASE: '/employees',
  },
  ATTENDANCE: {
    BASE: '/attendance',
  },
  LEAVE: {
    BASE: '/leave',
  },
  PAYROLL: {
    BASE: '/payroll',
  },
  SETTINGS: {
    BASE: '/settings',
  },
} as const;
