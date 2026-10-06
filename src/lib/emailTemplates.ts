import { escapeHtml } from "./sanitize";
import type { Locale } from "@/i18n/config";

export interface ContactPayload {
  locale: Locale;
  fullName: string;
  email: string;
  phone: string;
  preferredLanguage: string;
  contactingAs: string;
  propertyLocation: string;
  subject: string;
  message: string;
  preferredContactMethod: string;
  pageUrl: string;
  submittedAt: string;
}

function row(label: string, value: string): string {
  if (!value) return "";
  return `<tr><td style="padding:6px 12px 6px 0;color:#6b6558;font-size:13px;vertical-align:top;white-space:nowrap;">${escapeHtml(
    label
  )}</td><td style="padding:6px 0;color:#22201d;font-size:14px;">${escapeHtml(value)}</td></tr>`;
}

export function buildNotificationEmail(payload: ContactPayload) {
  const subjectLine = payload.subject
    ? `AN21 — Enquiry: ${payload.subject}`
    : `AN21 — New enquiry from ${payload.fullName}`;

  const html = `
  <div style="font-family:Georgia,'Times New Roman',serif;background:#f7f3ec;padding:32px;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e4ddd0;padding:32px;">
      <p style="letter-spacing:0.2em;text-transform:uppercase;font-size:11px;color:#a9865c;margin:0 0 4px;">AN21</p>
      <h1 style="font-size:20px;margin:0 0 20px;color:#22201d;">New website enquiry</h1>
      <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
        ${row("Name", payload.fullName)}
        ${row("Email", payload.email)}
        ${row("Phone", payload.phone)}
        ${row("Contacting as", payload.contactingAs)}
        ${row("Property location", payload.propertyLocation)}
        ${row("Subject", payload.subject)}
        ${row("Preferred contact method", payload.preferredContactMethod)}
        ${row("Form language", payload.preferredLanguage)}
        ${row("Submitted", payload.submittedAt)}
        ${row("Page URL", payload.pageUrl)}
      </table>
      <div style="margin-top:20px;padding-top:16px;border-top:1px solid #eee2d0;">
        <p style="font-size:13px;color:#6b6558;margin:0 0 6px;">Message</p>
        <p style="font-size:14px;color:#22201d;white-space:pre-wrap;margin:0;">${escapeHtml(
          payload.message
        )}</p>
      </div>
    </div>
  </div>`;

  return { subject: subjectLine, html };
}

const confirmationCopy: Record<
  Locale,
  { subject: string; greeting: (name: string) => string; body: string; signOff: string }
> = {
  en: {
    subject: "Your enquiry to AN21",
    greeting: (name) => `Dear ${name},`,
    body: "Thank you. Your enquiry has been received. We will contact you privately.",
    signOff: "Artem\nCEO, AN21\n+39 329 664 85 63\noffice@an21.homes",
  },
  ru: {
    subject: "Ваш запрос в AN21",
    greeting: (name) => `Уважаем(ая) ${name},`,
    body: "Спасибо. Ваш запрос получен. Мы свяжемся с вами конфиденциально.",
    signOff: "Artem\nCEO, AN21\n+39 329 664 85 63\noffice@an21.homes",
  },
  fr: {
    subject: "Votre demande auprès d'AN21",
    greeting: (name) => `Cher/Chère ${name},`,
    body: "Merci. Votre demande a bien été reçue. Nous vous contacterons de manière confidentielle.",
    signOff: "Artem\nCEO, AN21\n+39 329 664 85 63\noffice@an21.homes",
  },
};

export function buildConfirmationEmail(payload: ContactPayload) {
  const locale: Locale = ["en", "ru", "fr"].includes(payload.preferredLanguage)
    ? (payload.preferredLanguage as Locale)
    : payload.locale;

  const copy = confirmationCopy[locale] ?? confirmationCopy.en;

  const html = `
  <div style="font-family:Georgia,'Times New Roman',serif;background:#f7f3ec;padding:32px;">
    <div style="max-width:520px;margin:0 auto;background:#ffffff;border:1px solid #e4ddd0;padding:32px;">
      <p style="letter-spacing:0.2em;text-transform:uppercase;font-size:11px;color:#a9865c;margin:0 0 4px;">AN21</p>
      <p style="font-size:15px;color:#22201d;">${escapeHtml(copy.greeting(payload.fullName))}</p>
      <p style="font-size:15px;color:#22201d;line-height:1.6;">${escapeHtml(copy.body)}</p>
      <p style="font-size:13px;color:#6b6558;white-space:pre-line;margin-top:28px;">${escapeHtml(
        copy.signOff
      )}</p>
    </div>
  </div>`;

  return { subject: copy.subject, html };
}
