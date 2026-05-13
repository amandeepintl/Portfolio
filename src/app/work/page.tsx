import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { SiteShell } from "@/components/site-shell";
import { allProjects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Work"
};

export default function WorkPage() {
  return (
    <SiteShell>
      <section className="mx-auto w-[min(1180px,calc(100%-32px))] py-14 md:py-20" aria-labelledby="work-title">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[color:var(--ember)]">
          All work
        </p>
        <div className="mt-4 grid gap-6 md:grid-cols-[0.8fr_1fr] md:items-end">
          <h1 id="work-title" className="font-display text-balance text-6xl leading-none md:text-8xl">
            Projects I have built.
          </h1>
          <p className="max-w-2xl text-pretty text-base leading-8 text-[color:var(--muted)]">
            This page shows the public projects from my GitHub in clear language: what each project does, what it proves, and where to see the code.
          </p>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-32px))] pb-16 md:pb-24">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {allProjects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.name} />
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
