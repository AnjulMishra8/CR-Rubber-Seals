import type { Metadata } from 'next'
import { IndustriesView } from '@/components/cr/views/industries-view'

export const metadata: Metadata = {
  title: 'Industries Served — CR Rubber & Seals',
  description:
    'Sealing solutions for hydraulics, automotive, mining, oil & gas, food processing, pharmaceuticals and more.',
}

export default function Page() {
  return <IndustriesView />
}
