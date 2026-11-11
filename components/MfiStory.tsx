"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  label: string;
  // null renders an em dash (no figure claimed for that stage).
  value: number | null;
  fmt: (v: number) => string;
};

type Stage = {
  node: string;
  title: string;
  intro: string;
  bullets: string[];
  stats: Stat[];
};

const n = (v: number) => Math.round(v).toLocaleString("en-US");

// Stage 1 reports ranges (1,500–2,000 orders/day, 5–6 merchants). A range is
// animated as one number: the low end is a fixed fraction of the high end, so
// both ends count together and land exactly on the stated range.
const launchStats: Stat[] = [
  { label: "Orders / day", value: 2000, fmt: (v) => `${n(v * 0.75)}–${n(v)}` },
  { label: "Merchants", value: 6, fmt: (v) => `${n((v * 5) / 6)}–${n(v)}` },
  { label: "ARR", value: null, fmt: () => "—" },
];

// Stages 2–4 share the production figures, so the numbers only count up once
// (stage 1 → 2) and then hold.
const productionStats: Stat[] = [
  { label: "Orders / day", value: 200000, fmt: (v) => `~${n(v / 1000)}K` },
  { label: "Merchants", value: 33, fmt: (v) => n(v) },
  { label: "ARR", value: 3.65, fmt: (v) => `€${v.toFixed(2)}M` },
];

const stages: Stage[] = [
  {
    node: "0→1",
    title: "A blank roadmap",
    intro:
      "No platform, no orders. The work started with defining what fulfillment integration meant for the first partner.",
    bullets: [
      "Built MFI from zero",
      "Launched with 5-6 merchants at 1,500-2,000 orders/day",
    ],
    stats: launchStats,
  },
  {
    node: "Scale",
    title: "Scaled to production",
    intro:
      "MFI running in production at enterprise scale.",
    bullets: [
      "~200K orders/day across 5 global enterprise partners",
      "Self-service onboarding cut from 5-7 days to 15 minutes",
      "33 merchants migrated with zero cutover incidents",
      "94% drop in transient network errors via circuit breaker",
      "Zero PII spillages",
      "40% faster merchant activation, informed by A/B testing a 1-page vs 5-page onboarding UX, where ~5 pages outperformed 2-3 pages in staging",
      "Wrote the requirements and built the prototype for an AI-assisted matching step in the MFI Back Office that matches brand product data to fulfilment service fields, with human approval of suggested matches and a manual fallback queue for non-matches. Built in partnership with the central AI/ML team, who handled model build and execution; shipped to production.",
    ],
    stats: productionStats,
  },
  {
    node: "Pivot",
    title: "The pivot decision",
    intro:
      "After the About You and Zalando merger, brought a structured MFI-to-ZFI pivot recommendation to the CPO, CEO, and VP Product.",
    bullets: [
      "Descoped TikTok Shop after ROI analysis showed a thin merchant base, reallocating squad capacity to higher-value launches",
      "Tracked DORA metrics and ran WBR/MBR/QBR across 3 squads (13 engineers, 3 QA, 1 UX)",
    ],
    stats: productionStats,
  },
  {
    node: "ZFI",
    title: "ZFI: carried forward",
    intro:
      "Led the legacy migration (~300x scale), carrying forward the same REST API contracts, idempotency design (Marketplace ID + Order UUID), and circuit-breaker patterns.",
    bullets: [
      "Ran per-merchant phased releases using MFI feature flags as a kill switch, including returns data sharing as image, PDF, or JSON",
    ],
    stats: productionStats,
  },
];

const COUNT_MS = 800;

function CountUp({ stat, animate }: { stat: Stat; animate: boolean }) {
  const target = stat.value;
  const [shown, setShown] = useState<number | null>(target);
  const current = useRef<number | null>(target);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!animate || reduced || target === null) {
      current.current = target;
      setShown(target);
      return;
    }
    const from = current.current ?? 0;
    const startedAt = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - startedAt) / COUNT_MS);
      const eased = 1 - Math.pow(1 - t, 3);
      const next = from + (target - from) * eased;
      current.current = next;
      setShown(next);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, animate]);

  return <>{shown === null ? "—" : stat.fmt(shown)}</>;
}

