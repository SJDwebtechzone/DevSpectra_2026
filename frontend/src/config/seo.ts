/**
 * DevSpectra — Centralized SEO Configuration
 *
 * Single source of truth for all page-level SEO metadata.
 * Used by TanStack Router `head()` functions in each route file.
 *
 * ─────────────────────────────────────────────────────────────────────
 * IMPORTANT: DO NOT invent business data.
 * Fields marked [PLACEHOLDER] must be filled with real verified data
 * before going live. Leave them as-is until that information is confirmed.
 * ─────────────────────────────────────────────────────────────────────
 */

export const SITE = {
  name: "DevSpectra",
  domain: "https://devspectra.in",
  /** [PLACEHOLDER] Replace with a real 1200×630 OG image hosted on the domain */
  defaultOgImage: "https://devspectra.in/og-image.jpg",
  /** [PLACEHOLDER] Replace with verified Twitter/X handle */
  twitterHandle: "@devspectra",

  // ── Business info ──────────────────────────────────────────────────
  // Fill these with REAL verified data from Google Business Profile
  // before enabling LocalBusiness schema in production.
  locations: {
    chennai: {
      name: "DevSpectra",
      /** [PLACEHOLDER] Verified Chennai address */
      address: {
        streetAddress: "[PLACEHOLDER: Chennai street address]",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        postalCode: "[PLACEHOLDER: Chennai PIN]",
        addressCountry: "IN",
      },
      /** [PLACEHOLDER] Verified phone number */
      telephone: "[PLACEHOLDER: +91-XXXXXXXXXX]",
      /** [PLACEHOLDER] Verified opening hours */
      openingHours: ["Mo-Sa 09:00-18:00"],
      geo: { latitude: 13.0827, longitude: 80.2707 },
      /** [PLACEHOLDER] Verified Google Maps URL */
      hasMap: "[PLACEHOLDER: Google Maps URL for Chennai]",
    },
    kanchipuram: {
      name: "DevSpectra",
      /** [PLACEHOLDER] Verified Kanchipuram address */
      address: {
        streetAddress: "[PLACEHOLDER: Kanchipuram street address]",
        addressLocality: "Kanchipuram",
        addressRegion: "Tamil Nadu",
        postalCode: "[PLACEHOLDER: Kanchipuram PIN]",
        addressCountry: "IN",
      },
      /** [PLACEHOLDER] Verified phone number */
      telephone: "[PLACEHOLDER: +91-XXXXXXXXXX]",
      openingHours: ["Mo-Sa 09:00-18:00"],
      geo: { latitude: 12.8185, longitude: 79.6947 },
      /** [PLACEHOLDER] Verified Google Maps URL */
      hasMap: "[PLACEHOLDER: Google Maps URL for Kanchipuram]",
    },
  },

  // ── Social profiles — add only real, verified URLs ──────────────────
  socialProfiles: {
    /** [PLACEHOLDER] Replace with real LinkedIn company URL */
    linkedin: "[PLACEHOLDER: https://linkedin.com/company/devspectra]",
    /** [PLACEHOLDER] Replace with real Instagram URL */
    instagram: "[PLACEHOLDER: https://instagram.com/devspectra]",
    /** [PLACEHOLDER] Replace with real Facebook URL */
    facebook: "[PLACEHOLDER: https://facebook.com/devspectra]",
    /** [PLACEHOLDER] Replace with real YouTube URL */
    youtube: "[PLACEHOLDER: https://youtube.com/@devspectra]",
  },
} as const;

/**
 * SEO metadata per page.
 * Each entry is designed to be spread into a TanStack Router head() meta array.
 */
