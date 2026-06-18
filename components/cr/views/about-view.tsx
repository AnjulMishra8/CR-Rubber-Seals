import { timeline } from '@/lib/site-data'
import { company, corporateProfile, capabilities } from '@/lib/site-content'
import { SectionHeading } from '@/components/cr/product-card'
import { LucideIcon } from '@/components/cr/lucide-icon'

export function AboutView() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Story
          </p>
          <h1 className="max-w-3xl font-serif text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Three Decades of Sealing Excellence
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Founded in 1995 in Navi Mumbai, CR Rubber &amp; Seals Private Limited has grown into
            one of India&apos;s most trusted manufacturers, exporters and suppliers of precision
            seals and rubber products — serving 12+ industries with 100+ product types.
          </p>
        </div>
      </section>

      {/* Intro + profile */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionHeading
              align="left"
              eyebrow="WHO WE ARE"
              title="Engineering Trust, One Seal at a Time"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Under the leadership of our director Mr. Anis Ansari, CR Rubber &amp; Seals began
                with a clear mission — to manufacture world-class sealing solutions that meet the
                most demanding industrial requirements. Today we operate a modern manufacturing
                facility equipped with CNC seal manufacturing machines, in-house rubber compounding,
                and a dedicated R&amp;D center.
              </p>
              <p>
                Our ISO 9001:2015 certified quality management system ensures every product meets
                international standards. We source premium raw materials from Austria, Taiwan,
                Turkey, Italy and Singapore, and export to Gulf countries, Singapore and Sri Lanka.
              </p>
              <p>
                Our pioneering &ldquo;One Hour Seal Factory&rdquo; brings custom-made machined seals
                to market with no tooling cost and no minimum order quantity — an express service
                built for repair and maintenance needs across industries.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-ink">Corporate Profile</h3>
              <dl className="mt-4 divide-y divide-border">
                {corporateProfile.map((row) => (
                  <div key={row.label} className="flex items-start justify-between gap-4 py-3">
                    <dt className="text-[11px] font-bold tracking-[0.12em] text-muted-foreground">
                      {row.label}
                    </dt>
                    <dd className="text-right text-sm font-semibold text-ink">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="OUR JOURNEY"
            title="Milestones That Shaped Us"
            description="From a focused rubber components manufacturer to a full-spectrum sealing solutions provider."
          />
          <ol className="mt-12 space-y-8 border-l-2 border-border pl-6 sm:mx-auto sm:max-w-3xl">
            {timeline.map((item, idx) => (
              <li key={item.year} className="relative">
                <span className="absolute -left-[31px] flex size-5 items-center justify-center rounded-full border-4 border-background bg-brand" />
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="rounded bg-accent px-2.5 py-1 font-mono text-sm font-bold text-brand">
                      {item.year}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-ink">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <span className="sr-only">Step {idx + 1}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="WHAT WE DO BEST"
          title="Manufacturing Capabilities"
          description="Vertically integrated capabilities that let us deliver precision, speed and flexibility."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="flex gap-4 rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent text-brand">
                <LucideIcon name={cap.icon} className="size-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-ink">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Address strip */}
      <section className="border-t border-border bg-muted/60 py-10">
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
