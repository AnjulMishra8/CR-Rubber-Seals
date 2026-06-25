'use client'

import { useState, useTransition } from 'react'
import { company, inquiryProductCategories, findUsOptions } from '@/lib/site-content'
import { LucideIcon } from '@/components/cr/lucide-icon'
import { LinkedinIcon, InstagramIcon, YoutubeIcon } from '@/components/cr/brand-icons'
import { sendContactEnquiry } from '@/app/actions/send-enquiry'

const field =
  'w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-ink outline-none focus:border-brand focus:ring-1 focus:ring-brand'
const label = 'mb-1.5 block text-[11px] font-bold tracking-[0.12em] text-muted-foreground'

const phoneHref = `tel:${company.phone.replace(/\s/g, '')}`

const contactCards = [
  {
    icon: 'MapPin',
    title: 'Factory & Registered Address',
    lines: [company.addressFull],
  },
  {
    icon: 'Phone',
    title: 'Phone / WhatsApp',
    lines: [company.phone],
    hrefs: [phoneHref],
  },
  {
    icon: 'Mail',
    title: 'Email & Website',
    lines: [company.enquiryEmail, company.website],
    hrefs: [`mailto:${company.enquiryEmail}`, `https://${company.website}`],
  },
  {
    icon: 'Clock',
    title: 'Business Hours',
    lines: [company.businessHours],
  },
]

const socials = [
  { icon: LinkedinIcon, label: 'LinkedIn', href: company.social.linkedin },
  { icon: InstagramIcon, label: 'Instagram', href: company.social.instagram },
  { icon: YoutubeIcon, label: 'YouTube', href: company.social.youtube },
]

export function ContactView() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    const formData = new FormData(e.currentTarget)
    startTransition(async () => {
      const result = await sendContactEnquiry(formData)
      if (result.ok) {
        setSent(true)
      } else {
        setError(result.error ?? 'Something went wrong. Please try again.')
      }
    })
  }

  return (
    <div className="bg-background">
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Get In Touch
          </p>
          <h1 className="max-w-3xl font-sans text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Contact Us / Get a Quote
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Whether you need a standard seal or a custom solution machined to your exact
            specification — we&apos;re here to help. Fill in the enquiry form below or reach us
            directly. We respond within hours, not days.
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
                  <h3 className="font-serif text-base font-bold text-ink">{card.title}</h3>
                </div>
                <div className="mt-4 space-y-1.5">
                  {card.lines.map((line, i) =>
                    card.hrefs ? (
                      <a
                        key={line}
                        href={card.hrefs[i]}
                        className="block text-sm leading-relaxed text-ink/80 transition-colors hover:text-brand"
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

            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-11 items-center justify-center rounded-lg border border-border bg-card text-ink transition-colors hover:border-brand hover:text-brand"
                >
                  <s.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="flex size-14 items-center justify-center rounded-full bg-whatsapp/10 text-whatsapp">
                    <LucideIcon name="CheckCircle2" className="size-8" />
                  </div>
                  <h3 className="mt-4 font-sans text-2xl font-bold text-ink">Enquiry Sent</h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">
                    Thank you for reaching out. Our team will respond to your enquiry within hours,
                    not days.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 className="font-sans text-2xl font-bold text-ink">Send Us an Enquiry</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Fill out the form and our team will get back to you.
                  </p>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={label} htmlFor="name">
                        YOUR NAME *
                      </label>
                      <input id="name" name="name" required className={field} placeholder="Your name" />
                    </div>
                    <div>
                      <label className={label} htmlFor="phone">
                        PHONE NUMBER *
                      </label>
                      <input id="phone" name="phone" required className={field} placeholder="+91 ..." />
                    </div>
                    <div>
                      <label className={label} htmlFor="company">
                        COMPANY NAME *
                      </label>
                      <input id="company" name="company" required className={field} placeholder="Company name" />
                    </div>
                    <div>
                      <label className={label} htmlFor="position">
                        POSITION / FIELD
                      </label>
                      <input id="position" name="position" className={field} placeholder="Your role / field" />
                    </div>
                    <div>
                      <label className={label} htmlFor="email">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className={field}
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label className={label} htmlFor="category">
                        PRODUCT / CATEGORY REQUIRED *
                      </label>
                      <select id="category" name="category" required className={field} defaultValue="">
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
                        ENQUIRY DETAILS *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className={field}
                        placeholder="Size, material, quantity, application and urgency..."
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className={label} htmlFor="source">
                        HOW DID YOU FIND US?
                      </label>
                      <select id="source" name="source" className={field} defaultValue="">
                        <option value="" disabled>
                          Select an option (optional)
                        </option>
                        {findUsOptions.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {error && (
                    <p className="mt-5 rounded-md border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm font-medium text-destructive">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isPending}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                  >
                    <LucideIcon name={isPending ? 'Loader2' : 'Send'} className={`size-4 ${isPending ? 'animate-spin' : ''}`} />
                    {isPending ? 'Sending…' : 'Submit Enquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 overflow-hidden rounded-xl border border-border shadow-sm">
          <a href="https://maps.app.goo.gl/rYFdQfdsnCZAsAkB9" target="_blank" rel="noopener noreferrer" className="block h-[360px] w-full overflow-hidden">
            <iframe
              title="Crown Rubber Works location"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=32RJ%2BX6+Navi+Mumbai+Maharashtra&output=embed"
            />
          </a>
        </div>
      </section>
    </div>
  )
}
