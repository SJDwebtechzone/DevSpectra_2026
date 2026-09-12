import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { PageShell } from "@/components/site/PageShell";
import { API_BASE_URL } from "@/lib/api";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog_/$id")({
  head: () => ({
    meta: [
      { title: "Blog Article — DevSpectra" },
      {
        name: "description",
        content: "Read the full blog post on design, branding, and web development.",
      },
    ],
  }),
  component: BlogDetail,
});

interface BlogPost {
  id: string | number;
  title: string;
  slug?: string;
  excerpt?: string;
  content?: string;
  image: string;
  category: string;
  tags: string[];
  author?: string;
  readTime?: string;
  createdAt?: string;
  isActive?: boolean;
}

const defaultBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Things to Look for When Comparing Branding Alternatives",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Elit ullamcorper dignissim
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Condimentum mattis pellentesque id nibh tortor id. Nisl condimentum id venenatis a condimentum. Nunc sed blandit libero volutpat sed. Tristique sollicitudin nibh sit amet commodo. Sit amet justo donec enim diam vulputate ut pharetra. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Massa vitae tortor condimentum lacinia quis vel. Hendrerit dolor magna eget est lorem ipsum dolor. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Suspendisse interdum posuere lorem ipsum dolor sit amet consectetur.

Hendrerit dolor magna
Tristique sollicitudin nibh sit amet commodo. Sit amet justo donec enim diam vulputate ut pharetra. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Massa vitae tortor condimentum lacinia quis vel. Hendrerit dolor magna eget est lorem ipsum dolor. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Suspendisse faucibus interdum posuere.

