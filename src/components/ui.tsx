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
      className={`inline-flex items-center justify-center px-7 py-3.5 text-xs tracking-[0.14em] uppercase transition-colors ${
        tone === "dark"
          ? "bg-offwhite text-charcoal hover:bg-bronze-light"
          : "bg-charcoal text-offwhite hover:bg-navy"
      }`}
    >
      {children}
    </Link>
  );
}

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
    <Link
      href={href}
      className={`inline-flex items-center gap-2 text-sm underline-offset-4 hover:underline ${
        tone === "dark" ? "text-offwhite" : "text-charcoal"
      }`}
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
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
    coast:
      "linear-gradient(180deg, #cdd9dd 0%, #e7ddc9 38%, #cbb98f 55%, #7c8b6f 70%, #445341 100%)",
    dusk: "linear-gradient(180deg, #2c3350 0%, #5a4a52 45%, #a9785a 75%, #3c2b28 100%)",
    night: "linear-gradient(180deg, #0d1424 0%, #131a2b 55%, #1c2540 100%)",
    terrace:
      "linear-gradient(180deg, #e9e2d0 0%, #ded0ae 45%, #b7a074 70%, #6c6650 100%)",
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
            "radial-gradient(120% 60% at 15% 90%, rgba(169,134,92,0.25), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 bg-charcoal/10" />
    </div>
  );
}
