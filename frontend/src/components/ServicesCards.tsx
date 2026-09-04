import React from 'react';
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function ServicesCards() {
  const services = [
    {
      title: "Web Development",
      meta: "High-performance websites.",
      type: "Website",
      img: "/portfolio/website-2.jpg",
      bg: "bg-[#f3f4f6]",
      id: "web-development"
    },
    {
      title: "Mobile Application",
      meta: "Native & Cross-platform apps.",
      type: "Mobile",
      img: "/portfolio/mobile-1.jpg",
      bg: "bg-black text-white",
      id: "mobile-application"
    },
    {
      title: "E-Commerce",
      meta: "Custom storefronts.",
      type: "E-Commerce",
      img: "/portfolio/ecommerce-1.jpg",
      bg: "bg-white text-black",
      id: "e-commerce"
    },
    {
      title: "SaaS Products",
      meta: "Scalable web applications.",
      type: "SAAS",
      img: "/portfolio/uiux-4.jpg",
      bg: "bg-[#1e1e1e] text-white",
      id: "saas-products"
    },
    {
      title: "Digital Marketing",
      meta: "Data-driven growth.",
      type: "Marketing",
      img: "/portfolio/digital-1.jpg",
      bg: "bg-white text-black",
      id: "digital-marketing"
    }
  ];

  return (
    <section className="py-24 bg-[#fafcff] relative z-10 border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#4A3628] uppercase hover:text-[#704f3a] transition-colors">
            <Link to="/services">Our Services</Link>
          </h2>
          <div className="h-[1px] flex-1 bg-gray-200"></div>
        </div>

        <div
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:-mx-12 md:px-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((project, idx) => (
            <Link
              key={idx}
              to={`/services#${project.id}`}
              className={`block snap-center shrink-0 h-[380px] sm:h-[420px] md:h-[480px] ${
                project.type === "Mobile"
                  ? "w-[210px] sm:w-[230px] md:w-[240px]"
                  : project.type === "E-Commerce"
                    ? "w-[260px] sm:w-[280px] md:w-[300px]"
                    : project.type === "Marketing"
                      ? "w-[260px] sm:w-[280px] md:w-[300px]"
                      : project.type === "SAAS"
                        ? "w-[340px] sm:w-[440px] md:w-[540px]"
                        : "w-[320px] sm:w-[400px] md:w-[480px]"
              } rounded-[24px] sm:rounded-[32px] overflow-hidden relative flex flex-col justify-between ${project.bg} group cursor-pointer transition-transform duration-500 hover:scale-[1.02]`}
            >
              {project.type === "Website" ? (
                <div className="w-full h-full rounded-[16px] md:rounded-[20px] border border-gray-200 overflow-hidden relative flex flex-col shadow-xl bg-[#f3f4f6]">
                  {/* Mac Window Title Bar */}
                  <div className="h-8 w-full bg-[#e5e7eb] flex items-center px-4 shrink-0 border-b border-gray-300">
                    <div className="flex gap-1.5 w-16">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] shadow-sm"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] shadow-sm"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] shadow-sm"></div>
                    </div>
                    <div className="flex-1 max-w-[160px] mx-auto h-5 bg-white rounded flex items-center justify-center text-[9px] text-gray-500 font-mono shadow-sm">
                      {project.title.toLowerCase().replace(/\s+/g, "")}.dev
                    </div>
                    <div className="w-16"></div>
                  </div>

                  <div className="flex-1 relative bg-white overflow-hidden">
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
              ) : project.type === "Mobile" ? (
                <div className="w-full h-full rounded-[44px] border-[10px] md:border-[14px] border-[#111] overflow-hidden relative shadow-xl bg-black">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#111] rounded-b-2xl z-30 flex items-center justify-end px-3">
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                  </div>
                  <div className="absolute top-1.5 inset-x-6 flex justify-between items-center z-20 text-[10px] font-semibold text-white/80">
                    <span>9:41</span>
                    <div className="flex gap-1 items-center">
                      <div className="w-5 h-2.5 border border-current rounded-[3px] p-[1px] opacity-80">
                        <div className="w-[75%] h-full bg-current rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                  <div className={`pt-12 pb-6 px-6 relative z-10 text-center ${project.bg}`}>
                    <h3 className="text-2xl font-bold tracking-tight capitalize">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium opacity-70 mt-1">{project.meta}</p>
                  </div>
                  <div className="absolute inset-0 top-32 overflow-hidden bg-black">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              ) : project.type === "E-Commerce" ? (
                <div className="w-full h-full rounded-[32px] overflow-hidden relative flex flex-col bg-white border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  <div className="flex justify-between items-start p-6 pb-4 relative z-10">
                    <div>
                      <div className="flex gap-1 text-amber-400 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
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
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 w-full bg-[#f8f9fa] p-6 relative overflow-hidden flex items-center justify-center border-y border-gray-100">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-xl shadow-md group-hover:scale-[1.05] group-hover:-translate-y-1 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                  </div>
                  <div className="p-5 flex items-center justify-between bg-white relative z-10">
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Starting at</p>
                      <p className="text-lg font-bold text-gray-900 leading-none mt-1">$4,999</p>
                    </div>
                    <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 group-hover:bg-gray-800 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ) : project.type === "Marketing" ? (
                <div className="w-full h-full rounded-[24px] overflow-hidden relative flex flex-col bg-white border border-gray-200 shadow-md">
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
                      <p className="text-[11px] text-gray-500 mt-0.5 tracking-wide">Sponsored</p>
                    </div>
                  </div>
                  <div className="w-full flex-1 relative overflow-hidden bg-gray-100">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 text-white shadow-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs font-bold tracking-wider">+320% ROI</span>
                    </div>
                  </div>
                  <div className="p-4 bg-white border-t border-gray-100">
                    <p className="text-sm text-gray-800 leading-tight">
                      <span className="font-bold mr-1.5">
                        {project.title.replace(/\s/g, "").toLowerCase()}
                      </span>
                      {project.meta}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full rounded-[16px] md:rounded-[20px] overflow-hidden relative flex flex-col bg-[#1e1e1e] border border-[#333] shadow-2xl font-sans text-left">
                  <div className="h-11 w-full bg-[#2c2c2c] flex items-center justify-between px-4 shrink-0 border-b border-[#111]">
                    <div className="flex items-center gap-3">
                      <div className="text-[11px] font-medium text-gray-300 bg-[#3a3a3a] px-2 py-1 rounded-md capitalize">
                        {project.title.toLowerCase()} - Design
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400">
                      <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-[9px] font-bold">DS</div>
                    </div>
                  </div>
                  <div className="flex-1 flex overflow-hidden">
                    <div className="w-32 bg-[#252525] border-r border-[#111] hidden sm:flex flex-col p-3 gap-1.5 shrink-0">
                      <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mb-2">Layers</div>
                      <div className="text-[10px] text-gray-300 bg-[#3a3a3a] rounded px-2 py-1.5 truncate flex items-center gap-1.5">
                        <span className="font-bold">#</span> Dashboard
                      </div>
                      <div className="text-[10px] text-gray-400 px-2 py-1 truncate flex items-center gap-1.5 pl-4">
                        {project.meta}
                      </div>
                    </div>
                    <div
                      className="flex-1 bg-[#1e1e1e] relative flex items-center justify-center p-8 overflow-hidden"
                      style={{
                        backgroundImage: "radial-gradient(#333 1px, transparent 1px)",
                        backgroundSize: "16px 16px",
                      }}
                    >
                      <div className="relative w-full h-full max-h-full max-w-full flex items-center justify-center group-hover:scale-[1.03] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        <div className="absolute inset-0 border-2 border-[#0ea5e9] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                          <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-[#0ea5e9]"></div>
                          <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-[#0ea5e9]"></div>
                          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-[#0ea5e9]"></div>
                          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-[#0ea5e9]"></div>
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
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
