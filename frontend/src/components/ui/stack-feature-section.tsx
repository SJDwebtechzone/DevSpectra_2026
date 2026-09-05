import { Button } from "@/components/ui/button";
const fallbackUrls = [
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=100&auto=format&fit=crop",
];

const iconConfigs = [
  { img: "/contact/react.svg", color: "#61DAFB", isOriginal: true },
  { img: "/contact/amazonaws.svg", color: "#FF9900", isOriginal: true },
  { img: "/contact/docker.svg", color: "#2496ED", isOriginal: true },
  { img: "/contact/nodedotjs.svg", color: "#339933", isOriginal: true },
  { img: "/contact/nextdotjs.svg", color: "#000000", isOriginal: true },
  { img: "/contact/vercel.svg", color: "#000000", isOriginal: true },
  { img: "/contact/redux.svg", color: "#764ABC", isOriginal: true },
  { img: "/contact/typescript.svg", color: "#3178C6", isOriginal: true },
  { img: "/contact/github.svg", color: "#181717", isOriginal: true },
  { img: "/contact/mongodb.svg", color: "#47A248", isOriginal: true },
  { img: "/contact/postgresql.svg", color: "#4169E1", isOriginal: true },
  { img: "/contact/mysql.svg", color: "#4479A1", isOriginal: true },
  { img: "/contact/tailwindcss.svg", color: "#06B6D4", isOriginal: true },
  { img: "/contact/prisma.svg", color: "#2D3748", isOriginal: true },
  { img: "/contact/graphql.svg", color: "#E10098", isOriginal: true },
  { img: "/contact/python.svg", color: "#3776AB", isOriginal: true },
  { img: "/contact/nestjs.svg", color: "#E0234E", isOriginal: true },
];

