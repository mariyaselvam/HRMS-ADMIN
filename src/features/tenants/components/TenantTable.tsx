import React from 'react';
import type { TenantCompany } from '../types/tenant.types';
import { Building2, ExternalLink, ShieldAlert, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '@/enums/routes.enum';
import {
  tableContainerClass,
  tableClass,
  theadClass,
  thClass,
  trClass,
  tdClass,
  companyNameClass,
  companyBadgeClass,
  activeStatusClass,
  suspendedStatusClass,
  progressBarBgClass,
  progressBarFillClass,
  emptyStateClass,
} from './TenantTable.styles';

interface TenantTableProps {
  tenants?: TenantCompany[];
  onToggleStatus?: (tenant: TenantCompany) => void;
}

export const TenantTable: React.FC<TenantTableProps> = ({ tenants = [], onToggleStatus }) => {
  const navigate = useNavigate();

  if (tenants.length === 0) {
    return (
      <div className={tableContainerClass}>
        <div className={emptyStateClass}>
          <Building2 className="w-10 h-10 text-slate-400 mx-auto" />
          <p className="text-base font-semibold text-slate-800 dark:text-slate-200">No client organizations found</p>
          <p className="text-xs text-slate-500">Provision a new organization to start managing clients.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={tableContainerClass}>
      <table className={tableClass}>
        <thead className={theadClass}>
          <tr>
            <th className={thClass}>Organization</th>
            <th className={thClass}>Industry</th>
            <th className={thClass}>Seat Usage</th>
            <th className={thClass}>Status</th>
            <th className={thClass}>Departments</th>
            <th className={`${thClass} text-right`}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tenants.map((company) => {
            const employeeCount = company._count?.employees ?? 0;
            const limit = company.employeeLimit || 1;
            const usagePercent = Math.min(Math.round((employeeCount / limit) * 100), 100);

            return (
              <tr key={company.id} className={trClass}>
                <td className={tdClass}>
                  <div className={companyNameClass}>
                    <div className={companyBadgeClass}>
                      {company.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p>{company.name}</p>
                      <p className="text-xs text-slate-500 font-normal">ID: {company.id.slice(0, 8)}...</p>
                    </div>
                  </div>
                </td>
                <td className={tdClass}>
                  <span className="capitalize text-slate-600 dark:text-slate-300 font-medium">
                    {company.industryType || 'General'}
                  </span>
                </td>
                <td className={tdClass}>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span>{employeeCount} / {limit} Seats</span>
                      <span className="text-slate-400">{usagePercent}%</span>
                    </div>
                    <div className={progressBarBgClass}>
                      <div
                        className={progressBarFillClass(usagePercent)}
                        style={{ width: `${usagePercent}%` }}
                      />
                    </div>
                  </div>
                </td>
                <td className={tdClass}>
                  {company.status === 'active' ? (
                    <span className={activeStatusClass}>
                      <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                      Active
                    </span>
                  ) : (
                    <span className={suspendedStatusClass}>
                      <ShieldAlert className="w-3.5 h-3.5 mr-1 text-rose-600" />
                      Suspended
                    </span>
                  )}
                </td>
                <td className={tdClass}>{company._count?.departments ?? 0} Depts</td>
                <td className={`${tdClass} text-right`}>
                  <div className="flex items-center justify-end gap-2">
                    {onToggleStatus && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onToggleStatus(company)}
                        className={company.status === 'active' ? 'text-amber-600' : 'text-emerald-600'}
                      >
                        {company.status === 'active' ? 'Suspend' : 'Activate'}
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigate(AppRoutes.TENANT_DETAIL.replace(':id', company.id))}
                      className="gap-1.5"
                    >
                      <span>Manage</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
