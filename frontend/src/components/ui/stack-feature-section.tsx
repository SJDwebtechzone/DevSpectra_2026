const CANVAS_W = 655;
const CANVAS_H = 368;

const pos = (x: number, y: number, w?: number, h?: number) => ({
  left: `${(x / CANVAS_W) * 100}%`,
  top: `${(y / CANVAS_H) * 100}%`,
  ...(w ? { width: `${(w / CANVAS_W) * 100}%` } : {}),
  ...(h ? { height: `${(h / CANVAS_H) * 100}%` } : {}),
});

export default function FeatureSection() {
  return (
    <div className="w-full bg-white">
      <div className="relative mx-auto w-full max-w-[1500px]" style={{ aspectRatio: `${CANVAS_W} / ${CANVAS_H}` }}>
        <svg className="absolute hidden md:block" style={pos(58, 116, 130, 130)} viewBox="0 0 130 130" fill="none" aria-hidden="true">
          <path d="M60 130 C55 90 20 90 15 60 C10 30 30 15 55 5" stroke="#111827" strokeWidth="2.2" strokeDasharray="7 7" strokeLinecap="round" />
        </svg>
        <svg className="absolute hidden md:block" style={pos(550, 65, 105, 60)} viewBox="0 0 150 60" fill="none" aria-hidden="true">
          <path d="M0 15 C40 15 30 45 70 45 C110 45 100 15 150 15" stroke="#111827" strokeWidth="2.2" strokeDasharray="7 7" strokeLinecap="round" />
        </svg>

        <h1 aria-label="Bring a team together" className="absolute inset-0 font-black tracking-[-0.07em] text-neutral-900" style={{ fontFamily: "Arial Black, Arial, sans-serif" }}>
          <span className="absolute leading-[0.86]" style={{ ...pos(60, 40), fontSize: "clamp(28px, 7.2vw, 70px)" }}>bring</span>
          <span className="absolute leading-[0.86]" style={{ ...pos(180, 112), fontSize: "clamp(28px, 7.2vw, 70px)" }}>a team</span>
          <span className="absolute leading-[0.86]" style={{ ...pos(286, 177), fontSize: "clamp(28px, 7.2vw, 70px)" }}>together</span>
        </h1>

        <div className="absolute hidden items-center justify-center rounded-full bg-emerald-500 shadow-lg md:flex" style={pos(255, 43, 65, 65)}>
          <span className="text-4xl leading-none text-white">↗</span>
        </div>
        <div className="absolute hidden items-center rounded-full bg-gradient-to-r from-blue-500 to-blue-300 p-[6%] shadow-lg md:flex" style={pos(323, 43, 120, 60)}>
          <div className="ml-auto flex h-[85%] w-[42%] items-center justify-center rounded-full bg-white shadow-inner"><div className="h-[70%] w-[70%] rounded-full border-4 border-neutral-200 border-t-blue-400" /></div>
        </div>
        <div className="absolute hidden items-center justify-center rounded-full bg-white shadow-lg md:flex" style={{ ...pos(466, 36, 82, 82), fontSize: "clamp(24px,4.2vw,42px)" }}>🥳</div>
        <div className="absolute hidden items-center justify-center rounded-full bg-amber-400 shadow-lg md:flex" style={pos(60, 113, 85, 85)}><span className="h-[10%] w-[10%] rounded-full bg-blue-600" /></div>
        <div className="absolute hidden items-center rounded-full border border-neutral-300 bg-white shadow-md md:flex" style={{ ...pos(462, 137, 110, 34), padding: "0 8%" }}><div className="relative h-[10%] w-full rounded-full bg-neutral-200"><span className="absolute left-1/2 top-1/2 h-[70%] w-[9%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500 ring-4 ring-emerald-100" /></div></div>
        <div className="absolute hidden md:block" style={pos(162, 174, 130, 65)}><div className="absolute left-0 top-0 h-full w-[62%] rounded-full bg-gradient-to-br from-pink-400 to-pink-300 shadow-lg" /><div className="absolute left-[38%] top-0 flex h-full w-[62%] items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-400 text-2xl font-bold text-white shadow-lg">⌘</div></div>

        <div className="absolute text-center leading-relaxed text-neutral-500" style={{ ...pos(125, 260, 400), fontSize: "clamp(9px, 1.8vw, 15px)" }}>
          concept connect everyone in the design process so team<br />can deliver better product faster
        </div>
        <div className="absolute" style={pos(252, 318)}>
          <a href="#contact-form" className="inline-flex items-center whitespace-nowrap rounded-full bg-neutral-900 px-5 py-2 font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5 hover:bg-neutral-800" style={{ fontSize: "clamp(9px, 1.7vw, 14px)" }}>Try for more</a>
        </div>
      </div>
    </div>
  );
}
