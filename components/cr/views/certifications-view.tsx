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
        <div className="relative z-20 mt-12 space-y-px border-t border-border">
          {certifications.map((cert, index) => (
            <article
              key={cert.id}
              className="group relative z-0 flex overflow-visible border-b border-border transition-all hover:bg-muted/50 group-hover:z-[1000]"
              data-aos="fade-up"
              data-aos-delay={`${index * 50}`}
            >
              {/* Left side - Title */}
              <div className="flex flex-1 items-center px-6 py-4 sm:py-5">
                <div className="flex items-center gap-4 w-full">
                  <div className="flex shrink-0 size-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <LucideIcon name={cert.icon} className="size-5" />
                  </div>
                  <h3 className="font-sans text-base font-semibold text-ink">
                    {cert.title}
                  </h3>
                </div>
              </div>

              {/* Expanded Preview Popup - Shown on hover */}
              {cert.preview && (
                <div className="pointer-events-none absolute left-1/2 top-1/2 z-[9999] w-96 -translate-x-1/2 -translate-y-1/2 scale-95 opacity-0 invisible transition-all duration-300 group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100 group-hover:visible">
                  <div className="overflow-hidden rounded-lg border border-border bg-background shadow-2xl">
                    <img
                      src={cert.preview}
                      alt={cert.title}
                      className="h-auto w-full object-contain bg-muted"
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                    />
                  </div>
                </div>
              )}

              {/* Download button - Always visible */}
              <div className="flex shrink-0 items-center px-4 sm:px-6">
                <a
                  href={cert.file}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Download ${cert.title}`}
                  className="inline-flex items-center justify-center size-10 rounded-full border border-border bg-background text-ink transition-all hover:border-brand hover:text-brand hover:bg-brand/5"
                >
                  <LucideIcon name="Download" className="size-5" />
                </a>
              </div>
            </article>
          ))}
        </div>
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
