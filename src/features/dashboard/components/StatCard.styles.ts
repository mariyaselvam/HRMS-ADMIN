import { cva } from 'class-variance-authority';

export const statCardContainerClass = 'bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs flex items-center justify-between transition-all hover:shadow-md';

export const statCardTitleClass = 'text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider';

export const statCardValueClass = 'text-2xl font-bold text-slate-900 dark:text-white tracking-tight';

export const statCardSubtitleClass = 'text-xs text-slate-500 dark:text-slate-400 font-medium';

export const statIconVariants = cva(
  'w-12 h-12 rounded-xl flex items-center justify-center shrink-0',
  {
    variants: {
      colorScheme: {
        blue: 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400',
        emerald: 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400',
        amber: 'bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400',
        purple: 'bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400',
      },
    },
    defaultVariants: {
      colorScheme: 'blue',
    },
  }
);
