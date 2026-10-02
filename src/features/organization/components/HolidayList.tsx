import React from 'react';
import type { Holiday } from '../types/organization.types';
import { Calendar } from 'lucide-react';
import {
  listContainerClass,
  listHeaderClass,
  listTitleClass,
  itemClass,
  itemLeftClass,
  dateBadgeClass,
  holidayNameClass,
  holidayMetaClass,
  optionalBadgeClass,
  mandatoryBadgeClass,
  emptyStateClass,
} from './HolidayList.styles';

interface HolidayListProps {
  holidays?: Holiday[];
}

export const HolidayList: React.FC<HolidayListProps> = ({ holidays = [] }) => {
  if (holidays.length === 0) {
    return (
      <div className={listContainerClass}>
        <div className={emptyStateClass}>
          <Calendar className="w-8 h-8 text-slate-400 mx-auto mb-2" />
          <p>No holidays added for the current calendar year.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={listContainerClass}>
      <div className={listHeaderClass}>
        <h3 className={listTitleClass}>
          <Calendar className="w-4 h-4 text-blue-600" />
          Company Holiday Calendar
        </h3>
        <span className="text-xs text-slate-500 font-medium">{holidays.length} Total Holidays</span>
      </div>

      <div className="space-y-2.5">
        {holidays.map((h) => {
          const holidayDate = new Date(h.date);
          const monthStr = holidayDate.toLocaleString('default', { month: 'short' }).toUpperCase();
          const dayStr = holidayDate.getDate();

          return (
            <div key={h.id} className={itemClass}>
              <div className={itemLeftClass}>
                <div className={dateBadgeClass}>
                  <span className="text-[10px] uppercase leading-none text-blue-600 dark:text-blue-400">{monthStr}</span>
                  <span className="text-base leading-tight">{dayStr}</span>
                </div>
                <div>
                  <h4 className={holidayNameClass}>{h.name}</h4>
                  <p className={holidayMetaClass}>
                    {h.workLocation?.name ? `Applies to: ${h.workLocation.name}` : 'All Work Locations'}
                  </p>
                </div>
              </div>

              <div>
                {h.isOptional ? (
                  <span className={optionalBadgeClass}>Optional / Floating</span>
                ) : (
                  <span className={mandatoryBadgeClass}>Mandatory Holiday</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
