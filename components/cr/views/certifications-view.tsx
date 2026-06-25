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
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div data-aos="fade-up">
          <SectionHeading eyebrow="OUR CERTIFICATIONS" title="Certified & Registered" />
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <article
              key={cert.id}
              className="group relative h-48 cursor-pointer overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
              data-aos="zoom-in"
              data-aos-delay={`${index * 50}`}
            >
              {/* Background Preview Image - Hidden by default, shown on hover */}
              {cert.preview && (
                <img
                  src={cert.preview}
                  alt={cert.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              )}

              {/* Dark overlay for better text contrast on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent opacity-100 transition-opacity duration-300 group-hover:from-ink/95 group-hover:via-ink/70" />

              {/* Compact Title and Icon - Always Visible */}
              <div className="relative z-10 flex h-full flex-col items-center justify-center p-4 text-center">
                <div className="flex size-14 items-center justify-center rounded-lg bg-brand/80 text-primary-foreground transition-all duration-300 group-hover:scale-110">
                  <LucideIcon name={cert.icon} className="size-7" />
                </div>
                <h3 className="mt-4 font-sans text-lg font-bold text-white text-balance">
                  {cert.title}
                </h3>
              </div>

              {/* Expanded Content - Shown on Hover */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-end bg-gradient-to-t from-ink/95 to-ink/40 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="w-full space-y-3">
                  <p className="text-center text-sm leading-relaxed text-slate-200">
                    {cert.summary}
                  </p>
                  <a
                    href={cert.file}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full border border-primary bg-brand px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-brand/90"
                  >
                    <LucideIcon name="Download" className="size-4" />
                    {cert.downloadLabel}
                  </a>
                </div>
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
