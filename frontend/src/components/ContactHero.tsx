import { useRef } from "react";
import type { Easing } from "framer-motion";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Command } from "lucide-react";

const EASE: Easing = "easeInOut";
const SPRING = { stiffness: 55, damping: 18, mass: 1 };

const mkFloat = (yAmt = 10, dur = 4, delay = 0, rotAmt = 0) => ({
  animate: {
    y: [-yAmt / 2, yAmt / 2, -yAmt / 2],
    ...(rotAmt ? { rotate: [-rotAmt, rotAmt, -rotAmt] } : {}),
  },
  transition: {
    duration: dur,
    delay,
    repeat: Infinity,
    repeatType: "mirror" as const,
    ease: EASE,
  },
});

export default function ContactHero() {
  const heroRef = useRef<HTMLElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const sx = useSpring(rawX, SPRING);
  const sy = useSpring(rawY, SPRING);

  const blobX = useTransform(sx, [-1, 1], [-12, 12]);
  const blobY = useTransform(sy, [-1, 1], [-12, 12]);

  function onMove(e: React.MouseEvent<HTMLElement>) {
    const r = heroRef.current?.getBoundingClientRect();
    if (!r) return;
    rawX.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    rawY.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  }
  function onLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <section
      ref={heroRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      aria-label="Contact hero"
      className="relative overflow-hidden bg-gradient-to-b from-[#eefcf6] via-white to-white flex flex-col items-center pt-8 sm:pt-12 lg:pt-14 pb-20"
      style={{ minHeight: "92vh" }}
    >
      {/* Ambient background blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 rounded-full opacity-40"
        style={{
          width: 480,
          height: 480,
          background: "radial-gradient(circle, #c3fbd8 0%, #dff6ff 55%, transparent 78%)",
          x: blobX,
          y: blobY,
        }}
        animate={{ scale: [1, 1.07, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: EASE }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-20 rounded-full opacity-30"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, #e0d4fe 0%, #fce7f3 55%, transparent 78%)",
          x: blobX,
          y: blobY,
        }}
        animate={{ scale: [1.06, 1, 1.06] }}
        transition={{ duration: 12, repeat: Infinity, ease: EASE, delay: 3 }}
      />

      <div className="relative z-10 w-full max-w-[1200px] px-4 md:px-8 flex flex-col items-center">
        {/* ROW 1 */}
        <motion.div
          className="flex items-center w-full justify-start md:pl-[5%]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="shrink-0 font-display font-black text-black leading-none tracking-[-0.05em] text-[3.25rem] sm:text-[4.5rem] md:text-[5.75rem] lg:text-[7.25rem] mr-2 sm:mr-5">
            Let&apos;s
          </h1>

          <div className="flex items-center gap-2 sm:gap-4 md:gap-6 mt-2 md:mt-4">
            <motion.div
              className="flex items-center justify-center rounded-full bg-[#3adb5c] shadow-[0_8px_24px_rgba(58,219,92,0.38)]"
              style={{ width: "clamp(42px, 7vw, 100px)", height: "clamp(42px, 7vw, 100px)" }}
              {...mkFloat(9, 3.6, 0, 6)}
            >
              <ArrowUpRight
                strokeWidth={3}
                className="text-black w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
            </motion.div>

            <motion.div
              className="relative flex items-center rounded-full shadow-[0_8px_28px_rgba(37,99,235,0.32)]"
              style={{
                width: "clamp(84px, 14vw, 200px)",
                height: "clamp(42px, 7vw, 100px)",
                background: "linear-gradient(110deg, #1d4ed8 0%, #6fa8f7 58%, #c7ddff 100%)",
              }}
              {...mkFloat(7, 5, 0.4)}
            >
              <div
                className="absolute right-[5%] top-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.2)] flex items-center justify-center"
                style={{ width: "clamp(34px, 5vw, 75px)", height: "clamp(34px, 5vw, 75px)" }}
              >
                <div className="w-[70%] h-[70%] rounded-full border border-gray-200" />
              </div>
            </motion.div>

            <motion.div
              className="shrink-0 select-none text-[2.5rem] sm:text-[4rem] md:text-[5.5rem]"
              {...mkFloat(10, 3.4, 0.6, 12)}
            >
              🥳
            </motion.div>
          </div>
        </motion.div>

        {/* ROW 2 */}
        <motion.div
          className="flex items-center w-full justify-start gap-3 md:pl-[12%] mt-0 sm:mt-[-1rem]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <motion.div
            className="relative flex shrink-0 items-center justify-center rounded-full bg-[#ffbd2e] shadow-[0_8px_22px_rgba(255,189,46,0.35)] mr-1 sm:mr-4 z-10"
            style={{ width: "clamp(50px, 8vw, 110px)", height: "clamp(50px, 8vw, 110px)" }}
            {...mkFloat(11, 4.5, 0.2)}
          >
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black/80 absolute top-[40%]" />
            <div className="absolute right-[6%] top-1/2 -translate-y-1/2 rounded-full bg-white/40 backdrop-blur-[4px] w-[42%] h-[72%]" />
          </motion.div>

          <h1 className="shrink-0 font-display font-black text-black leading-none tracking-[-0.05em] text-[3.25rem] sm:text-[4.5rem] md:text-[5.75rem] lg:text-[7.25rem] mr-2 sm:mr-6 z-20 relative">
            Start
          </h1>

          <motion.div
            className="hidden sm:flex items-center rounded-full border-[3px] border-black bg-white px-4 z-10"
            style={{ width: "clamp(120px, 15vw, 220px)", height: "clamp(40px, 5.5vw, 75px)" }}
            animate={{ x: [-5, 7, -5] }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              repeatType: "mirror" as const,
              ease: EASE,
              delay: 0.6,
            }}
          >
            <div className="relative flex-1">
              <div className="h-[2px] w-full bg-gray-400" />
              <div className="absolute left-[40%] top-1/2 w-4 h-4 sm:w-5 sm:h-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-300 bg-[#3adb5c] shadow-sm" />
            </div>
            <div className="ml-3 w-3 h-3 sm:w-4 sm:h-4 shrink-0 rounded-full bg-[#7c3aed]" />
          </motion.div>
        </motion.div>

        {/* ROW 3 */}
        <motion.div
          className="flex items-center w-full justify-start md:pl-[25%] mt-0 sm:mt-[-1rem]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="relative flex items-center justify-center mr-4 sm:mr-8 z-10"
            style={{ width: "clamp(82px, 12vw, 165px)", height: "clamp(50px, 8vw, 110px)" }}
            {...mkFloat(9, 4.3, 0.7, 4)}
          >
            <div
              className="absolute rounded-full bg-[#ef5caa] opacity-90"
              style={{ left: 0, top: 0, width: "65%", height: "100%" }}
            />
            <div
              className="absolute rounded-full bg-[#6e9be9] opacity-90"
              style={{ right: 0, top: 0, width: "65%", height: "100%" }}
            />
            <div
              className="absolute rounded-full bg-[#ad73eb] opacity-80"
              style={{ left: "17.5%", top: 0, width: "65%", height: "100%" }}
            />
            <div className="relative z-10 flex items-center justify-center rounded-2xl bg-white/90 shadow-md w-[45%] h-[60%]">
              <Command strokeWidth={2.5} className="text-black w-4 h-4 sm:w-6 sm:h-6" />
            </div>
          </motion.div>

          <h1 className="shrink-0 font-display font-black text-black leading-none tracking-[-0.05em] text-[3.25rem] sm:text-[4.5rem] md:text-[5.75rem] lg:text-[7.25rem] z-20 relative">
            Together
          </h1>
        </motion.div>
      </div>

      <motion.div
        className="mt-16 sm:mt-24 flex flex-col items-center text-center px-4 relative z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <p className="max-w-2xl text-[16px] sm:text-[18px] md:text-[22px] font-medium leading-relaxed text-gray-800">
          A project in mind? Let&apos;s connect everyone in the design process so the team can
          deliver better products faster.
        </p>

        <div className="flex gap-4 mt-8">
          <motion.a
            href="#contact-form"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-[#111] px-8 py-4 text-[15px] font-semibold text-white shadow-xl hover:bg-black transition-colors"
          >
            Get in touch
          </motion.a>
        </div>
      </motion.div>

      {/* DASHED SVG PATHS OVERLAY */}
      <svg
        className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block z-0"
        viewBox="0 0 1480 760"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Yellow circle to blob */}
        <motion.path
          d="M 280 400 C 280 480 320 520 400 540"
          stroke="#111"
          strokeWidth="2.5"
          strokeDasharray="8 10"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 0.8, ease: EASE }}
        />
        {/* Slider to right edge */}
        <motion.path
          d="M 1080 375 L 1250 375 C 1300 375 1330 350 1330 300 C 1330 250 1350 200 1450 200"
          stroke="#111"
          strokeWidth="2.5"
          strokeDasharray="8 10"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 1.8, delay: 0.9, ease: EASE }}
        />

        {/* Dots */}
        <motion.circle
          cx="400"
          cy="540"
          r="5"
          fill="#7c3aed"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5 }}
        />
        <motion.circle
          cx="1250"
          cy="375"
          r="5"
          fill="#3adb5c"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.6 }}
        />
      </svg>
    </section>
  );
}
