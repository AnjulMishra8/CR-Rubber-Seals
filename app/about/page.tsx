import type { Metadata } from 'next'
import { AboutView } from '@/components/cr/views/about-view'

export const metadata: Metadata = {
  title: 'About Us — CR Rubber & Seals',
  description:
    'Founded in 1995 in Navi Mumbai, CR Rubber & Seals is one of India\'s most trusted manufacturers of precision seals and rubber products.',
}

export default function Page() {
  return <AboutView />
}
