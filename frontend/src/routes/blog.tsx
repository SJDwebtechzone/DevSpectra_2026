import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — DevSpectra" },
      {
        name: "description",
        content: "Engineering, design and AI notes from the DevSpectra studio — what we're learning while we build.",
      },
    ],
  }),
  component: Blog,
});

const featuredPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    tags: ["BRANDING", "DESIGN"],
    title: "Things to Look for When Comparing Branding Alternatives",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop",
    tags: ["BRANDING", "DESIGN"],
    title: "5 Stand-out Features of Branding You Should Know",
  },
];

const regularPosts = [
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
    tags: ["BRANDING", "DESIGN"],
    title: "Branding: What Real Customers Have To Say",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    tags: ["BRANDING", "DESIGN"],
    title: "Branding: Pros and Cons They Don't Tell You",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    tags: ["BRANDING", "DESIGN"],
    title: "How to Spot the Best Branding for You: Signs and Features",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
    tags: ["BRANDING", "DESIGN"],
    title: "How Much Should I Spend on Branding?",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    tags: ["BRANDING", "DESIGN"],
    title: "Rookie Mistakes You're Making With Your Branding",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    tags: ["BRANDING", "DESIGN"],
    title: "Real Branding Customer Reviews You Need to See",
  },
];

const SpectraButton = ({ children, href }: { children: React.ReactNode, href?: string }) => {
  const Component = href ? 'a' : 'button';
  return (
    <Component href={href} className="relative inline-flex group w-fit">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-400 to-orange-500 rounded-full blur-[10px] opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
      <div className="relative flex items-center bg-gradient-to-r from-blue-500 via-purple-400 to-orange-500 p-[1.5px] rounded-full w-full shadow-sm">
        <div className="relative flex items-center justify-between w-full bg-white rounded-full px-6 py-3 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.5] pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 400 100" preserveAspectRatio="none">
               <path d="M0,50 Q100,0 200,50 T400,50 M0,60 Q100,20 200,60 T400,60 M0,40 Q100,-10 200,40 T400,40 M0,70 Q100,30 200,70 T400,70" stroke="url(#wave-grad)" fill="none" strokeWidth="0.5" />
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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </div>
      </div>
    </Component>
  );
};

function Blog() {
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mb-1 items-center">
              <SpectraButton>ALL</SpectraButton>
              <button className="btn-pill btn-ghost text-xs uppercase tracking-widest font-semibold">BRANDING</button>
              <button className="btn-pill btn-ghost text-xs uppercase tracking-widest font-semibold">DESIGN</button>
            </div>
          </header>

          {/* Featured Posts (Row 1) */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {featuredPosts.map((post, index) => (
              <div 
                key={post.id} 
                className={`p-6 md:p-8 lg:p-10 border-b border-page-border ${index === 0 ? 'md:border-r' : ''}`}
              >
                <div className="aspect-[4/3] md:aspect-[16/10] mb-6 overflow-hidden rounded-xl bg-muted">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale-[30%] transition-all duration-500 hover:scale-105 hover:grayscale-0" />
                </div>
                <div className="flex gap-2 mb-3">
                  <span className="text-[10px] font-bold tracking-wider text-page-muted uppercase">{post.tags.join(", ")}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-medium leading-tight">{post.title}</h2>
              </div>
            ))}
          </div>

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {regularPosts.map((post, index) => {
              const isRightColumn = (index + 1) % 3 === 0;
              return (
                <div 
                  key={post.id} 
                  className={`p-6 md:p-8 border-b border-page-border ${!isRightColumn ? 'md:border-r' : ''}`}
                >
                  <div className="aspect-[4/3] mb-5 overflow-hidden rounded-xl bg-muted">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale-[30%] transition-all duration-500 hover:scale-105 hover:grayscale-0" />
                  </div>
                  <div className="flex gap-2 mb-2">
                    <span className="text-[10px] font-bold tracking-wider text-page-muted uppercase">{post.tags.join(", ")}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-medium leading-snug">{post.title}</h3>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center p-6 md:p-8">
            <button className="btn-pill btn-ghost text-xs uppercase tracking-widest font-semibold">
              PREVIOUS
            </button>
            <button className="btn-pill btn-ghost text-xs uppercase tracking-widest font-semibold">
              NEXT
            </button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
