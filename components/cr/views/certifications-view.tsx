import { certifications } from '@/lib/site-data'
import { qualityPolicy, qualityProcess } from '@/lib/site-content'
import { LucideIcon } from '@/components/cr/lucide-icon'
import { SectionHeading } from '@/components/cr/product-card'

export function CertificationsView() {
  return (
    <div className="bg-background">
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Quality &amp; Compliance
          </p>
          <h1 className="max-w-3xl font-serif text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Quality Policy &amp; Certifications
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Stringent multi-stage quality control from raw material to dispatch, backed by
            ISO 9001:2015 certification, IEC and GST registration.
          </p>
        </div>
      </section>

      {/* Quality policy */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading align="left" eyebrow="OUR QUALITY POLICY" title="Excellence at Every Stage" />
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
          {qualityPolicy.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-muted/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="OUR CERTIFICATIONS" title="Certified & Registered" />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {certifications.map((cert) => (
              <article
                key={cert.id}
                className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm"
              >
                <div className="flex items-center gap-4 border-b border-border bg-background p-6">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand text-primary-foreground">
                    <LucideIcon name={cert.icon} className="size-6" />
                  </div>
                  <h2 className="font-serif text-lg font-bold text-ink text-balance">
                    {cert.title}
                  </h2>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">{cert.summary}</p>
                  <dl className="mt-5 divide-y divide-border">
                    {cert.details.map(([label, value]) => (
                      <div key={label} className="py-2.5">
                        <dt className="text-[10px] font-bold tracking-[0.12em] text-muted-foreground">
                          {label}
                        </dt>
                        <dd className="mt-0.5 text-sm font-medium text-ink">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <button
                    type="button"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-muted px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
                  >
                    <LucideIcon name="Download" className="size-4" />
                    {cert.downloadLabel}
                  </button>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Udyam (MSME) and FIEO membership certificates available on request.
          </p>
        </div>
      </section>

      {/* Quality process */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="QUALITY PROCESS"
          title="Five-Stage Quality Assurance"
          description="Samples for approval are provided as per requirement. Every order moves through five rigorous quality stages."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {qualityProcess.map((stage) => (
            <li
              key={stage.step}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 font-mono text-xs font-bold text-brand">
                {stage.step}
              </span>
              <h3 className="mt-4 font-serif text-lg font-bold text-ink">{stage.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {stage.description}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
