# AV Maisonnier — Website

Private Villa Management. A trilingual (EN / RU / FR) marketing site built with Next.js
(App Router), TypeScript and Tailwind CSS, with a working, server-processed contact form.

## What's in this project

- Locale routing at `/en`, `/ru`, `/fr` (root `/` detects the browser language and
  redirects; the choice can be changed any time via the header switcher, and switching
  language keeps you on the same page).
- 10 pages per locale: Home, For Owners, Services, For Agencies, How It Works, About,
  Contact, Privacy Policy, Cookie Policy, Legal Notice.
- All copy is hand-written per language in `src/i18n/dictionaries/{en,ru,fr}.ts` — no
  machine translation, no placeholder text.
- A working contact form (`src/components/ContactForm.tsx`) posting to a server API
  route (`src/app/api/contact/route.ts`) that emails you via Resend, with honeypot
  spam protection, basic rate limiting, input validation/sanitization, and a
  localized auto-reply to the visitor.
- SEO metadata, Open Graph tags, hreflang alternates and an XML sitemap per locale.
- A cookie consent banner and three legal pages with clearly marked placeholders for
  the details that only you can provide (see "Before you publish" below).

## 1. Run it locally

Requirements: Node.js 20+ and npm.

```bash
npm install
cp .env.example .env.local   # then fill in RESEND_API_KEY, see step 3
npm run dev
```

Open http://localhost:3000 — it will redirect to `/en`, `/ru` or `/fr` depending on
your browser's language.

`npm run build` produces a production build; `npm run start` serves it.

## 2. Connect the domain (avmaisonnier.com)

1. Buy the domain from any registrar (e.g. Namecheap, GoDaddy, Cloudflare Registrar,
   OVH) if you don't already own it.
2. Deploy the project first (see step 5) so you have a `*.vercel.app` URL.
3. In your Vercel project, go to **Settings → Domains**, add `avmaisonnier.com` and
   `www.avmaisonnier.com`.
4. Vercel will show you DNS records (usually an `A` record for the root domain and a
   `CNAME` for `www`). Add those records at your registrar's DNS panel.
5. DNS changes can take a few minutes to 24 hours to propagate.

## 3. Set up contact@avmaisonnier.com and the sending domain

The form emails you via **Resend** (resend.com), which needs a verified sending
domain (not necessarily your inbox provider — you can keep Gmail/Google Workspace
for your actual mailbox and only use Resend to *send* the notification emails).

1. Create your real mailbox first: sign up for Google Workspace, Zoho Mail, or your
   registrar's email hosting, and create `contact@avmaisonnier.com`. This is the
   inbox that receives enquiries.
2. Create a free Resend account at https://resend.com.
3. In Resend, go to **Domains → Add Domain**, enter `avmaisonnier.com`, and add the
   DNS records it gives you (SPF, DKIM, and optionally DMARC) at your registrar.
4. Once the domain shows "Verified" in Resend, go to **API Keys** and create a key.
5. Put that key in `.env.local` (locally) and in your hosting provider's environment
   variables (in production) as `RESEND_API_KEY`.
6. Set `CONTACT_EMAIL=contact@avmaisonnier.com` (where enquiries are delivered) and
   `CONTACT_FROM_EMAIL=website@avmaisonnier.com` (the sending address; can be any
   address on the verified domain, it does not need its own mailbox).

Without `RESEND_API_KEY` set, the form will show the localized error message and log
a clear warning on the server — it fails safely, it does not crash the site.

### Alternative form services

If you'd rather not use Resend, `src/app/api/contact/route.ts` is a small, isolated
file — it can be swapped for Formspree, Web3Forms, or any transactional email API
without touching the rest of the site. The form component itself
(`ContactForm.tsx`) only knows about the `/api/contact` endpoint and its JSON
contract, so the frontend does not need to change.

## 4. Form protection notes

- **Honeypot**: a hidden `company_website` field. Real visitors never see or fill it;
  simple bots often do, and submissions with it filled are silently discarded.
- **Rate limiting**: a basic in-memory limiter (5 requests/minute per IP) in
  `src/lib/rateLimit.ts`. On serverless platforms this resets per instance, so treat
  it as a first line of defence, not a hard guarantee.
- **Validation & sanitization**: required fields, email format, and length limits are
  enforced both in the browser and on the server; all user text is HTML-escaped
  before being placed into the email bodies (`src/lib/sanitize.ts`).
- **Upgrading later**: to add Cloudflare Turnstile, render the Turnstile widget in
  `ContactForm.tsx` and verify the token inside `POST` in `route.ts` before sending —
  the code is structured so this is a small, additive change.

## 5. Deploy on Vercel

