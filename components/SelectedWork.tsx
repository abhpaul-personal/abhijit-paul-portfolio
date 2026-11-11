import Image from "next/image";
import MfiStory from "./MfiStory";
import SectionDivider from "./SectionDivider";

function Card({
  title,
  meta,
  body,
  bullets,
  children,
  wide = false,
}: {
  title: string;
  meta: string;
  body: string;
  bullets?: string[];
  children?: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <div
      className={`bg-surface border border-line rounded-[10px] p-7 h-full ${
        wide ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex justify-between items-baseline flex-wrap gap-x-4 gap-y-1 mb-3">
        <h4 className="font-display font-semibold text-[19px]">{title}</h4>
        <span className="font-mono text-xs text-inkSoft">{meta}</span>
      </div>
      <p className="text-inkSoft max-w-[640px]">{body}</p>
      {bullets && (
        <ul className="mt-4 space-y-1.5">
          {bullets.map((b) => (
            <li
              key={b}
              className="font-mono text-[13px] text-inkSoft py-1.5 border-t border-line first:border-t-0"
            >
              <span className="text-accent">→ </span>
              {b}
            </li>
          ))}
        </ul>
      )}
      {children}
    </div>
  );
}

const screenshots = [
  { src: "/images/jka-landing.png", cap: "Landing page" },
  { src: "/images/jka-input.png", cap: "Job fit analysis input" },
  { src: "/images/jka-fitscore.png", cap: "Fit score — 72/100" },
  { src: "/images/jka-cv.png", cap: "Generated CV output" },
];

export default function SelectedWork() {
  return (
    <section id="work" className="py-24">
      <SectionDivider step={2} total={5} fill="40%" />
      <div className="eyebrow">delivered work</div>
      <h2 className="font-display font-semibold text-[32px] mb-10">
        Selected work
      </h2>

      <MfiStory />

      <h3 className="font-display font-semibold text-[26px] mt-24 mb-6">
        Also shipped
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Card
          title="Multi-channel shipping: EU expansion"
          meta="Tradebyte · Q2 2025 – Q1 2026"
          body="Drove multi-channel shipping and returns capability across Germany, Belgium, Netherlands, and Switzerland, including closing a Swiss customs data gap across five system layers."
          bullets={["Cross-border shipping/returns live across 4 EU markets"]}
        />

        <Card
          title="Compliance at platform scale: GDPR & SOC 2"
          meta="Tradebyte · Q3 2025 – Q1 2026"
          body="Owned GDPR compliance across the platform, built the AWS S3 financial data pipeline, and led SOC 2 Type I readiness — achieved in a single quarter with zero findings."
          bullets={[
            "SOC 2 Type I achieved in one quarter, zero findings",
            "Full GDPR compliance ownership",
            "IAM, RBAC, and audit logging",
          ]}
        />

        <Card
          wide
          title="Job Kit Agent"
          meta="Personal build · AI tooling"
          body="An AI-powered job application agent that gates kit generation behind a human-reviewed fit analysis — no application drafted without the user checking fit first. Built PM-style: PRD through six milestones, delegated to Claude Code, human in the loop at every review point."
        >
          <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[13px] my-4">
            <a
              href="https://job-kit-agent-nu.vercel.app"
              target="_blank"
              className="text-accent hover:underline"
            >
              job-kit-agent-nu.vercel.app
            </a>
            <span className="text-inkSoft">·</span>
            <a
              href="https://github.com/abhpaul-personal/ai-job-application-agent"
              target="_blank"
              className="text-accent hover:underline"
            >
              GitHub (94% TypeScript)
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            {screenshots.map((s) => (
              <div
                key={s.src}
                className="relative aspect-[16/10] bg-monoBg border border-line rounded-md overflow-hidden"
              >
                <Image
                  src={s.src}
                  alt={s.cap}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-contain object-top p-1"
                />
                <span className="absolute bottom-0 left-0 right-0 px-2 py-1.5 bg-gradient-to-t from-bg/90 to-transparent font-mono text-[10px] text-ink">
                  {s.cap}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="Founding PM — ZuPick"
          meta="ZuPick AI · Aug 2026 – Oct 2026 · part-time / advisory"
          body="Founding Product Manager for ZuPick, an AI-powered shopping discovery and comparison platform — live with 70,000+ app downloads and close to 2,000 weekly active users. Part-time, non-exclusive advisory engagement, driving product strategy, roadmap, and discovery using Google Analytics, Vercel Analytics, and Notion."
        />

        <Card
          title="Founder — PM Career Sprint"
          meta="Consulting practice · iamunderpaid.com"
          body="CV & LinkedIn optimization and mock interview coaching for PM job seekers. Services: PM Career Strategy 1:1, CV & LinkedIn Teardown, Job Search Sprint Advisory Package, Async Q&A."
        >
          <div className="font-mono text-[13px] mt-4">
            <a
              href="https://iamunderpaid.com/m/abhijit-paul"
              target="_blank"
              className="text-accent hover:underline"
            >
              Book a session →
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
}
