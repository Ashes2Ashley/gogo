import { RiskLevel } from '../types';

export type Currency = 'USD' | 'EUR' | 'GBP';

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
};

const CURRENCY_RATES: Record<Currency, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
};

export function formatCurrency(amount: number, currency: Currency = 'USD'): string {
  const rate = CURRENCY_RATES[currency] || 1;
  const symbol = CURRENCY_SYMBOLS[currency] || '$';
  const converted = Math.round(amount * rate);
  return `${symbol}${converted.toLocaleString('en-US')}`;
}

export function getRiskColorClass(score: number): {
  badge: string;
  bar: string;
  text: string;
  bg: string;
} {
  if (score <= 3) {
    return {
      badge: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60',
      bar: 'bg-emerald-500',
      text: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-500/10',
    };
  }
  if (score <= 5) {
    return {
      badge: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/60',
      bar: 'bg-amber-500',
      text: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-500/10',
    };
  }
  if (score <= 7) {
    return {
      badge: 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/40 dark:text-orange-300 dark:border-orange-800/60',
      bar: 'bg-orange-500',
      text: 'text-orange-600 dark:text-orange-400',
      bg: 'bg-orange-500/10',
    };
  }
  return {
    badge: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800/60',
    bar: 'bg-rose-500',
    text: 'text-rose-600 dark:text-rose-400',
    bg: 'bg-rose-500/10',
  };
}

export function getScalabilityBadge(scalability: string): string {
  switch (scalability) {
    case 'Extreme':
      return 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800/60';
    case 'High':
      return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/60';
    default:
      return 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800/40 dark:text-slate-300 dark:border-slate-700/60';
  }
}
