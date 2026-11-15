import { ondcProject } from "@/lib/ondcProject";

export function OndcTags() {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Tags">
      {ondcProject.tags.map((tag) => (
        <li
          key={tag}
          className="font-mono text-[11px] text-inkSoft bg-monoBg border border-line rounded-full px-2.5 py-1"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export function OndcButtons({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={ondcProject.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-accent text-bg font-mono text-xs font-medium rounded-full px-4 py-2 hover:opacity-90 transition-opacity"
      >
        Live demo
      </a>
      <a
        href={ondcProject.codeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-surface text-ink border border-line font-mono text-xs font-medium rounded-full px-4 py-2 hover:border-accent hover:text-accent transition-colors"
      >
        Code
      </a>
      {children}
    </div>
  );
}
