"use client";

import { useRef, useState, type FormEvent } from "react";
import type { Dictionary } from "@/i18n/dictionary.types";
import type { Locale } from "@/i18n/config";
import { localeFullNames, locales } from "@/i18n/config";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full border border-line bg-offwhite px-4 py-3 text-[0.95rem] text-charcoal placeholder:text-charcoal/40 focus:border-bronze focus:outline-none transition-colors";
const labelClasses = "block text-xs tracking-[0.12em] uppercase text-charcoal/70 mb-2";

export default function ContactForm({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const f = dict.contact.form;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: if filled, silently pretend success without sending.
    if ((data.get("company_website") as string)?.trim()) {
      setStatus("success");
      return;
    }

    if (!data.get("consent")) {
      setError(dict.common.requiredField);
      return;
    }

    setStatus("submitting");
    setError(null);

    const payload = {
      locale,
      fullName: String(data.get("fullName") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      preferredLanguage: String(data.get("preferredLanguage") || locale),
      contactingAs: String(data.get("contactingAs") || ""),
      propertyLocation: String(data.get("propertyLocation") || ""),
      subject: String(data.get("subject") || ""),
      message: String(data.get("message") || ""),
      preferredContactMethod: String(data.get("preferredContactMethod") || ""),
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("request_failed");
      }

      setStatus("success");
      formRef.current?.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border border-bronze/40 bg-bronze/5 px-6 py-10 text-center"
      >
        <p className="font-serif-display text-2xl">{f.successTitle}</p>
        <p className="mt-3 text-charcoal/75">{f.successBody}</p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot field — hidden from real visitors, catches simple bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">{f.honeypotLabel}</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="fullName">
            {f.fullName} *
          </label>
          <input id="fullName" name="fullName" type="text" required className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="email">
            {f.email} *
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="phone">
            {f.phone}
          </label>
          <input id="phone" name="phone" type="tel" className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="preferredLanguage">
            {f.preferredLanguage}
          </label>
          <select
            id="preferredLanguage"
            name="preferredLanguage"
            defaultValue={locale}
            className={inputClasses}
          >
            {locales.map((l) => (
              <option key={l} value={l}>
                {localeFullNames[l]}
              </option>
            ))}
          </select>
        </div>
      </div>

      <fieldset>
        <legend className={labelClasses}>{f.contactingAs} *</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {(
            [
              ["owner", f.contactingOptions.owner],
              ["familyOffice", f.contactingOptions.familyOffice],
              ["agency", f.contactingOptions.agency],
              ["partner", f.contactingOptions.partner],
              ["other", f.contactingOptions.other],
            ] as [string, string][]
          ).map(([value, label]) => (
            <label
              key={value}
              className="flex items-center gap-3 border border-line px-4 py-3 text-sm cursor-pointer has-[:checked]:border-bronze has-[:checked]:bg-bronze/5"
            >
              <input
                type="radio"
                name="contactingAs"
                value={value}
                required
                className="accent-[#a9865c]"
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="propertyLocation">
            {f.propertyLocation}
          </label>
          <input id="propertyLocation" name="propertyLocation" type="text" className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="subject">
            {f.subject}
          </label>
          <input id="subject" name="subject" type="text" className={inputClasses} />
        </div>
      </div>

      <div>
        <label className={labelClasses} htmlFor="message">
          {f.message} *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={4000}
          className={inputClasses}
        />
      </div>

      <div>
        <label className={labelClasses} htmlFor="preferredContactMethod">
          {f.preferredContactMethod}
        </label>
        <select
          id="preferredContactMethod"
          name="preferredContactMethod"
          defaultValue=""
          className={inputClasses}
        >
          <option value="" disabled>
            —
          </option>
          <option value="email">{f.contactMethodOptions.email}</option>
          <option value="phone">{f.contactMethodOptions.phone}</option>
          <option value="either">{f.contactMethodOptions.either}</option>
        </select>
      </div>

      <label className="flex items-start gap-3 text-sm text-charcoal/80">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 accent-[#a9865c]"
        />
        {f.consent}
      </label>

      {error && (
        <p role="alert" className="text-sm text-red-800">
          {error}
        </p>
      )}

      {status === "error" && (
        <div role="alert" className="border border-red-800/30 bg-red-800/5 px-5 py-4">
          <p className="font-medium">{f.errorTitle}</p>
          <p className="text-sm mt-1">{f.errorBody}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto inline-flex items-center justify-center bg-charcoal text-offwhite px-8 py-4 text-xs tracking-[0.14em] uppercase hover:bg-navy transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? f.submitting : f.submit}
      </button>
    </form>
  );
}
