import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getDepartmentsApi,
  createDepartmentApi,
  deleteDepartmentApi,
  getLocationsApi,
  createLocationApi,
  getHolidaysApi,
  createHolidayApi,
  getShiftsApi,
  createShiftApi,
} from '../api/organization.api';
import type {
  CreateDepartmentInput,
  CreateWorkLocationInput,
  CreateHolidayInput,
  CreateShiftInput,
} from '../types/organization.types';

export const ORG_QUERY_KEYS = {
  DEPARTMENTS: ['organization', 'departments'],
  LOCATIONS: ['organization', 'locations'],
  HOLIDAYS: ['organization', 'holidays'],
  SHIFTS: ['organization', 'shifts'],
} as const;


export const useDepartments = () => {
  return useQuery({
    queryKey: ORG_QUERY_KEYS.DEPARTMENTS,
    queryFn: async () => {
      const res = await getDepartmentsApi();
      return res.data;
    },
  });
};

export const useCreateDepartment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateDepartmentInput) => createDepartmentApi(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ORG_QUERY_KEYS.DEPARTMENTS });
    },
  });
};

export const useDeleteDepartment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteDepartmentApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ORG_QUERY_KEYS.DEPARTMENTS });
    },
  });
};

// Locations Hooks
export const useLocations = () => {
  return useQuery({
    queryKey: ORG_QUERY_KEYS.LOCATIONS,
    queryFn: async () => {
      const res = await getLocationsApi();
      return res.data;
    },
  });
};

export const useCreateLocation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateWorkLocationInput) => createLocationApi(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ORG_QUERY_KEYS.LOCATIONS });
    },
  });
};

// Holidays Hooks
export const useHolidays = () => {
  return useQuery({
    queryKey: ORG_QUERY_KEYS.HOLIDAYS,
    queryFn: async () => {
      const res = await getHolidaysApi();
      return res.data;
    },
  });
};

export const useCreateHoliday = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateHolidayInput) => createHolidayApi(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ORG_QUERY_KEYS.HOLIDAYS });
    },
  });
};

// Shifts Hooks
export const useShifts = () => {
  return useQuery({
    queryKey: ORG_QUERY_KEYS.SHIFTS,
    queryFn: async () => {
      const res = await getShiftsApi();
      return res.data;
    },
  });
};

export const useCreateShift = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateShiftInput) => createShiftApi(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ORG_QUERY_KEYS.SHIFTS });
    },
  });
};
