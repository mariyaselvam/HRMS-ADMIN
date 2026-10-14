export type CompanyStatus = 'active' | 'suspended' | 'pending';

export interface TenantCompany {
  id: string;
  name: string;
  industryType: string;
  employeeLimit: number;
  timezone: string;
  status: CompanyStatus;
  createdAt: string;
  updatedAt: string;
  _count?: {
    employees: number;
    departments: number;
    workLocations: number;
    users: number;
  };
}

export interface CreateTenantInput {
  name: string;
  industryType: string;
  employeeLimit: number;
  timezone?: string;
  adminEmail: string;
}

export interface UpdateTenantInput {
  name?: string;
  industryType?: string;
  employeeLimit?: number;
  status?: CompanyStatus;
}

export interface TenantPlatformStats {
  totalCompanies: number;
  activeCompanies: number;
  suspendedCompanies: number;
  totalEmployeesAcrossTenants: number;
}
