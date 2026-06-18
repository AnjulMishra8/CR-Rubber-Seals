'use client'

import { useEffect, useState, useTransition } from 'react'
import { X, Loader2 } from 'lucide-react'
import { sendQuoteRequest } from '@/app/actions/send-enquiry'

const materials = [
  'PU Formulation',
  'NBR Formulation',
  'FPM / Viton Formulation',
  'POM Formulation',
  'PTFE Formulation',
  'Natural Rubber / SBR Blend',
  'Technical consultation needed',
]

const hardness = [
  '40 Shore A (Soft seals)',
  '50 Shore A',
  '60 Shore A',
  '70 Shore A (Standard seals)',
  '80 Shore A (High pressure)',
  '90 Shore A (Heavy mechanical)',
]

const certs = [
  'Standard ISO 9001:2015 Compliance',
  'ISO 9001:2015 Certificate Attached',
  'Material Specification Sheet Required',
  'Physical Test Report Required',
]

const field =
  'w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-ink outline-none focus:border-brand focus:ring-1 focus:ring-brand'
const label =
  'mb-1.5 block text-[10px] font-bold tracking-[0.12em] text-muted-foreground'

export function InquiryModal({
  productName,
  onClose,
}: {
  productName: string | null
  onClose: () => void
}) {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()
  const open = productName !== null

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    const formData = new FormData(e.currentTarget)
    startTransition(async () => {
      const result = await sendQuoteRequest(formData)
      if (result.ok) {
        setSent(true)
      } else {
        setError(result.error ?? 'Something went wrong. Please try again.')
      }
    })
  }

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) {
      setSent(false)
      setError(null)
    }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <div
        className="my-4 w-full max-w-2xl rounded-xl bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Technical Quotation Request"
      >
        <div className="flex items-start justify-between gap-4 rounded-t-xl bg-ink px-6 py-4 text-white">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-brand">
              INDUSTRIAL PURCHASE SPECIFICATION DESK
            </p>
            <h3 className="font-serif text-xl font-bold">
              Technical Quotation Request
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-1 rounded text-xs font-bold tracking-wide text-slate-300 hover:text-white"
            aria-label="Close"
          >
            <X className="h-5 w-5" /> CLOSE
          </button>
        </div>

        {sent ? (
          <div className="px-6 py-12 text-center">
            <h4 className="font-serif text-xl font-bold text-ink">
              Thank you — your request has been recorded.
            </h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Our specification desk will respond within 24 hours.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 rounded-md bg-brand px-5 py-2.5 text-sm font-bold text-primary-foreground hover:bg-brand-dark"
            >
              Close
            </button>
          </div>
        ) : (
          <form className="space-y-5 px-6 py-6" onSubmit={handleSubmit}>
            <input type="hidden" name="product" value={productName ?? ''} />
            {productName && (
              <div className="rounded-md border border-brand/30 bg-accent px-4 py-3">
                <p className="text-[10px] font-bold tracking-[0.15em] text-brand">
                  SELECTED · TARGET COMPOUND ITEM:
                </p>
                <p className="mt-0.5 font-serif text-lg font-bold text-ink">
                  {productName}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className={label}>YOUR FULL NAME*</label>
                <input name="name" className={field} required />
              </div>
              <div>
                <label className={label}>CORPORATE EMAIL ADDRESS*</label>
                <input name="email" type="email" className={field} required />
              </div>
              <div>
                <label className={label}>CONTACT NUMBER</label>
                <input name="phone" className={field} />
              </div>
              <div>
                <label className={label}>COMPANY / ORGANIZATION NAME*</label>
                <input name="company" className={field} required />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className={label}>ELASTOMER MATERIAL SPECIFICATION</label>
                <select name="material" className={field} defaultValue="">
                  <option value="" disabled>
                    Select material
                  </option>
                  {materials.map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={label}>DESIRED HARDNESS DUROMETER</label>
                <select name="hardness" className={field} defaultValue="">
                  <option value="" disabled>
                    Select hardness
                  </option>
                  {hardness.map((h) => (
                    <option key={h}>{h}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={label}>PURCHASE QUANTITY NEEDED (UNITS)*</label>
                <input name="quantity" className={field} required />
              </div>
              <div>
                <label className={label}>MATERIAL CERTIFICATIONS REQUIRED</label>
                <select name="certification" className={field} defaultValue="">
                  <option value="" disabled>
                    Select certification
                  </option>
                  {certs.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className={label}>
                APPLICATION DETAILS & CRITICAL DIMENSIONS
              </label>
              <textarea name="details" rows={4} className={field} />
            </div>

            {error && (
              <p className="rounded-md border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm font-medium text-destructive">
                {error}
              </p>
            )}

            <div className="flex flex-col gap-3 sm:flex-row-reverse">
              <button
                type="submit"
                disabled={isPending}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-2.5 text-sm font-bold text-primary-foreground hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isPending && <Loader2 className="size-4 animate-spin" />}
                {isPending ? 'Transmitting…' : 'Transmit Specifications'}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="rounded-md border border-border px-6 py-2.5 text-sm font-semibold text-ink hover:bg-muted"
              >
                Dismiss
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
