'use client'

import { LucideIcon } from '@/components/cr/lucide-icon'

export function CatalogSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex h-20 overflow-hidden rounded-lg border border-border bg-muted/30">
        {/* Left 3/4 - Clickable PDF Preview Area */}
        <button
          onClick={() => window.open('/documents/catalog.pdf', '_blank')}
          className="flex w-3/4 items-center gap-4 px-6 transition-colors hover:bg-muted/50 active:bg-muted/70"
        >
          <LucideIcon name="FileText" className="size-6 shrink-0 text-brand" />
          <div className="text-left">
            <h3 className="font-sans text-sm font-semibold text-ink">Product Catalog</h3>
            <p className="text-xs text-ink/60">24 Pages • PDF</p>
          </div>
        </button>

        {/* Right 1/4 - Download Button */}
        <div className="flex w-1/4 items-center border-l border-border px-4">
          <a
            href="/documents/catalog.pdf"
            download="CR-Rubber-Seals-Catalog.pdf"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-brand px-3 py-2 font-sans text-xs font-semibold text-white transition-all hover:bg-brand/90 active:scale-95"
          >
            <LucideIcon name="Download" className="size-4" />
            <span>Download</span>
          </a>
        </div>
      </div>
    </section>
  )
}
