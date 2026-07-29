import Reveal from "@/components/Reveal";

export default function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <section className="container-page pt-32 pb-28 sm:pt-40 max-w-3xl">
      <Reveal>
        <h1 className="font-serif-display text-3xl sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-charcoal/50">{updated}</p>
      </Reveal>

      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <Reveal key={section.heading}>
            <h2 className="font-serif-display text-xl">{section.heading}</h2>
            <p className="mt-3 text-charcoal/80 leading-relaxed">{section.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
