import SectionDivider from "./SectionDivider";

const rows = [
  {
    stage: "01 diagnose",
    actions:
      "Walk through the existing product firsthand, catalogue friction points, separate cosmetic AI opportunities from real cognitive load",
    deliverable: "Problem statement grounded in observed workflow",
  },
  {
    stage: "02 segment",
    actions:
      'Map each user segment\'s job-to-be-done and their specific anxiety / definition of "good enough"',
    deliverable: "Persona set with quality bars, not just JTBD",
  },
  {
    stage: "03 architect",
    actions:
      "Separate interface, intent-classification, capability registry, orchestration/safety, and execution into distinct layers",
    deliverable: "Extensible architecture that survives capability #10",
  },
  {
    stage: "04 sequence",
    actions:
      "Score candidate workflows on impact vs. feasibility; reuse existing capability first",
    deliverable: "Phased roadmap: foundation → context → ecosystem",
  },
  {
    stage: "05 build trust",
    actions:
      "Guardrails, a north-star metric tied to acceptance not usage, automatic rollout-pause triggers",
    deliverable: "Rollout plan with built-in kill switches",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="py-24">
      <SectionDivider step={4} total={5} fill="80%" />
      <div className="eyebrow">how i plan</div>
      <h2 className="font-display font-semibold text-[32px] mb-10">
        How I think about AI-assisted PM work
      </h2>

      <div className="mb-14">
        <h3 className="font-display font-semibold text-[19px] mb-2">
          Building it myself
        </h3>
        <blockquote className="font-display font-medium text-lg border-l-2 border-signal pl-5 mb-5">
          Building Job Kit Agent taught me something my program management
          background hadn&apos;t: the discipline doesn&apos;t change when
          you&apos;re the one shipping the code, but the loop gets tighter.
        </blockquote>
        <p className="text-textSecondary max-w-[640px]">
          I ran it exactly the way I&apos;d run any program — a PRD first,
          broken into six milestones, with a defined review gate at each one,
          delegated to Claude Code and reviewed by me at every step. The
          difference was that instead of handing specs to an engineering team
          and reviewing outcomes weeks later, I was reviewing generated code
          within the hour.
        </p>
        <p className="text-textSecondary max-w-[640px] mt-3">
          The rule I held myself to throughout: nothing gets claimed or
          generated that isn&apos;t grounded in real, verifiable input. The
          agent gates its own output behind a human fit-check — no
          application kit gets generated until a person has actually reviewed
          whether the role fits — and every output is validated against a
          strict schema, instructed to only draw on the user&apos;s own
          profile data.
        </p>
        <p className="text-textSecondary max-w-[640px] mt-3">
          What surprised me is how much of &quot;AI-assisted building&quot;
          is really just product management with a faster feedback loop.
        </p>
      </div>

      <div>
        <h3 className="font-display font-semibold text-[19px] mb-2">
          Building it into someone else&apos;s product
        </h3>
        <p className="text-textSecondary max-w-[640px]">
          Adding an AI layer to a product that already has real users is a
          different problem than building an AI product from scratch — the
          existing workflow is the constraint, not a blank canvas.
        </p>
        <div className="overflow-x-auto mt-6">
          <table className="w-full text-[13px] border-collapse">
            <thead>
              <tr>
                {["Stage", "Actions", "Deliverable"].map((h) => (
                  <th
                    key={h}
                    className="font-mono text-[11px] uppercase tracking-wide text-textMuted text-left py-2.5 px-3 border-b border-border"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.stage}>
                  <td className="py-3 px-3 border-b border-border font-mono text-xs text-signal whitespace-nowrap align-top">
                    {r.stage}
                  </td>
                  <td className="py-3 px-3 border-b border-border text-textSecondary align-top">
                    {r.actions}
                  </td>
                  <td className="py-3 px-3 border-b border-border text-textSecondary align-top">
                    {r.deliverable}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
