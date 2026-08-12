import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="mt-24 border-t" style={{ borderColor: "var(--color-page-border)" }}>
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2" aria-label="DevSpectra home">
              <img
                src="/devspectra.png"
                alt="DevSpectra"
                className="h-10 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </Link>
            <p className="lead mt-4 !text-sm max-w-xs">
              A boutique engineering studio building software that feels inevitable.
            </p>
            <div className="mt-5 flex gap-2">
              {["Tw", "Li", "Gh", "Dr"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="grid h-9 w-9 place-items-center rounded-full border text-xs"
                  style={{ borderColor: "var(--color-page-border)" }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4
              className="mb-4 text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--color-page-muted)" }}
            >
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {nav.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:opacity-70 transition-opacity">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="mb-4 text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--color-page-muted)" }}
            >
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm" style={{ color: "var(--color-page-muted)" }}>
              <li>hello@devspectra.com</li>
              <li>+1 (555) 123-4567</li>
              <li>New York · Lisbon · Bangalore</li>
            </ul>
          </div>

          <div>
            <h4
              className="mb-4 text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--color-page-muted)" }}
            >
              Newsletter
            </h4>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="you@company.com"
                aria-label="Email address"
                className="min-w-0 flex-1 rounded-full border bg-transparent px-4 py-2 text-sm outline-none focus:ring-2"
                style={{
                  borderColor: "var(--color-page-border)",
                  //@ts-ignore
                  "--tw-ring-color": "var(--color-page-accent)",
                }}
              />
              <button type="submit" className="btn-pill btn-primary !h-10">
                Join
              </button>
            </form>
          </div>
        </div>

        <div
          className="mt-14 flex flex-col items-start justify-between gap-3 border-t pt-6 text-xs md:flex-row md:items-center"
          style={{ borderColor: "var(--color-page-border)", color: "var(--color-page-muted)" }}
        >
          <p>© 2026 DevSpectra. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:opacity-70">
              Terms
            </a>
            <a href="#" className="hover:opacity-70">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
