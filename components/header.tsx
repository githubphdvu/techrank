import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Header() {
  return (
    <nav className='container flex items-center justify-between border-b-4 p-3'>
      <a href="https://projectsav.netlify.app/"><img src='/logo.jpg' alt='' className='h-12'/></a>
      <ThemeToggle />
    </nav>
  )
}