import { baseHttpService } from '@/services/baseHttp.service';
import { API_ENDPOINTS } from '@/constants/api.constants';
import type { ApiResponse } from '@/types/api.types';
import type { LoginFormData } from '../schemas/login.schema';
import type { LoginResponseData } from '../types/auth.types';

export const loginApi = (data: LoginFormData): Promise<ApiResponse<LoginResponseData>> => {
  return baseHttpService.post<ApiResponse<LoginResponseData>>(
    API_ENDPOINTS.AUTH.LOGIN,
    data
  );
};
