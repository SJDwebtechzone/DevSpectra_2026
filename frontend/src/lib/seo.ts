export const seoConfig = {
  siteName: "DevSpectra",
  siteUrl: "https://devspectra.com", // Replace with real URL if different
  defaultTitle: "DevSpectra | Web, Mobile App, SaaS & Digital Marketing Company",
  defaultDescription: "DevSpectra provides web development, mobile app development, e-commerce, SaaS product development, web applications and digital marketing solutions for businesses in Chennai, Kanchipuram and across India.",
  defaultImage: "/og-image.jpg", // From __root.tsx
  locale: "en_IN",
  twitterHandle: "@devspectra",
  locations: [
    {
      name: "Chennai",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN"
    },
    {
      name: "Kanchipuram",
      addressLocality: "Kanchipuram",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN"
    }
  ],
  services: [
    "Web Development",
    "Website Development",
    "Custom Web Application Development",
    "Mobile App Development",
    "E-commerce Website Development",
    "SaaS Product Development",
    "Software Development",
    "Digital Marketing",
    "Google Ads",
    "Facebook Ads / Meta Ads",
    "UI/UX Design",
    "Business Website Development",
    "Custom Software Solutions"
  ],
  socialProfiles: [
    "https://www.facebook.com/",
    "https://x.com/",
    "https://www.linkedin.com/",
    "https://www.instagram.com/",
    "https://www.youtube.com/"
  ]
};

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
  keywords?: string[];
}

export function generateSEO({
  title,
  description = seoConfig.defaultDescription,
  image = seoConfig.defaultImage,
  url,
  type = "website",
  noindex = false,
  keywords = []
}: SEOProps = {}) {
  const finalTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.defaultTitle;
  const canonicalUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl;

  const meta = [
    { title: finalTitle },
    { name: "description", content: description },
    { property: "og:site_name", content: seoConfig.siteName },
    { property: "og:title", content: finalTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: canonicalUrl },
    { property: "og:image", content: `${seoConfig.siteUrl}${image}` },
    { property: "og:locale", content: seoConfig.locale },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: seoConfig.twitterHandle },
    { name: "twitter:title", content: finalTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: `${seoConfig.siteUrl}${image}` },
  ];

  if (keywords && keywords.length > 0) {
    meta.push({ name: "keywords", content: keywords.join(", ") });
  }

  if (noindex) {
    meta.push({ name: "robots", content: "noindex, nofollow" });
  } else {
    meta.push({ name: "robots", content: "index, follow" });
  }

  const links = [
    { rel: "canonical", href: canonicalUrl }
  ];

  return { meta, links };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    logo: `${seoConfig.siteUrl}/favicon.png`,
    description: seoConfig.defaultDescription,
    sameAs: seoConfig.socialProfiles
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
  };
}

export function generateLocalBusinessSchema(locationName: "Chennai" | "Kanchipuram") {
  const loc = seoConfig.locations.find(l => l.name === locationName);
  if (!loc) return null;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${seoConfig.siteName} ${locationName}`,
    image: `${seoConfig.siteUrl}${seoConfig.defaultImage}`,
    url: `${seoConfig.siteUrl}/contact`, // Adjust if there's a specific location page
    address: {
      "@type": "PostalAddress",
      addressLocality: loc.addressLocality,
      addressRegion: loc.addressRegion,
      addressCountry: loc.addressCountry
    },
    parentOrganization: {
      "@type": "Organization",
      name: seoConfig.siteName
    }
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${seoConfig.siteUrl}${item.url}`
    }))
  };
}
