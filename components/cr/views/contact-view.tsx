'use client'

import { useState } from 'react'
import { company, inquiryProductCategories } from '@/lib/site-content'
import { LucideIcon } from '@/components/cr/lucide-icon'

const field =
  'w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-ink outline-none focus:border-brand focus:ring-1 focus:ring-brand'
const label = 'mb-1.5 block text-[11px] font-bold tracking-[0.12em] text-muted-foreground'

const contactCards = [
  {
    icon: 'Phone',
    title: 'Call Us',
    lines: [company.phone, company.phoneAlt],
    hrefs: [`tel:${company.phone.replace(/\s/g, '')}`, `tel:${company.phoneAlt.replace(/\s/g, '')}`],
  },
  {
    icon: 'Mail',
    title: 'Email Us',
    lines: [company.enquiryEmail, company.directorEmail],
    hrefs: [`mailto:${company.enquiryEmail}`, `mailto:${company.directorEmail}`],
  },
  {
    icon: 'MapPin',
    title: 'Visit Us',
    lines: [company.addressFull],
  },
]

export function ContactView() {
  const [sent, setSent] = useState(false)

  return (
    <div className="bg-background">
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Get In Touch
          </p>
          <h1 className="max-w-3xl font-serif text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Let&apos;s Engineer Your Sealing Solution
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Whether you need a standard catalogue seal or a fully custom profile, our team is ready
            to help. Reach out for technical consultation, quotations and sample requests.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Contact details */}
          <div className="space-y-6 lg:col-span-1">
            {contactCards.map((card) => (
              <div key={card.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-brand">
                    <LucideIcon name={card.icon} className="size-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-ink">{card.title}</h3>
                </div>
                <div className="mt-4 space-y-1.5">
                  {card.lines.map((line, i) =>
                    card.hrefs ? (
                      <a
                        key={line}
                        href={card.hrefs[i]}
                        className="block text-sm text-ink/80 transition-colors hover:text-brand"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-sm leading-relaxed text-ink/80">
                        {line}
                      </p>
                    ),
                  )}
                </div>
              </div>
            ))}

            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-whatsapp-dark"
            >
              <LucideIcon name="MessageCircle" className="size-5" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="flex size-14 items-center justify-center rounded-full bg-whatsapp/10 text-whatsapp">
                    <LucideIcon name="CheckCircle2" className="size-8" />
                  </div>
                  <h3 className="mt-4 font-serif text-2xl font-bold text-ink">Message Sent</h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">
                    Thank you for reaching out. Our team will respond to your enquiry within one
                    business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                  }}
                >
                  <h2 className="font-serif text-2xl font-bold text-ink">Send Us a Message</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Fill out the form and our engineering team will get back to you.
                  </p>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={label} htmlFor="name">
                        FULL NAME *
                      </label>
                      <input id="name" required className={field} placeholder="Your name" />
                    </div>
                    <div>
                      <label className={label} htmlFor="company">
                        COMPANY
                      </label>
                      <input id="company" className={field} placeholder="Company name" />
                    </div>
                    <div>
                      <label className={label} htmlFor="email">
                        EMAIL *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className={field}
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label className={label} htmlFor="phone">
                        PHONE
                      </label>
                      <input id="phone" className={field} placeholder="+91 ..." />
                    </div>
                    <div className="sm:col-span-2">
                      <label className={label} htmlFor="category">
                        PRODUCT CATEGORY
                      </label>
                      <select id="category" className={field} defaultValue="">
                        <option value="" disabled>
                          Select a category
                        </option>
                        {inquiryProductCategories.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className={label} htmlFor="message">
                        MESSAGE *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        className={field}
                        placeholder="Tell us about your application, sizes, materials and quantities..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-brand-dark sm:w-auto"
                  >
                    <LucideIcon name="Send" className="size-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 overflow-hidden rounded-xl border border-border shadow-sm">
          <iframe
            title="CR Rubber & Seals location"
            className="h-[360px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`}
          />
        </div>
      </section>
    </div>
  )
}
