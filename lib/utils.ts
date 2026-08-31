import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatEUR(amount: number): string {
  return new Intl.NumberFormat('en-MT', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

export function getBrandBadge(brand: 'work_stuff' | 'good_stuff') {
  if (brand === 'work_stuff') {
    return {
      label: 'Work Stuff Pro',
      bgClass: 'bg-amber-50 text-amber-800 border-amber-300',
      dotClass: 'bg-amber-500',
      accentColor: '#F59E0B',
    };
  }
  return {
    label: 'Good Stuff Chemicals',
    bgClass: 'bg-rose-50 text-rose-800 border-rose-300',
    dotClass: 'bg-rose-500',
    accentColor: '#EF4444',
  };
}
