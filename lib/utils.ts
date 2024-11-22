import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function formatRank(rank: number) {
  return `Rank: ${rank}/10`  // Simple format to show rank out of 10
}
