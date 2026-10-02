import { baseHttpService } from '@/services/baseHttp.service';
import { API_ENDPOINTS } from '@/constants/api.constants';
import type { ApiResponse } from '@/types/api.types';
import type {
  Department,
  CreateDepartmentInput,
  WorkLocation,
  CreateWorkLocationInput,
  Holiday,
  CreateHolidayInput,
  Shift,
  CreateShiftInput,
} from '../types/organization.types';

// Departments API
export const getDepartmentsApi = (): Promise<ApiResponse<Department[]>> => {
  return baseHttpService.get<ApiResponse<Department[]>>(API_ENDPOINTS.ORGANIZATION.DEPARTMENTS);
};

export const createDepartmentApi = (data: CreateDepartmentInput): Promise<ApiResponse<Department>> => {
  return baseHttpService.post<ApiResponse<Department>>(API_ENDPOINTS.ORGANIZATION.DEPARTMENTS, data);
};

export const deleteDepartmentApi = (id: string): Promise<ApiResponse<void>> => {
  return baseHttpService.delete<ApiResponse<void>>(`${API_ENDPOINTS.ORGANIZATION.DEPARTMENTS}/${id}`);
};

// Locations API
export const getLocationsApi = (): Promise<ApiResponse<WorkLocation[]>> => {
  return baseHttpService.get<ApiResponse<WorkLocation[]>>(API_ENDPOINTS.ORGANIZATION.LOCATIONS);
};

export const createLocationApi = (data: CreateWorkLocationInput): Promise<ApiResponse<WorkLocation>> => {
  return baseHttpService.post<ApiResponse<WorkLocation>>(API_ENDPOINTS.ORGANIZATION.LOCATIONS, data);
};

// Holidays API
export const getHolidaysApi = (): Promise<ApiResponse<Holiday[]>> => {
  return baseHttpService.get<ApiResponse<Holiday[]>>(API_ENDPOINTS.ORGANIZATION.HOLIDAYS);
};

export const createHolidayApi = (data: CreateHolidayInput): Promise<ApiResponse<Holiday>> => {
  return baseHttpService.post<ApiResponse<Holiday>>(API_ENDPOINTS.ORGANIZATION.HOLIDAYS, data);
};

// Shifts API
export const getShiftsApi = (): Promise<ApiResponse<Shift[]>> => {
  return baseHttpService.get<ApiResponse<Shift[]>>(API_ENDPOINTS.ORGANIZATION.SHIFTS);
};

export const createShiftApi = (data: CreateShiftInput): Promise<ApiResponse<Shift>> => {
  return baseHttpService.post<ApiResponse<Shift>>(API_ENDPOINTS.ORGANIZATION.SHIFTS, data);
};
