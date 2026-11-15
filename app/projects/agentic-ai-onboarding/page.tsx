import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import { OndcButtons, OndcTags } from "@/components/OndcProjectParts";
import { ondcProject } from "@/lib/ondcProject";

export const metadata: Metadata = {
  title: `${ondcProject.title} | Abhijit Paul`,
  description: ondcProject.metaDescription,
  openGraph: {
    title: ondcProject.title,
    description: ondcProject.metaDescription,
    type: "article",
  },
  twitter: {
    card: "summary",
    title: ondcProject.title,
    description: ondcProject.metaDescription,
  },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14">
      <h2 className="font-display font-semibold text-[26px] mb-4">{title}</h2>
      {children}
    </section>
  );
}

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3 max-w-[680px]">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-inkSoft">
          <span className="text-accent font-mono" aria-hidden="true">
            →
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AgenticOnboardingPage() {
  const p = ondcProject;
  return (
    <main>
      <Nav />
      <div className="max-w-[920px] mx-auto px-8 pt-16 pb-24">
        <a href="/#work" className="font-mono text-xs text-accent hover:underline">
          ← Back to portfolio
        </a>

        <div className="eyebrow mt-10">{p.label}</div>
        <h1 className="font-display font-semibold text-[40px] leading-[1.1] -tracking-[0.01em] mb-5 max-md:text-[30px]">
          {p.title}
        </h1>
        <p className="text-lg text-inkSoft max-w-[680px] mb-6">{p.cardText}</p>
        <OndcButtons />
        <div className="mt-5">
          <OndcTags />
        </div>

        <Section title="The problem">
          <p className="text-inkSoft max-w-[680px]">{p.problem}</p>
        </Section>

        <Section title="What I built">
          <p className="text-inkSoft max-w-[680px]">{p.built}</p>
        </Section>

        <Section title="Design decisions">
          <Bullets items={p.decisions} />
        </Section>

        <Section title="What happened in testing">
          <Bullets items={p.testing} />
        </Section>

        <Section title="Screenshots">
          <div className="space-y-10">
            {p.gallery.map((shot) => (
              <figure key={shot.src}>
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  sizes="(max-width: 920px) 100vw, 856px"
                  className="w-full h-auto rounded-[10px] border border-line"
                />
                <figcaption className="mt-3 text-sm text-inkSoft">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        <Section title="How I built it">
          <p className="text-inkSoft max-w-[680px]">{p.howBuilt}</p>
        </Section>

        <footer className="mt-16 pt-6 border-t border-line text-xs text-inkSoft font-mono">
          <p>{p.footnote}</p>
        </footer>
      </div>
    </main>
  );
}