export default function FeatureSection() {
  const orbitCount = 3;
  const orbitGap = 8; // rem between orbits
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-between overflow-hidden bg-[#fdfxff] dark:bg-slate-950 border-b border-gray-100 dark:border-gray-800">
      {/* Background Atmospheric Lighting & Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Base Atmospheric Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(219,234,254,0.75),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(233,213,255,0.65),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(254,243,199,0.5),transparent_45%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(15,23,42,0.8),transparent_50%)]" />
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-purple-100/50 blur-[120px] rounded-full mix-blend-multiply opacity-60 dark:opacity-10" />
        <div className="absolute top-[30%] right-[10%] w-[60%] h-[60%] bg-emerald-100/40 blur-[100px] rounded-full mix-blend-multiply opacity-50 dark:opacity-10" />

        {/* Top Wave */}
        <div className="absolute -top-[10%] -left-[5%] w-[110%] h-[35%] bg-gradient-to-b from-white/70 to-transparent backdrop-blur-[12px] rounded-[100%_0_60%_0/50%_0_100%_0] border-b border-white/60 opacity-80 animate-[wave-slow_15s_ease-in-out_infinite]" />

        {/* Bottom Waves */}
        <div className="absolute -bottom-[25%] -left-[10%] w-[65%] h-[50%] bg-blue-50/40 backdrop-blur-[24px] rounded-[40%_60%_70%_30%] border border-white/60 shadow-[inset_15px_15px_40px_rgba(255,255,255,0.9)] opacity-90 animate-[blob-float_14s_ease-in-out_infinite]" />
        <div className="absolute -bottom-[20%] left-[15%] w-[75%] h-[45%] bg-cyan-50/30 backdrop-blur-[16px] rounded-[60%_40%_30%_70%] border border-white/50 shadow-[inset_-15px_15px_30px_rgba(255,255,255,0.9)] opacity-80 animate-[blob-float_18s_ease-in-out_infinite_reverse]" />

        {/* Left Corner Blob */}
        <div
          className="absolute bottom-[5%] -left-[8%] w-[35%] h-[45%] bg-white/50 backdrop-blur-[32px] rounded-[50%_50%_70%_30%] border border-white/80 shadow-[inset_25px_25px_50px_rgba(255,255,255,1),0_10px_30px_rgba(0,100,255,0.03)] opacity-95 animate-[blob-float_11s_ease-in-out_infinite]"
          style={{ animationDelay: "2s" }}
        />

        {/* Glass Bubbles */}
        <div className="absolute top-[15%] left-[55%] w-16 h-16 bg-white/20 backdrop-blur-md rounded-full border border-white/70 shadow-[inset_4px_6px_16px_rgba(255,255,255,0.95),0_6px_20px_rgba(0,100,255,0.05)] animate-[bubble-float_9s_ease-in-out_infinite]" />
        <div className="absolute top-[45%] right-[8%] w-28 h-28 bg-white/20 backdrop-blur-xl rounded-full border border-white/60 shadow-[inset_6px_12px_24px_rgba(255,255,255,0.9),0_12px_32px_rgba(0,100,255,0.06)] animate-[bubble-float_13s_ease-in-out_infinite_reverse]" />
        <div
          className="absolute bottom-[35%] right-[28%] w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full border border-white/80 shadow-[inset_2px_4px_10px_rgba(255,255,255,0.95)] animate-[bubble-float_7s_ease-in-out_infinite]"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-[65%] left-[35%] w-20 h-20 bg-white/30 backdrop-blur-lg rounded-full border border-white/60 shadow-[inset_5px_10px_20px_rgba(255,255,255,0.85)] animate-[bubble-float_11s_ease-in-out_infinite]"
          style={{ animationDelay: "1s" }}
        />

        {/* Glass Capsules */}
        <div className="absolute top-[28%] right-[65%] w-24 h-10 bg-white/40 backdrop-blur-xl rounded-full border border-white/70 shadow-[inset_4px_6px_14px_rgba(255,255,255,0.9)] animate-[bubble-float_10s_ease-in-out_infinite] rotate-12" />
        <div className="absolute bottom-[25%] right-[15%] w-32 h-12 bg-white/30 backdrop-blur-lg rounded-full border border-white/60 shadow-[inset_4px_8px_16px_rgba(255,255,255,0.85)] animate-[bubble-float_12s_ease-in-out_infinite_reverse] -rotate-6" />
      </div>

      {/* Left side: Heading and Text */}
      <div className="w-full lg:w-1/2 z-10 pl-8 md:pl-16 lg:pl-20 -mt-16 lg:-mt-24 relative">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white leading-tight tracking-tight drop-shadow-sm">
          Let’s Build Something{" "}
          <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#5B21B6_0%,#2563EB_25%,#00B4D8_45%,#10B981_65%,#F59E0B_82%,#EF4444_100%)]">
            Great
          </span>{" "}
          Together.
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg text-lg lg:text-xl font-medium leading-relaxed">
          Have a question, a project in mind, or just want to say hello? Our team is ready to help
          you bring your ideas to life with speed and precision.
        </p>
      </div>

      {/* Right side: Orbital Technology System */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full flex items-center justify-center lg:justify-end overflow-hidden pointer-events-none opacity-30 lg:opacity-100">
        <div className="relative h-full aspect-square translate-x-[20%] lg:translate-x-[50%] flex items-center justify-center">
          {/* Center Glass Core */}
          <div className="w-28 h-28 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-2xl shadow-[inset_4px_8px_20px_rgba(255,255,255,0.9),0_10px_30px_rgba(0,100,255,0.1)] border border-white/80 flex items-center justify-center z-20">
            <img
              src="/contact/react.svg"
              alt="React"
              className="w-14 h-14 drop-shadow-[0_4px_12px_rgba(97,218,251,0.5)]"
            />
          </div>

          {/* Generate Orbits */}
          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${45 + orbitIdx * 25}%`; // Relative to container height
            const angleStep = (2 * Math.PI) / iconsPerOrbit;

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border-[1.5px] border-dashed border-gray-300/60 dark:border-gray-600/60"
                style={{
                  width: size,
                  height: size,
                  animation: `spin ${16 + orbitIdx * 8}s linear infinite`,
                }}
              >
                {iconConfigs
                  .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                  .map((cfg, iconIdx) => {
                    const angle = iconIdx * angleStep;
                    const x = 50 + 50 * Math.cos(angle);
                    const y = 50 + 50 * Math.sin(angle);

                    return (
                      <div
                        key={iconIdx}
                        className="absolute flex items-center justify-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl border border-white/80 dark:border-gray-600 rounded-full p-3 shadow-[inset_2px_4px_12px_rgba(255,255,255,0.9),0_6px_20px_rgba(0,100,255,0.06)]"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <div
                          style={{
                            animation: `spin-reverse ${16 + orbitIdx * 8}s linear infinite`,
                          }}
                        >
                          <img
                            src={cfg.img}
                            alt="icon"
                            className={
                              cfg.isOriginal ? "w-9 h-9" : "w-9 h-9 object-cover rounded-full"
                            }
                            style={
                              cfg.isOriginal && cfg.color
                                ? { filter: `drop-shadow(0 2px 6px ${cfg.color}80)` }
                                : {}
                            }
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes wave-slow {
          0%, 100% { transform: translateY(0) scale(1) rotate(-5deg); }
          50% { transform: translateY(-4%) scale(1.02) rotate(-3deg); }
        }
        @keyframes blob-float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); border-radius: 50% 50% 70% 30%; }
          50% { transform: translate(3%, -5%) rotate(4deg); border-radius: 40% 60% 60% 40%; }
        }
        @keyframes bubble-float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
      `}</style>
    </section>
  );
}
