import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { projectNotes } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Notes"
};

export default function NotesPage() {
  return (
    <SiteShell>
      <section className="mx-auto w-[min(1180px,calc(100%-32px))] py-14 md:py-20" aria-labelledby="notes-title">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[color:var(--cobalt)]">
          Project notes
        </p>
        <div className="mt-4 grid gap-6 md:grid-cols-[0.8fr_1fr] md:items-end">
          <h1 id="notes-title" className="font-display text-balance text-6xl leading-none md:text-8xl">
            What I picked up from each project.
          </h1>
          <p className="max-w-2xl text-pretty text-base leading-8 text-[color:var(--muted)]">
            Short notes on each build. What the problem was, what I learned, and what I want to do better next time.
          </p>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-32px))] pb-16 md:pb-24">
        <div className="grid gap-4 lg:grid-cols-2">
          {projectNotes.map((note) => (
            <article className="border border-[color:var(--line)] bg-white/92 p-5 shadow-sm" key={note.project}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[color:var(--muted)]">
                    {note.project}
                  </p>
                  <h2 className="mt-3 text-2xl font-extrabold">{note.title}</h2>
                </div>
                <BookOpen className="h-6 w-6 text-[color:var(--forest)]" aria-hidden="true" />
              </div>
              <dl className="mt-6 grid gap-5">
                <div>
                  <dt className="text-xs font-extrabold uppercase tracking-[0.14em] text-[color:var(--ember)]">
                    Problem
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-[color:var(--muted)]">{note.problem}</dd>
                </div>
                <div>
                  <dt className="text-xs font-extrabold uppercase tracking-[0.14em] text-[color:var(--cobalt)]">
                    Learned
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-[color:var(--muted)]">{note.learned}</dd>
                </div>
                <div>
                  <dt className="text-xs font-extrabold uppercase tracking-[0.14em] text-[color:var(--forest)]">
                    Next
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-[color:var(--muted)]">{note.next}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
