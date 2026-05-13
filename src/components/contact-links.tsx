import { AtSign } from "lucide-react";
import { GitHubMark, GmailMark, InstagramMark } from "@/components/brand-icons";
import { links } from "@/data/portfolio";

function IconForLink({ label }: { label: string }) {
  const className = "h-4 w-4";

  if (label === "GitHub") return <GitHubMark className={className} />;
  if (label === "Gmail") return <GmailMark className={className} />;
  if (label === "Instagram") return <InstagramMark className={className} />;

  return <AtSign className={className} aria-hidden="true" />;
}

export function ContactLinks({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          className={
            dark
              ? "inline-flex min-h-12 items-center gap-2 border border-white/18 bg-white/8 px-5 text-sm font-extrabold text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-white/14 active:scale-[0.96]"
              : "inline-flex min-h-12 items-center gap-2 bg-[color:var(--ink)] px-5 text-sm font-extrabold text-white shadow-[0_18px_44px_rgba(23,27,23,0.18)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[color:var(--forest)] hover:shadow-[0_22px_54px_rgba(22,72,63,0.24)] active:scale-[0.96]"
          }
          href={link.href}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
          key={link.label}
        >
          <IconForLink label={link.label} />
          {link.label}
        </a>
      ))}
    </div>
  );
}
