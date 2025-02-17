'use client'

import Link from 'next/link'
import { ThemeToggle } from '@/components/theme/ThemeToggle'

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            Corporate Site
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex items-center gap-6">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
} 