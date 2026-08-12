import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — DevSpectra" },
      { name: "description", content: "Work that shipped and stayed." },
    ],
  }),
  component: Portfolio,
});

const portfolioData = [
  {
    category: "Website",
    items: [
      {
        title: "nskillindia",
        meta: "Ed Tech Platform.",
        submeta: "From ideation to launch in 12 wks.",
        eyebrow: "NEW",
        img: "/portfolio/website-1.jpg",
        bg: "bg-black text-white",
      },
      {
        title: "seatown",
        meta: "The magic of the sea.",
        submeta: "Built with Next.js & Postgres.",
        eyebrow: "FEATURED",
        img: "/portfolio/website-2.jpg",
        bg: "bg-white text-black border border-gray-200",
      },
      {
        title: "co-tea",
        meta: "Coffee meets tea.",
        submeta: "Custom Shopify Plus storefront.",
        eyebrow: "E-COMMERCE",
        img: "/portfolio/website-3.jpg",
        bg: "bg-black text-white",
      },
      {
        title: "silicon vista",
        meta: "Learning Platform.",
        submeta: "Over 10k active daily users.",
        eyebrow: "TRENDING",
        img: "/portfolio/website-4.jpg",
        bg: "bg-white text-black border border-gray-200",
      },
    ],
  },
  {
    category: "Mobile",
    items: [
      {
        title: "veerify",
        meta: "Mobile App",
        img: "/portfolio/mobile-1.jpg",
        bg: "bg-black text-white",
      },
      {
        title: "snapoo",
        meta: "Mobile App",
        img: "/portfolio/mobile-2.jpg",
        bg: "bg-gray-100 text-black",
      },
      {
        title: "martial art",
        meta: "Mobile App",
        img: "/portfolio/mobile-3.jpg",
        bg: "bg-zinc-900 text-white",
      },
    ],
  },
  {
    category: "E-Commerce",
    items: [
      {
        title: "SM-enterpricess",
        meta: "E-Commerce Store",
        img: "/portfolio/ecommerce-1.jpg",
        bg: "bg-[#f5f5f7] text-black",
      },
      {
        title: "cloth buy",
        meta: "Fashion E-Commerce",
        img: "/portfolio/ecommerce-2.jpg",
        bg: "bg-[#1d1d1f] text-white",
      },
    ],
  },
  {
    category: "UI/UX",
    items: [
      {
        title: "Katalist",
        meta: "UI/UX Design",
        img: "/portfolio/uiux-1.jpg",
        bg: "bg-gray-100 text-black",
      },
      {
        title: "seatown",
        meta: "UI/UX Design",
        img: "/portfolio/uiux-2.jpg",
        bg: "bg-black text-white",
      },
      {
        title: "school website",
        meta: "UI/UX Design",
        img: "/portfolio/uiux-3.jpg",
        bg: "bg-zinc-100 text-black",
      },
      {
        title: "silicon vista",
        meta: "UI/UX Design",
        img: "/portfolio/uiux-4.jpg",
        bg: "bg-gray-900 text-white",
      },
    ],
  },
  {
    category: "Digital Marketing",
    items: [
      {
        title: "SEO",
        meta: "Marketing Campaign",
        img: "/portfolio/digital-1.jpg",
        bg: "bg-[#1d1d1f] text-white",
      },
      {
        title: "Poster Making",
        meta: "LinkedIn, Instagram, Facebook",
        img: "/portfolio/digital-2.jpg",
        bg: "bg-[#f5f5f7] text-black",
      },
      {
        title: "Reels",
        meta: "Instagram Reels",
        img: "/portfolio/digital-3.jpg",
        bg: "bg-black text-white",
      },
      {
        title: "Content",
        meta: "Content Strategy",
        img: "/portfolio/digital-4.jpg",
        bg: "bg-gray-100 text-black",
      },
    ],
  },
];

import { AuroraBackground } from "@/components/ui/aurora-background";

