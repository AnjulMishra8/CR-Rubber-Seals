'use client'

import { LucideIcon } from '@/components/cr/lucide-icon'

export function CatalogSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 rounded-xl border border-border bg-background p-8 lg:flex-row lg:items-center lg:gap-12">
        {/* Left side - PDF Preview */}
        <div className="flex shrink-0 items-center justify-center lg:w-1/3" data-aos="fade-right">
          <div className="w-full max-w-sm overflow-hidden rounded-lg border border-border shadow-lg">
            <div className="aspect-[8.5/11] bg-gradient-to-b from-gray-200 to-gray-100 p-6 flex flex-col items-center justify-center">
              <div className="text-center">
                <LucideIcon name="FileText" className="mx-auto mb-4 size-16 text-brand" />
                <h4 className="font-sans text-sm font-semibold text-ink">Product Catalog</h4>
                <p className="mt-2 text-xs text-ink/60">PDF Document</p>
                <p className="mt-4 text-2xl font-bold text-brand">24 Pages</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Content & CTA */}
        <div className="flex flex-col gap-6 lg:w-2/3" data-aos="fade-left">
          <div>
            <h2 className="font-sans text-2xl font-bold text-ink sm:text-3xl">
              Download Our Product Catalog
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink/80">
              Access our comprehensive product catalog featuring detailed specifications for:
            </p>
          </div>

          <ul className="space-y-2">
            {[
              'Custom Machined Seals & TBM Seals',
              'Hydraulic & Pneumatic Seals',
              'Piston Seals & Rod Seals',
              'Wiper Seals & Guide Rings',
              'O-Rings & Backup Rings',
              'Oil Seals & Specialty Products',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <LucideIcon name="Check" className="mt-0.5 size-5 shrink-0 text-brand" />
                <span className="text-sm text-ink/80">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm text-ink/70">
            Includes technical specifications, material options, pressure ratings, and temperature ranges for all product types.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/documents/catalog.pdf"
              download="CR-Rubber-Seals-Catalog.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-8 py-3 font-sans text-sm font-semibold text-white transition-all hover:bg-brand/90 active:scale-95"
            >
              <LucideIcon name="Download" className="size-5" />
              Download PDF
            </a>
            <button
              onClick={() => window.open('/documents/catalog.pdf', '_blank')}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-8 py-3 font-sans text-sm font-semibold text-ink transition-all hover:bg-muted/50"
            >
              <LucideIcon name="Eye" className="size-5" />
              Preview
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
