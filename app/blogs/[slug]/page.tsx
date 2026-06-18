import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/site-data'
import { BlogDetailView } from '@/components/cr/views/blog-detail-view'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return { title: 'Article Not Found — CR Rubber & Seals' }
  return {
    title: `${post.title} — CR Rubber & Seals`,
    description: post.excerpt,
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()
  return <BlogDetailView post={post} />
}
