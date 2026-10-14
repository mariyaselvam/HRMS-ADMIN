export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1';

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
  },
  DASHBOARD: {
    STATS: '/dashboard',
  },
  TENANTS: {
    BASE: '/companies',
    DETAIL: (id: string) => `/companies/${id}`,
    STATUS: (id: string) => `/companies/${id}/status`,
  },
  ORGANIZATION: {
    DEPARTMENTS: '/org/departments',
    LOCATIONS: '/org/locations',
    HOLIDAYS: '/holidays',
    SHIFTS: '/shifts',
  },
  SETTINGS: {
    BASE: '/settings',
  },
} as const;
