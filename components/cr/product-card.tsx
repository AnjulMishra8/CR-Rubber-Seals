'use client'

import { ArrowRight } from 'lucide-react'
import type { products } from '@/lib/site-data'

type Product = (typeof products)[number]

export function ProductCard({
  product,
  onInquiry,
}: {
  product: Product
  onInquiry: (name: string) => void
}) {
  return (
    <article className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      <div>
        <div className="relative flex h-48 select-none flex-col items-center justify-center overflow-hidden border-b border-slate-100 bg-slate-100">
          {product.image ? (
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="industrial-grid absolute inset-0 opacity-20" />
          )}
          <span className="absolute bottom-2.5 left-3.5 rounded-full bg-slate-900/90 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            {product.category}
          </span>
        </div>
        <div className="p-6">
          <h3 className="font-sans text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-brand">
            {product.title}
          </h3>
          <p className="mt-1 text-xs font-semibold italic leading-normal text-slate-400">
            {product.tagline}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>
        </div>
      </div>
      <div className="px-6 pb-6">
        <button
          type="button"
          onClick={() => onInquiry(product.title)}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-muted px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:bg-brand/5 hover:text-brand"
        >
          Specification &amp; Inquiry
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span className="text-xs font-bold tracking-[0.2em] text-brand">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-sans text-3xl font-bold text-ink text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
