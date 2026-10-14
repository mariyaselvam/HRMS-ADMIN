import { z } from 'zod';

export const createTenantSchema = z.object({
  name: z.string().min(2, 'Company name must be at least 2 characters'),
  industryType: z.string().min(2, 'Industry type is required'),
  employeeLimit: z.number().min(1, 'Employee limit must be at least 1 seat'),
  adminEmail: z.string().email('Valid Company Admin email is required'),
  timezone: z.string(),
});

export type CreateTenantFormData = z.infer<typeof createTenantSchema>;

export const updateTenantSchema = z.object({
  name: z.string().min(2).optional(),
  industryType: z.string().optional(),
  employeeLimit: z.number().min(1).optional(),
  status: z.enum(['active', 'suspended', 'pending']).optional(),
});

export type UpdateTenantFormData = z.infer<typeof updateTenantSchema>;
