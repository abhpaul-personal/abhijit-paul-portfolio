import Image from "next/image";
import SectionDivider from "./SectionDivider";

function Card({
  title,
  meta,
  body,
  bullets,
  children,
}: {
  title: string;
  meta: string;
  body: string;
  bullets?: string[];
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-surface border border-border rounded-[10px] p-8 mb-5">
      <div className="flex justify-between items-baseline flex-wrap gap-2 mb-3">
        <h3 className="font-display font-semibold text-[19px]">{title}</h3>
        <span className="font-mono text-xs text-textMuted">{meta}</span>
      </div>
      <p className="text-textSecondary max-w-[640px]">{body}</p>
      {bullets && (
        <ul className="mt-4 space-y-1.5">
          {bullets.map((b) => (
            <li
              key={b}
              className="font-mono text-[13px] text-textSecondary py-1.5 border-t border-border first:border-t-0"
            >
              <span className="text-signal">→ </span>
              {b}
            </li>
          ))}
        </ul>
      )}
      {children}
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section id="work" className="py-24">
      <SectionDivider step={2} total={5} fill="40%" />
      <div className="eyebrow">delivered programs</div>
      <h2 className="font-display font-semibold text-[32px] mb-10">
        Programs &amp; products
      </h2>

      <Card
        title="MFI → ZFI: 0 to 1, then scaled"
        meta="Tradebyte · Q4 2024 – Q1 2026"
        body="Built MFI (Multi-Channel Fulfillment Integrator) from zero to one — launching with 5-6 merchants at 1,500-2,000 orders/day — then led the strategic pivot to ZFI and the legacy migration that scaled it roughly 300x."
        bullets={[
          "Scaled from ~100K to 30M monthly orders",
          "~200,000 orders/day across 33 merchants post-migration, ~€3.65M ARR",
          "33 merchants migrated with zero incidents",
          "94% reduction in transient network errors, zero PII spillages",
          "Merchant activation time reduced 40%",
        ]}
      />

      <Card
        title="Multi-channel shipping: EU expansion"
        meta="Tradebyte · Q2 2025 – Q1 2026"
        body="Drove multi-channel shipping and returns capability across Germany, Belgium, Netherlands, and Switzerland."
        bullets={["Cross-border shipping/returns live across 4 EU markets"]}
      />

      <Card
        title="Compliance at platform scale: GDPR & SOC 2"
        meta="Tradebyte · Q3 2025 – Q1 2026"
        body="Owned GDPR compliance across the platform, built the AWS S3 financial data pipeline, and led SOC 2 Type I readiness — achieved in a single quarter."
        bullets={[
          "SOC 2 Type I achieved in one quarter",
          "Full GDPR compliance program ownership",
        ]}
      />

      <Card
        title="Job Kit Agent"
        meta="Personal build · AI tooling"
        body="An AI-powered job application agent that gates kit generation behind a human-reviewed fit analysis — no application drafted without the user checking fit first. Built PM-style: PRD through six milestones, delegated to Claude Code, human in the loop at every review point."
      >
        <div className="flex gap-4 font-mono text-[13px] my-4">
          <a
            href="https://job-kit-agent-nu.vercel.app"
            target="_blank"
            className="text-signal hover:underline"
          >
            job-kit-agent-nu.vercel.app
          </a>
          <span className="text-textMuted">·</span>
          <a
            href="https://github.com/abhpaul-personal/ai-job-application-agent"
            target="_blank"
            className="text-signal hover:underline"
          >
            GitHub (94% TypeScript)
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          {[
            { src: "/images/jka-landing.png", cap: "Landing page" },
            { src: "/images/jka-input.png", cap: "Job fit analysis input" },
            { src: "/images/jka-fitscore.png", cap: "Fit score — 72/100" },
            { src: "/images/jka-cv.png", cap: "Generated CV output" },
          ].map((s) => (
            <div
              key={s.src}
              className="relative aspect-[16/10] bg-surface2 border border-border rounded-md overflow-hidden"
            >
              <Image
                src={s.src}
                alt={s.cap}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-contain object-top p-1"
              />
              <span className="absolute bottom-0 left-0 right-0 px-2 py-1.5 bg-gradient-to-t from-bg/90 to-transparent font-mono text-[10px]">
                {s.cap}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
