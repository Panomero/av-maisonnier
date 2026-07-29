import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { cleanText, isValidEmail } from "@/lib/sanitize";
import { isRateLimited } from "@/lib/rateLimit";
import { buildConfirmationEmail, buildNotificationEmail } from "@/lib/emailTemplates";
import { isLocale, defaultLocale } from "@/i18n/config";

export const runtime = "nodejs";

interface Body {
  locale?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  preferredLanguage?: string;
  contactingAs?: string;
  propertyLocation?: string;
  subject?: string;
  message?: string;
  preferredContactMethod?: string;
  pageUrl?: string;
  company_website?: string; // honeypot, should always be empty
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "rate_limited" },
      { status: 429 }
    );
  }

  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: bots that fill every field will populate this hidden input.
  if (body.company_website && body.company_website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const locale = isLocale(body.locale ?? "") ? (body.locale as string) : defaultLocale;

  const fullName = cleanText(body.fullName ?? "", 200);
  const email = cleanText(body.email ?? "", 254);
  const phone = cleanText(body.phone ?? "", 60);
  const preferredLanguage = cleanText(body.preferredLanguage ?? locale, 5);
  const contactingAs = cleanText(body.contactingAs ?? "", 60);
  const propertyLocation = cleanText(body.propertyLocation ?? "", 200);
  const subject = cleanText(body.subject ?? "", 200);
  const message = cleanText(body.message ?? "", 4000);
  const preferredContactMethod = cleanText(body.preferredContactMethod ?? "", 60);
  const pageUrl = cleanText(body.pageUrl ?? "", 300);

  if (!fullName || !email || !message || !contactingAs) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const payload = {
    locale: locale as "en" | "ru" | "fr",
    fullName,
    email,
    phone,
    preferredLanguage,
    contactingAs,
    propertyLocation,
    subject,
    message,
    preferredContactMethod,
    pageUrl,
    submittedAt: new Date().toISOString(),
  };

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL || "contact@avmaisonnier.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "website@avmaisonnier.com";

  if (!apiKey) {
    // No provider configured yet — fail loudly in server logs but do not
    // expose configuration details to the client.
    console.error(
      "[contact] RESEND_API_KEY is not set. See .env.example for setup instructions."
    );
    return NextResponse.json({ ok: false, error: "email_not_configured" }, { status: 500 });
  }

  try {
    const resend = new Resend(apiKey);
    const notification = buildNotificationEmail(payload);
    const confirmation = buildConfirmationEmail(payload);

    await resend.emails.send({
      from: `AV Maisonnier Website <${fromEmail}>`,
      to: contactEmail,
      replyTo: email,
      subject: notification.subject,
      html: notification.html,
    });

    await resend.emails.send({
      from: `AV Maisonnier <${fromEmail}>`,
      to: email,
      subject: confirmation.subject,
      html: confirmation.html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Failed to send email", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
