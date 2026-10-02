import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '@/store';
import { AppRoutes } from '@/enums/routes.enum';
import {
  LayoutDashboard,
  Users,
  Clock,
  CalendarDays,
  CreditCard,
  Settings,
  Building2,
} from 'lucide-react';
import {
  sidebarVariants,
  navLinkVariants,
  logoContainerClass,
  logoBadgeClass,
  navContainerClass,
} from './Sidebar.styles';

interface NavItem {
  label: string;
  path: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', path: AppRoutes.DASHBOARD, icon: LayoutDashboard },
  { label: 'Employees', path: AppRoutes.EMPLOYEES, icon: Users },
  { label: 'Attendance', path: AppRoutes.ATTENDANCE, icon: Clock },
  { label: 'Leave', path: AppRoutes.LEAVE, icon: CalendarDays },
  { label: 'Payroll', path: AppRoutes.PAYROLL, icon: CreditCard },
  { label: 'Settings', path: AppRoutes.SETTINGS, icon: Settings },
];

export const Sidebar: React.FC = () => {
  const { isSidebarOpen } = useAppSelector((state) => state.ui);

  return (
    <aside className={sidebarVariants({ isOpen: isSidebarOpen })}>
      {/* Brand Logo */}
      <div className={logoContainerClass}>
        <div className={logoBadgeClass}>
          <Building2 className="w-5 h-5" />
        </div>
        {isSidebarOpen && (
          <div className="overflow-hidden whitespace-nowrap">
            <h2 className="text-base font-bold text-white tracking-wide leading-tight">
              HRMS Admin
            </h2>
            <p className="text-[11px] text-slate-400 font-medium">Enterprise Suite</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className={navContainerClass}>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => navLinkVariants({ active: isActive })}
            >
              <Icon className="w-5 h-5 shrink-0" />
              {isSidebarOpen && (
                <span className="truncate whitespace-nowrap">{item.label}</span>
              )}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};
