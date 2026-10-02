import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  departmentSchema,
  type DepartmentFormData,
} from "../schemas/organization.schemas";
import type { WorkLocation } from "../types/organization.types";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  backdropClass,
  modalContainerClass,
  modalHeaderClass,
  modalTitleClass,
  closeButtonClass,
  formBodyClass,
  modalFooterClass,
} from "./AddDepartmentModal.styles";

interface AddDepartmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: DepartmentFormData) => void;
  isLoading?: boolean;
  locations?: WorkLocation[];
}

export const AddDepartmentModal: React.FC<AddDepartmentModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  isLoading = false,
  locations = [],
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DepartmentFormData>({
    resolver: zodResolver(departmentSchema),
  });

  if (!isOpen) return null;

  const handleFormSubmit = (data: DepartmentFormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <div className={backdropClass}>
      <div className={modalContainerClass}>
        <div className={modalHeaderClass}>
          <h3 className={modalTitleClass}>Add New Department</h3>
          <button
            onClick={onClose}
            className={closeButtonClass}
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className={formBodyClass}>
            <Input
              label="Department Name"
              placeholder="e.g. Engineering, Human Resources"
              error={errors.name?.message}
              {...register("name")}
            />

            <div className="space-y-1">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Work Location (Optional)
              </label>
              <select
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                {...register("workLocationId")}
              >
                <option value="">Select Work Location</option>
                {locations.map((loc) => (
                  <option key={loc.id} value={loc.id}>
                    {loc.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={modalFooterClass}>
            <Button type="button" variant="outline" size="sm" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" size="sm" isLoading={isLoading}>
              Create Department
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
