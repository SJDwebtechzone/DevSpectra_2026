import React from "react";

const CANVAS_W = 660;
const CANVAS_H = 365;

const pos = (x: number, y: number, w?: number, h?: number) => ({
  left: `${(x / CANVAS_W) * 100}%`,
  top: `${(y / CANVAS_H) * 100}%`,
  ...(w ? { width: `${(w / CANVAS_W) * 100}%` } : {}),
  ...(h ? { height: `${(h / CANVAS_H) * 100}%` } : {}),
});

export default function FeatureSection() {
  return (
    <section className="w-full bg-white">
      <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden [container-type:inline-size]" style={{ aspectRatio: `${CANVAS_W} / ${CANVAS_H}` }}>
        <div className="absolute font-display font-black leading-[0.9] tracking-[-0.04em] text-neutral-950" style={{ ...pos(50, 15), fontSize: "clamp(26px, 7.8cqw, 72px)" }}>
          bring
        </div>
        <div className="absolute font-display font-black leading-[0.9] tracking-[-0.04em] text-neutral-950" style={{ ...pos(150, 95), fontSize: "clamp(26px, 7.8cqw, 72px)" }}>
          a team
        </div>
        <div className="absolute font-display font-black leading-[0.9] tracking-[-0.04em] text-neutral-950" style={{ ...pos(300, 175), fontSize: "clamp(26px, 7.8cqw, 72px)" }}>
          together
        </div>

        <svg className="absolute hidden sm:block" style={pos(60, 130, 100, 100)} viewBox="0 0 100 100" fill="none">
          <path d="M 45 100 C 42 70, 15 68, 12 45 C 10 25, 25 12, 42 5" stroke="#111827" strokeWidth="2.2" strokeDasharray="6 6" strokeLinecap="round" />
        </svg>
        <svg className="absolute hidden sm:block" style={pos(520, 40, 140, 55)} viewBox="0 0 140 55" fill="none">
          <path d="M 0 12 C 35 12, 28 40, 65 40 C 100 40, 95 12, 140 12" stroke="#111827" strokeWidth="2.2" strokeDasharray="6 6" strokeLinecap="round" />
        </svg>

        <div className="absolute hidden items-center justify-center rounded-full bg-emerald-500 shadow-lg sm:flex" style={pos(248, 20, 62, 62)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-[44%] w-[44%]">
            <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
        <div className="absolute hidden items-center rounded-full bg-gradient-to-r from-blue-500 to-blue-300 shadow-lg sm:flex" style={{ ...pos(320, 27, 110, 56), padding: "6%" }}>
          <div className="ml-auto flex h-[88%] w-[44%] items-center justify-center rounded-full bg-white shadow-inner"><div className="h-[68%] w-[68%] rounded-full border-4 border-neutral-200 border-t-blue-400" /></div>
        </div>
        <div className="absolute hidden items-center justify-center sm:flex" style={{ ...pos(450, 15, 70, 70), fontSize: "clamp(26px,4.8cqw,44px)" }}>🥳</div>

        <div className="absolute hidden items-center justify-center rounded-full bg-amber-400 shadow-lg sm:flex" style={pos(35, 95, 82, 82)}><span className="h-[9%] w-[9%] rounded-full bg-blue-600" /></div>
        <div className="absolute hidden items-center rounded-full border border-neutral-300 bg-white shadow-md sm:flex" style={{ ...pos(425, 108, 110, 34), padding: "0 8%" }}>
          <div className="relative h-[10%] w-full rounded-full bg-neutral-200"><span className="absolute left-1/2 top-1/2 h-[70%] w-[9%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500 ring-4 ring-emerald-100" /></div>
        </div>
        <div className="absolute hidden sm:block" style={pos(150, 175, 120, 62)}>
          <div className="absolute left-0 top-0 h-full w-[60%] rounded-full bg-gradient-to-br from-pink-400 to-pink-300 shadow-lg" />
          <div className="absolute left-[40%] top-0 flex h-full w-[60%] items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-400 text-white shadow-lg">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-[32%] w-[32%]">
              <path d="M18 3a3 3 0 0 0-3 3v3h-6V6a3 3 0 1 0-3 3h3v6H6a3 3 0 1 0 3 3v-3h6v3a3 3 0 1 0 3-3h-3V9h3a3 3 0 0 0-3-3 1 1 0 1 0 0-2 1 1 0 0 1 0 2z" />
            </svg>
          </div>
        </div>

        <div className="absolute text-center leading-relaxed text-neutral-500" style={{ ...pos(75, 268, 510), fontSize: "clamp(9px, 1.7cqw, 15px)" }}>
          concept connect everyone in the design process so team<br />can deliver better product faster
        </div>
        <div className="absolute" style={pos(255, 320)}>
          <a href="#try" className="inline-flex items-center whitespace-nowrap rounded-full bg-neutral-900 px-[clamp(16px,3cqw,26px)] py-[clamp(8px,1.5cqw,13px)] text-[clamp(9px,1.6cqw,14px)] font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5 hover:bg-neutral-800">
            Try for more
          </a>
        </div>
      </div>
    </section>
  );
}
