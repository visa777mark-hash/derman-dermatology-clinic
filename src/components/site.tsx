import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const WA = "https://wa.me/380933946713";

export function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.43 9.44-9.43a9.4 9.4 0 0 1 9.43 9.44c0 5.2-4.24 9.43-9.44 9.43m8.03-17.46A11.3 11.3 0 0 0 12.05.7C5.79.7.7 5.79.7 12.05c0 2 .52 3.95 1.52 5.67L.6 23.3l5.72-1.5a11.3 11.3 0 0 0 5.72 1.46h.01c6.25 0 11.34-5.09 11.35-11.35 0-3.03-1.18-5.88-3.32-8.02" />
    </svg>
  );
}

export function WaButton({ children, size = "md", variant = "navy" }: { children: ReactNode; size?: "sm" | "md" | "lg"; variant?: "navy" | "outline" }) {
  const sizes = { sm: "px-4 py-2 text-sm", md: "px-5 py-2.5 text-sm", lg: "px-7 py-3.5 text-base" };
  const variants = {
    navy: "bg-primary text-primary-foreground hover:bg-royal",
    outline: "border border-primary/20 text-primary hover:border-primary hover:bg-surface",
  };
  return (
    <a href={WA} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors ${sizes[size]} ${variants[variant]}`}>
      <WhatsAppIcon /> {children}
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="min-w-0">
          <img src="/images/derman-logo.png" alt="DERMAN" className="h-8 w-auto sm:h-10" />
          <p className="mt-1 truncate text-[11px] font-medium leading-tight text-muted-foreground">Immigration & Visa Support Center</p>
          <p className="truncate text-[11px] leading-tight text-muted-foreground">Working since 2010</p>
        </Link>
        <WaButton size="sm">Contact WhatsApp</WaButton>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="h-1 bar-brand" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <img src="/images/derman-logo.png" alt="DERMAN" className="h-9 w-auto" loading="lazy" />
            <p className="mt-2 text-sm text-muted-foreground">Immigration & Visa Support Center · hrderman.com</p>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-primary hover:text-royal">
            <WhatsAppIcon className="h-5 w-5" /> WhatsApp: +380 93 394 6713
          </a>
        </div>
        <p className="mt-8 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
          DERMAN operates strictly as a private international HR consulting and recruitment coordination agency. We are not a government body, embassy, or law firm, and we do not issue visas or guarantee consular decisions. All employment placements and work permits are subject to official European employer approval and applicable national immigration laws. © 2010–2026 DERMAN Immigration & Visa Support Center. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export function SectionTitle({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <span className="text-xs font-bold uppercase tracking-[0.2em] text-crimson">{eyebrow}</span>}
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bar-brand" />
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary">← Back to home</Link>
        <span className="mt-6 block text-xs font-bold uppercase tracking-[0.2em] text-crimson">{eyebrow}</span>
        <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{sub}</p>
      </div>
    </section>
  );
}

export function SubNav() {
  const items = [
    { to: "/services", t: "Services", d: "Work permits, visas & employer documents" },
    { to: "/jobs", t: "Jobs", d: "Current European vacancies" },
    { to: "/about", t: "About Us", d: "Our story since 2010" },
  ] as const;
  return (
    <nav className="grid gap-3 sm:grid-cols-3">
      {items.map((i) => (
        <Link key={i.to} to={i.to} className="group card-brand flex items-center justify-between gap-3 p-5 transition-all hover:-translate-y-0.5 hover:border-royal">
          <div className="min-w-0">
            <p className="font-display text-lg font-bold text-navy">{i.t}</p>
            <p className="text-sm text-muted-foreground">{i.d}</p>
          </div>
          <span className="shrink-0 text-xl text-crimson transition-transform group-hover:translate-x-1">→</span>
        </Link>
      ))}
    </nav>
  );
}
