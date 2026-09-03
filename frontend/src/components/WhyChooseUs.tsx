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
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reasons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="py-24 bg-white relative border-b border-gray-100 overflow-hidden">
      {/* Dotted Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: "radial-gradient(#d1d5db 1.5px, transparent 1.5px)", backgroundSize: "32px 32px" }}></div>

      <div className="container-page max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="flex items-center gap-6 mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-[#4A3628] leading-[1.1] tracking-tight uppercase bg-white pr-4 py-1">
            Why DEVSPECTRA
          </h2>
          <div className="h-[2px] flex-1 bg-gray-200"></div>
        </div>

        {/* Numbered Columns Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4 lg:items-end min-h-[400px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {reasons.map((reason, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={reason.title}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`relative rounded-[28px] cursor-pointer transition-all duration-500 ease-out overflow-hidden border h-[360px] lg:h-[400px] ${
                  isActive
                    ? "z-20 shadow-2xl border-transparent"
                    : "z-10 bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {/* Background Image with Opacity Transition */}
                <div
                  className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                  style={{ opacity: isActive ? 1 : 0 }}
                >
                  <img
                    src={reason.img}
                    alt={reason.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${
                      isActive ? "scale-100" : "scale-110"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                </div>

                <div className={`relative z-10 flex flex-col h-full transition-all duration-500 p-6 ${isActive ? "justify-end" : "justify-between"}`}>
                  {/* Number */}
                  <span
                    className={`font-black leading-none tracking-tighter transition-colors duration-500 ${
                      isActive
                        ? "text-5xl md:text-6xl text-white mb-4"
                        : "text-5xl md:text-6xl text-gray-200 mb-2"
                    }`}
                  >
                    0{idx + 1}
                  </span>

                  {/* Dotted separator (active only) */}
                  <div 
                    className={`flex flex-col gap-1.5 mb-4 transition-all duration-500 overflow-hidden ${
                      isActive ? "h-6 opacity-100" : "h-0 opacity-0"
                    }`}
                  >
                    {[0, 1, 2, 3].map((d) => (
                      <span key={d} className="w-1 h-1 rounded-full bg-white/60"></span>
                    ))}
                  </div>

                  <div>
                    <h3 className={`font-bold mb-3 transition-colors duration-500 ${isActive ? "text-2xl text-white" : "text-lg md:text-xl text-gray-900"}`}>
                      {reason.title}
                    </h3>
                    <p className={`leading-relaxed mb-6 transition-colors duration-500 ${isActive ? "text-sm text-white/90" : "text-sm text-gray-500"}`}>
                      {reason.description}
                    </p>
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


