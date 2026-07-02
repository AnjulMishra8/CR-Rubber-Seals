'use client'

import { useState } from 'react'
import { LucideIcon } from '@/components/cr/lucide-icon'

export function CatalogSection() {
  const [showPreview, setShowPreview] = useState(false)

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="group relative flex h-32 overflow-hidden rounded-xl border border-brand/20 bg-gradient-to-r from-brand/8 via-brand/5 to-brand/8 shadow-sm transition-all hover:border-brand/40 hover:shadow-md">
          {/* Left 3/4 - Clickable PDF Preview Area */}
          <button
            onClick={() => setShowPreview(true)}
            className="flex flex-1 items-center gap-6 px-8 py-6 text-left transition-all duration-300 hover:pl-10"
          >
            <div className="flex shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand/20 to-brand/10 p-4 transition-all group-hover:scale-110">
              <LucideIcon name="FileText" className="size-8 text-brand" />
            </div>
            <h3 className="font-sans text-lg font-semibold text-ink">Product Catalogue</h3>
          </button>

          {/* Right 1/4 - Download Button */}
          <div className="flex w-1/4 items-center justify-center px-6 py-6">
            <a
              href="/documents/CR Catalogue.pdf"
              download="CR Catalogue.pdf"
              className="group/btn flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 font-sans text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-brand/90 hover:shadow-xl active:scale-95"
            >
              <LucideIcon name="Download" className="size-5 transition-transform group-hover/btn:translate-y-0.5" />
              <span>Download</span>
            </a>
          </div>
        </div>
      </section>

      {/* PDF Preview Modal */}
      {showPreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setShowPreview(false)}
        >
          <div
            className="relative h-[90vh] w-full max-w-4xl rounded-lg bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPreview(false)}
              className="absolute right-4 top-4 z-10 rounded-lg p-2 hover:bg-muted/50"
              aria-label="Close preview"
            >
              <LucideIcon name="X" className="size-6 text-ink" />
            </button>

            {/* PDF Viewer */}
            <iframe
              src="/documents/CR Catalogue.pdf#toolbar=0"
              className="h-full w-full rounded-lg"
              title="Product Catalogue Preview"
            />
          </div>
        </div>
      )}
    </>
  )
}
