import { useQuery } from "@tanstack/react-query";
import { fetchDashboardSummaryApi } from "../api/dashboard.api";

export const QUERY_KEY_DASHBOARD_SUMMARY = "dashboard_summary";

export const useDashboardSummary = () => {
  return useQuery({
    queryKey: [QUERY_KEY_DASHBOARD_SUMMARY],
    queryFn: fetchDashboardSummaryApi,
    select: (response) => response.data,
  });
};
