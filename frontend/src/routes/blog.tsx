import { createFileRoute } from "@tanstack/react-router";
import { PageShell, StubHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — DevSpectra" },
      {
        name: "description",
        content:
          "Engineering, design and AI notes from the DevSpectra studio — what we're learning while we build.",
      },
      { property: "og:title", content: "Blog — DevSpectra" },
      {
        property: "og:description",
        content:
          "Notes from the studio. Engineering, design and AI — what we're learning while we build.",
      },
      { property: "og:url", content: "/blog" },
      { name: "twitter:title", content: "Blog — DevSpectra" },
      { name: "twitter:description", content: "Notes from the studio." },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  return (
    <PageShell mode="blog" ctaLabel="Let's Talk">
      <StubHero
        eyebrow="Blog"
        title="Notes from the studio."
        subtitle="Engineering, design, and AI — what we're learning while we build."
        note="Scaffold ready — featured post, category filter and post grid ship next."
      />
    </PageShell>
  );
}
