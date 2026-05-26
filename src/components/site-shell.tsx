"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { GitHubMark } from "@/components/brand-icons";
import { navigation, profile } from "@/data/portfolio";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <div className="ambient-motion" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-[rgba(248,248,243,0.82)] backdrop-blur-xl">
        <nav
          className="mx-auto flex min-h-16 w-[min(1180px,calc(100%-32px))] flex-wrap items-center justify-between gap-3 py-3 md:flex-nowrap md:gap-4 md:py-0"
          aria-label="Primary"
        >
          <Link className="flex min-h-11 items-center font-extrabold" href="/">
            {profile.name}
          </Link>

          <div className="hidden items-center gap-1 rounded-full bg-white/70 p-1 shadow-[inset_0_0_0_1px_var(--line)] md:flex">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  className={`flex min-h-10 items-center rounded-full px-4 text-sm font-bold transition-[background-color,color,transform] duration-200 hover:bg-[color:var(--quiet)] hover:text-[color:var(--ink)] active:scale-[0.96] ${
                    active ? "bg-[color:var(--ink)] text-white" : "text-[color:var(--muted)]"
                  }`}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[color:var(--line)] bg-white px-4 text-sm font-extrabold text-[color:var(--ink)] transition-[transform,background-color] duration-200 hover:bg-[color:var(--quiet)] active:scale-[0.96] md:hidden"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
              {menuOpen ? "Close" : "Menu"}
            </button>

            <a
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[color:var(--ink)] px-4 text-sm font-extrabold text-white shadow-[0_12px_30px_rgba(23,27,23,0.22)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[color:var(--forest)] hover:shadow-[0_18px_42px_rgba(22,72,63,0.28)] active:scale-[0.96]"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubMark className="h-4 w-4" />
              GitHub
            </a>
          </div>

          {menuOpen ? (
            <div
              id="mobile-nav"
              className="order-3 grid w-full gap-1 rounded-[24px] bg-white/86 p-2 shadow-[inset_0_0_0_1px_var(--line),0_18px_45px_rgba(23,27,23,0.12)] md:hidden"
            >
              {navigation.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    className={`flex min-h-12 items-center rounded-full px-4 text-sm font-extrabold transition-[background-color,color,transform] duration-200 active:scale-[0.96] ${
                      active ? "bg-[color:var(--ink)] text-white" : "text-[color:var(--muted)] hover:bg-[color:var(--quiet)] hover:text-[color:var(--ink)]"
                    }`}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          ) : null}
        </nav>
      </header>

      <main id="main">{children}</main>

      <footer className="border-t border-[color:var(--line)] bg-[color:var(--paper)]">
        <div className="mx-auto flex w-[min(1180px,calc(100%-32px))] flex-col gap-3 py-7 text-sm font-bold text-[color:var(--muted)] md:flex-row md:items-center md:justify-between">
          <span>{profile.name}</span>
          <span>Building stuff in public — one project at a time.</span>
        </div>
      </footer>
    </>
  );
}
