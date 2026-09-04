import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blogs — DevSpectra" },
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
    date: "Sep 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop",
    tags: ["ENGINEERING", "TECH"],
    title: "5 Stand-out Features of Modern Web Frameworks You Should Know",
    date: "Aug 2026",
    readTime: "4 min read",
  },
];

const regularPosts = [
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
    tags: ["DESIGN", "UX"],
    title: "Branding: What Real Customers Have To Say",
    date: "Aug 2026",
    readTime: "3 min read",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    tags: ["ENGINEERING"],
    title: "Building Scalable Architecture: Pros and Cons They Don't Tell You",
    date: "Jul 2026",
    readTime: "6 min read",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    tags: ["AI & TECH"],
    title: "How to Spot the Best Tech Stack for You: Signs and Features",
    date: "Jul 2026",
    readTime: "5 min read",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
    tags: ["BUSINESS"],
    title: "How Much Should You Spend on Custom Software Development?",
    date: "Jun 2026",
    readTime: "4 min read",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    tags: ["DESIGN", "PRODUCT"],
    title: "Rookie Mistakes You Might Be Making With Your Product Design",
    date: "May 2026",
    readTime: "4 min read",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    tags: ["STRATEGY"],
    title: "Real Client Feedback & Case Studies From Shipped Products",
    date: "May 2026",
    readTime: "3 min read",
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
      
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 relative z-10">
        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] border border-gray-200/80 shadow-[0_10px_40px_rgba(0,0,0,0.04)] overflow-hidden">
          {/* Header */}
          <header className="flex flex-col lg:flex-row lg:items-end justify-between p-6 sm:p-8 md:p-10 lg:px-12 lg:py-16 border-b border-gray-100 gap-8 bg-gradient-to-b from-gray-50/50 to-white">
            <div className="max-w-2xl flex flex-col items-start">
              <span className="text-xs font-mono tracking-widest text-blue-600 font-bold uppercase mb-3">DevSpectra Studio Journal</span>
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black tracking-tight leading-[0.9] text-gray-900 mb-6 uppercase">
                Blogs
              </h1>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                Engineering, design, and AI insights from the DevSpectra studio — what we're learning while building scalable products for our clients.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 sm:gap-3 items-center">
              <SpectraButton>ALL</SpectraButton>
              <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 text-xs uppercase tracking-widest font-bold hover:bg-black hover:text-white hover:border-black transition-all">BRANDING</button>
              <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 text-xs uppercase tracking-widest font-bold hover:bg-black hover:text-white hover:border-black transition-all">DESIGN</button>
              <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 text-xs uppercase tracking-widest font-bold hover:bg-black hover:text-white hover:border-black transition-all">ENGINEERING</button>
              <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 text-xs uppercase tracking-widest font-bold hover:bg-black hover:text-white hover:border-black transition-all">AI & TECH</button>
            </div>
          </header>

          {/* Featured Posts (Row 1) */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-100">
            {featuredPosts.map((post, index) => (
              <div 
                key={post.id} 
                className={`p-6 sm:p-8 lg:p-10 ${index === 0 ? 'md:border-r border-b md:border-b-0 border-gray-100' : ''} group cursor-pointer hover:bg-gray-50/50 transition-colors`}
              >
                <div className="aspect-[16/10] mb-6 overflow-hidden rounded-2xl bg-gray-100 border border-gray-100 shadow-sm relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {post.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-white/90 backdrop-blur-md text-gray-900 text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-400 font-semibold mb-3 uppercase tracking-wider">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h2>
              </div>
            ))}
          </div>

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {regularPosts.map((post, index) => {
              const isRightColumn = (index + 1) % 3 === 0;
              return (
                <div 
                  key={post.id} 
                  className={`p-6 sm:p-8 border-b border-gray-100 ${!isRightColumn ? 'md:border-r border-gray-100' : ''} group cursor-pointer hover:bg-gray-50/50 transition-colors`}
                >
                  <div className="aspect-[4/3] mb-5 overflow-hidden rounded-xl bg-gray-100 border border-gray-100 relative">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      {post.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="bg-white/90 backdrop-blur-md text-gray-900 text-[9px] font-bold tracking-wider px-2.5 py-0.5 rounded-full uppercase shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-gray-400 font-semibold mb-2 uppercase tracking-wider">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {post.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center p-6 sm:p-8 bg-gray-50/50">
            <button className="px-6 py-3 rounded-full border border-gray-200 bg-white text-gray-900 text-xs uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-all shadow-sm">
              PREVIOUS
            </button>
            <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Page 1 of 3</span>
            <button className="px-6 py-3 rounded-full border border-gray-200 bg-white text-gray-900 text-xs uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-all shadow-sm">
              NEXT
            </button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
