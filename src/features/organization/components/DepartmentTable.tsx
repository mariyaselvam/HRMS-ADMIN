import React from 'react';
import type { Department } from '../types/organization.types';
import { Trash2, Building2, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  tableContainerClass,
  tableClass,
  theadClass,
  thClass,
  trClass,
  tdClass,
  badgeClass,
  emptyStateClass,
} from './DepartmentTable.styles';

interface DepartmentTableProps {
  departments?: Department[];
  onDelete?: (id: string) => void;
  isDeleting?: boolean;
}

export const DepartmentTable: React.FC<DepartmentTableProps> = ({
  departments = [],
  onDelete,
}) => {
  if (departments.length === 0) {
    return (
      <div className={tableContainerClass}>
        <div className={emptyStateClass}>
          <Building2 className="w-8 h-8 text-slate-400 mx-auto mb-2" />
          <p>No departments found. Create your first department to get started.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={tableContainerClass}>
      <table className={tableClass}>
        <thead className={theadClass}>
          <tr>
            <th className={thClass}>Department Name</th>
            <th className={thClass}>Location</th>
            <th className={thClass}>Employees</th>
            <th className={thClass}>Teams</th>
            <th className={`${thClass} text-right`}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept) => (
            <tr key={dept.id} className={trClass}>
              <td className={tdClass}>
                <div className="flex items-center gap-2.5 font-semibold text-slate-900 dark:text-white">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Building2 className="w-4 h-4" />
                  </div>
                  {dept.name}
                </div>
              </td>
              <td className={tdClass}>
                <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {dept.workLocation?.name || 'Headquarters'}
                </div>
              </td>
              <td className={tdClass}>
                <span className={badgeClass}>
                  <Users className="w-3 h-3 mr-1" />
                  {dept._count?.employees ?? 0} Staff
                </span>
              </td>
              <td className={tdClass}>{dept._count?.teams ?? 0} Teams</td>
              <td className={`${tdClass} text-right`}>
                {onDelete && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onDelete(dept.id)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/40"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
