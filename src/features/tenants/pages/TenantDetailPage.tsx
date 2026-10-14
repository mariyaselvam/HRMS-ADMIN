import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTenantById, useUpdateTenant } from '../hooks/useTenants';
import { AppRoutes } from '@/enums/routes.enum';
import { ArrowLeft, Building2, Users, MapPin, ShieldCheck, ShieldAlert, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StatCard } from '@/features/dashboard/components/StatCard';
import {
  pageContainerClass,
  backButtonClass,
  headerCardClass,
  companyTitleRowClass,
  companyLogoClass,
  titleClass,
  subtitleClass,
  statsGridClass,
  infoCardClass,
} from './TenantDetailPage.styles';

export const TenantDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: tenant, isLoading } = useTenantById(id);
  const updateTenantMutation = useUpdateTenant();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-medium text-slate-500">Loading organization details...</p>
      </div>
    );
  }

  if (!tenant) {
    return (
      <div className="text-center py-16 space-y-4">
        <Building2 className="w-12 h-12 text-slate-400 mx-auto" />
        <h3 className="text-lg font-bold text-slate-800">Organization Not Found</h3>
        <Button variant="outline" size="sm" onClick={() => navigate(AppRoutes.TENANTS)}>
          Back to Organizations
        </Button>
      </div>
    );
  }

  const handleToggleStatus = () => {
    const newStatus = tenant.status === 'active' ? 'suspended' : 'active';
    if (window.confirm(`Change ${tenant.name} status to ${newStatus}?`)) {
      updateTenantMutation.mutate({
        id: tenant.id,
        data: { status: newStatus },
      });
    }
  };

  return (
    <div className={pageContainerClass}>
      <button onClick={() => navigate(AppRoutes.TENANTS)} className={backButtonClass}>
        <ArrowLeft className="w-4 h-4" />
        Back to All Client Organizations
      </button>

      {/* Header Card */}
      <div className={headerCardClass}>
        <div className={companyTitleRowClass}>
          <div className={companyLogoClass}>
            {tenant.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className={titleClass}>{tenant.name}</h1>
            <p className={subtitleClass}>
              <span>Industry: {tenant.industryType || 'N/A'}</span>
              <span>•</span>
              <span>Created: {new Date(tenant.createdAt).toLocaleDateString()}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant={tenant.status === 'active' ? 'outline' : 'primary'}
            size="sm"
            onClick={handleToggleStatus}
            className={tenant.status === 'active' ? 'text-rose-600 border-rose-200' : 'bg-emerald-600 hover:bg-emerald-700'}
          >
            {tenant.status === 'active' ? (
              <>
                <ShieldAlert className="w-4 h-4 mr-1.5" />
                Suspend Tenant
              </>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4 mr-1.5" />
                Activate Tenant
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Stats Overview Grid */}
      <div className={statsGridClass}>
        <StatCard
          title="Total Staff"
          value={tenant._count?.employees ?? 0}
          subtitle={`Seat Limit: ${tenant.employeeLimit}`}
          icon={Users}
          colorScheme="blue"
        />
        <StatCard
          title="Departments"
          value={tenant._count?.departments ?? 0}
          subtitle="Structural units"
          icon={Building2}
          colorScheme="purple"
        />
        <StatCard
          title="Work Locations"
          value={tenant._count?.workLocations ?? 0}
          subtitle="Branches & Offices"
          icon={MapPin}
          colorScheme="emerald"
        />
        <StatCard
          title="Tenant Status"
          value={tenant.status.toUpperCase()}
          subtitle={`Timezone: ${tenant.timezone}`}
          icon={Calendar}
          colorScheme={tenant.status === 'active' ? 'emerald' : 'amber'}
        />
      </div>

      {/* Additional Details */}
      <div className={infoCardClass}>
        <h3 className="text-base font-bold text-slate-900 dark:text-white">Organization Configuration</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-3 bg-slate-50 dark:bg-slate-700/40 rounded-xl">
            <span className="text-slate-500 font-medium">Company ID:</span>
            <p className="font-bold text-slate-800 dark:text-slate-200 mt-0.5">{tenant.id}</p>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-700/40 rounded-xl">
            <span className="text-slate-500 font-medium">Allocated Seats:</span>
            <p className="font-bold text-slate-800 dark:text-slate-200 mt-0.5">{tenant.employeeLimit} Employee Seats</p>
          </div>
        </div>
      </div>
    </div>
  );
};
