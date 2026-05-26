import { ArrowUpRight } from "lucide-react";
import { GitHubMark } from "@/components/brand-icons";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group flex min-h-[420px] flex-col border border-[color:var(--line)] bg-white/92 p-5 shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-[rgba(22,72,63,0.35)] hover:shadow-[var(--shadow)]">
      <div className="mb-7 flex items-center justify-between gap-4">
        <span className="inline-flex min-h-9 items-center border border-[color:var(--line)] px-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[color:var(--forest)]">
          {project.category}
        </span>
        <span className="font-display text-4xl leading-none text-[color:var(--gold)]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="text-2xl font-extrabold">{project.name}</h3>
      <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[color:var(--muted)]">
        pushed {project.pushedAt}
      </p>
      <p className="mt-4 text-pretty text-sm leading-7 text-[color:var(--muted)]">
        {project.description}
      </p>
      <p className="mt-4 border-l-2 border-[color:var(--cobalt)] pl-3 text-pretty text-sm font-bold leading-6 text-[color:var(--ink)]">
        {project.highlight}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="inline-flex min-h-8 items-center bg-[color:var(--quiet)] px-3 text-xs font-extrabold text-[color:var(--ink)]">
          {project.language}
        </span>
        {project.tags.map((tag) => (
          <span
            className="inline-flex min-h-8 items-center bg-[#edf4f7] px-3 text-xs font-bold text-[color:var(--cobalt)]"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap gap-3 pt-8">
        <a
          className="inline-flex min-h-11 items-center gap-2 bg-[color:var(--ink)] px-4 text-sm font-extrabold text-white transition-[transform,background-color] duration-200 hover:bg-[color:var(--forest)] active:scale-[0.96]"
          href={project.repo}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          <GitHubMark className="h-4 w-4" />
        </a>
        {project.live ? (
          <a
            className="inline-flex min-h-11 items-center gap-2 border border-[color:var(--line)] px-4 text-sm font-extrabold text-[color:var(--ink)] transition-[transform,background-color] duration-200 hover:bg-[color:var(--quiet)] active:scale-[0.96]"
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            Live
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </article>
  );
}
