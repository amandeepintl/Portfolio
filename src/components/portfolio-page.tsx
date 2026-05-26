"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2, GraduationCap, Mail, MapPin, Sparkles } from "lucide-react";
import { ContactLinks } from "@/components/contact-links";
import { ProjectCard } from "@/components/project-card";
import { SiteShell } from "@/components/site-shell";
import { allProjects, profile } from "@/data/portfolio";

const latestHomeProjects = Array.isArray(allProjects) ? allProjects.slice(0, 3) : [];

export function PortfolioPage() {
  return (
    <SiteShell>
      <section
        className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-10 py-14 md:grid-cols-[1.1fr_0.9fr] md:py-20 lg:gap-16"
        aria-labelledby="hero-title"
      >
        <div className="flex flex-col justify-center hero-animate">
          <p className="mb-5 inline-flex w-fit items-center gap-2 border border-[color:var(--line)] bg-white px-3 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[color:var(--forest)] shadow-sm">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            {profile.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="font-display max-w-4xl text-balance text-6xl leading-none text-[color:var(--ink)] md:text-8xl"
          >
            {profile.headline}
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[color:var(--muted)] md:text-xl">
            {profile.intro}
          </p>
          <p className="mt-4 max-w-2xl border-l-4 border-[color:var(--gold)] pl-4 text-pretty text-base font-bold leading-7 text-[color:var(--forest)]">
            {profile.focus}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="inline-flex min-h-12 items-center gap-2 bg-[color:var(--ink)] px-5 text-sm font-extrabold text-white shadow-[0_18px_44px_rgba(23,27,23,0.24)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_54px_rgba(23,27,23,0.28)] active:scale-[0.96]"
              href="/work"
            >
              View all work
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              className="inline-flex min-h-12 items-center gap-2 border border-[color:var(--line)] bg-white px-5 text-sm font-extrabold text-[color:var(--ink)] transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[color:var(--quiet)] active:scale-[0.96]"
              href="/contact"
            >
              Contact
              <Mail className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <aside
          className="relative self-start overflow-hidden border border-[color:var(--line)] bg-white/92 shadow-[var(--shadow)] lg:scale-[1.04] lg:origin-top aside-animate"
          aria-label="Profile summary"
        >
          <div className="grid grid-cols-[1fr_136px] gap-6 border-b border-[color:var(--line)] p-6">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[color:var(--muted)]">
                Developer profile
              </p>
              <h2 className="mt-4 font-display text-5xl leading-none">{profile.name}</h2>
              <p className="mt-3 flex items-center gap-2 text-sm font-bold text-[color:var(--muted)]">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {profile.location}
              </p>
            </div>
            <Image
              className="aspect-square object-cover shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
              src={profile.avatar}
              alt={`${profile.name} GitHub avatar`}
              width={224}
              height={224}
              priority
            />
          </div>
          <div className="grid grid-cols-3 divide-x divide-[color:var(--line)] border-b border-[color:var(--line)]">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="p-6">
                <span className="block font-display text-5xl leading-none text-[color:var(--forest)]">
                  {stat.value}
                </span>
                <span className="mt-2 block text-xs font-extrabold uppercase tracking-[0.14em] text-[color:var(--muted)]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          <div className="grid gap-3 p-6">
            <div className="flex items-start gap-3 bg-[color:var(--quiet)] p-5">
              <GraduationCap className="mt-1 h-5 w-5 text-[color:var(--cobalt)]" aria-hidden="true" />
              <p className="text-pretty text-sm font-bold leading-6 text-[color:var(--ink)]">
                Easy to read for scholarship reviewers, mentors, and anyone checking my work.
              </p>
            </div>
            <div className="flex items-start gap-3 bg-[#f5ede7] p-5">
              <Code2 className="mt-1 h-5 w-5 text-[color:var(--ember)]" aria-hidden="true" />
              <p className="text-pretty text-sm font-bold leading-6 text-[color:var(--ink)]">
                Just showing what I learned, what I built, and where I&apos;m going next.
              </p>
            </div>
          </div>
        </aside>
      </section>

      <section className="border-y border-[color:var(--line)] bg-[color:var(--forest)] text-white">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-6 py-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <p className="font-display text-3xl leading-tight md:text-4xl">
            Everything has its own page.
          </p>
          <p className="text-pretty text-base leading-7 text-white/78">
            Use the nav up top to check my work, project notes, learning progress, or just reach out.
          </p>
        </div>
      </section>

      <section
        className="mx-auto w-[min(1180px,calc(100%-32px))] py-16 md:py-24"
        aria-labelledby="latest-title"
      >
        <div className="mb-9 grid gap-5 md:grid-cols-[0.55fr_1fr] md:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[color:var(--ember)]">
              Latest work
            </p>
            <h2 id="latest-title" className="font-display mt-4 text-balance text-5xl leading-none md:text-7xl">
              My last 3 builds.
            </h2>
          </div>
          <p className="max-w-2xl text-pretty text-base leading-8 text-[color:var(--muted)]">
            The Work page has everything. This is just the newest stuff to give you a quick idea.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {latestHomeProjects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.name} />
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--ink)] text-white" aria-labelledby="home-contact-title">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-8 py-16 md:grid-cols-[1fr_1fr] md:items-end md:py-20">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#f2bd4b]">
              Contact
            </p>
            <h2 id="home-contact-title" className="font-display mt-4 text-balance text-5xl leading-none md:text-7xl">
              Reach out for scholarships, mentoring, or collabs.
            </h2>
          </div>
          <div>
            <p className="text-pretty text-base leading-8 text-white/72">
              Gmail is the easiest way to reach me. Links are also on the Contact page if you prefer that.
            </p>
            <div className="mt-7">
              <ContactLinks dark />
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