function NodeDiagram({ active }: { active: number }) {
  return (
    <ol className="flex" aria-label="Story progress">
      {stages.map((s, i) => {
        const isActive = i === active;
        const isDone = i < active;
        return (
          <li
            key={s.node}
            aria-current={isActive ? "step" : undefined}
            className="relative flex-1 flex flex-col items-center"
          >
            {i > 0 && (
              <span
                aria-hidden="true"
                className={`absolute top-[7px] right-1/2 w-full h-[2px] transition-colors duration-500 ${
                  i <= active ? "bg-accent" : "bg-line"
                }`}
              />
            )}
            <span
              className={`relative z-[1] w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                isActive
                  ? "bg-accent border-accent ring-4 ring-accentSoft"
                  : isDone
                    ? "bg-accentSoft border-accent"
                    : "bg-surface border-line"
              }`}
            />
            <span
              className={`mt-2 font-mono text-[11px] transition-colors ${
                isActive ? "text-accent font-semibold" : "text-inkSoft"
              }`}
            >
              {s.node}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

function StageCard({
  index,
  animate,
  showTitle,
}: {
  index: number;
  animate: boolean;
  showTitle: boolean;
}) {
  const stage = stages[index];
  return (
    <div
      data-stage-card
      className="bg-surface border border-line rounded-[10px] p-6"
    >
      <div className="font-mono text-xs uppercase tracking-wide text-accent">
        Stage {index + 1} of {stages.length}
      </div>
      {showTitle && (
        <div
          data-stage-title
          className="font-display font-semibold text-[24px] leading-tight mt-1 text-ink"
        >
          {stage.title}
        </div>
      )}
      <div className="mt-5">
        <NodeDiagram active={index} />
      </div>
      <dl className="mt-6">
        {stage.stats.map((s) => (
          <div
            key={s.label}
            className="flex items-baseline justify-between gap-4 border-t border-line py-2.5"
          >
            <dt className="font-mono text-[11px] uppercase tracking-wide text-inkSoft">
              {s.label}
            </dt>
            <dd className="font-mono text-lg font-semibold text-ink">
              <CountUp stat={s} animate={animate} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function MfiStory() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // The -40% top/bottom margins shrink the observed zone to the middle 20%
    // of the viewport, so a stage swaps when its step crosses the vertical
    // center rather than the moment it peeks in at the bottom edge.
    const observer = new IntersectionObserver(
      (entries) => {
        const center = window.innerHeight / 2;
        let best: { index: number; distance: number } | null = null;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = Number((entry.target as HTMLElement).dataset.stage);
          const rect = entry.boundingClientRect;
          const distance = Math.abs(rect.top + rect.height / 2 - center);
          if (!best || distance < best.distance) best = { index, distance };
        }
        if (best) setActive(best.index);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );
    for (const el of stepRefs.current) if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="mb-10">
        <h3 className="font-display font-semibold text-[26px]">
          MFI → ZFI: 0 to 1, then scaled
        </h3>
        <div className="font-mono text-xs text-inkSoft mt-1">
          Tradebyte · Q4 2024 – Q1 2026
        </div>
        <p className="text-inkSoft max-w-[640px] mt-3">
          Built MFI (Multi-Channel Fulfillment Integrator) from zero to one,
          then led the pivot to ZFI and the legacy migration. Four stages, in
          order.
        </p>
      </div>

      <div className="grid min-[720px]:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-x-10 items-start">
        <div
          data-sticky-card
          className="hidden min-[720px]:block min-[720px]:sticky min-[720px]:top-24 min-[720px]:self-start"
        >
          <StageCard index={active} animate showTitle />
        </div>

        <div>
          {stages.map((s, i) => (
            <article
              key={s.title}
              data-stage={i}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className={`py-8 border-t border-line first:border-t-0 min-[720px]:border-t-0 min-[720px]:border-l-2 min-[720px]:pl-7 min-[720px]:min-h-[78vh] min-[720px]:flex min-[720px]:flex-col min-[720px]:justify-center transition-[border-color] ${
                i === active ? "min-[720px]:border-accent" : "min-[720px]:border-line"
              }`}
            >
              <div className="min-[720px]:hidden mb-6">
                <StageCard index={i} animate={false} showTitle={false} />
              </div>
              <div className="font-mono text-xs uppercase tracking-wide text-accent">
                Stage {i + 1}
              </div>
              <h4 className="font-display font-semibold text-[22px] mt-1 mb-3">
                {s.title}
              </h4>
              <p className="text-inkSoft">{s.intro}</p>
              <ul className="mt-4 space-y-1.5">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="font-mono text-[13px] text-inkSoft py-1.5 border-t border-line first:border-t-0"
                  >
                    <span className="text-accent">→ </span>
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
