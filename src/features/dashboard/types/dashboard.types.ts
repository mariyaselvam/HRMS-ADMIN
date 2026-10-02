export interface EmployeeStats {
  total: number;
  active: number;
  onLeave: number;
  newHiresThisMonth?: number;
}

export interface AttendanceToday {
  totalPresent: number;
  onTime: number;
  late: number;
  absent: number;
}

export interface AttendanceOverviewItem {
  date: string;
  present: number;
  absent: number;
  late: number;
}

export interface PendingApprovals {
  leaveRequests: number;
  expenseClaims?: number;
  attendanceCorrections?: number;
}

export interface PayrollSummary {
  totalPayrollAmount?: number;
  processedCount?: number;
  pendingCount?: number;
  month?: string;
}

export interface DashboardSummaryData {
  employees: EmployeeStats;
  attendance: {
    presentToday: AttendanceToday;
    overview: AttendanceOverviewItem[];
  };
  approvalsPending: PendingApprovals;
  latestPayroll: PayrollSummary;
}