1. Push this project to a Git repository (GitHub/GitLab/Bitbucket).
2. Go to https://vercel.com/new and import the repository.
3. Framework preset: Next.js (auto-detected).
4. Add the environment variables from `.env.example` under **Settings →
   Environment Variables** (for Production, and Preview if you want the form to work
   on preview deployments too).
5. Deploy. Then connect the domain as described in step 2.

## 6. Legal details to fill in before publishing

The Legal Notice and Privacy Policy pages (in all three languages) intentionally use
bracketed placeholders instead of invented company information. Search the codebase
for these and replace them with your real details before going live:

- `[LEGAL COMPANY NAME]`
- `[REGISTRATION NUMBER]`
- `[REGISTERED ADDRESS]`
- `[DATA CONTROLLER DETAILS]`
- `[HOSTING PROVIDER DETAILS]`
- `[DATE TO BE CONFIRMED]` (set the actual "last updated" date once the copy is final)

They live in `src/i18n/dictionaries/en.ts`, `ru.ts` and `fr.ts`, inside the
`legal.privacy`, `legal.cookiePolicy` and `legal.legalNotice` objects — update all
three languages consistently.

## 7. Images

This build ships with abstract, CSS-only backgrounds (no stock photography) so it
never misrepresents a real property. Before publishing, replace them with licensed
or commissioned photography. Suggested shot list, matching the brief:

- Hero: a contemporary villa above the Mediterranean, no people, calm light.
- Villa exteriors: pools, terraces, gardens, architectural details, dusk/evening light.
- Interior details: prepared table settings, linens, a study or living room, without
  posed people.
- One or two candid, natural (not posed) shots of staff or a manager at work, used
  sparingly.
- Avoid: hotel imagery, mass-tourism scenes, keys-and-handshake clichés, stock-photo
  looking people.

Drop images into `public/images/` and reference them via `next/image` inside
`src/components/ui.tsx` (`SceneBackdrop`) or directly in each page — both support
`sizes`/responsive `srcset` and lazy-loading out of the box once you use
`next/image`.

## 8. Typography note

To keep this project buildable without any external network access, headings and
body text currently use elegant system font stacks (`--font-serif` / `--font-sans`
in `src/app/globals.css`) instead of a Google Fonts fetch at build time. For a closer
match to the original editorial-luxury brief, self-host **Noto Serif** (headings) and
**Inter** (body) with `next/font/local` — both cover Latin, Cyrillic and French
diacritics — or re-enable `next/font/google` in `src/app/layout.tsx` once you're
building on a machine/CI with normal internet access.

## 9. Pre-launch checklist

- [ ] Replace all legal placeholders (§6) in all three languages.
- [ ] Replace CSS placeholder backgrounds with real photography (§7).
- [ ] Verify the Resend domain and set `RESEND_API_KEY` / `CONTACT_EMAIL` /
      `CONTACT_FROM_EMAIL` in production.
- [ ] Send a real test enquiry on each language version and confirm both the
      notification email and the visitor's auto-reply arrive correctly.
- [ ] Re-read the RU and FR copy once more with a native speaker before launch.
- [ ] Check all pages at 320px, 375px, 390px, 430px, 768px, 1024px, 1280px, 1440px
      and 1920px widths — no horizontal scroll, no overlapping elements, mobile menu
      opens/closes cleanly, tap targets are comfortable.
- [ ] Confirm phone and email links are tappable on mobile.
- [ ] Run a Lighthouse pass (Performance / Accessibility / SEO) once real images are
      in place.
- [ ] Point `avmaisonnier.com` DNS at the deployment and confirm HTTPS is active.
- [ ] Update `siteUrl` in `src/i18n/config.ts` if the final domain differs.

## Project structure

```
src/
  app/
    layout.tsx            root <html>, header/footer, cookie banner
    page.tsx               redirects "/" to the default locale
    [locale]/
      layout.tsx            generateStaticParams for en/ru/fr
      page.tsx               Home
      owners/, services/, agencies/, how-it-works/, about/, contact/
      privacy-policy/, cookie-policy/, legal-notice/
    api/contact/route.ts   contact form handler (Resend)
    robots.ts, sitemap.ts
  components/               Header, Footer, CookieBanner, ContactForm, ui.tsx, ...
  i18n/
    config.ts               locales, default locale, site URL
    dictionary.types.ts      the shape every locale dictionary must satisfy
    dictionaries/{en,ru,fr}.ts
    getDictionary.ts
  lib/
    seo.ts                  per-page metadata + hreflang builder
    sanitize.ts, rateLimit.ts, emailTemplates.ts
  middleware.ts             locale detection/redirect
```
