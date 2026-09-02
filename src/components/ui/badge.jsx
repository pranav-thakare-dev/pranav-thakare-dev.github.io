import * as React from 'react'
import { cn } from '@/lib/utils'

const badgeVariants = {
  default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80 shadow-sm',
  secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
  destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
  outline: 'text-foreground border-slate-300 dark:border-slate-700',
  tech: 'border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono font-medium',
  accent: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium',
  purple: 'border-purple-500/20 bg-purple-500/10 text-purple-600 dark:text-purple-400 font-medium',
}

function Badge({ className, variant = 'default', ...props }) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        badgeVariants[variant] || badgeVariants.default,
        className
      )}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
