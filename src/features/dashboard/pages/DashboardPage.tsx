import React from "react";
import { useDashboardSummary } from "../hooks/useDashboard";
import { StatCard } from "../components/StatCard";
import {
  AttendanceWidget,
  ApprovalsWidget,
} from "../components/DashboardWidgets";
import { Users, UserCheck, Clock, CreditCard, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  pageContainerClass,
  pageTitleRowClass,
  pageTitleClass,
  pageSubtitleClass,
  statsGridClass,
  widgetsGridClass,
  loadingContainerClass,
  spinnerClass,
  loadingTextClass,
  errorContainerClass,
  errorIconClass,
  errorTitleClass,
  errorMessageClass,
} from "./DashboardPage.styles";

export const DashboardPage: React.FC = () => {
  const {
    data: summary,
    isLoading,
    isError,
    error,
    refetch,
  } = useDashboardSummary();

  if (isLoading) {
    return (
      <div className={loadingContainerClass}>
        <div className={spinnerClass} />
        <p className={loadingTextClass}>Loading dashboard metrics...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={errorContainerClass}>
        <div className={errorIconClass}>
          <RefreshCw className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h3 className={errorTitleClass}>Failed to Load Dashboard</h3>
          <p className={errorMessageClass}>
            {(error as any)?.response?.data?.message ||
              (error as Error).message ||
              "Unable to fetch data from backend"}
          </p>
        </div>
        <Button
          variant="primary"
          size="sm"
          onClick={() => refetch()}
          className="gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          Retry Request
        </Button>
      </div>
    );
  }

  const { employees, attendance, approvalsPending, latestPayroll } =
    summary || {};

  return (
    <div className={pageContainerClass}>
      <div className={pageTitleRowClass}>
        <div>
          <h1 className={pageTitleClass}>Executive Dashboard</h1>
          <p className={pageSubtitleClass}>
            Real-time overview of workforce, attendance, and payroll metrics
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => refetch()}
          className="gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          Refresh
        </Button>
      </div>

      <div className={statsGridClass}>
        <StatCard
          title="Total Employees"
          value={employees?.total ?? 0}
          subtitle={`${employees?.active ?? 0} Active Staff`}
          icon={Users}
          colorScheme="blue"
        />
        <StatCard
          title="Present Today"
          value={attendance?.presentToday?.totalPresent ?? 0}
          subtitle={`${attendance?.presentToday?.onTime ?? 0} On Time`}
          icon={UserCheck}
          colorScheme="emerald"
        />
        <StatCard
          title="Pending Approvals"
          value={approvalsPending?.leaveRequests ?? 0}
          subtitle="Leave requests waiting"
          icon={Clock}
          colorScheme="amber"
        />
        <StatCard
          title="Processed Payroll"
          value={
            latestPayroll?.totalPayrollAmount
              ? `$${latestPayroll.totalPayrollAmount.toLocaleString()}`
              : "$0"
          }
          subtitle={
            latestPayroll?.month
              ? `Month: ${latestPayroll.month}`
              : "No active cycle"
          }
          icon={CreditCard}
          colorScheme="purple"
        />
      </div>

      <div className={widgetsGridClass}>
        <AttendanceWidget attendance={attendance?.presentToday} />
        <ApprovalsWidget approvals={approvalsPending} />
      </div>
    </div>
  );
};
