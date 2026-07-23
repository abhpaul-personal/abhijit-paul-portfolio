import SectionDivider from "./SectionDivider";

const timeline = [
  { dates: "Aug 2005 – Dec 2007", role: "Software Engineer", co: "Infosys" },
  { dates: "Jan 2008 – May 2010", role: "Senior Software Engineer", co: "Wipro" },
  { dates: "May 2010 – Nov 2013", role: "Module Lead", co: "Mindtree" },
  { dates: "Nov 2013 – Nov 2016", role: "Lead Analyst", co: "General Electric" },
  {
    dates: "Nov 2016 – Mar 2018",
    role: "Senior Technical Product Manager",
    co: "General Electric",
  },
  {
    dates: "Mar 2018 – Dec 2020",
    role: "Technical Product Manager",
    co: "Crossover (for Work)",
  },
  {
    dates: "Dec 2020 – Jul 2021",
    role: "Job search & upskilling",
    co: "",
    gap: true,
  },
  {
    dates: "Jul 2021 – Sep 2022",
    role: "Product Owner",
    co: "Upland Software (via Crossover)",
  },
  { dates: "Sep 2022 – Apr 2024", role: "Product Owner", co: "Signa Sports United" },
  {
    dates: "May 2024 – Sep 2024",
    role: "CareerFoundry PM certification + job search & upskilling",
    co: "",
    gap: true,
  },
  {
    dates: "Sep 2024 – present",
    role: "Senior Product Manager",
    co: "Tradebyte Software GmbH (Zalando Group)",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <SectionDivider step={3} total={5} fill="60%" />
      <div className="eyebrow">about</div>
      <h2 className="font-display font-semibold text-[32px] mb-3">
        Engineer first, product leader since
      </h2>
      <p className="text-base leading-[1.8] max-w-[680px] text-textSecondary">
        My first decade (2005–2016) was spent as a software engineer, working
        up to Lead Analyst at GE — hands-on with the systems I&apos;d later be
        responsible for as a product leader. Since late 2016, I&apos;ve been
        in product and program management roles, most recently building
        fulfillment infrastructure at Tradebyte (Zalando Group). That
        engineering foundation means I can go deep with engineering teams,
        not just hand off requirements — I understand the systems I&apos;m
        asking people to build.
      </p>

      <div className="border-l border-border mt-8">
        {timeline.map((t, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-1 md:gap-5 py-[18px] pl-6 relative border-t border-border first:border-t-0"
          >
            <span
              className={`absolute -left-[5px] top-[26px] w-[9px] h-[9px] rounded-full bg-bg border ${
                t.gap ? "border-textMuted" : "border-signal"
              }`}
            />
            <div className="font-mono text-xs text-textMuted whitespace-nowrap">
              {t.dates}
            </div>
            <div>
              <div
                className={`text-sm ${
                  t.gap
                    ? "text-textMuted italic font-normal"
                    : "font-medium"
                }`}
              >
                {t.role}
              </div>
              {t.co && (
                <div className="text-[13px] text-textSecondary">{t.co}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
