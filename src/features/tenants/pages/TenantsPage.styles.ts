export const pageContainerClass = 'space-y-6 max-w-7xl mx-auto';

export const pageHeaderClass = 'flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4';

export const titleClass = 'text-2xl font-bold tracking-tight text-slate-900 dark:text-white';

export const subtitleClass = 'text-sm text-slate-500 dark:text-slate-400';

export const filterBarClass = 'flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs';

export const filterButtonsClass = 'flex items-center gap-2';

export const filterButtonClass = (active: boolean) =>
  `px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
    active
      ? 'bg-slate-900 text-white dark:bg-blue-600'
      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
  }`;

export const searchInputWrapperClass = 'relative w-full sm:w-72';

export const searchIconClass = 'w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400';

export const searchInputClass = 'w-full pl-9 pr-4 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500';

export const loadingContainerClass = 'flex flex-col items-center justify-center min-h-[300px] space-y-4';

export const spinnerClass = 'w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin';
