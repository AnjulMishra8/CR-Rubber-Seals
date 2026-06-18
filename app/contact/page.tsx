import type { Metadata } from 'next'
import { ContactView } from '@/components/cr/views/contact-view'

export const metadata: Metadata = {
  title: 'Contact Us — CR Rubber & Seals',
  description:
    'Reach out for technical consultation, quotations and sample requests. Navi Mumbai, India.',
}

export default function Page() {
  return <ContactView />
}
