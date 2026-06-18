'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import { company } from '@/lib/site-content'
import { hrefFor } from '@/components/cr/header'

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Products & Catalogue', id: 'products' },
  { label: 'About Us', id: 'about' },
  { label: 'Industries Served', id: 'industries' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Blogs', id: 'blogs' },
  { label: 'Contact Us', id: 'contact' },
]

export function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      <div className="border-b border-white/10 bg-black/30">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-3 text-center text-[11px] font-semibold tracking-wide text-slate-400 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span>
              GSTIN: <span className="text-slate-200">{company.gstin}</span>
            </span>
            <span className="text-white/20">|</span>
            <span>
              IEC CODE: <span className="text-slate-200">{company.iec}</span>
            </span>
            <span className="text-white/20">|</span>
            <span>
              QUALITY CERTIFICATION:{' '}
              <span className="text-slate-200">ISO 9001:2015</span>
            </span>
          </div>
          <span>
            CR Rubber &amp; Seals Private Limited © since {company.founded}
          </span>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="CR Rubber & Seals Private Limited"
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
            />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-base font-bold text-white">
                CR RUBBER &amp; SEALS
              </span>
              <span className="text-[10px] font-semibold tracking-[0.18em] text-slate-400">
                PRIVATE LIMITED
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            India&apos;s trusted manufacturer, exporter and supplier of
            world-class seals and rubber products since 1995. ISO 9001:2015
            certified. Serving 12+ industries with 100+ product types.
          </p>
          <div className="mt-4 inline-block rounded border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-brand">
            ESTABLISHED 1995 • NAVI MUMBAI, INDIA
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.2em] text-white">
            QUICK LINKS
          </h4>
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

        <div>
          <h4 className="text-xs font-bold tracking-[0.2em] text-white">
            CONTACT DETAILS
          </h4>
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
              href={`tel:${company.phoneAlt.replace(/\s/g, '')}`}
              className="flex items-center gap-2.5 transition-colors hover:text-brand"
            >
              <Phone className="h-4 w-4 shrink-0 text-brand" />
              {company.phoneAlt}
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.2em] text-white">
            ENQUIRIES
          </h4>
          <div className="mt-4 space-y-4 text-sm">
            <div>
              <p className="text-[10px] font-bold tracking-[0.15em] text-slate-500">
                ENQUIRIES EMAIL
              </p>
              <a
                href={`mailto:${company.enquiryEmail}`}
                className="mt-1 flex items-center gap-2 text-slate-300 transition-colors hover:text-brand"
              >
                <Mail className="h-4 w-4 shrink-0 text-brand" />
                {company.enquiryEmail}
              </a>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.15em] text-slate-500">
                DIRECTOR EMAIL
              </p>
              <a
                href={`mailto:${company.directorEmail}`}
                className="mt-1 flex items-center gap-2 text-slate-300 transition-colors hover:text-brand"
              >
                <Mail className="h-4 w-4 shrink-0 text-brand" />
                {company.directorEmail}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 CR Rubber &amp; Seals Private Limited. All rights reserved.</p>
          <p className="font-semibold text-slate-400">{company.website}</p>
        </div>
      </div>
    </footer>
  )
}
