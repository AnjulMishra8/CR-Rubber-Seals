'use client'

import { useMemo, useState } from 'react'
import { products } from '@/lib/site-data'
import { InquiryModal } from '@/components/cr/inquiry-modal'
import { LucideIcon } from '@/components/cr/lucide-icon'

const categories = ['All Products', ...Array.from(new Set(products.map((p) => p.category)))]

export function ProductsView() {
  const [active, setActive] = useState('All Products')
  const [inquiry, setInquiry] = useState<string | null>(null)

  const filtered = useMemo(
    () => products.filter((p) => active === 'All Products' || p.category === active),
    [active],
  )

  return (
    <div className="bg-background">
      {/* Page header */}
      <section className="border-b border-border bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32" data-aos="fade-up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Products
          </p>
          <h1 className="font-sans text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Our Industrial Rubber Products
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
            CR Rubber and Seals manufactures premium quality industrial sealing products across
            every major category — from standard hydraulic cylinder seals to custom TBM solutions up
            to 7500mm diameter. All products are manufactured at our ISO 9001:2015 certified facility
            at Pawane MIDC, Navi Mumbai using premium raw materials sourced from Austria, Taiwan,
            Turkey, Italy and Singapore.
          </p>
        </div>
      </section>

      {/* Banner Section */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8" data-aos="zoom-in" data-aos-delay="100">
        <div className="overflow-hidden rounded-2xl bg-muted">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Product%20Range%20Banner.PNG-LHzBcUyDIq1lErjCpJtwns8CT6qP7H.png"
            alt="Engineered to perform. Built to last."
            className="w-full object-cover"
            loading="lazy"
            decoding="async"
            fetchPriority="auto"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Category filters */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                active === cat
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Detailed category sections */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {filtered.map((product, index) => (
            <article
              key={product.id}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={`${(index % 6) * 50}`}
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand">
                  {product.category}
                </span>
              </div>
              <h2 className="mt-4 font-sans text-2xl font-bold tracking-tight text-ink">
                {product.title}
              </h2>
              <p className="mt-1 text-sm font-semibold italic text-slate-400">{product.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink/80">
                    <LucideIcon name="BadgeCheck" className="mt-0.5 size-4 shrink-0 text-brand" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setInquiry(product.title)}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-muted px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:bg-brand/5 hover:text-brand"
              >
                Request a Quote
                <LucideIcon name="ArrowRight" className="size-4" />
              </button>
            </article>
          ))}
        </div>
      </section>

      <InquiryModal productName={inquiry} onClose={() => setInquiry(null)} />
    </div>
  )
}
