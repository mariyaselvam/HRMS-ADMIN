import { apiClient } from '@/services/api/apiClient';
import { API_ENDPOINTS } from '@/constants/api.constants';
import type { ApiResponse } from '@/types/api.types';
import type { LoginFormData } from '../schemas/login.schema';
import type { LoginResponseData } from '../types/auth.types';

export const loginApi = async (data: LoginFormData): Promise<ApiResponse<LoginResponseData>> => {
  const response = await apiClient.post<ApiResponse<LoginResponseData>>(
    API_ENDPOINTS.AUTH.LOGIN,
    data
  );
  return response.data;
};