function Portfolio() {
  const [animationKey, setAnimationKey] = useState(0);

  return (
    <PageShell mode="portfolio" ctaLabel="Start a Project">
      <AuroraBackground className="h-auto bg-white pt-[14rem] pb-24 -mt-24 items-stretch justify-start relative">
        {/* Left Side Dotted Overlay */}
        <div
          className="absolute top-0 left-0 bottom-0 w-[60%] z-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #9ca3af 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
            maskImage: "linear-gradient(to right, black 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, black 40%, transparent 100%)",
          }}
        />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full">
          {/* Header */}
          <div className="mb-16 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
            <motion.div
              className="max-w-4xl lg:w-3/5"
              onViewportEnter={() => setAnimationKey((k) => k + 1)}
              viewport={{ once: false, amount: 0.5 }}
            >
              <h1
                key={animationKey}
                className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-6 flex flex-wrap items-center gap-x-4"
              >
                <span className="inline-block overflow-hidden whitespace-nowrap border-r-[4px] border-black pr-2 animate-typing-title">
                  Portfolio.
                </span>
                <span
                  className="text-gray-500 animate-fade-in-delayed opacity-0 block"
                  style={{ animationFillMode: "forwards" }}
                >
                  Work that shipped and stayed.
                </span>
              </h1>
              <p className="text-2xl font-medium text-gray-500 tracking-tight">
                A curated slice of what we've built for teams around the world.
              </p>
            </motion.div>

            {/* Animated Terminal Widget */}
            <div className="w-full max-w-lg lg:w-2/5 shrink-0 hidden md:block">
              <div className="rounded-2xl overflow-hidden bg-[#0d1117] border border-[#30363d] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] flex flex-col text-left font-mono">
                {/* Top bar */}
                <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
                  <div className="flex gap-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="text-xs text-[#8b949e]">projects/main</div>
                </div>
                {/* Code Area */}
                <div className="p-5 text-[13px] leading-loose">
                  <div className="text-[#8b949e] mb-4 flex items-center gap-2">
                    <span className="text-[#a5d6ff]">♦</span> Edit{" "}
                    <span>src/middleware/auth.ts</span>
                  </div>

                  <div className="flex">
                    <span className="text-[#484f58] w-6 shrink-0 text-right pr-4 select-none">
                      42
                    </span>
                    <div className="pl-4">
                      <span className="text-[#ff7b72]">export async function</span>{" "}
                      <span className="text-[#d2a8ff]">handler</span>
                      <span className="text-[#c9d1d9]">(req) {"{"}</span>
                    </div>
                  </div>
                  <div className="flex bg-[#233325] border-l-2 border-[#3fb950] -ml-5 pl-5">
                    <span className="text-[#484f58] w-6 shrink-0 text-right pr-4 select-none">
                      43
                    </span>
                    <div className="pl-4">
                      <span className="text-[#ff7b72]">const</span>{" "}
                      <span className="text-[#79c0ff]">token</span>{" "}
                      <span className="text-[#ff7b72]"> = </span>{" "}
                      <span className="text-[#d2a8ff]">extractBearer</span>
                      <span className="text-[#c9d1d9]">(req);</span>
                    </div>
                  </div>
                  <div className="flex bg-[#233325] border-l-2 border-[#3fb950] -ml-5 pl-5">
                    <span className="text-[#484f58] w-6 shrink-0 text-right pr-4 select-none">
                      44
                    </span>
                    <div className="pl-4">
                      <span className="text-[#ff7b72]">if</span>{" "}
                      <span className="text-[#c9d1d9]">(!token)</span>{" "}
                      <span className="text-[#ff7b72]">return</span>{" "}
                      <span className="text-[#d2a8ff]">unauthorized</span>
                      <span className="text-[#c9d1d9]">();</span>
                    </div>
                  </div>
                  <div className="flex bg-[#3d2426] border-l-2 border-[#f85149] -ml-5 pl-5">
                    <span className="text-[#484f58] w-6 shrink-0 text-right pr-4 select-none">
                      47
                    </span>
                    <div className="pl-4">
                      <span className="text-[#ff7b72]">const</span>{" "}
                      <span className="text-[#79c0ff]">session</span>{" "}
                      <span className="text-[#ff7b72]"> = await </span>{" "}
                      <span className="text-[#d2a8ff]">getSession</span>
                      <span className="text-[#c9d1d9]">(req);</span>
                    </div>
                  </div>

                  {/* Animated Typing Section */}
                  <div className="mt-6 pt-4 border-t border-[#30363d] text-[#e6edf3]">
                    <div className="flex items-center gap-3">
                      <span className="text-[#a5d6ff]">❯</span>
                      <div className="inline-block overflow-hidden whitespace-nowrap border-r-[2px] border-white pr-1 animate-typing-code">
                        Add rate limiting to all API routes.
                      </div>
                    </div>
                    <div className="mt-3 text-[#8b949e] animate-pulse">:: Thinking...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .animate-marquee {
              animation: marquee 50s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-50% - 12px)); }
            }
            .animate-typing-code {
              max-width: fit-content;
              animation: typing 4s steps(40, end) infinite alternate, blink .75s step-end infinite;
            }
            @keyframes typing {
              from { width: 0 }
              to { width: 100% }
            }
            @keyframes blink {
              from, to { border-color: transparent }
              50% { border-color: white }
            }
            .animate-typing-title {
              max-width: fit-content;
              animation: typing-title 1.2s steps(10, end) forwards, blink-black .75s step-end infinite;
            }
            .animate-fade-in-delayed {
              animation: fade-in 1s ease-out 1.4s forwards;
            }
            @keyframes typing-title {
              from { width: 0 }
              to { width: 100% }
            }
            @keyframes blink-black {
              from, to { border-color: transparent }
              50% { border-color: black }
            }
            @keyframes fade-in {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>

          {/* Category Rows */}
          <div className="space-y-24">
            {portfolioData.map((section, sIdx) => (
              <div key={sIdx}>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl font-bold tracking-tight text-black">
                    {section.category}
                  </h2>
                  <div className="h-[1px] flex-1 bg-gray-200"></div>
                </div>

                {section.category === "Website" ? (
                  <div className="overflow-hidden pb-8 relative -mx-6 md:-mx-12">
                    <div className="flex gap-6 animate-marquee w-max">
                      {[...section.items, ...section.items].map((project, idx) => (
                        <div
                          key={`marquee-${idx}`}
                          className="shrink-0 w-[85vw] md:w-[480px] h-[340px] rounded-[32px] overflow-hidden relative flex flex-col justify-between group cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
                        >
                          <div className="w-full h-full rounded-[16px] md:rounded-[20px] border border-gray-200 overflow-hidden relative flex flex-col shadow-xl bg-[#f3f4f6]">
                            {/* Mac Window Title Bar */}
                            <div className="h-8 w-full bg-[#e5e7eb] flex items-center px-4 shrink-0 border-b border-gray-300">
                              {/* Window Controls */}
                              <div className="flex gap-1.5 w-16">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] shadow-sm"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] shadow-sm"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] shadow-sm"></div>
                              </div>
                              {/* URL Bar */}
                              <div className="flex-1 max-w-[160px] mx-auto h-5 bg-white rounded flex items-center justify-center text-[9px] text-gray-500 font-mono shadow-sm">
                                {project.title.toLowerCase().replace(/\s+/g, "")}.com
                              </div>
                              <div className="w-16"></div>
                            </div>

                            {/* Desktop Screen Content */}
                            <div className="flex-1 relative bg-white overflow-hidden">
                              {/* Top Details Overlay */}
                              <div className="absolute inset-x-0 top-0 p-4 md:p-6 z-10 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none text-white">
                                <h3 className="text-2xl font-bold tracking-tight capitalize drop-shadow-md">
                                  {project.title}
                                </h3>
                                <p className="text-[11px] font-semibold mt-0.5 drop-shadow-md opacity-90">
                                  {project.meta}
                                </p>
                              </div>

                              <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                              />

                              <div className="absolute bottom-4 right-4 w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                <ArrowUpRight className="w-5 h-5 text-white" />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div
                    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:-mx-12 md:px-12"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {section.items.map((project, idx) => (
                      <div
                        key={idx}
                        className={`snap-center shrink-0 w-[85vw] ${
                          section.category === "Mobile"
                            ? "md:w-[240px] h-[480px]"
                            : section.category === "E-Commerce"
                              ? "md:w-[300px] h-[460px]"
                              : section.category === "Digital Marketing"
                                ? "md:w-[300px] h-[480px]"
                                : section.category === "UI/UX"
                                  ? "md:w-[540px] h-[400px]"
                                  : "md:w-[400px] h-[450px]"
                        } rounded-[32px] overflow-hidden relative flex flex-col justify-between ${project.bg} group cursor-pointer transition-transform duration-500 hover:scale-[1.02]`}
                      >
                        {section.category === "Mobile" ? (
                          <div className="w-full h-full rounded-[44px] border-[10px] md:border-[14px] border-[#111] overflow-hidden relative shadow-xl bg-black">
                            {/* Hardware Notch / Dynamic Island */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#111] rounded-b-2xl z-30 flex items-center justify-end px-3">
                              <div className="w-3 h-3 rounded-full bg-white/10" />
                            </div>

                            {/* Fake Status Bar */}
                            <div className="absolute top-1.5 inset-x-6 flex justify-between items-center z-20 text-[10px] font-semibold text-white/80">
                              <span>9:41</span>
                              <div className="flex gap-1 items-center">
                                <div className="w-5 h-2.5 border border-current rounded-[3px] p-[1px] opacity-80">
                                  <div className="w-[75%] h-full bg-current rounded-sm"></div>
                                </div>
                              </div>
                            </div>

                            {/* Top Info Section (Name) */}
                            <div
                              className={`pt-12 pb-6 px-6 relative z-10 text-center ${project.bg}`}
                            >
                              <h3 className="text-2xl font-bold tracking-tight capitalize">
                                {project.title}
                              </h3>
                              <p className="text-xs font-medium opacity-70 mt-1">{project.meta}</p>
                            </div>

                            {/* Screen Content (Image) */}
                            <div className="absolute inset-0 top-32 overflow-hidden bg-black">
                              <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                              />
                            </div>
                          </div>
                        ) : section.category === "E-Commerce" ? (
                          <div className="w-full h-full rounded-[32px] overflow-hidden relative flex flex-col bg-white border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                            {/* Top Product Meta */}
                            <div className="flex justify-between items-start p-6 pb-4 relative z-10">
                              <div>
                                <div className="flex gap-1 text-amber-400 mb-2">
                                  {[...Array(5)].map((_, i) => (
                                    <svg
                                      key={i}
                                      className="w-3.5 h-3.5 fill-current"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                  ))}
                                </div>
                                <h3 className="text-xl font-bold tracking-tight capitalize text-gray-900">
                                  {project.title}
                                </h3>
                                <p className="text-xs font-semibold text-gray-500 mt-1 uppercase tracking-wider">
                                  {project.meta}
                                </p>
                              </div>
                              <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                                <svg
                                  className="w-4 h-4 text-gray-900"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                  />
                                </svg>
                              </div>
                            </div>

                            {/* Image area pretending to be product photo */}
                            <div className="flex-1 w-full bg-[#f8f9fa] p-6 relative overflow-hidden flex items-center justify-center border-y border-gray-100">
                              <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-full object-cover rounded-xl shadow-md group-hover:scale-[1.05] group-hover:-translate-y-1 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                              />
                            </div>

                            {/* Bottom Checkout Bar */}
                            <div className="p-5 flex items-center justify-between bg-white relative z-10">
                              <div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                                  Total Price
                                </p>
                                <p className="text-lg font-bold text-gray-900 leading-none mt-1">
                                  $299.00
                                </p>
                              </div>
                              <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 group-hover:bg-gray-800 transition-colors">
                                Add to Bag
                              </button>
                            </div>
                          </div>
                        ) : section.category === "Digital Marketing" ? (
                          <div className="w-full h-full rounded-[24px] overflow-hidden relative flex flex-col bg-white border border-gray-200 shadow-md">
                            {/* Top bar (Social Profile) */}
                            <div className="flex items-center gap-3 p-4 border-b border-gray-100 bg-white">
                              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-[2px]">
                                <div className="w-full h-full bg-white rounded-full flex items-center justify-center p-[2px]">
                                  <div className="w-full h-full bg-gray-200 rounded-full overflow-hidden">
                                    <img src={project.img} className="w-full h-full object-cover" />
                                  </div>
                                </div>
                              </div>
                              <div className="flex-1">
                                <h3 className="text-sm font-bold text-gray-900 leading-none">
                                  {project.title.replace(/\s/g, "").toLowerCase()}
                                </h3>
                                <p className="text-[11px] text-gray-500 mt-0.5 tracking-wide">
                                  Sponsored
                                </p>
                              </div>
                              <svg
                                className="w-5 h-5 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 8a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                              </svg>
                            </div>

                            {/* Main Image */}
                            <div className="w-full flex-1 relative overflow-hidden bg-gray-100">
                              <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                              />
                              {/* Analytics Overlay */}
                              <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 text-white shadow-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg
                                  className="w-3.5 h-3.5 text-green-400"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={3.5}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                  />
                                </svg>
                                <span className="text-xs font-bold tracking-wider">142%</span>
                              </div>
                            </div>

                            {/* Bottom Action Bar */}
                            <div className="p-4 bg-white border-t border-gray-100">
                              <div className="flex items-center gap-3.5 mb-3">
                                <svg
                                  className="w-[22px] h-[22px] text-gray-800 hover:text-red-500 transition-colors cursor-pointer"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                  />
                                </svg>
                                <svg
                                  className="w-[22px] h-[22px] text-gray-800"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                  />
                                </svg>
                                <svg
                                  className="w-[22px] h-[22px] text-gray-800"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                  />
                                </svg>
                              </div>
                              <p className="text-sm text-gray-800 leading-tight">
                                <span className="font-bold mr-1.5">
                                  {project.title.replace(/\s/g, "").toLowerCase()}
                                </span>
                                {project.meta}
                              </p>
                            </div>
                          </div>
                        ) : section.category === "UI/UX" ? (
                          <div className="w-full h-full rounded-[16px] md:rounded-[20px] overflow-hidden relative flex flex-col bg-[#1e1e1e] border border-[#333] shadow-2xl font-sans text-left">
                            {/* Design Tool Top Bar */}
                            <div className="h-11 w-full bg-[#2c2c2c] flex items-center justify-between px-4 shrink-0 border-b border-[#111]">
                              <div className="flex items-center gap-3">
                                {/* Fake Hamburger */}
                                <svg
                                  className="w-4 h-4 text-gray-400"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                  />
                                </svg>
                                {/* Fake File Name */}
                                <div className="text-[11px] font-medium text-gray-300 bg-[#3a3a3a] px-2 py-1 rounded-md capitalize">
                                  {project.title.toLowerCase()} - Design
                                </div>
                              </div>
                              <div className="flex items-center gap-4 text-gray-400">
                                <svg
                                  className="w-4 h-4 hidden sm:block"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                  />
                                </svg>
                                <div className="w-px h-4 bg-[#444] hidden sm:block"></div>
                                <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-[9px] font-bold">
                                  DS
                                </div>
                              </div>
                            </div>

                            <div className="flex-1 flex overflow-hidden">
                              {/* Left Sidebar (Layers) */}
                              <div className="w-32 bg-[#252525] border-r border-[#111] hidden sm:flex flex-col p-3 gap-1.5 shrink-0">
                                <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mb-2">
                                  Layers
                                </div>
                                <div className="text-[10px] text-gray-300 bg-[#3a3a3a] rounded px-2 py-1.5 truncate flex items-center gap-1.5">
                                  <span className="font-bold">#</span> Frame 1
                                </div>
                                <div className="text-[10px] text-gray-400 px-2 py-1 truncate flex items-center gap-1.5 pl-4">
                                  <svg
                                    className="w-3 h-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                  </svg>
                                  {project.meta}
                                </div>
                              </div>

                              {/* Canvas Area */}
                              <div
                                className="flex-1 bg-[#1e1e1e] relative flex items-center justify-center p-8 overflow-hidden"
                                style={{
                                  backgroundImage: "radial-gradient(#333 1px, transparent 1px)",
                                  backgroundSize: "16px 16px",
                                }}
                              >
                                <div className="relative w-full h-full max-h-full max-w-full flex items-center justify-center group-hover:scale-[1.03] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                                  {/* Selected Border (Blue bounding box) */}
                                  <div className="absolute inset-0 border-2 border-[#0ea5e9] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                                    {/* Handles */}
                                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-[#0ea5e9]"></div>
                                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-[#0ea5e9]"></div>
                                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-[#0ea5e9]"></div>
                                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-[#0ea5e9]"></div>
                                    {/* Title Tab */}
                                    <div className="absolute bottom-full left-[-2px] bg-[#0ea5e9] text-white text-[9px] font-bold px-1.5 py-0.5 whitespace-nowrap">
                                      {project.title}
                                    </div>
                                  </div>
                                  <img
                                    src={project.img}
                                    alt={project.title}
                                    className="max-w-full max-h-full object-contain shadow-[0_15px_40px_rgba(0,0,0,0.6)] relative z-10"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="p-8 relative z-10">
                              <h3 className="text-3xl font-bold tracking-tight mb-2 capitalize">
                                {project.title}
                              </h3>
                              <p className="text-lg font-medium opacity-80">{project.meta}</p>
                            </div>

                            <div className="absolute inset-0 top-32 overflow-hidden flex items-end justify-center pb-8">
                              <img
                                src={project.img}
                                alt={project.title}
                                className="w-[90%] h-[80%] object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                              />
                            </div>

                            <div className="absolute top-8 right-8 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <ArrowUpRight className="w-6 h-6 text-current" />
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </AuroraBackground>
    </PageShell>
  );
}
