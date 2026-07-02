'use client'

import { LucideIcon } from '@/components/cr/lucide-icon'

export function CatalogSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="group relative flex h-32 overflow-hidden rounded-xl border border-brand/20 bg-gradient-to-r from-brand/8 via-brand/5 to-brand/8 shadow-sm transition-all hover:border-brand/40 hover:shadow-md">
        {/* Left 3/4 - Clickable PDF Preview Area */}
        <button
          onClick={() => window.open('/documents/catalog.pdf', '_blank')}
          className="flex flex-1 items-center gap-6 px-8 py-6 text-left transition-all duration-300 hover:pl-10"
        >
          <div className="flex shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand/20 to-brand/10 p-4 transition-all group-hover:scale-110">
            <LucideIcon name="FileText" className="size-8 text-brand" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-sans text-lg font-semibold text-ink">Product Catalog</h3>
            <p className="text-sm text-ink/70">24 Pages • Comprehensive product specifications</p>
          </div>
        </button>

        {/* Right 1/4 - Download Button */}
        <div className="flex w-1/4 items-center justify-center px-6 py-6">
          <a
            href="/documents/catalog.pdf"
            download="CR-Rubber-Seals-Catalog.pdf"
            className="group/btn flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 font-sans text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-brand/90 hover:shadow-xl active:scale-95"
          >
            <LucideIcon name="Download" className="size-5 transition-transform group-hover/btn:translate-y-0.5" />
            <span>Download</span>
          </a>
        </div>
      </div>
    </section>
  )
}
