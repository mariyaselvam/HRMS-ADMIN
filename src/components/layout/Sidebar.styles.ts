import { cva } from 'class-variance-authority';

export const sidebarVariants = cva(
  'fixed md:static inset-y-0 left-0 z-40 bg-slate-900 text-slate-300 transition-all duration-300 flex flex-col border-r border-slate-800 shadow-lg md:shadow-none',
  {
    variants: {
      isOpen: {
        true: 'w-64',
        false: 'w-20',
      },
    },
    defaultVariants: {
      isOpen: true,
    },
  }
);

export const navLinkVariants = cva(
  'flex items-center gap-3.5 px-3 py-2.5 rounded-xl font-medium text-sm transition-all duration-200',
  {
    variants: {
      active: {
        true: 'bg-blue-600 text-white shadow-md shadow-blue-600/30',
        false: 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60',
      },
    },
  }
);

export const logoContainerClass = 'h-16 flex items-center px-4 gap-3 border-b border-slate-800';
export const logoBadgeClass = 'w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shrink-0 shadow-md shadow-blue-500/20';
export const navContainerClass = 'flex-1 px-3 py-4 space-y-1.5 overflow-y-auto';
