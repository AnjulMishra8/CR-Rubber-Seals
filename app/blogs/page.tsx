import type { Metadata } from 'next'
import { BlogsView } from '@/components/cr/views/blogs-view'

export const metadata: Metadata = {
  title: 'Blogs — CR Rubber & Seals',
  description:
    'Engineering insights on compound selection, CNC machined seals, ISO tolerances and manufacturing technology.',
}

export default function Page() {
  return <BlogsView />
}
