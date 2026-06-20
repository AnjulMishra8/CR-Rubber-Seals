'use server'

import { Resend } from 'resend'
import { company } from '@/lib/site-content'

const resend = new Resend(process.env.RESEND_API_KEY)

// Sender: Uses the verified crrubber.in domain
const FROM = process.env.ENQUIRY_FROM_EMAIL || 'CR Rubber Website <website@crrubber.in>'

// Recipient: All enquiries sent to enquiry@crrubber.in with reply-to set to customer email
const TO = process.env.ENQUIRY_TO_EMAIL || company.enquiryEmail

export type EnquiryResult = { ok: boolean; error?: string }

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function row(label: string, value: string) {
  if (!value) return ''
  return `<tr>
    <td style="padding:6px 12px;font-weight:600;color:#0f172a;border-bottom:1px solid #e2e8f0;vertical-align:top;white-space:nowrap;">${escapeHtml(
      label,
    )}</td>
    <td style="padding:6px 12px;color:#334155;border-bottom:1px solid #e2e8f0;">${escapeHtml(
      value,
    ).replace(/\n/g, '<br/>')}</td>
  </tr>`
}

function buildEmail(title: string, intro: string, fields: [string, string][]) {
  const rows = fields.map(([l, v]) => row(l, v)).join('')
  return `<div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto;">
    <div style="background:#dc2626;color:#fff;padding:18px 24px;border-radius:8px 8px 0 0;">
      <h1 style="margin:0;font-size:18px;">${escapeHtml(title)}</h1>
      <p style="margin:4px 0 0;font-size:13px;opacity:.9;">${escapeHtml(intro)}</p>
    </div>
    <table style="width:100%;border-collapse:collapse;border:1px solid #e2e8f0;border-top:none;font-size:14px;">
      <tbody>${rows}</tbody>
    </table>
    <p style="font-size:12px;color:#94a3b8;margin-top:16px;">
      Sent automatically from the CR Rubber and Seals website.
    </p>
  </div>`
}

export async function sendContactEnquiry(
  formData: FormData,
): Promise<EnquiryResult> {
  const get = (k: string) => String(formData.get(k) ?? '').trim()

  const name = get('name')
  const email = get('email')
  const phone = get('phone')
  const companyName = get('company')
  const position = get('position')
  const category = get('category')
  const message = get('message')
  const source = get('source')

  if (!name || !email || !phone || !companyName || !category || !message) {
    return { ok: false, error: 'Please fill in all required fields.' }
  }

  if (!process.env.RESEND_API_KEY) {
    return { ok: false, error: 'Email service is not configured.' }
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `New Enquiry — ${category} — ${companyName}`,
      html: buildEmail(
        'New Website Enquiry',
        'A new enquiry was submitted via the Contact / Get a Quote form.',
        [
          ['Name', name],
          ['Email', email],
          ['Phone', phone],
          ['Company', companyName],
          ['Position / Field', position],
          ['Product / Category', category],
          ['Enquiry Details', message],
          ['How did you find us?', source],
        ],
      ),
    })

    if (error) {
      console.log('[v0] Resend error (contact):', error)
      return { ok: false, error: 'Could not send your enquiry. Please try again.' }
    }
    return { ok: true }
  } catch (err) {
    console.log('[v0] sendContactEnquiry exception:', err)
    return { ok: false, error: 'Could not send your enquiry. Please try again.' }
  }
}

export async function sendQuoteRequest(
  formData: FormData,
): Promise<EnquiryResult> {
  const get = (k: string) => String(formData.get(k) ?? '').trim()

  const product = get('product')
  const name = get('name')
  const email = get('email')
  const phone = get('phone')
  const companyName = get('company')
  const material = get('material')
  const hardness = get('hardness')
  const quantity = get('quantity')
  const certification = get('certification')
  const details = get('details')

  if (!name || !email || !companyName || !quantity) {
    return { ok: false, error: 'Please fill in all required fields.' }
  }

  if (!process.env.RESEND_API_KEY) {
    return { ok: false, error: 'Email service is not configured.' }
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `Quotation Request — ${product || 'General'} — ${companyName}`,
      html: buildEmail(
        'Technical Quotation Request',
        'A new quotation request was submitted from the products page.',
        [
          ['Product', product],
          ['Name', name],
          ['Email', email],
          ['Phone', phone],
          ['Company', companyName],
          ['Material Spec', material],
          ['Hardness', hardness],
          ['Quantity (units)', quantity],
          ['Certifications', certification],
          ['Application Details', details],
        ],
      ),
    })

    if (error) {
      console.log('[v0] Resend error (quote):', error)
      return { ok: false, error: 'Could not send your request. Please try again.' }
    }
    return { ok: true }
  } catch (err) {
    console.log('[v0] sendQuoteRequest exception:', err)
    return { ok: false, error: 'Could not send your request. Please try again.' }
  }
}
