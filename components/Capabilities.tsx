import SectionDivider from "./SectionDivider";

const caps = [
  {
    idx: "01",
    title: "Product strategy & roadmapping",
    body: "Owning multi-quarter vision across a product area, not just a single feature — the MFI→ZFI strategic pivot, phased roadmaps from 0-to-1 through platform scale, and north-star metrics that hold engineering and business accountable to the same outcome.",
  },
  {
    idx: "02",
    title: "Platform architecture & scale",
    body: "Taking fragile, manual systems from zero to production — designing for the 100x growth case from day one, not retrofitting it later.",
  },
  {
    idx: "03",
    title: "AI-assisted product development",
    body: "Hands-on building with AI tooling (Claude Code, Cursor, Gemini Canvas, Lovable) — from feature validation through shipped, PM-led products like Job Kit Agent.",
  },
  {
    idx: "04",
    title: "Compliance & governance at scale",
    body: "GDPR and SOC 2 program ownership, built into the platform rather than bolted on — SOC 2 Type I achieved in a single quarter.",
  },
  {
    idx: "05",
    title: "Cross-border marketplace operations",
    body: "Deep operating experience across EU marketplace ecosystems — multi-merchant fulfillment, cross-border shipping and returns across 4+ markets.",
    full: true,
  },
];

export default function Capabilities() {
  return (
    <section className="py-24">
      <SectionDivider step={1} total={5} fill="20%" />
      <div className="eyebrow">roadmap</div>
      <h2 className="font-display font-semibold text-[32px] mb-3">
        Five things I&apos;m actually good at
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-[10px] overflow-hidden mt-10">
        {caps.map((c) => (
          <div
            key={c.idx}
            className={`bg-surface p-7 ${c.full ? "md:col-span-2" : ""}`}
          >
            <div className="font-mono text-xs text-signal mb-3">{c.idx}</div>
            <h3 className="font-display font-semibold text-[19px] mb-2">
              {c.title}
            </h3>
            <p className="text-sm text-textSecondary">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
