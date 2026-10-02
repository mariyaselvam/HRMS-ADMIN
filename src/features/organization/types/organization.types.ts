export interface WorkLocation {
  id: string;
  name: string;
  address?: string;
  companyId: string;
  latitude?: number;
  longitude?: number;
  createdAt: string;
  _count?: {
    employees: number;
  };
}

export interface CreateWorkLocationInput {
  name: string;
  address?: string;
  latitude?: number;
  longitude?: number;
}

export interface Department {
  id: string;
  name: string;
  companyId: string;
  managerId?: string | null;
  workLocationId?: string | null;
  workLocation?: WorkLocation | null;
  createdAt: string;
  updatedAt: string;
  _count?: {
    employees: number;
    teams: number;
  };
}

export interface CreateDepartmentInput {
  name: string;
  managerId?: string;
  workLocationId?: string | null;
}

export interface Holiday {
  id: string;
  companyId: string;
  workLocationId?: string | null;
  workLocation?: {
    id: string;
    name: string;
  };
  date: string;
  name: string;
  isOptional: boolean;
  createdAt: string;
}

export interface CreateHolidayInput {
  name: string;
  date: string;
  isOptional?: boolean;
  workLocationId?: string | null;
}

export interface Shift {
  id: string;
  companyId: string;
  name: string;
  startTime: string;
  endTime: string;
  breakDurationMinutes?: number;
  createdAt: string;
}

export interface CreateShiftInput {
  name: string;
  startTime: string;
  endTime: string;
  breakDurationMinutes?: number;
}
