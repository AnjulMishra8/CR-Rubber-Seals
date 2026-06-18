import Link from 'next/link'
import { industries } from '@/lib/site-data'
import { LucideIcon } from '@/components/cr/lucide-icon'

export function IndustriesView() {
  return (
    <div className="bg-background">
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Industries We Serve
          </p>
          <h1 className="max-w-3xl font-serif text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Sealing Solutions for Every Sector
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            From hydraulics and automotive to food processing and pharmaceuticals, our seals are
            engineered to meet the precise challenges, standards and materials each industry demands.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {industries.map((ind) => (
            <article
              key={ind.id}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent text-brand">
                  <LucideIcon name={ind.iconName} className="size-6" />
                </div>
                <h2 className="font-serif text-xl font-bold text-ink">{ind.name}</h2>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {ind.description}
              </p>

              <dl className="mt-5 space-y-3 text-sm">
                <div>
                  <dt className="text-[11px] font-bold tracking-[0.12em] text-brand">
                    KEY CHALLENGES
                  </dt>
                  <dd className="mt-1 text-ink/80">{ind.keyChallenges}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-bold tracking-[0.12em] text-brand">
                    SOLUTIONS PROVIDED
                  </dt>
                  <dd className="mt-1 text-ink/80">{ind.solutionsProvided}</dd>
                </div>
              </dl>

              <div className="mt-5 flex flex-wrap gap-2">
                {ind.recommendedMaterials.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-border bg-muted px-2.5 py-1 text-[11px] font-semibold text-ink/70"
                  >
                    {m}
                  </span>
                ))}
              </div>

              <div className="mt-4 border-t border-border pt-4">
                <p className="text-[11px] font-bold tracking-[0.12em] text-muted-foreground">
                  STANDARDS COMPLIED
                </p>
                <p className="mt-1 font-mono text-xs text-ink/70">
                  {ind.standardsComplied.join('  •  ')}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-muted/60 p-8 text-center">
          <h3 className="font-serif text-2xl font-bold text-ink text-balance">
            Don&apos;t see your industry?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Our engineering team develops custom sealing solutions for virtually any application.
            Talk to us about your requirements.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-brand-dark"
          >
            Contact Our Engineers
            <LucideIcon name="ArrowRight" className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
