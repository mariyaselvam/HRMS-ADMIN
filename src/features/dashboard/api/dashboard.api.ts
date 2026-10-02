import { apiClient } from "@/services/api/apiClient";
import { API_ENDPOINTS } from "@/constants/api.constants";
import type { ApiResponse } from "@/types/api.types";
import type { DashboardSummaryData } from "../types/dashboard.types";

export const fetchDashboardSummaryApi = async (): Promise<ApiResponse<DashboardSummaryData>> => {
  const response = await apiClient.get<ApiResponse<DashboardSummaryData>>(
    `${API_ENDPOINTS.DASHBOARD.STATS}/summary`,
  );
  return response.data;
};
