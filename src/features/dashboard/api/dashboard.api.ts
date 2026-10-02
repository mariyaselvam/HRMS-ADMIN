import { baseHttpService } from "@/services/baseHttp.service";
import { API_ENDPOINTS } from "@/constants/api.constants";
import type { ApiResponse } from "@/types/api.types";
import type { DashboardSummaryData } from "../types/dashboard.types";

export const fetchDashboardSummaryApi = (): Promise<
  ApiResponse<DashboardSummaryData>
> => {
  return baseHttpService.get<ApiResponse<DashboardSummaryData>>(
    `${API_ENDPOINTS.DASHBOARD.STATS}/summary`,
  );
};
