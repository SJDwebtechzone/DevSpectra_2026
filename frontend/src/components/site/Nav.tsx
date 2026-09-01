import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

interface NavProps {
  ctaLabel?: string;
  ctaTo?: string;
  className?: string;
}

export function Nav({ ctaLabel = "Get Free Consultation", ctaTo = "/contact", className = "" }: NavProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`absolute inset-x-0 top-0 z-50 py-3 ${className}`}>
        <div className="container-page">
          <div
            className={`bg-[#02081f]/90 backdrop-blur-md border border-blue-900/50 flex items-center justify-between rounded-full px-4 py-2 md:px-5 md:py-2.5 shadow-lg ${className}`}
          >
            <Link to="/" className="flex items-center gap-2 pl-1" aria-label="DevSpectra home">
              <img src="/devspectra.png" alt="DevSpectra" className="h-10 w-auto object-contain" />
            </Link>

            <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="rounded-full px-4 py-2 text-[15px] font-medium text-white/80 transition-colors hover:text-white"
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{
                    className:
                      "!text-white bg-white/15",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Link to={ctaTo} className="btn-pill btn-accent hidden sm:inline-flex">
                {ctaLabel}
              </Link>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="btn-pill btn-ghost !h-10 !w-10 !p-0 lg:hidden text-white"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "color-mix(in oklab, var(--color-page-bg) 95%, transparent)",
            backdropFilter: "blur(20px)",
          }}
          onClick={() => setOpen(false)}
        />
        <div className="relative flex h-full flex-col items-start justify-center gap-2 px-8 pt-24">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-4xl font-semibold tracking-tight transition-transform"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {l.label}
            </Link>
          ))}
          <Link to={ctaTo} onClick={() => setOpen(false)} className="btn-pill btn-accent mt-6">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </>
  );
}
