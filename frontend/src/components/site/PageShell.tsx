import { useEffect, type ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

type Mode = "home" | "services" | "portfolio" | "about" | "blog" | "careers" | "contact";

interface PageShellProps {
  mode: Mode;
  ctaLabel?: string;
  ctaTo?: string;
  children: ReactNode;
}

export function PageShell({ mode, ctaLabel, ctaTo, children }: PageShellProps) {
  useEffect(() => {
    const cls = `mode-${mode}`;
    document.body.classList.add(cls);
    return () => document.body.classList.remove(cls);
  }, [mode]);

  return (
    <div
      className={`mode-${mode} min-h-screen`}
      style={{ background: "var(--color-page-bg)", color: "var(--color-page-fg)" }}
    >
      <Nav 
        ctaLabel={ctaLabel} 
        ctaTo={ctaTo} 
      />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  );
}

interface StubHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  note?: string;
}

export function StubHero({ eyebrow, title, subtitle, note }: StubHeroProps) {
  return (
    <section className="section-y">
      <div className="container-page">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="display-1 mt-5 max-w-4xl">{title}</h1>
        <p className="lead mt-6 max-w-2xl">{subtitle}</p>
        {note && (
          <div
            className="surface-card mt-14 inline-flex items-center gap-3 px-5 py-3 text-sm"
            style={{ color: "var(--color-page-muted)" }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--color-page-accent)" }}
            />
            {note}
          </div>
        )}
      </div>
    </section>
  );
}
