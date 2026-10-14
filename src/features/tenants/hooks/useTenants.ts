import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getTenantsApi,
  getTenantByIdApi,
  createTenantApi,
  updateTenantApi,
  getTenantPlatformStatsApi,
} from '../api/tenant.api';
import type { CreateTenantInput, UpdateTenantInput } from '../types/tenant.types';

export const TENANT_QUERY_KEYS = {
  ALL: ['tenants'],
  DETAIL: (id: string) => ['tenants', id],
  STATS: ['tenants', 'stats'],
} as const;

export const useTenants = () => {
  return useQuery({
    queryKey: TENANT_QUERY_KEYS.ALL,
    queryFn: async () => {
      const res = await getTenantsApi();
      return res.data;
    },
  });
};

export const useTenantById = (id?: string) => {
  return useQuery({
    queryKey: TENANT_QUERY_KEYS.DETAIL(id || ''),
    queryFn: async () => {
      if (!id) return null;
      const res = await getTenantByIdApi(id);
      return res.data;
    },
    enabled: !!id,
  });
};

export const useTenantPlatformStats = () => {
  return useQuery({
    queryKey: TENANT_QUERY_KEYS.STATS,
    queryFn: async () => {
      const res = await getTenantPlatformStatsApi();
      return res.data;
    },
  });
};

export const useCreateTenant = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateTenantInput) => createTenantApi(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TENANT_QUERY_KEYS.ALL });
    },
  });
};

export const useUpdateTenant = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateTenantInput }) => updateTenantApi(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: TENANT_QUERY_KEYS.ALL });
      queryClient.invalidateQueries({ queryKey: TENANT_QUERY_KEYS.DETAIL(variables.id) });
    },
  });
};
