import {
  company,
  crAdvantage,
  manufacturingCapabilities,
  qualityCompliance,
  directors,
} from '@/lib/site-content'
import { SectionHeading } from '@/components/cr/product-card'
import { LucideIcon } from '@/components/cr/lucide-icon'

export function AboutView() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            About Us
          </p>
          <h1 className="max-w-3xl font-sans text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Same Legacy. New Identity. Total Sealing Solutions.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            CR Rubber and Seals Private Limited is the sister company of Crown Rubber Works — a
            name synonymous with sealing excellence since 1995.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3" data-aos="fade-up">
            <SectionHeading
              align="left"
              eyebrow="OUR STORY"
              title="CR Rubber and Seals — Sister Company of Crown Rubber Works"
            />
            <div className="text-base leading-relaxed text-muted-foreground">
              <p>
                CR Rubber and Seals Private Limited is the sister company of Crown Rubber Works, a
                name that has been synonymous with sealing excellence since 1995. Founded and
                managed by the same team, operating from the same manufacturing facility at Pawane
                MIDC, Navi Mumbai, CR Rubber and Seals Pvt. Ltd. carries forward the full product
                range, technical expertise and quality standards of the Crown Rubber Works group,
                under a distinct private limited identity.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-2" data-aos="fade-up" data-aos-delay="200">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-sans text-lg font-bold text-ink">The CR Advantage</h3>
              <ol className="mt-4 space-y-3">
                {crAdvantage.map((item, idx) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand font-mono text-xs font-bold text-primary-foreground">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="pt-1 text-sm font-semibold text-ink">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>

      {/* Banner */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-xl border border-border shadow-lg" data-aos="zoom-in">
          <img
            src="/images/about-us-banner.png"
            alt="CR Rubber and Seals manufacturing capabilities and operations"
            className="h-auto w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div data-aos="fade-up">
          <SectionHeading
            eyebrow="OUR CAPABILITIES"
            title="Manufacturing & Quality"
            description="Vertically integrated capabilities that let us deliver precision, speed and full compliance."
          />
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-7 shadow-sm" data-aos="fade-up">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-lg bg-accent text-brand">
                <LucideIcon name="Cog" className="size-6" />
              </div>
              <h3 className="font-sans text-lg font-bold text-ink">Manufacturing Capabilities</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {manufacturingCapabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-3 text-sm text-ink/80">
                  <LucideIcon name="BadgeCheck" className="mt-0.5 size-4 shrink-0 text-brand" />
                  {cap}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-lg bg-accent text-brand">
                <LucideIcon name="ShieldCheck" className="size-6" />
              </div>
              <h3 className="font-sans text-lg font-bold text-ink">Quality & Compliance</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {qualityCompliance.map((cap) => (
                <li key={cap} className="flex items-start gap-3 text-sm text-ink/80">
                  <LucideIcon name="BadgeCheck" className="mt-0.5 size-4 shrink-0 text-brand" />
                  {cap}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="bg-muted/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="LEADERSHIP" title="Directors" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {directors.map((d) => (
              <div key={d.name} className="rounded-xl border border-border bg-card p-7 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-accent text-brand">
                    <LucideIcon name="User" className="size-7" />
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-bold text-ink">{d.name}</h3>
                    <p className="text-sm font-semibold text-brand">{d.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Address strip */}
      <section className="border-t border-border bg-background py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <LucideIcon name="MapPin" className="mt-1 size-5 shrink-0 text-brand" />
            <div>
              <p className="text-[11px] font-bold tracking-[0.12em] text-muted-foreground">
                MANUFACTURING FACILITY
              </p>
              <p className="mt-1 max-w-md text-sm font-medium text-ink">{company.addressFull}</p>
            </div>
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.mapQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-brand-dark"
          >
            <LucideIcon name="Navigation" className="size-4" />
            View on Map
          </a>
        </div>
      </section>
    </div>
  )
}
