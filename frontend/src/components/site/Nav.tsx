import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blogs" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

interface NavProps {
  ctaLabel?: string;
  ctaTo?: string;
  className?: string;
  contactPage?: boolean;
}

export function Nav({ ctaLabel = "Get Free Consultation", ctaTo = "/contact", className = "", contactPage = false }: NavProps) {
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
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${contactPage ? "border-b border-white" : "border-b border-transparent"} ${scrolled ? "py-2" : "py-3"} ${className}`}
        style={{
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.5)" : contactPage ? "rgba(238, 252, 246, 0.96)" : "transparent",
        }}
      >
        <div className="container-page">
          <div
            className={`flex items-center justify-between rounded-full px-4 py-2 md:px-5 md:py-2.5 shadow-lg transition-all duration-300 border ${
              scrolled
                ? "bg-[#02081f]/95 backdrop-blur-xl border-blue-900/60 shadow-xl shadow-black/20"
                : "bg-[#02081f]/80 backdrop-blur-md border-blue-900/40"
            } ${className}`}
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
              <div className="hidden rounded-full bg-[conic-gradient(from_210deg,#111827_0deg,#111827_48deg,#2563eb_62deg,#ef4444_78deg,#facc15_92deg,#f8fafc_112deg,#f8fafc_240deg,#111827_280deg,#111827_360deg)] p-[2px] shadow-[0_8px_18px_rgba(25,35,55,0.16)] sm:inline-flex">
                <Link
                  to={ctaTo}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                  {ctaLabel}
                </Link>
              </div>
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
          <Link to={ctaTo} onClick={() => setOpen(false)} className="btn-pill btn-accent mt-6 inline-flex items-center gap-2">
            
            {ctaLabel}
          </Link>
        </div>
      </div>
    </>
  );
}
