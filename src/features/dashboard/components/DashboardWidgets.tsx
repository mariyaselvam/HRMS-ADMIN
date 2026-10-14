import React from "react";
import type {
  AttendanceToday,
  PendingApprovals,
} from "../types/dashboard.types";
import { Clock, CheckCircle2, AlertCircle, CalendarDays } from "lucide-react";
import {
  widgetContainerClass,
  widgetHeaderClass,
  widgetTitleClass,
  widgetSubtitleClass,
  attendanceGridClass,
  onTimeCellClass,
  onTimeValueClass,
  onTimeLabelClass,
  lateCellClass,
  lateValueClass,
  lateLabelClass,
  absentCellClass,
  absentValueClass,
  absentLabelClass,
  approvalListClass,
  approvalRowClass,
  approvalRowInnerClass,
  leaveIconBadgeClass,
  correctionIconBadgeClass,
  approvalRowLabelClass,
  leaveBadgeClass,
  correctionBadgeClass,
} from "./DashboardWidgets.styles";

interface AttendanceWidgetProps {
  attendance?: AttendanceToday;
}

export const AttendanceWidget: React.FC<AttendanceWidgetProps> = ({
  attendance,
}) => {
  return (
    <div className={widgetContainerClass}>
      <div className={widgetHeaderClass}>
        <h3 className={widgetTitleClass}>
          <Clock className="w-4 h-4 text-blue-600" />
          Today's Attendance Breakdown
        </h3>
        <span className={widgetSubtitleClass}>Real-time</span>
      </div>

      <div className={attendanceGridClass}>
        <div className={onTimeCellClass}>
          <p className={onTimeValueClass}>{attendance?.onTime ?? 0}</p>
          <p className={onTimeLabelClass}>On Time</p>
        </div>
        <div className={lateCellClass}>
          <p className={lateValueClass}>{attendance?.late ?? 0}</p>
          <p className={lateLabelClass}>Late</p>
        </div>
        <div className={absentCellClass}>
          <p className={absentValueClass}>{attendance?.absent ?? 0}</p>
          <p className={absentLabelClass}>Absent</p>
        </div>
      </div>
    </div>
  );
};

interface ApprovalsWidgetProps {
  approvals?: PendingApprovals;
}

export const ApprovalsWidget: React.FC<ApprovalsWidgetProps> = ({
  approvals,
}) => {
  return (
    <div className={widgetContainerClass}>
      <div className={widgetHeaderClass}>
        <h3 className={widgetTitleClass}>
          <AlertCircle className="w-4 h-4 text-amber-500" />
          Action Required
        </h3>
        <span className={widgetSubtitleClass}>Pending Items</span>
      </div>

      <div className={approvalListClass}>
        <div className={approvalRowClass}>
          <div className={approvalRowInnerClass}>
            <div className={leaveIconBadgeClass}>
              <CalendarDays className="w-4 h-4" />
            </div>
            <span className={approvalRowLabelClass}>Leave Requests</span>
          </div>
          <span className={leaveBadgeClass}>
            {approvals?.leaveRequests ?? 0} Pending
          </span>
        </div>

        <div className={approvalRowClass}>
          <div className={approvalRowInnerClass}>
            <div className={correctionIconBadgeClass}>
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <span className={approvalRowLabelClass}>
              Attendance Corrections
            </span>
          </div>
          <span className={correctionBadgeClass}>
            {approvals?.attendanceCorrections ?? 0} Pending
          </span>
        </div>
      </div>
    </div>
  );
};
