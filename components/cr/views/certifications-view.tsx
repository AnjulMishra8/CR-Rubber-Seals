import { certifications } from '@/lib/site-data'
import { qualityPolicy, qualityProcess } from '@/lib/site-content'
import { LucideIcon } from '@/components/cr/lucide-icon'
import { SectionHeading } from '@/components/cr/product-card'
import { CertificationsList } from '@/components/cr/certifications-list'

export function CertificationsView() {
  return (
    <div className="bg-background">
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Quality &amp; Compliance
          </p>
          <h1 className="max-w-3xl font-sans text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Quality Policy &amp; Certifications
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Stringent multi-stage quality control from raw material to dispatch.
          </p>
        </div>
      </section>

      {/* Quality policy */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" data-aos="fade-up">
        <SectionHeading align="left" eyebrow="OUR QUALITY POLICY" title="Excellence at Every Stage" />
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
          {qualityPolicy.map((para, index) => (
            <p key={para.slice(0, 24)} data-aos="fade-up" data-aos-delay={`${index * 50}`}>{para}</p>
          ))}
        </div>
      </section>



      {/* Certifications */}
      <section className="relative z-20 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div data-aos="fade-up">
          <SectionHeading eyebrow="OUR CERTIFICATIONS" title="Certified & Registered" />
        </div>
        <CertificationsList certifications={certifications} />
      </section>

      {/* Quality process */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div data-aos="fade-up">
          <SectionHeading
            eyebrow="QUALITY PROCESS"
            title="Five-Stage Quality Assurance"
            description="Samples for approval are provided as per requirement. Every order moves through five rigorous quality stages."
          />
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {qualityProcess.map((stage, index) => (
            <li
              key={stage.step}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
              data-aos="fade-up"
              data-aos-delay={`${index * 50}`}
            >
              <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 font-mono text-xs font-bold text-brand">
                {stage.step}
              </span>
              <h3 className="mt-4 font-sans text-lg font-bold text-ink">{stage.title}</h3>
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
