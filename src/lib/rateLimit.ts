/**
 * A minimal in-memory rate limiter for the contact form.
 *
 * Note: this state lives in the Node.js process memory. On serverless
 * platforms (e.g. Vercel) each function instance has its own memory, so this
 * provides basic abuse protection rather than a hard global guarantee. For
 * stronger protection, pair this with Cloudflare Turnstile (see README) or a
 * shared store such as Upstash Redis.
 */

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;

const hits = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    hits.set(key, timestamps);
    return true;
  }

  timestamps.push(now);
  hits.set(key, timestamps);

  if (hits.size > 5000) {
    const cutoff = now - WINDOW_MS;
    for (const [k, v] of hits) {
      if (v.every((t) => t < cutoff)) hits.delete(k);
    }
  }

  return false;
}
