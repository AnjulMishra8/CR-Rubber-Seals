import type { Metadata } from 'next'
import { ProductsView } from '@/components/cr/views/products-view'

export const metadata: Metadata = {
  title: 'Products & Catalogue — CR Rubber & Seals',
  description:
    'Explore hydraulic seals, oil seals, O-rings, polyurethane products, moulded rubber components and custom sealing kits — engineered to international standards.',
}

export default function Page() {
  return <ProductsView />
}
