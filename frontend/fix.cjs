const fs = require('fs');
let content = fs.readFileSync('src/routes/services.tsx', 'utf8');

// 1. Remove the old imports from the middle of the file
content = content.replace(/import \{ buildPageMeta, buildBreadcrumbSchema, buildServiceSchema, PAGE_SEO, SITE \} from "@\/config\/seo";\r?\n?/g, '');
content = content.replace(/import \{ generateSEO, generateServiceSchema \} from "@\/lib\/seo";\r?\n?/g, '');

// 2. Add the new import at the top
content = 'import { generateSEO, generateServiceSchema } from "@/lib/seo";\n' + content;

// 3. Find the Route block and replace it completely
const newRoute = `export const Route = createFileRoute("/services")({
  head: () => {
    const seo = generateSEO({
      title: "Services",
      description: "Explore DevSpectra's professional services: Web Development, Mobile App Development, E-commerce, SaaS, and Digital Marketing in Chennai.",
      url: "/services",
    });
    return {
      meta: seo.meta,
      links: seo.links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(generateServiceSchema("Web Development", "Professional website and web application development.")),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(generateServiceSchema("Mobile App Development", "Custom iOS and Android application development.")),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(generateServiceSchema("Google Ads Management", "Expert Google Ads campaign management and digital marketing for businesses.")),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(generateServiceSchema("Meta Ads / Facebook Ads", "Strategic Facebook and Instagram advertising services to scale your business.")),
        }
      ]
    };
  },
  component: Services,
});`;

// Regex to replace the entire Route block
content = content.replace(/export const Route = createFileRoute\("\/services"\)\(\{[\s\S]*?component: Services,\r?\n\}\);/m, newRoute);

fs.writeFileSync('src/routes/services.tsx', content, 'utf8');
console.log('Fixed services.tsx');
