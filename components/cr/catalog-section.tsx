'use client'

import { useState } from 'react'
import { LucideIcon } from '@/components/cr/lucide-icon'

export function CatalogSection() {
  const [showPreview, setShowPreview] = useState(false)

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="group relative flex flex-col gap-3 rounded-xl border border-brand/20 bg-gradient-to-r from-brand/8 via-brand/5 to-brand/8 p-4 shadow-sm transition-all hover:border-brand/40 hover:shadow-md sm:h-32 sm:flex-row sm:gap-0 sm:p-0">
          {/* Left 3/4 - Clickable PDF Preview Area */}
          <button
            onClick={() => setShowPreview(true)}
            className="flex flex-1 items-center gap-4 px-4 py-3 text-left transition-all duration-300 sm:gap-6 sm:px-8 sm:py-6 sm:hover:pl-10"
          >
            <div className="flex shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand/20 to-brand/10 p-3 transition-all sm:p-4 sm:group-hover:scale-110">
              <LucideIcon name="FileText" className="size-6 text-brand sm:size-8" />
            </div>
            <h3 className="font-sans text-base font-semibold text-ink sm:text-lg">Product Catalogue</h3>
          </button>

          {/* Right 1/4 - Download Button */}
          <div className="flex items-center justify-center px-2 py-2 sm:w-1/4 sm:px-6 sm:py-6">
            <a
              href="/documents/CR Catalogue.pdf"
              download="CR Catalogue.pdf"
              className="group/btn flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 py-3 font-sans text-xs font-semibold text-white shadow-lg transition-all duration-300 sm:px-6 sm:text-sm hover:bg-brand/90 hover:shadow-xl active:scale-95"
            >
              <LucideIcon name="Download" className="size-4 transition-transform sm:size-5 group-hover/btn:translate-y-0.5" />
              <span>Download</span>
            </a>
          </div>
        </div>
      </section>

      {/* PDF Preview Modal */}
      {showPreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 sm:p-4"
          onClick={() => setShowPreview(false)}
        >
          <div
            className="relative h-[85vh] w-full max-h-[85vh] rounded-lg bg-white shadow-2xl sm:max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPreview(false)}
              className="absolute right-2 top-2 z-10 rounded-lg p-2 hover:bg-muted/50 sm:right-4 sm:top-4"
              aria-label="Close preview"
            >
              <LucideIcon name="X" className="size-5 text-ink sm:size-6" />
            </button>

            {/* PDF Viewer */}
            <iframe
              src="/documents/CR Catalogue.pdf#toolbar=0&navpanes=0&view=FitH"
              className="h-full w-full rounded-lg"
              style={{ border: 'none' }}
              title="Product Catalogue Preview"
              sandbox="allow-same-origin"
            />
          </div>
        </div>
      )}
    </>
  )
}
