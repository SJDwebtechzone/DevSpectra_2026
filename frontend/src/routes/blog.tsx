import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

import { generateSEO } from "@/lib/seo";

export const Route = createFileRoute("/blog")({
  head: () => {
    const seo = generateSEO({
      title: "Blog",
      description:
        "Engineering, design and AI notes from the DevSpectra studio. Learn about web development, mobile apps, SaaS, and digital marketing.",
      url: "/blog",
    });
    return {
      meta: seo.meta,
      links: seo.links,
    };
  },
  component: Blog,
});

const SpectraButton = ({ children, href }: { children: React.ReactNode; href?: string }) => {
  const Component = href ? "a" : "button";
  return (
    <Component href={href} className="relative inline-flex group w-fit">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-400 to-orange-500 rounded-full blur-[10px] opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
      <div className="relative flex items-center bg-gradient-to-r from-blue-500 via-purple-400 to-orange-500 p-[1.5px] rounded-full w-full shadow-sm">
        <div className="relative flex items-center justify-between w-full bg-white rounded-full px-6 py-3 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.5] pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 400 100" preserveAspectRatio="none">
              <path
                d="M0,50 Q100,0 200,50 T400,50 M0,60 Q100,20 200,60 T400,60 M0,40 Q100,-10 200,40 T400,40 M0,70 Q100,30 200,70 T400,70"
                stroke="url(#wave-grad)"
                fill="none"
                strokeWidth="0.5"
              />
              <defs>
                <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="relative z-10 text-gray-900 font-bold tracking-widest text-xs sm:text-sm mr-4 uppercase">
            {children}
          </span>
          <div className="relative z-10 w-9 h-9 rounded-full border border-gray-100 flex items-center justify-center text-gray-900 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] group-hover:scale-105 transition-transform shrink-0">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </div>
      </div>
    </Component>
  );
};

import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { API_BASE_URL } from "@/lib/api";

function Blog() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  useEffect(() => {
    fetch(`${API_BASE_URL}/blogs?t=${Date.now()}`)
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (Array.isArray(data)) {
          const published = data.filter((b: any) => b.isActive !== false);
          setBlogs(published);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch blogs", err);
        setIsLoading(false);
      });
  }, []);

  const categories = Array.from(
    new Set(["ALL", ...blogs.map((p) => (p.category || "TECH").toUpperCase())])
  );

  const filteredPosts =
    selectedCategory === "ALL"
      ? blogs
      : blogs.filter(
          (p) => (p.category || "").toUpperCase() === selectedCategory.toUpperCase()
        );

  const featured = filteredPosts.slice(0, 2);
  const regular = filteredPosts.slice(2);

  return (
    <PageShell mode="blog" ctaLabel="Let's Talk">
      {/* Full-screen dotted background */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 py-8 md:py-12 relative z-10">
        <div className="bg-page-surface">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-end justify-between p-6 md:p-10 lg:px-12 lg:py-16 border-b border-page-border gap-8">
            <div className="max-w-xl flex flex-col items-start">
              <h1 className="text-7xl md:text-8xl lg:text-[7rem] font-sans font-medium tracking-tight leading-none mb-6">
                Blogs
              </h1>
              <p className="text-page-muted text-base md:text-lg">
                Engineering, design, and digital growth articles from the DevSpectra studio.
              </p>
            </div>
            {categories.length > 1 && (
              <div className="flex flex-wrap gap-2.5 mb-1 items-center">
                {categories.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  return isSelected ? (
                    <div key={cat} onClick={() => setSelectedCategory(cat)}>
                      <SpectraButton>{cat}</SpectraButton>
                    </div>
                  ) : (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className="btn-pill btn-ghost text-xs uppercase tracking-widest font-semibold px-4 py-2 cursor-pointer hover:bg-black/5"
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            )}
          </header>

          {/* Empty State */}
          {!isLoading && filteredPosts.length === 0 && (
            <div className="py-24 text-center px-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4 text-2xl font-bold">
                ✍️
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Articles Published Yet</h3>
              <p className="text-gray-500 max-w-md mx-auto text-sm">
                We are actively preparing new engineering and design deep-dives. Stay tuned!
              </p>
            </div>
          )}

          {/* Featured Posts (Horizontal Scroll on Mobile, 2-Col Grid on Desktop) */}
          {featured.length > 0 && (
            <div
              className="flex flex-row gap-4 overflow-x-auto p-4 md:p-0 snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-2 md:gap-0 md:overflow-visible md:snap-none"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {featured.map((post, index) => {
                const targetId = post.slug || post.id;
                const tagsList = Array.isArray(post.tags)
                  ? post.tags
                  : [post.category || "INSIGHTS"];
                return (
                  <Link
                    key={post.id || index}
                    to="/blog/$id"
                    params={{ id: String(targetId) }}
                    className={`w-[85vw] max-w-[320px] shrink-0 snap-center md:w-auto md:shrink md:max-w-none md:snap-none p-6 md:p-8 lg:p-10 border border-page-border md:border-t-0 md:border-l-0 md:border-r-0 md:border-b group block rounded-2xl md:rounded-none bg-white md:bg-transparent ${
                      index === 0 && featured.length > 1 ? "md:border-r" : ""
                    }`}
                  >
                    <div className="aspect-[4/3] md:aspect-[16/10] mb-6 overflow-hidden rounded-xl bg-muted">
                      <img
                        src={post.image || post.coverImage || post.img || "/portfolio/website-1.jpg"}
                        alt={post.title}
                        className="w-full h-full object-cover grayscale-[30%] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      />
                    </div>
                    <div className="flex gap-2 mb-3">
                      <span className="text-[10px] font-bold tracking-wider text-page-muted uppercase">
                        {tagsList.join(", ")}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-medium leading-tight group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">{post.excerpt}</p>
                    )}
                  </Link>
                );
              })}
            </div>
          )}

          {/* Regular Posts Grid (Horizontal Scroll on Mobile, 3-Col Grid on Desktop) */}
          {regular.length > 0 && (
            <div
              className="flex flex-row gap-4 overflow-x-auto p-4 md:p-0 snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-3 md:gap-0 md:overflow-visible md:snap-none"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {regular.map((post, index) => {
                const isRightColumn = (index + 1) % 3 === 0;
                const targetId = post.slug || post.id;
                const tagsList = Array.isArray(post.tags)
                  ? post.tags
                  : [post.category || "INSIGHTS"];
                return (
                  <Link
                    key={post.id || index}
                    to="/blog/$id"
                    params={{ id: String(targetId) }}
                    className={`w-[80vw] max-w-[280px] shrink-0 snap-center md:w-auto md:shrink md:max-w-none md:snap-none p-6 md:p-8 border border-page-border md:border-t-0 md:border-l-0 md:border-r-0 md:border-b group block rounded-2xl md:rounded-none bg-white md:bg-transparent ${
                      !isRightColumn ? "md:border-r" : ""
                    }`}
                  >
                    <div className="aspect-[4/3] mb-5 overflow-hidden rounded-xl bg-muted">
                      <img
                        src={post.image || post.coverImage || post.img || "/portfolio/website-1.jpg"}
                        alt={post.title}
                        className="w-full h-full object-cover grayscale-[30%] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      />
                    </div>
                    <div className="flex gap-2 mb-2">
                      <span className="text-[10px] font-bold tracking-wider text-page-muted uppercase">
                        {tagsList.join(", ")}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-medium leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </PageShell>
  );
}
