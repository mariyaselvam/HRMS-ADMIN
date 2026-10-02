import React, { useState } from "react";
import {
  useDepartments,
  useCreateDepartment,
  useDeleteDepartment,
  useLocations,
  useHolidays,
} from "../hooks/useOrganization";
import { DepartmentTable } from "../components/DepartmentTable";
import { LocationGrid } from "../components/LocationGrid";
import { HolidayList } from "../components/HolidayList";
import { AddDepartmentModal } from "../components/AddDepartmentModal";
import { Building2, MapPin, Calendar, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  pageContainerClass,
  pageHeaderClass,
  titleClass,
  subtitleClass,
  tabsContainerClass,
  tabButtonClass,
  loadingContainerClass,
  spinnerClass,
} from "./SettingsPage.styles";
import type { DepartmentFormData } from "../schemas/organization.schemas";

type TabType = "departments" | "locations" | "holidays";

export const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("departments");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: departments, isLoading: deptsLoading } = useDepartments();
  const { data: locations, isLoading: locsLoading } = useLocations();
  const { data: holidays, isLoading: holsLoading } = useHolidays();

  const createDeptMutation = useCreateDepartment();
  const deleteDeptMutation = useDeleteDepartment();

  const handleCreateDepartment = (data: DepartmentFormData) => {
    createDeptMutation.mutate(data, {
      onSuccess: () => setIsModalOpen(false),
    });
  };

  const handleDeleteDepartment = (id: string) => {
    if (window.confirm("Are you sure you want to delete this department?")) {
      deleteDeptMutation.mutate(id);
    }
  };

  const isLoading = deptsLoading || locsLoading || holsLoading;

  return (
    <div className={pageContainerClass}>
      <div className={pageHeaderClass}>
        <div>
          <h1 className={titleClass}>Organization Settings</h1>
          <p className={subtitleClass}>
            Manage company structure, office locations, and holiday schedules
          </p>
        </div>

        {activeTab === "departments" && (
          <Button onClick={() => setIsModalOpen(true)} className="gap-2">
            <Plus className="w-4 h-4" />
            Add Department
          </Button>
        )}
      </div>

      {/* Tabs Header */}
      <div className={tabsContainerClass}>
        <button
          onClick={() => setActiveTab("departments")}
          className={tabButtonClass(activeTab === "departments")}
        >
          <Building2 className="w-4 h-4" />
          Departments ({departments?.length ?? 0})
        </button>

        <button
          onClick={() => setActiveTab("locations")}
          className={tabButtonClass(activeTab === "locations")}
        >
          <MapPin className="w-4 h-4" />
          Work Locations ({locations?.length ?? 0})
        </button>

        <button
          onClick={() => setActiveTab("holidays")}
          className={tabButtonClass(activeTab === "holidays")}
        >
          <Calendar className="w-4 h-4" />
          Holidays ({holidays?.length ?? 0})
        </button>
      </div>

      {/* Tab Contents */}
      {isLoading ? (
        <div className={loadingContainerClass}>
          <div className={spinnerClass} />
          <p className="text-sm font-medium text-slate-500">
            Loading organization details...
          </p>
        </div>
      ) : (
        <>
          {activeTab === "departments" && (
            <DepartmentTable
              departments={departments}
              onDelete={handleDeleteDepartment}
              isDeleting={deleteDeptMutation.isPending}
            />
          )}

          {activeTab === "locations" && <LocationGrid locations={locations} />}

          {activeTab === "holidays" && <HolidayList holidays={holidays} />}
        </>
      )}

      {/* Add Department Modal */}
      <AddDepartmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateDepartment}
        isLoading={createDeptMutation.isPending}
        locations={locations}
      />
    </div>
  );
};
