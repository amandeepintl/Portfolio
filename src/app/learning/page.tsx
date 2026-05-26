import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { learningAreas } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Learning"
};

export default function LearningPage() {
  return (
    <SiteShell>
      <section className="mx-auto w-[min(1180px,calc(100%-32px))] py-14 md:py-20" aria-labelledby="learning-title">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[color:var(--gold)]">
          Learning progress
        </p>
        <div className="mt-4 grid gap-6 md:grid-cols-[0.8fr_1fr] md:items-end">
          <h1 id="learning-title" className="font-display text-balance text-6xl leading-none md:text-8xl">
            What I&apos;m working on.
          </h1>
          <p className="max-w-2xl text-pretty text-base leading-8 text-[color:var(--muted)]">
            Not a final score. Just shows where I&apos;m spending time and what I&apos;m trying to get better at.
          </p>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-32px))] pb-16 md:pb-24">
        <div className="grid gap-4">
          {learningAreas.map((area) => (
            <article className="grid gap-4 border border-[color:var(--line)] bg-white/92 p-5 shadow-sm md:grid-cols-[260px_1fr]" key={area.name}>
              <div>
                <h2 className="text-xl font-extrabold">{area.name}</h2>
                <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">{area.note}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-5 flex-1 bg-[color:var(--quiet)] shadow-[inset_0_0_0_1px_var(--line)]" aria-hidden="true">
                  <div
                    className="learning-bar h-full bg-[color:var(--forest)]"
                    style={{ width: `${area.value}%` }}
                  />
                </div>
                <span className="w-12 text-right font-display text-3xl leading-none text-[color:var(--forest)]">
                  {area.value}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
