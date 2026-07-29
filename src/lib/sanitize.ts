/**
 * Escapes HTML-significant characters so user-submitted text can be safely
 * interpolated into the HTML email bodies we generate server-side.
 */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const CONTROL_CHAR_CODES_MAX = 8;

/** Strips ASCII control characters and trims to a maximum length. */
export function cleanText(value: string, maxLength: number): string {
  let result = "";
  for (const char of value) {
    const code = char.codePointAt(0) ?? 0;
    const isControl =
      (code <= CONTROL_CHAR_CODES_MAX) ||
      code === 11 ||
      code === 12 ||
      (code >= 14 && code <= 31) ||
      code === 127;
    if (!isControl) result += char;
  }
  return result.trim().slice(0, maxLength);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_RE.test(value) && value.length <= 254;
}
