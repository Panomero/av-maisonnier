import Link from "next/link";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function ItemList({
  items,
  tone = "light",
}: {
  items: string[];
  tone?: "light" | "dark";
}) {
  // A two-column CSS grid places items row-by-row, which leaves an odd item
  // (e.g. 5 or 7 total) alone on its own half-empty row. CSS multi-column
  // layout instead balances items by height across the two columns, so an
  // odd count simply ends with one column slightly longer than the other —
  // no lopsided trailing row.
  return (
    <ul className="sm:columns-2 gap-x-10">
      {items.map((item) => (
        <li
          key={item}
          className={`break-inside-avoid mb-3 border-l pl-4 py-0.5 text-[0.98rem] leading-relaxed ${
            tone === "dark" ? "border-line-dark text-offwhite/85" : "border-line text-charcoal/85"
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 40 10"
      className={`mt-[0.45rem] h-2.5 w-10 shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M0 5h39M34 1l5 4-5 4" />
    </svg>
  );
}

const linkBase =
  "group inline-flex max-w-full items-start gap-4 text-left text-sm leading-[1.6] tracking-[0.1em]";

function LinkLabel({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: "light" | "dark";
}) {
  return (
    <span
      className={`underline decoration-1 underline-offset-[7px] ${
        tone === "dark" ? "decoration-bronze-light" : "decoration-bronze"
      }`}
    >
      {children}
    </span>
  );
}

export function PrimaryLink({
  href,
  children,
  tone = "light",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <Link
      href={href}
      className={`${linkBase} ${tone === "dark" ? "text-offwhite" : "text-charcoal"}`}
    >
      <ArrowIcon
        className={`transition-transform group-hover:translate-x-1 ${
          tone === "dark" ? "text-bronze-light" : "text-bronze"
        }`}
      />
      <LinkLabel tone={tone}>{children}</LinkLabel>
    </Link>
  );
}

/* Same geometry as PrimaryLink so stacked or side-by-side links line up. */
export function SecondaryLink({
  href,
  children,
  tone = "light",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <PrimaryLink href={href} tone={tone}>
      {children}
    </PrimaryLink>
  );
}

export function PhotoBand({
  src,
  fallbackSrc,
  className = "",
}: {
  src: string;
  fallbackSrc?: string;
  className?: string;
}) {
  return (
    <div className={`container-page ${className}`}>
      <Photo
        src={src}
        fallbackSrc={fallbackSrc}
        className="h-56 w-full sm:h-72 lg:h-[24rem]"
      />
    </div>
  );
}

/**
 * Photograph slot. Drop a real image at the given /public path and it
 * appears automatically; until then a warm stone-toned gradient shows, so
 * the layout never has a broken-image hole.
 */
export function Photo({
  src,
  fallbackSrc,
  alt = "",
  className = "",
}: {
  src: string;
  fallbackSrc?: string;
  alt?: string;
  className?: string;
}) {
  return (
    <div
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
      className={`bg-cover bg-center ${className}`}
      style={{
        backgroundImage: `url(${src}), ${fallbackSrc ? `url(${fallbackSrc}), ` : ""}radial-gradient(120% 80% at 80% 10%, rgba(255,255,255,0.55), transparent 55%), linear-gradient(160deg, #eadfce 0%, #d9c6aa 55%, #bfa17e 100%)`,
      }}
    />
  );
}

export function SceneBackdrop({
  variant = "coast",
  className = "",
}: {
  variant?: "coast" | "dusk" | "night" | "terrace";
  className?: string;
}) {
  const gradients: Record<string, string> = {
    coast: "linear-gradient(180deg, #f2ece2 0%, #eadfce 60%, #e0cfb6 100%)",
    dusk: "linear-gradient(180deg, #3a2b25 0%, #4a372f 55%, #5a4337 100%)",
    night: "linear-gradient(180deg, #2f231e 0%, #3a2b25 55%, #47362f 100%)",
    terrace: "linear-gradient(180deg, #f2ece2 0%, #ebe0cf 55%, #e1d0b8 100%)",
  };

  return (
    <div
      aria-hidden
      className={`absolute inset-0 -z-10 ${className}`}
      style={{ background: gradients[variant] }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 60% at 15% 90%, rgba(150,105,63,0.14), transparent 60%)",
        }}
      />
    </div>
  );
}
