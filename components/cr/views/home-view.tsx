'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Check } from 'lucide-react'
import { HeroCarousel } from '@/components/cr/hero-carousel'
import { ProductCard, SectionHeading } from '@/components/cr/product-card'
import { InquiryModal } from '@/components/cr/inquiry-modal'
import { LucideIconByName } from '@/components/cr/lucide-icon'
import { products } from '@/lib/site-data'
import { heroStats, totalSolutions, whyChooseUs } from '@/lib/site-content'

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

      {/* Stats bar */}
      <section className="relative z-20 border-y border-slate-100 bg-card py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {heroStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`group flex flex-col text-left ${
                i < heroStats.length - 1 ? 'lg:border-r lg:border-slate-100 lg:pr-8' : ''
              }`}
            >
              <span className="font-sans text-3xl font-extrabold leading-none text-slate-900 transition-colors group-hover:text-brand sm:text-4xl">
                {stat.value}
              </span>
              <span className="mt-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                {stat.label}
              </span>
              <span className="mt-1 text-[10.5px] leading-relaxed text-slate-400">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-2xl border border-border bg-muted p-8">
            <h3 className="font-serif text-2xl font-bold text-ink">
              Total Sealing Solutions
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Under the guidance of <strong className="text-ink">Mr. Anis Ansari</strong>,
              CR Rubber and Seals Pvt. Ltd. has built a reputation for quality
              that clients across India and globally rely on.
            </p>
            <ul className="mt-6 space-y-3">
              {totalSolutions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-brand">
              ABOUT CR RUBBER &amp; SEALS
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-ink text-balance sm:text-4xl">
              India&apos;s Trusted Sealing Partner Since 1995
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Since <strong className="text-ink">1995</strong>,{' '}
              <strong className="text-ink">CR Rubber &amp; Seals Private Limited</strong>{' '}
              has been at the forefront of delivering excellence as a dominant
              manufacturer, exporter, and supplier of world-class seals and
              rubber products. Under the valuable guidance of{' '}
              <strong className="text-ink">Mr. Anis Ansari</strong>, we have
              grown into one of India&apos;s most trusted names in hydraulic,
              pneumatic, and rubber products.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We compete in the international market with products acclaimed for
              superior thermal resistance, precise dimensions, leak-proof
              performance and CNC-machined accuracy. We source premium raw
              materials from Austria, Taiwan, Turkey, Italy and Singapore to
              deliver the highest quality at competitive prices.
            </p>
            <button
              type="button"
              onClick={() => router.push('/about')}
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand hover:gap-3 transition-all"
            >
              Learn more about us <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="premium-dot-grid-red relative border-y border-slate-100 bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow="PRODUCT SPOTLIGHT"
              title="Featured Product Range"
            />
            <button
              type="button"
              onClick={() => router.push('/products')}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white hover:bg-ink/90"
            >
              View Full Catalogue
            </button>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} onInquiry={setInquiry} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="WHY CHOOSE US" title="What Sets Us Apart" />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-7 transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <LucideIconByName name={item.icon} className="h-6 w-6 text-brand" />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-accent via-background to-muted py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-[0.2em] text-brand">
            GET IN TOUCH
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-ink text-balance sm:text-4xl">
            Ready to Discuss Your Sealing Needs?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Get in touch with our team for custom solutions, bulk orders, or
            technical queries. We typically respond within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => router.push('/contact')}
              className="rounded-full bg-brand px-8 py-3 text-sm font-bold text-primary-foreground hover:bg-brand-dark"
            >
              Contact Us
            </button>
            <a
              href="https://wa.me/919321114471"
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
