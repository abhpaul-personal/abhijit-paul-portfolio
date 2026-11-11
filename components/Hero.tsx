const stats = [
  {
    num: "20+ yrs",
    label: "Shipped across e-commerce, SaaS, logistics — 10 engineering, 10 product",
  },
  { num: "~6M", label: "Orders/month at scale (~200K/day)" },
  { num: "33", label: "Merchant migrations delivered, zero incidents" },
  { num: "€3.65M", label: "ARR delivered" },
];

const statusItems = [
  { label: "Notice period", value: "Available Immediately" },
  { label: "Relocation", value: "Open — anywhere in India" },
  { label: "Target roles", value: "Senior Product Management" },
];

export default function Hero() {
  return (
    <section className="pt-32 pb-20">
      <div className="milebar">
        <span className="done" />
        <span className="done" />
        <span className="done" />
        <span />
        <span />
      </div>
      <div className="mb-7">
        <div className="font-display font-semibold text-[26px] text-ink">Abhijit Paul</div>
        <div className="font-mono text-[13px] text-inkSoft mt-1">
          Senior Product Leader, Platforms and Integrations
        </div>
      </div>
      <h1 className="font-display font-semibold text-[52px] leading-[1.1] mb-6 -tracking-[0.01em] text-ink max-md:text-[34px]">
        I build platforms that scale without breaking.
      </h1>
      <p className="text-lg text-inkSoft max-w-[640px] mb-12">
        Senior Product Manager with 20+ years across e-commerce, B2B SaaS, and
        logistics — I take fragile, manual systems from zero to production
        scale, then keep them compliant and reliable as they grow. Most
        recently Senior Product Manager at Tradebyte (Zalando Group), and
        Founding PM at ZuPick, an AI-powered shopping discovery startup,
        through October 2026.
      </p>

      <a
        href="/Abhijit_Paul_CV.pdf"
        download
        className="inline-flex items-center gap-2 bg-accent text-bg font-mono text-sm font-medium rounded-full px-6 py-3 mb-8 hover:opacity-90 transition-opacity"
      >
        Download CV ↓
      </a>

      <div className="font-mono bg-surface border border-line rounded-[10px] overflow-hidden grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.num}
            className={`p-6 border-line ${i % 2 === 1 ? "border-l" : ""} ${
              i >= 2 ? "border-t" : ""
            } md:border-t-0 ${i > 0 ? "md:border-l" : ""}`}
          >
            <div className="text-[22px] font-semibold text-ink flex items-center gap-2">
              <span className="text-accent text-[11px]">▪</span>
              {s.num}
            </div>
            <div className="text-xs text-inkSoft mt-1.5 leading-snug">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <div className="font-mono border-t border-line grid grid-cols-1 md:grid-cols-3">
        {statusItems.map((s, i) => (
          <div
            key={s.label}
            className={`p-4 border-line ${i > 0 ? "border-t md:border-t-0" : ""} ${
              i < statusItems.length - 1 ? "md:border-r" : ""
            }`}
          >
            <div className="text-[10px] uppercase tracking-wide text-inkSoft mb-1">
              {s.label}
            </div>
            <div className="text-xs text-ink flex items-center gap-2">
              <span className="text-accent text-[11px]">▪</span>
              {s.value}
            </div>
          </div>
        ))}
      </div>

      <a
        href="/Abhijit_Paul_CV.pdf"
        download
        className="inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:underline mt-4"
      >
        Download CV ↓
      </a>
    </section>
  );
}
