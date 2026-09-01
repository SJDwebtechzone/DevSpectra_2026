import React, { useState, useEffect } from 'react';

const reasons = [
  {
    title: "Quality First",
    description: "Excellence in every detail, from planning to delivery.",
    img: "/whychoose/Quality.png",
  },
  {
    title: "On-Time Delivery",
    description: "Your time, our priority — we ship when we promise.",
    img: "/whychoose/On-Time.png",
  },
  {
    title: "Innovation Driven",
    description: "Modern solutions, smarter results for every challenge.",
    img: "/whychoose/Innovation.png",
  },
  {
    title: "Custom Solutions",
    description: "Built around your needs, not the other way around.",
    img: "/whychoose/Solutions.png",
  },
  {
    title: "Trusted Support",
    description: "We're with you beyond delivery, whenever you need us.",
    img: "/whychoose/Trusted.png",
  },
  {
    title: "Growth Focused",
    description: "Technology that moves your business forward.",
    img: "/whychoose/Growth.png",
  },
];

export function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reasons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white relative border-b border-gray-100 overflow-hidden">
      {/* Dotted Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: "radial-gradient(#d1d5db 1.5px, transparent 1.5px)", backgroundSize: "32px 32px" }}></div>

      <div className="container-page max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="flex items-center gap-6 mb-20 lg:mb-28">
          <h2 className="text-4xl md:text-5xl font-black text-[#4A3628] leading-[1.1] tracking-tight uppercase bg-white px-2 py-1">
            Why DEVSPECTRA
          </h2>
          <div className="h-[2px] flex-1 bg-gray-100"></div>
        </div>

        {/* Numbered Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-6 lg:items-end">
          {reasons.map((reason, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={reason.title}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`relative rounded-[28px] cursor-default transition-all duration-500 ease-out ${
                  isActive
                    ? "h-[400px] lg:h-[440px] lg:-mt-14 z-20 shadow-2xl overflow-hidden text-white"
                    : "h-auto lg:h-[260px] z-10"
                }`}
              >
                {isActive && (
                  <>
                    <img
                      src={reason.img}
                      alt={reason.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                  </>
                )}

                <div className={`relative z-10 flex flex-col h-full ${isActive ? "p-6 justify-end" : "p-1 justify-between"}`}>
                  {/* Massive Number */}
                  <span
                    className={`font-black leading-none tracking-tighter ${
                      isActive
                        ? "text-5xl md:text-6xl text-white mb-4"
                        : "text-6xl md:text-7xl text-gray-200 mb-6 transition-colors duration-500 group-hover:text-gray-300"
                    }`}
                  >
                    0{idx + 1}
                  </span>

                  {/* Dotted separator (active only) */}
                  {isActive && (
                    <div className="flex flex-col gap-1.5 mb-4">
                      {[0, 1, 2, 3].map((d) => (
                        <span key={d} className="w-1 h-1 rounded-full bg-white/60"></span>
                      ))}
                    </div>
                  )}

                  <div>
                    <h3 className={`font-bold mb-3 ${isActive ? "text-2xl text-white" : "text-lg md:text-xl text-gray-900"}`}>
                      {reason.title}
                    </h3>
                    <p className={`leading-relaxed mb-6 ${isActive ? "text-sm text-white/80 max-w-[240px]" : "text-sm text-gray-500 max-w-[220px]"}`}>
                      {reason.description}
                    </p>
                    <button
                      type="button"
                      className={`inline-flex items-center rounded-full border px-5 py-2 text-xs font-medium transition-colors ${
                        isActive
                          ? "border-white/70 text-white hover:bg-white hover:text-gray-900"
                          : "border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900"
                      }`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

