const certifications = [
  {
    name: "Microsoft Program Management Professional Certificate",
    issuer: "Microsoft via Coursera",
    date: "2026",
    inProgress: true,
  },
  {
    name: "AI Product Management, Human Factors in AI, and Managing ML Projects",
    issuer: "Duke University",
    date: "2024",
  },
  {
    name: "Product Management program",
    issuer: "CareerFoundry, Berlin",
    date: "May 2024",
  },
  {
    name: "Introduction to Generative AI",
    issuer: "Google Cloud Training",
    date: "Dec 2023",
  },
  {
    name: "AWS Certified Cloud Practitioner Exam Training",
    issuer: "Udemy",
    date: "2023",
  },
  {
    name: "Advanced Certified Scrum Product Owner (A-CSPO)",
    issuer: "Scrum Alliance",
    date: "Jan 2021",
  },
  { name: "ITIL Foundation", issuer: "PeopleCert", date: "2015" },
  {
    name: "PRINCE2 Practitioner",
    issuer: "PeopleCert and Axelos",
    date: "Aug 2018",
  },
  {
    name: "GE Change Acceleration Process (CAP)",
    issuer: "General Electric",
    date: "2016",
  },
];

const languages = [
  { name: "English", level: "Proficient" },
  { name: "Hindi", level: "Fluent" },
  { name: "German", level: "Beginner" },
  { name: "Bengali", level: "Native" },
];

export default function Credentials() {
  return (
    <section id="certifications" className="pb-24">
      <h3 className="font-display font-semibold text-[24px] mb-5">
        Certifications
      </h3>
      <ul className="bg-surface border border-line rounded-[10px] overflow-hidden">
        {certifications.map((c) => (
          <li
            key={c.name}
            className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-1 md:gap-5 px-6 py-4 border-t border-line first:border-t-0"
          >
            <div>
              <div className="text-sm font-medium">{c.name}</div>
              <div className="text-[13px] text-inkSoft">{c.issuer}</div>
            </div>
            <div className="font-mono text-xs text-inkSoft md:text-right md:whitespace-nowrap flex items-start gap-2">
              {c.inProgress && (
                <span className="bg-accentSoft text-accent rounded px-1.5 py-0.5 text-[10px] uppercase tracking-wide">
                  in progress
                </span>
              )}
              <span>{c.date}</span>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-8 font-mono text-xs text-inkSoft leading-relaxed">
        <span className="uppercase tracking-wide text-accent">Languages</span>
        {languages.map((l) => (
          <span key={l.name}>
            <span className="mx-2">·</span>
            <span className="text-ink">{l.name}</span> ({l.level})
          </span>
        ))}
      </p>
    </section>
  );
}
