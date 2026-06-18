import type { Metadata } from 'next'
import { CertificationsView } from '@/components/cr/views/certifications-view'

export const metadata: Metadata = {
  title: 'Certifications & Standards — CR Rubber & Seals',
  description:
    'ISO 9001:2015 certified quality management and adherence to global manufacturing standards.',
}

export default function Page() {
  return <CertificationsView />
}
