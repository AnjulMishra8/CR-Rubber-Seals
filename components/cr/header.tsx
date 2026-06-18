'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function hrefFor(id: string) {
  return id === 'home' ? '/' : `/${id}`
}

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (id: string) => {
    const href = hrefFor(id)
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4">
      <nav className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-slate-100/90 bg-white/85 px-5 py-3 shadow-sm shadow-slate-200/40 backdrop-blur-lg">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-left"
          aria-label="CR Rubber & Seals Private Limited — Home"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="CR Rubber & Seals Private Limited"
            width={38}
            height={38}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-[family-name:var(--font-geist-sans)] text-sm font-bold tracking-tight text-ink sm:text-[15px]">
              CR RUBBER &amp; SEALS
            </span>
            <span className="text-[9.5px] font-semibold tracking-[0.18em] text-muted-foreground">
              PRIVATE LIMITED
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={hrefFor(item.id)}
              className={cn(
                'rounded-full px-4 py-2 text-[13px] font-semibold tracking-wide transition-all duration-200',
                isActive(item.id)
                  ? 'bg-brand/5 text-brand'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-brand',
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-1.5 rounded-full bg-brand px-5 py-2 text-[13px] font-bold tracking-wide text-primary-foreground transition-colors hover:bg-brand-dark"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full p-2 text-ink lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="pointer-events-auto mx-auto mt-2 max-w-7xl rounded-3xl border border-slate-100 bg-white/95 p-2 shadow-lg backdrop-blur-lg lg:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={hrefFor(item.id)}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-full px-4 py-2.5 text-left text-sm font-semibold transition-colors',
                  isActive(item.id) ? 'bg-brand/5 text-brand' : 'text-slate-600 hover:bg-slate-50',
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-brand px-4 py-2.5 text-center text-sm font-bold text-primary-foreground"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