export const PAGE_SEO = {
  // ── Homepage ─────────────────────────────────────────────────────────
  home: {
    title: "Web Development & Digital Marketing Company in Chennai | DevSpectra",
    description:
      "DevSpectra is a web development and digital solutions company in Chennai and Kanchipuram offering websites, web applications, mobile apps, e-commerce, SaaS products, SEO, Google Ads and social media marketing.",
    canonical: `${SITE.domain}/`,
    ogTitle: "Web Development & Digital Solutions for Growing Businesses | DevSpectra",
    ogDescription:
      "Professional web development, web applications, mobile apps, e-commerce, SaaS and digital marketing solutions from DevSpectra.",
    robots: "index, follow",
  },

  // ── Services ──────────────────────────────────────────────────────────
  services: {
    title: "Web Development, Mobile Apps & Digital Marketing Services | DevSpectra",
    description:
      "Explore DevSpectra's full range of services: custom web development, mobile applications, e-commerce, SaaS products, UI/UX design, SEO, Google Ads and social media marketing.",
    canonical: `${SITE.domain}/services`,
    ogTitle: "Web Development & Digital Marketing Services | DevSpectra",
    ogDescription:
      "Full-service digital studio offering web development, mobile apps, e-commerce, SaaS and digital marketing for businesses in Chennai and across India.",
    robots: "index, follow",
  },

  // ── Portfolio ─────────────────────────────────────────────────────────
  portfolio: {
    title: "Our Work & Portfolio | DevSpectra",
    description:
      "See DevSpectra's portfolio of web development, mobile app, e-commerce and SaaS projects delivered for clients across India.",
    canonical: `${SITE.domain}/portfolio`,
    ogTitle: "Our Work & Portfolio | DevSpectra",
    ogDescription:
      "Websites, mobile apps and digital products built by DevSpectra for businesses in Chennai, Kanchipuram and across India.",
    robots: "index, follow",
  },

  // ── Blog ──────────────────────────────────────────────────────────────
  blog: {
    title: "Blog — Web Development, Design & Digital Marketing Insights | DevSpectra",
    description:
      "Read DevSpectra's articles on web development, UI/UX design, mobile apps, digital marketing, SEO and software engineering.",
    canonical: `${SITE.domain}/blog`,
    ogTitle: "DevSpectra Blog — Engineering, Design & Digital Marketing",
    ogDescription:
      "Articles and insights from the DevSpectra team on web development, mobile apps, SEO, digital marketing and software product design.",
    robots: "index, follow",
  },

  // ── Contact ───────────────────────────────────────────────────────────
  contact: {
    title: "Contact DevSpectra | Web Development & Digital Marketing Agency",
    description:
      "Get in touch with DevSpectra for web development, mobile apps, digital marketing, SEO and Google Ads services. Offices in Chennai and Kanchipuram, Tamil Nadu.",
    canonical: `${SITE.domain}/contact`,
    ogTitle: "Contact DevSpectra | Chennai Digital Agency",
    ogDescription:
      "Reach out to DevSpectra for your web development, digital marketing or SEO project. We are based in Chennai and Kanchipuram, Tamil Nadu.",
    robots: "index, follow",
  },

  // ── Careers ───────────────────────────────────────────────────────────
  careers: {
    title: "Careers at DevSpectra | Join Our Team in Chennai",
    description:
      "Explore career opportunities at DevSpectra. Join our team of developers, designers and marketers building digital products for businesses across India.",
    canonical: `${SITE.domain}/careers`,
    ogTitle: "Careers at DevSpectra | Join Our Team",
    ogDescription:
      "Looking for a career in web development, design or digital marketing? Explore open positions at DevSpectra.",
    robots: "index, follow",
  },

  // ── Private pages — noindex ───────────────────────────────────────────
  dashboard: {
    title: "Dashboard | DevSpectra",
    description: "DevSpectra admin dashboard.",
    canonical: `${SITE.domain}/dashboard`,
    robots: "noindex, nofollow",
  },

  login: {
    title: "Login | DevSpectra",
    description: "DevSpectra admin login.",
    canonical: `${SITE.domain}/login`,
    robots: "noindex, nofollow",
  },
} as const;

// ── Reusable JSON-LD schema builders ─────────────────────────────────────

/**
 * WebSite schema — included globally in __root.tsx
 */
export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.domain,
    // NOTE: SearchAction is omitted because the website does not have a
    // functioning internal search feature.
  };
}

/**
 * Organization schema — included globally in __root.tsx
 * sameAs URLs are placeholders — replace with real verified profile URLs.
 */
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.domain,
    logo: `${SITE.domain}/favicon.png`,
    description:
      "DevSpectra is a web development and digital marketing company based in Chennai and Kanchipuram, Tamil Nadu, India.",
    // sameAs: replace placeholders below with real verified social profile URLs
    // before enabling in production.
    // sameAs: [
    //   SITE.socialProfiles.linkedin,
    //   SITE.socialProfiles.instagram,
    //   SITE.socialProfiles.facebook,
    //   SITE.socialProfiles.youtube,
    // ],
  };
}

/**
 * BreadcrumbList schema builder.
 * Pass an array of { name, url } items representing the page hierarchy.
 */
export function buildBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Service schema builder.
 * Use for individual service sections/pages.
 */
export function buildServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.domain,
    },
    areaServed: [
      { "@type": "City", name: "Chennai" },
      { "@type": "City", name: "Kanchipuram" },
      { "@type": "State", name: "Tamil Nadu" },
      { "@type": "Country", name: "India" },
    ],
  };
}

/**
 * Builds a standard head() meta array for any public page.
 * Reduces repetition across route files.
 */
export function buildPageMeta(opts: {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  robots?: string;
}) {
  const ogImage = opts.ogImage ?? SITE.defaultOgImage;
  const ogTitle = opts.ogTitle ?? opts.title;
  const ogDesc = opts.ogDescription ?? opts.description;
  const robots = opts.robots ?? "index, follow";

  return [
    { title: opts.title },
    { name: "description", content: opts.description },
    { name: "robots", content: robots },

    // Open Graph
    { property: "og:title", content: ogTitle },
    { property: "og:description", content: ogDesc },
    { property: "og:url", content: opts.canonical },
    { property: "og:image", content: ogImage },
    { property: "og:type", content: "website" },

    // Twitter / X
    { name: "twitter:title", content: ogTitle },
    { name: "twitter:description", content: ogDesc },
    { name: "twitter:image", content: ogImage },
    { name: "twitter:card", content: "summary_large_image" },
  ] as const;
}
