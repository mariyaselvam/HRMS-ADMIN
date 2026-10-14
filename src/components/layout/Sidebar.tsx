import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '@/store';
import { AppRoutes } from '@/enums/routes.enum';
import {
  LayoutDashboard,
  Building2,
  Settings,
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
  { label: 'Platform Dashboard', path: AppRoutes.DASHBOARD, icon: LayoutDashboard },
  { label: 'Client Organizations', path: AppRoutes.TENANTS, icon: Building2 },
  { label: 'Platform Settings', path: AppRoutes.SETTINGS, icon: Settings },
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
              HRMS Control
            </h2>
            <p className="text-[11px] text-blue-400 font-medium">Super Admin Console</p>
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
