export const tableContainerClass = 'bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 overflow-hidden shadow-xs';

export const tableClass = 'w-full text-left border-collapse text-sm';

export const theadClass = 'bg-slate-50 dark:bg-slate-700/50 text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200 dark:border-slate-700';

export const thClass = 'px-6 py-4';

export const trClass = 'border-b border-slate-100 dark:border-slate-700/60 hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors';

export const tdClass = 'px-6 py-4 text-slate-700 dark:text-slate-200 font-medium';

export const companyNameClass = 'font-bold text-slate-900 dark:text-white text-base flex items-center gap-2.5';

export const companyBadgeClass = 'w-9 h-9 rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400 flex items-center justify-center font-extrabold text-sm';

export const activeStatusClass = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/50';

export const suspendedStatusClass = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-200 dark:border-rose-900/50';

export const progressBarBgClass = 'w-32 bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden';

export const progressBarFillClass = (percentage: number) =>
  `h-full transition-all ${
    percentage >= 90
      ? 'bg-rose-500'
      : percentage >= 75
      ? 'bg-amber-500'
      : 'bg-blue-600'
  }`;

export const emptyStateClass = 'text-center py-16 text-slate-500 font-medium space-y-2';
