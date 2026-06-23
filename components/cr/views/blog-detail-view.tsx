import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { blogPosts } from '@/lib/site-data'
import { LucideIcon } from '@/components/cr/lucide-icon'

type Post = (typeof blogPosts)[number]

export function BlogDetailView({ post }: { post: Post }) {
  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 2)

  return (
    <div className="bg-background">
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-3xl px-4 pb-14 pt-28 sm:px-6 lg:px-8 lg:pb-16 lg:pt-32">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-primary"
          >
            <LucideIcon name="ArrowLeft" className="size-4" />
            Back to Blogs
          </Link>
          <span className="mt-6 inline-flex w-fit rounded bg-white/10 px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] text-primary">
            {post.category.toUpperCase()}
          </span>
          <h1 className="mt-4 font-sans text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-300">
            <span className="flex items-center gap-1.5">
              <LucideIcon name="User" className="size-4 text-primary" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <LucideIcon name="Clock" className="size-4 text-primary" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose-cr">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>

        <div className="mt-12 rounded-xl border border-border bg-muted/60 p-6">
          <h3 className="font-sans text-lg font-bold text-ink">
            Need help selecting the right seal?
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Our engineering team is ready to help with material selection, custom profiles and
            technical specifications.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-brand-dark"
          >
            Talk to an Engineer
            <LucideIcon name="ArrowRight" className="size-4" />
          </Link>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-border bg-muted/40 py-12">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-sans text-2xl font-bold text-ink">Related Articles</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/blogs/${p.slug}`}
                  className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <span className="text-[10px] font-bold tracking-[0.12em] text-brand">
                    {p.category.toUpperCase()}
                  </span>
                  <h3 className="mt-3 font-sans text-lg font-bold text-ink transition-colors group-hover:text-brand">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
