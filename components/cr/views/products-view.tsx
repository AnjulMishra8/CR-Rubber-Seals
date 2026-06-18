"use client"

import { useMemo, useState } from "react"
import { products } from "@/lib/site-data"
import { ProductCard } from "@/components/cr/product-card"
import { InquiryModal } from "@/components/cr/inquiry-modal"
import { LucideIcon } from "@/components/cr/lucide-icon"

const categories = ["All Products", ...Array.from(new Set(products.map((p) => p.category)))]

export function ProductsView() {
  const [active, setActive] = useState("All Products")
  const [query, setQuery] = useState("")
  const [inquiry, setInquiry] = useState<string | null>(null)

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = active === "All Products" || p.category === active
      const q = query.trim().toLowerCase()
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      return matchCat && matchQuery
    })
  }, [active, query])

  return (
    <div className="bg-background">
      {/* Page header */}
      <section className="border-b border-border bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Catalogue</p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Precision Sealing Solutions
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
            Explore our complete range of hydraulic seals, oil seals, O-rings, polyurethane products, moulded rubber
            components, and custom sealing kits — engineered to international standards.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Search */}
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-sm">
            <LucideIcon
              name="Search"
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-lg border border-border bg-card py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filtered.length}</span> products
          </p>
        </div>

        {/* Category filters */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                active === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} onInquiry={setInquiry} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border py-20 text-center">
            <p className="text-lg font-medium text-foreground">No products found</p>
            <p className="mt-1 text-sm text-muted-foreground">Try a different search term or category.</p>
          </div>
        )}
      </section>

      <InquiryModal productName={inquiry} onClose={() => setInquiry(null)} />
    </div>
  )
}
