import { baseHttpService } from '@/services/baseHttp.service';
import { API_ENDPOINTS } from '@/constants/api.constants';
import type { ApiResponse } from '@/types/api.types';
import type {
  TenantCompany,
  CreateTenantInput,
  UpdateTenantInput,
  TenantPlatformStats,
} from '../types/tenant.types';

export const getTenantsApi = (): Promise<ApiResponse<TenantCompany[]>> => {
  return baseHttpService.get<ApiResponse<TenantCompany[]>>(API_ENDPOINTS.TENANTS.BASE);
};

export const getTenantByIdApi = (id: string): Promise<ApiResponse<TenantCompany>> => {
  return baseHttpService.get<ApiResponse<TenantCompany>>(API_ENDPOINTS.TENANTS.DETAIL(id));
};

export const createTenantApi = (data: CreateTenantInput): Promise<ApiResponse<TenantCompany>> => {
  return baseHttpService.post<ApiResponse<TenantCompany>>(API_ENDPOINTS.TENANTS.BASE, data);
};

export const updateTenantApi = (id: string, data: UpdateTenantInput): Promise<ApiResponse<TenantCompany>> => {
  return baseHttpService.patch<ApiResponse<TenantCompany>>(API_ENDPOINTS.TENANTS.DETAIL(id), data);
};

export const getTenantPlatformStatsApi = (): Promise<ApiResponse<TenantPlatformStats>> => {
  return baseHttpService.get<ApiResponse<TenantPlatformStats>>(`${API_ENDPOINTS.TENANTS.BASE}/stats`);
};
