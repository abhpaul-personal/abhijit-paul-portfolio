import SectionDivider from "./SectionDivider";

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-24 text-center">
        <SectionDivider step={5} total={5} fill="100%" center />
        <div className="eyebrow justify-center">let&apos;s talk</div>
        <p className="text-textSecondary mb-3">
          If you&apos;re a recruiter or hiring manager and something here
          looks like a fit, I&apos;d welcome the conversation.
        </p>
        <h2 className="font-display font-semibold text-4xl mb-3">
          Open to Senior PM &amp; Principal TPM roles
        </h2>
        <p className="mx-auto text-textSecondary">
          Based in Mumbai, open to relocation anywhere in India.
        </p>
        <div className="flex gap-6 justify-center mt-7 font-mono text-sm">
          <a
            href="https://linkedin.com/in/abhpaul"
            target="_blank"
            className="text-signal hover:underline"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/abhpaul-personal"
            target="_blank"
            className="text-signal hover:underline"
          >
            GitHub ↗
          </a>
        </div>
      </section>
      <footer className="border-t border-border py-8 text-center text-xs text-textMuted font-mono">
        © 2026 Abhijit Paul
      </footer>
    </>
  );
}
