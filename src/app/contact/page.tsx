import type { Metadata } from "next";
import { ContactLinks } from "@/components/contact-links";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="mx-auto w-[min(980px,calc(100%-32px))] py-14 md:py-20" aria-labelledby="contact-title">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[color:var(--gold)]">
          Contact
        </p>
        <h1 id="contact-title" className="font-display mt-4 text-balance text-6xl leading-none md:text-8xl">
          Let&apos;s talk about scholarships, guidance, or projects.
        </h1>
        <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[color:var(--muted)]">
          The easiest way to reach me is Gmail. You can also check my GitHub or Instagram.
        </p>
        <div className="mt-8">
          <ContactLinks />
        </div>
      </section>
    </SiteShell>
  );
}
