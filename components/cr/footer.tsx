'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail, Globe } from 'lucide-react'
import { company, footerProductCategories } from '@/lib/site-content'
import { hrefFor } from '@/components/cr/header'

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About Us', id: 'about' },
  { label: 'Products', id: 'products' },
  { label: 'Quality & Certifications', id: 'certifications' },
  { label: 'Industries We Serve', id: 'industries' },
  { label: 'Contact Us / Get a Quote', id: 'contact' },
]

export function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* About */}
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="CR Rubber and Seals Private Limited"
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
            />
            <span className="flex flex-col leading-none">
              <span className="font-[family-name:var(--font-geist-sans)] text-base font-bold text-white">
                CR RUBBER &amp; SEALS
              </span>
              <span className="text-[10px] font-semibold tracking-[0.18em] text-slate-400">
                PRIVATE LIMITED
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Sister company of Crown Rubber Works — manufacturer, exporter and supplier of
            world-class hydraulic seals, oil seals, PU products and moulded rubber components.
            Backed by 30 years of group expertise.
          </p>
          <div className="mt-4 inline-block rounded border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-brand">
            TOTAL SEALING SOLUTIONS
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold tracking-[0.2em] text-white">QUICK LINKS</h4>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={hrefFor(link.id)}
                  className="text-sm text-slate-400 transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Categories */}
        <div>
          <h4 className="text-xs font-bold tracking-[0.2em] text-white">PRODUCT CATEGORIES</h4>
          <ul className="mt-4 space-y-2.5">
            {footerProductCategories.map((cat) => (
              <li key={cat}>
                <Link
                  href="/products"
                  className="text-sm text-slate-400 transition-colors hover:text-brand"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xs font-bold tracking-[0.2em] text-white">CONTACT INFO</h4>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <p className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span className="whitespace-pre-line">{company.addressShort}</span>
            </p>
            <a
              href={`tel:${company.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2.5 transition-colors hover:text-brand"
            >
              <Phone className="h-4 w-4 shrink-0 text-brand" />
              {company.phone}
            </a>
            <a
              href={`mailto:${company.enquiryEmail}`}
              className="flex items-center gap-2.5 transition-colors hover:text-brand"
            >
              <Mail className="h-4 w-4 shrink-0 text-brand" />
              {company.enquiryEmail}
            </a>
            <a
              href={`https://${company.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 transition-colors hover:text-brand"
            >
              <Globe className="h-4 w-4 shrink-0 text-brand" />
              {company.website}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2025 CR Rubber and Seals Private Limited. All rights reserved.</p>
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-semibold text-slate-400">
            <span>GSTIN: {company.gstin}</span>
            <span className="text-white/20">|</span>
            <span>IEC: {company.iec}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
