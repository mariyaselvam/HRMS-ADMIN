import React from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { toggleSidebar } from '@/store/slices/uiSlice';
import { useLogout } from '@/features/auth/hooks/useAuth';
import { Menu, LogOut, User as UserIcon, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  headerClass,
  headerLeftClass,
  sidebarToggleClass,
  companyBadgeClass,
  headerRightClass,
  userRowClass,
  avatarClass,
  userInfoClass,
  userNameClass,
  userRoleClass,
  logoutButtonClass,
} from './Header.styles';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const handleLogout = useLogout();

  return (
    <header className={headerClass}>
      <div className={headerLeftClass}>
        <button
          onClick={() => dispatch(toggleSidebar())}
          className={sidebarToggleClass}
          aria-label="Toggle Sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className={companyBadgeClass}>
          <Building2 className="w-3.5 h-3.5" />
          <span>Company ID: {user?.companyId || 'Default'}</span>
        </div>
      </div>

      <div className={headerRightClass}>
        <div className={userRowClass}>
          <div className={avatarClass}>
            {user?.email?.charAt(0).toUpperCase() || <UserIcon className="w-4 h-4" />}
          </div>
          <div className={userInfoClass}>
            <p className={userNameClass}>{user?.email}</p>
            <p className={userRoleClass}>Role: {user?.role}</p>
          </div>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleLogout}
          className={logoutButtonClass}
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline">Sign Out</span>
        </Button>
      </div>
    </header>
  );
};
