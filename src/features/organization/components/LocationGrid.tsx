import React from 'react';
import type { WorkLocation } from '../types/organization.types';
import { MapPin, Users, Globe } from 'lucide-react';
import {
  gridContainerClass,
  cardClass,
  cardHeaderClass,
  iconBadgeClass,
  titleClass,
  addressClass,
  cardFooterClass,
  emptyStateClass,
} from './LocationGrid.styles';

interface LocationGridProps {
  locations?: WorkLocation[];
}

export const LocationGrid: React.FC<LocationGridProps> = ({ locations = [] }) => {
  if (locations.length === 0) {
    return (
      <div className={gridContainerClass}>
        <div className={emptyStateClass}>
          <MapPin className="w-8 h-8 text-slate-400 mx-auto mb-2" />
          <p>No work locations configured yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={gridContainerClass}>
      {locations.map((loc) => (
        <div key={loc.id} className={cardClass}>
          <div className={cardHeaderClass}>
            <div>
              <h3 className={titleClass}>{loc.name}</h3>
              <p className={addressClass}>
                <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                {loc.address || 'No physical address provided'}
              </p>
            </div>
            <div className={iconBadgeClass}>
              <Globe className="w-5 h-5" />
            </div>
          </div>

          <div className={cardFooterClass}>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-emerald-600" />
              {loc._count?.employees ?? 0} Assigned Employees
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
