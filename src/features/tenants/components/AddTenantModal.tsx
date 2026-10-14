import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createTenantSchema, type CreateTenantFormData } from '../schemas/tenant.schemas';
import { X, Building2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  backdropClass,
  modalContainerClass,
  modalHeaderClass,
  modalTitleClass,
  closeButtonClass,
  formBodyClass,
  gridRowClass,
  modalFooterClass,
} from './AddTenantModal.styles';

interface AddTenantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CreateTenantFormData) => void;
  isLoading?: boolean;
}

export const AddTenantModal: React.FC<AddTenantModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  isLoading = false,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateTenantFormData>({
    resolver: zodResolver(createTenantSchema),
    defaultValues: {
      name: '',
      industryType: 'Software & IT',
      employeeLimit: 50,
      adminEmail: '',
      timezone: 'UTC',
    },
  });

  if (!isOpen) return null;

  const handleFormSubmit = (data: CreateTenantFormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <div className={backdropClass}>
      <div className={modalContainerClass}>
        <div className={modalHeaderClass}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 flex items-center justify-center">
              <Building2 className="w-4 h-4" />
            </div>
            <h3 className={modalTitleClass}>Provision Client Organization</h3>
          </div>
          <button onClick={onClose} className={closeButtonClass} aria-label="Close Modal">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className={formBodyClass}>
            <Input
              label="Organization Name"
              placeholder="e.g. Acme Corporation"
              error={errors.name?.message}
              {...register('name')}
            />

            <div className={gridRowClass}>
              <Input
                label="Industry Domain"
                placeholder="e.g. Healthcare, IT, Retail"
                error={errors.industryType?.message}
                {...register('industryType')}
              />

              <Input
                label="Employee Seat Limit"
                type="number"
                placeholder="50"
                error={errors.employeeLimit?.message}
                {...register('employeeLimit', { valueAsNumber: true })}
              />
            </div>

            <Input
              label="Initial Company Admin Email"
              type="email"
              placeholder="admin@acme.com"
              error={errors.adminEmail?.message}
              {...register('adminEmail')}
            />
          </div>

          <div className={modalFooterClass}>
            <Button type="button" variant="outline" size="sm" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" size="sm" isLoading={isLoading}>
              Provision Tenant
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
