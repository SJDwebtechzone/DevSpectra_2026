import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full relative"
      >
        <img
          src="/home/homebanner.png"
          alt="DevSpectra Banner"
          className="w-full h-auto block object-cover drop-shadow-sm"
          style={{ imageRendering: "high-quality" }}
        />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[73%] sm:top-[75%] lg:top-[76%] left-[22%] flex flex-col items-start w-[75%] md:w-[65%] lg:w-[60%]">
            <div className="origin-top-left scale-[0.4] min-[400px]:scale-[0.5] sm:scale-[0.7] md:scale-[0.85] lg:scale-100 flex flex-row items-center gap-4 lg:gap-6 mt-0.5 sm:mt-1 lg:mt-3">
              <a
                href="/contact"
                className="pointer-events-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0f172a] hover:bg-[#1e293b] text-white rounded-full font-medium text-base transition-colors shadow-md group whitespace-nowrap"
              >
                Let's Build Together
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>

              <a
                href="/portfolio"
                className="pointer-events-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 rounded-full font-medium text-base transition-colors shadow-sm group whitespace-nowrap"
              >
                <span className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <svg
                    className="w-3.5 h-3.5 text-gray-600 ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
