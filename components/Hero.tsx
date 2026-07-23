const stats = [
  {
    num: "20+ yrs",
    label: "Shipped across e-commerce, SaaS, logistics — 10 engineering, 10 product & program",
  },
  { num: "30M", label: "Orders/month at scale (from ~100K)" },
  { num: "33", label: "Merchant migrations delivered, zero incidents" },
  { num: "€3.65M", label: "ARR delivered" },
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
      <div className="eyebrow">now shipping · Q3 2026</div>
      <div className="mb-7">
        <div className="font-display font-semibold text-[26px]">Abhijit Paul</div>
        <div className="font-mono text-[13px] text-textSecondary mt-1">
          Senior Product Manager — Platform &amp; Program Delivery
        </div>
      </div>
      <h1 className="font-display font-semibold text-[52px] leading-[1.1] mb-6 -tracking-[0.01em] max-md:text-[34px]">
        I build platforms that scale without breaking.
      </h1>
      <p className="text-lg text-textSecondary max-w-[640px] mb-12">
        Senior Product Manager with 20+ years across e-commerce, B2B SaaS, and
        logistics — I take fragile, manual systems from zero to production
        scale, then keep them compliant and reliable as they grow. Currently
        building fulfillment infrastructure at Tradebyte (Zalando Group),
        serving merchants across the EU marketplace ecosystem.
      </p>

      <div className="font-mono bg-surface border border-border rounded-[10px] grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.num}
            className={`p-6 ${i < stats.length - 1 ? "md:border-r" : ""} ${
              i % 2 === 0 ? "border-r md:border-r" : "md:border-r-0"
            } border-border`}
          >
            <div className="text-[22px] font-semibold text-metric flex items-center gap-2">
              <span className="text-signal text-[11px]">▪</span>
              {s.num}
            </div>
            <div className="text-xs text-textMuted mt-1.5 leading-snug">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
