'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { blogPosts } from '@/lib/site-data'
import { LucideIcon } from '@/components/cr/lucide-icon'

const categories = ['All Articles', ...Array.from(new Set(blogPosts.map((p) => p.category)))]

export function BlogsView() {
  const [active, setActive] = useState('All Articles')

  const filtered = useMemo(
    () => blogPosts.filter((p) => active === 'All Articles' || p.category === active),
    [active],
  )

  return (
    <div className="bg-background">
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Knowledge Hub
          </p>
          <h1 className="max-w-3xl font-serif text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Engineering Insights &amp; Technical Articles
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Deep-dives into compound engineering, manufacturing technology and quality standards
            from our engineering and quality teams.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                active === cat
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex h-40 items-center justify-center border-b border-border bg-ink">
                <LucideIcon name="FileText" className="size-12 text-primary/80" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="inline-flex w-fit rounded bg-accent px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] text-brand">
                  {post.category.toUpperCase()}
                </span>
                <h2 className="mt-4 font-serif text-xl font-bold text-ink text-balance">
                  <Link href={`/blogs/${post.slug}`} className="transition-colors hover:text-brand">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <LucideIcon name="User" className="size-3.5" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <LucideIcon name="Clock" className="size-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand transition-colors hover:text-brand-dark"
                >
                  Read Article
                  <LucideIcon name="ArrowRight" className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
