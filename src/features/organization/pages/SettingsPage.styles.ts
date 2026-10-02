export const pageContainerClass = 'space-y-6 max-w-7xl mx-auto';

export const pageHeaderClass = 'flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4';

export const titleClass = 'text-2xl font-bold tracking-tight text-slate-900 dark:text-white';

export const subtitleClass = 'text-sm text-slate-500 dark:text-slate-400';

export const tabsContainerClass = 'flex items-center gap-2 border-b border-slate-200 dark:border-slate-700 pb-2';

export const tabButtonClass = (active: boolean) =>
  `px-4 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center gap-2 ${
    active
      ? 'bg-blue-600 text-white shadow-xs'
      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
  }`;

export const loadingContainerClass = 'flex flex-col items-center justify-center min-h-[300px] space-y-4';

export const spinnerClass = 'w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin';
