import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Playfair_Display, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/cr/header'
import { Footer } from '@/components/cr/footer'
import { WhatsAppButton } from '@/components/cr/whatsapp-button'

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  display: 'swap',
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title:
    'CR Rubber and Seals | Hydraulic Seals, O-Rings & Rubber Products — Navi Mumbai',
  description:
    'CR Rubber and Seals Pvt. Ltd. — ISO 9001:2015 certified manufacturer of hydraulic seals, O-rings, oil seals, PU products and custom rubber components. Sister company of Crown Rubber Works. Navi Mumbai. Export to Gulf, Singapore & Sri Lanka.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#dc1f26',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${playfair.variable} ${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
