'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { HeroCarousel } from '@/components/cr/hero-carousel'
import { ProductCard, SectionHeading } from '@/components/cr/product-card'
import { InquiryModal } from '@/components/cr/inquiry-modal'
import { LucideIconByName } from '@/components/cr/lucide-icon'
import { products } from '@/lib/site-data'
import {
  company,
  trustBar,
  whoWeAre,
  usps,
  homeIndustries,
  certStrip,
  ctaStrip,
} from '@/lib/site-content'

export function HomeView() {
  const router = useRouter()
  const [inquiry, setInquiry] = useState<string | null>(null)
  const featured = products.slice(0, 6)

  return (
    <>
      <HeroCarousel
        onRequestQuote={() => router.push('/contact')}
        onExplore={() => router.push('/products')}
      />

      {/* Trust bar */}
      <section className="relative z-20 border-y border-slate-100 bg-card py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {trustBar.map((item, i) => (
            <div
              key={item.value}
              className={`flex flex-col text-center lg:text-left ${
                i < trustBar.length - 1 ? 'lg:border-r lg:border-slate-100 lg:pr-8' : ''
              }`}
            >
              <span className="font-sans text-xl font-extrabold leading-tight text-slate-900 sm:text-2xl">
                {item.value}
              </span>
              <span className="mt-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div data-aos="fade-up">
            <span className="text-xs font-bold tracking-[0.2em] text-brand">
              {whoWeAre.label}
            </span>
            <h2 className="mt-3 whitespace-pre-line font-sans text-3xl font-bold text-ink text-balance sm:text-4xl">
              {whoWeAre.heading}
            </h2>
            {whoWeAre.body.map((para) => (
              <p key={para.slice(0, 24)} className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {para}
              </p>
            ))}
            <button
              type="button"
              onClick={() => router.push('/about')}
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand transition-all hover:gap-3"
            >
              Learn more about us <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="rounded-2xl border border-border bg-muted p-8" data-aos="fade-up" data-aos-delay="200">
            <h3 className="font-sans text-xl font-bold text-ink">
              Same Legacy. New Identity.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              CR Rubber and Seals Pvt. Ltd. carries forward the Crown Rubber Works legacy
              with its own certifications and registrations.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-4">
              {[
                ['Founded Legacy', '1995'],
                ['ISO Certificate', company.isoNumber],
                ['IEC Code', company.iec],
                ['GSTIN', company.gstin],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-border bg-card p-4">
                  <dt className="text-[10px] font-bold tracking-[0.12em] text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="mt-1 font-mono text-sm font-bold text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* USP grid */}
      <section className="border-y border-slate-100 bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="WHY CR RUBBER AND SEALS" title="Engineered Advantages" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {usps.map((item, index) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-background p-7 transition-shadow hover:shadow-md"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <LucideIconByName name={item.icon} className="h-6 w-6 text-brand" />
                </div>
                <h3 className="mt-5 font-sans text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product range */}
      <section className="premium-dot-grid-red relative bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up">
            <SectionHeading
              eyebrow="PRODUCT RANGE"
              title="Our Complete Industrial Rubber Product Range"
              description="From standard O-rings to custom TBM seals up to 7500mm — 500+ products across 8 major sealing categories."
            />
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, index) => (
              <div key={p.id} data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
                <ProductCard product={p} onInquiry={setInquiry} />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => router.push('/products')}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white hover:bg-ink/90"
            >
              View Full Catalogue <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Industries grid */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up">
            <SectionHeading
              eyebrow="INDUSTRIES WE SERVE"
              title="Trusted Across 12+ Industrial Sectors — Pan India & Global"
              description="Our sealing solutions power operations in India's most demanding environments — from underground mines to offshore oil rigs."
            />
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {homeIndustries.map((ind, index) => (
              <div
                key={ind.name}
                className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-md"
                data-aos="fade-up"
                data-aos-delay={`${(index % 4) * 100}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <LucideIconByName name={ind.icon} className="h-6 w-6 text-brand" />
                </div>
                <span className="text-sm font-semibold text-ink">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications strip */}
      <section className="border-y border-slate-100 bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up">
            <SectionHeading
              eyebrow="CERTIFIED & COMPLIANT"
              title="Certifications & Registrations"
            />
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {certStrip.map((cert, index) => (
              <div
                key={cert.title}
                className="rounded-xl border border-border bg-background p-7 shadow-sm"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <h3 className="font-sans text-lg font-bold text-brand">{cert.title}</h3>
                <dl className="mt-4 space-y-3">
                  {cert.rows.map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-[10px] font-bold tracking-[0.12em] text-muted-foreground">
                        {label}
                      </dt>
                      <dd className="mt-0.5 text-sm font-medium text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-ink py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8" data-aos="fade-up">
          <h2 className="font-sans text-3xl font-bold text-white text-balance sm:text-4xl">
            {ctaStrip.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300">
            {ctaStrip.body}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => router.push('/contact')}
              className="rounded-full bg-brand px-8 py-3 text-sm font-bold text-primary-foreground hover:bg-brand-dark"
            >
              Request a Quote
            </button>
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-whatsapp px-8 py-3 text-sm font-bold text-white hover:bg-whatsapp-dark"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <InquiryModal productName={inquiry} onClose={() => setInquiry(null)} />
    </>
  )
}