Hendrerit dolor magna
Tristique sollicitudin nibh sit amet commodo. Sit amet justo donec enim diam vulputate ut pharetra. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Massa vitae tortor condimentum lacinia quis vel. Hendrerit dolor magna eget est lorem ipsum dolor. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Suspendisse faucibus interdum posuere.`,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    category: "DESIGN, BRANDING",
    tags: ["BRANDING", "DESIGN"],
    author: "Guy Hawkins",
    readTime: "10 MIN",
    createdAt: "16 JUNE 2022",
  },
  {
    id: "2",
    title: "5 Stand-out Features of Branding You Should Know",
    excerpt: "Explore the standalone branding features that elevate digital products from ordinary to iconic.",
    content: "Consistency, emotional resonance, visual typography, tone of voice, and interactive motion form the core pillars of iconic brand design.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop",
    category: "BRANDING",
    tags: ["BRANDING", "DESIGN"],
    author: "Guy Hawkins",
    readTime: "5 MIN",
    createdAt: "18 JUNE 2022",
  },
  {
    id: "3",
    title: "Branding: What Real Customers Have To Say",
    excerpt: "Real feedback and case insights from customers on how branding influences trust.",
    content: "User feedback demonstrates that clear design hierarchy and modern aesthetics significantly boost user trust and retention.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
    category: "BRANDING",
    tags: ["BRANDING", "DESIGN"],
    author: "DevSpectra Team",
    readTime: "3 MIN",
    createdAt: "20 JUNE 2022",
  },
  {
    id: "4",
    title: "Branding: Pros and Cons They Don't Tell You",
    excerpt: "An honest look into the investment, timeline, and trade-offs when executing a refresh.",
    content: "While rebranding drives growth, it requires strategic alignment, asset audits, and careful migration of existing customer equity.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    category: "BRANDING",
    tags: ["BRANDING", "DESIGN"],
    author: "Guy Hawkins",
    readTime: "6 MIN",
    createdAt: "22 JUNE 2022",
  },
];

function BlogDetail() {
  const { id } = Route.useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [allPosts, setAllPosts] = useState<BlogPost[]>(defaultBlogPosts);

  useEffect(() => {
    // Try to load cached posts or find default
    if (typeof window !== "undefined") {
      const cached = localStorage.getItem("devspectra_blog_posts");
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setAllPosts(parsed);
            const found = parsed.find((b: any) => String(b.id) === String(id) || b.slug === id);
            if (found) setPost(found);
          }
        } catch (e) {}
      }
    }

    // Fetch single post from backend API
    const fetchDetail = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/blogs/${id}`);
        if (res.ok) {
          const data = await res.json();
          if (data) {
            setPost(data);
          }
        }
      } catch (err) {
        console.warn("Backend API offline, using local detail fallback");
      }
    };

    const fetchAll = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/blogs`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setAllPosts(data);
          }
        }
      } catch (err) {}
    };

    fetchDetail();
    fetchAll();
  }, [id]);

  // Fallback to initial post if matching id found or first post
  const currentPost = post || allPosts.find((b) => String(b.id) === String(id)) || allPosts[0];

  // Related posts (excluding current post)
  const relatedPosts = allPosts.filter((b) => String(b.id) !== String(currentPost.id)).slice(0, 3);

  const tagsFormatted = Array.isArray(currentPost.tags)
    ? currentPost.tags.join(", ")
    : currentPost.category || "DESIGN, BRANDING";

  const formattedDate = currentPost.createdAt
    ? typeof currentPost.createdAt === "string" && currentPost.createdAt.includes("-")
      ? new Date(currentPost.createdAt).toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }).toUpperCase()
      : currentPost.createdAt
    : "16 JUNE 2022";

  return (
    <PageShell mode="blog" ctaLabel="Let's Talk">
      <div className="bg-[#FAF9F6] min-h-screen text-[#171717] pb-12 font-sans">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-6 pb-8">
          {/* Top Bar: GO BACK Button */}
          <div className="mb-4 md:mb-6">
            <Link to="/blog" className="relative inline-flex group w-fit cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-400 to-orange-500 rounded-full blur-[10px] opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative flex items-center bg-gradient-to-r from-blue-500 via-purple-400 to-orange-500 p-[1.5px] rounded-full w-full shadow-sm">
                <div className="relative flex items-center justify-between w-full bg-white rounded-full px-5 py-2.5 sm:px-6 sm:py-3 overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.5] pointer-events-none">
                    <svg width="100%" height="100%" viewBox="0 0 400 100" preserveAspectRatio="none">
                      <path
                        d="M0,50 Q100,0 200,50 T400,50 M0,60 Q100,20 200,60 T400,60 M0,40 Q100,-10 200,40 T400,40 M0,70 Q100,30 200,70 T400,70"
                        stroke="url(#wave-grad-goback)"
                        fill="none"
                        strokeWidth="0.5"
                      />
                      <defs>
                        <linearGradient id="wave-grad-goback" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="50%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#f97316" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <span className="relative z-10 text-gray-900 font-bold tracking-widest text-xs sm:text-sm mr-4 uppercase">
                    GO BACK
                  </span>
                  <div className="relative z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gray-100 flex items-center justify-center text-gray-900 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] group-hover:-translate-x-0.5 transition-transform shrink-0">
                    <ArrowLeft className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Header Section: Title & Subtitle + Right Metadata Column */}
          <div className="pb-10 border-b border-gray-200/60 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Title */}
              <div className="lg:col-span-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-[#171717] leading-[1.1]">
                  {currentPost.title}
                </h1>
              </div>

              {/* Right Metadata Block */}
              <div className="lg:col-span-4 lg:border-l lg:border-gray-200 lg:pl-10 space-y-6 text-xs tracking-wider uppercase font-semibold">
                <div>
                  <span className="text-gray-600 block mb-1 text-xs sm:text-sm font-bold tracking-widest">DATE</span>
                  <span className="text-gray-900 font-extrabold text-sm sm:text-base md:text-lg">{formattedDate}</span>
                </div>

                <div>
                  <span className="text-gray-600 block mb-1 text-xs sm:text-sm font-bold tracking-widest">CATEGORY</span>
                  <span className="text-gray-900 font-extrabold text-sm sm:text-base md:text-lg">{tagsFormatted}</span>
                </div>

                <div>
                  <span className="text-gray-600 block mb-1 text-xs sm:text-sm font-bold tracking-widest">READING TIME</span>
                  <span className="text-gray-900 font-extrabold text-sm sm:text-base md:text-lg">{currentPost.readTime || "10 MIN"}</span>
                </div>
              </div>
            </div>

            {/* Subtitle / Excerpt - Matching reference font size and font color */}
            <p className="text-lg md:text-xl lg:text-[1.35rem] text-gray-600 leading-relaxed font-medium w-full pt-2">
              {currentPost.excerpt || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."}
            </p>
          </div>

          {/* Full-width Hero Cover Image */}
          <div className="my-6 md:my-8 overflow-hidden rounded-3xl bg-gray-200 aspect-[16/9] md:aspect-[21/9] shadow-sm">
            <img
              src={currentPost.image || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"}
              alt={currentPost.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Article Content - Natural text wrapping without dotted line truncation */}
          <div className="w-full pt-2 md:pt-4 space-y-4 md:space-y-5 text-lg md:text-xl lg:text-[1.35rem] text-gray-600 font-medium">
            {currentPost.content ? (
              currentPost.content.split("\n\n").map((paragraph, idx) => {
                const isHeading = paragraph.length < 50 && !paragraph.endsWith(".");
                if (isHeading) {
                  return (
                    <h3 key={idx} className="text-xl sm:text-2xl font-semibold text-[#171717] pt-2 tracking-tight">
                      {paragraph}
                    </h3>
                  );
                }
                return (
                  <p key={idx} className="leading-relaxed break-words w-full">
                    {paragraph}
                  </p>
                );
              })
            ) : (
              <>
                <h3 className="text-2xl font-semibold text-[#171717] tracking-tight">
                  Elit ullamcorper dignissim
                </h3>
                <p className="leading-relaxed break-words w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Condimentum mattis pellentesque id nibh tortor id. Nisl condimentum id venenatis a condimentum. Nunc sed blandit libero volutpat sed. Tristique sollicitudin nibh sit amet commodo. Sit amet justo donec enim diam vulputate ut pharetra.
                </p>
                <h3 className="text-xl font-semibold text-[#171717] tracking-tight">
                  Hendrerit dolor magna
                </h3>
                <p className="leading-relaxed break-words w-full">
                  Tristique sollicitudin nibh sit amet commodo. Sit amet justo donec enim diam vulputate ut pharetra. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Massa vitae tortor condimentum lacinia quis vel. Hendrerit dolor magna eget est lorem ipsum dolor. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id.
                </p>
              </>
            )}
          </div>

          {/* Bottom Section: RELATED NEWS */}
          <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-[#171717] uppercase">
                RELATED NEWS
              </h3>

              <Link to="/blog" className="relative inline-flex group w-fit cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-400 to-orange-500 rounded-full blur-[10px] opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="relative flex items-center bg-gradient-to-r from-blue-500 via-purple-400 to-orange-500 p-[1.5px] rounded-full w-full shadow-sm">
                  <div className="relative flex items-center justify-between w-full bg-white rounded-full px-5 py-2.5 sm:px-6 sm:py-3 overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.5] pointer-events-none">
                      <svg width="100%" height="100%" viewBox="0 0 400 100" preserveAspectRatio="none">
                        <path
                          d="M0,50 Q100,0 200,50 T400,50 M0,60 Q100,20 200,60 T400,60 M0,40 Q100,-10 200,40 T400,40 M0,70 Q100,30 200,70 T400,70"
                          stroke="url(#wave-grad-seeall)"
                          fill="none"
                          strokeWidth="0.5"
                        />
                        <defs>
                          <linearGradient id="wave-grad-seeall" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="50%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <span className="relative z-10 text-gray-900 font-bold tracking-widest text-xs sm:text-sm mr-4 uppercase">
                      SEE ALL
                    </span>
                    <div className="relative z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gray-100 flex items-center justify-center text-gray-900 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] group-hover:scale-105 transition-transform shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* 3 Related Cards - Horizontal Slider on Mobile, 3-Col Grid on Desktop */}
            <div 
              className="flex flex-row gap-4 overflow-x-auto pb-6 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 sm:-mx-8 sm:px-8 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:snap-none"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {relatedPosts.map((item) => {
                const itemTags = Array.isArray(item.tags) ? item.tags : [item.category || "BRANDING"];
                return (
                  <Link
                    key={item.id}
                    to="/blog/$id"
                    params={{ id: String(item.id) }}
                    className="group cursor-pointer block w-[260px] sm:w-[280px] shrink-0 snap-center md:w-auto md:shrink"
                  >
                    <div className="aspect-[4/3] mb-5 overflow-hidden rounded-2xl bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale-[30%] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      />
                    </div>
                    <div className="flex gap-2 mb-2">
                      <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                        {itemTags.join(", ")}
                      </span>
                    </div>
                    <h4 className="text-lg font-medium leading-snug text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
