import React, { useState } from 'react';
import { useTenants, useCreateTenant, useUpdateTenant } from '../hooks/useTenants';
import { TenantTable } from '../components/TenantTable';
import { AddTenantModal } from '../components/AddTenantModal';
import { Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { TenantCompany } from '../types/tenant.types';
import type { CreateTenantFormData } from '../schemas/tenant.schemas';
import {
  pageContainerClass,
  pageHeaderClass,
  titleClass,
  subtitleClass,
  filterBarClass,
  filterButtonsClass,
  filterButtonClass,
  searchInputWrapperClass,
  searchIconClass,
  searchInputClass,
  loadingContainerClass,
  spinnerClass,
} from './TenantsPage.styles';

export const TenantsPage: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'suspended'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: tenants, isLoading } = useTenants();
  const createTenantMutation = useCreateTenant();
  const updateTenantMutation = useUpdateTenant();

  const handleCreateTenant = (data: CreateTenantFormData) => {
    createTenantMutation.mutate(data, {
      onSuccess: () => setIsModalOpen(false),
    });
  };

  const handleToggleStatus = (company: TenantCompany) => {
    const newStatus = company.status === 'active' ? 'suspended' : 'active';
    if (window.confirm(`Are you sure you want to change status of ${company.name} to ${newStatus}?`)) {
      updateTenantMutation.mutate({
        id: company.id,
        data: { status: newStatus },
      });
    }
  };

  const filteredTenants = (tenants || []).filter((company) => {
    const matchesStatus = filterStatus === 'all' || company.status === filterStatus;
    const matchesSearch =
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.industryType?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className={pageContainerClass}>
      <div className={pageHeaderClass}>
        <div>
          <h1 className={titleClass}>Client Organizations (Tenants)</h1>
          <p className={subtitleClass}>
            Manage all SaaS client companies, seat allocations, and activation statuses
          </p>
        </div>

        <Button onClick={() => setIsModalOpen(true)} className="gap-2">
          <Plus className="w-4 h-4" />
          Provision Organization
        </Button>
      </div>

      {/* Filter and Search Bar */}
      <div className={filterBarClass}>
        <div className={filterButtonsClass}>
          <button
            onClick={() => setFilterStatus('all')}
            className={filterButtonClass(filterStatus === 'all')}
          >
            All Organizations ({tenants?.length ?? 0})
          </button>
          <button
            onClick={() => setFilterStatus('active')}
            className={filterButtonClass(filterStatus === 'active')}
          >
            Active Tenants
          </button>
          <button
            onClick={() => setFilterStatus('suspended')}
            className={filterButtonClass(filterStatus === 'suspended')}
          >
            Suspended Tenants
          </button>
        </div>

        <div className={searchInputWrapperClass}>
          <Search className={searchIconClass} />
          <input
            type="text"
            placeholder="Search organizations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={searchInputClass}
          />
        </div>
      </div>

      {/* Table Content */}
      {isLoading ? (
        <div className={loadingContainerClass}>
          <div className={spinnerClass} />
          <p className="text-sm font-medium text-slate-500">Loading client organizations...</p>
        </div>
      ) : (
        <TenantTable tenants={filteredTenants} onToggleStatus={handleToggleStatus} />
      )}

      {/* Add Tenant Provisioning Modal */}
      <AddTenantModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateTenant}
        isLoading={createTenantMutation.isPending}
      />
    </div>
  );
};
