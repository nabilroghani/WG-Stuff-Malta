import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'amber' | 'red' | 'dark' | 'outline' | 'success';
  size?: 'sm' | 'md' | 'lg';
}

export function Badge({
  className,
  variant = 'amber',
  size = 'md',
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    amber: 'bg-amber-50 text-amber-800 border-amber-300 shadow-sm',
    red: 'bg-rose-50 text-rose-800 border-rose-300 shadow-sm',
    dark: 'bg-slate-100 text-slate-800 border-slate-300',
    outline: 'bg-white text-slate-700 border-slate-200 hover:border-slate-400',
    success: 'bg-emerald-50 text-emerald-800 border-emerald-300 shadow-sm',
  };

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs font-semibold tracking-wider uppercase',
    md: 'px-2.5 py-1 text-xs font-bold tracking-wider uppercase',
    lg: 'px-3 py-1.5 text-sm font-bold tracking-wide uppercase',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border transition-colors',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
