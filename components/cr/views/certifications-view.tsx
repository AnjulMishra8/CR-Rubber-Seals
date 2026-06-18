import { certifications } from '@/lib/site-data'
import { company } from '@/lib/site-content'
import { LucideIcon } from '@/components/cr/lucide-icon'

export function CertificationsView() {
  return (
    <div className="bg-background">
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Quality &amp; Compliance
          </p>
          <h1 className="max-w-3xl font-serif text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Certifications &amp; Standards
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Our commitment to quality is backed by internationally recognized certifications and
            adherence to global manufacturing standards.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {certifications.map((cert) => (
            <article
              key={cert.id}
              className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm"
            >
              <div className="flex items-center gap-4 border-b border-border bg-muted/60 p-6">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-brand text-primary-foreground">
                  <LucideIcon name="ShieldCheck" className="size-7" />
                </div>
                <div>
                  <h2 className="font-serif text-xl font-bold text-ink text-balance">
                    {cert.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">Issued by {cert.issuedBy}</p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <dl className="grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-[11px] font-bold tracking-[0.12em] text-muted-foreground">
                      CERTIFICATE NUMBER
                    </dt>
                    <dd className="mt-1 font-mono text-sm font-semibold text-ink">{cert.number}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-bold tracking-[0.12em] text-muted-foreground">
                      VALID UNTIL
                    </dt>
                    <dd className="mt-1 font-mono text-sm font-semibold text-ink">
                      {cert.validUntil}
                    </dd>
                  </div>
                </dl>

                <div className="mt-5">
                  <dt className="text-[11px] font-bold tracking-[0.12em] text-muted-foreground">
                    SCOPE OF CERTIFICATION
                  </dt>
                  <p className="mt-1 text-sm leading-relaxed text-ink/80">{cert.scope}</p>
                </div>

                <button
                  type="button"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-muted px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
                >
                  <LucideIcon name="Download" className="size-4" />
                  {cert.downloadLabel}
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Quality commitment */}
        <div className="mt-12 grid gap-6 rounded-xl border border-border bg-muted/60 p-8 sm:grid-cols-3">
          {[
            {
              icon: 'BadgeCheck',
              title: 'Certified Quality',
              text: 'ISO 9001:2015 quality management across all manufacturing processes.',
            },
            {
              icon: 'FileCheck2',
              title: 'Full Traceability',
              text: 'Material specification sheets and physical test reports available on request.',
            },
            {
              icon: 'Globe',
              title: 'Export Compliant',
              text: `Licensed exporter — IEC ${company.iec} — serving global markets.`,
            },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-lg bg-accent text-brand">
                <LucideIcon name={item.icon} className="size-6" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
