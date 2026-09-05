import React from "react";

const ToggleDecoration: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex h-14 w-28 items-center rounded-full bg-gradient-to-r from-blue-500 to-blue-300 p-1.5 shadow-lg ${className}`}>
    <div className="ml-auto flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-inner">
      <div className="h-8 w-8 rounded-full border-4 border-neutral-200 border-t-blue-400" />
    </div>
  </div>
);

const ArrowCircle: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 shadow-lg ${className}`}>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  </div>
);

const EmojiBubble: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl shadow-lg ${className}`}>🥳</div>
);

const OrangeCircle: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex h-24 w-24 items-center justify-center rounded-full bg-amber-400 shadow-lg ${className}`}>
    <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
  </div>
);

const SliderDecoration: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex h-10 w-32 items-center rounded-full border border-neutral-300 bg-white px-3 shadow-md ${className}`}>
    <div className="relative h-1 w-full rounded-full bg-neutral-200">
      <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
    </div>
  </div>
);

const CommandBadge: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`relative h-16 w-28 ${className}`}>
    <div className="absolute left-0 top-0 h-16 w-16 rounded-full bg-gradient-to-br from-pink-400 to-pink-300 shadow-lg" />
    <div className="absolute left-10 top-0 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-400 text-white shadow-lg">
      <span className="text-lg font-bold">⌘</span>
    </div>
  </div>
);

const DashedConnector: React.FC<{ className?: string; d: string; width?: number; height?: number }> = ({
  className = "",
  d,
  width = 200,
  height = 200,
}) => (
  <svg viewBox={`0 0 ${width} ${height}`} className={`pointer-events-none absolute ${className}`} fill="none">
    <path d={d} stroke="#111827" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" />
  </svg>
);

export default function FeatureSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-8 md:px-12 md:pt-14">
        <DashedConnector className="left-[-40px] top-[170px] hidden h-[140px] w-[220px] md:block" width={220} height={140} d="M 10 110 C 10 60, 60 90, 90 40 C 110 10, 140 10, 200 10" />
        <DashedConnector className="right-[-60px] top-[70px] hidden h-[120px] w-[260px] md:block" width={260} height={120} d="M 0 30 C 80 30, 60 90, 140 90 C 200 90, 220 40, 260 40" />

        <h1 className="relative select-none text-[15vw] font-black leading-[0.92] tracking-tight text-neutral-900 sm:text-[80px] md:text-[92px]">
          <span className="relative inline-flex items-center gap-4">
            bring
            <ArrowCircle className="hidden -translate-y-1 md:inline-flex" />
            <ToggleDecoration className="hidden md:inline-flex" />
            <EmojiBubble className="hidden md:inline-flex" />
          </span>

          <span className="relative mt-1 flex items-center gap-4">
            <OrangeCircle className="hidden -translate-y-2 md:inline-flex" />
            <span className="ml-0 md:ml-24">a team</span>
            <SliderDecoration className="hidden md:inline-flex" />
          </span>

          <span className="relative mt-1 flex items-center gap-4">
            <CommandBadge className="hidden md:inline-flex" />
            together
          </span>
        </h1>

        <p className="mt-10 max-w-md text-[15px] leading-relaxed text-neutral-500 md:mt-8">
          DevSpectra connects ideas, people, and technology so your team can deliver better products faster.
        </p>

        <div className="mt-8">
          <a href="#contact-form" className="inline-flex items-center rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5 hover:bg-neutral-800">
            Start a conversation
          </a>
        </div>
      </div>
    </section>
  );
}
