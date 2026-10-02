export interface User {
  id: string;
  email: string;
  role: string;
  companyId: string;
}

export interface LoginResponseData {
  token: string;
  user: User;
}

export interface RegisterCompanyResponseData {
  companyId: string;
  adminId: string;
  email: string;
}
