import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

const floatTransition = {
  duration: 4,
  repeat: Infinity,
  repeatType: "mirror" as const,
  ease: "easeInOut" as const,
};

export default function ContactHero() {
  return (
    <section className="relative min-h-[650px] overflow-hidden bg-white px-5 pb-16 pt-8 sm:min-h-[700px] sm:px-8 sm:pb-20 sm:pt-10 lg:min-h-[760px] lg:px-12 lg:pb-24 lg:pt-12">
      <div className="mx-auto flex min-h-[550px] max-w-7xl -translate-y-8 items-center justify-center sm:min-h-[600px] sm:-translate-y-10 lg:-translate-y-12">
        <div className="relative w-full max-w-6xl text-center">
          <motion.div
            aria-hidden="true"
            className="absolute left-[3%] top-[7%] hidden h-14 w-14 items-center justify-center rounded-full bg-[#25e84c] shadow-[0_8px_20px_rgba(37,232,76,0.2)] md:flex lg:left-[8%] lg:h-16 lg:w-16"
            animate={{ y: [-5, 8, -5], rotate: [-3, 4, -3] }}
            transition={floatTransition}
          >
            <ArrowUpRight className="h-7 w-7 text-black lg:h-[34px] lg:w-[34px]" strokeWidth={2.5} />
          </motion.div>

          <motion.div
            aria-hidden="true"
            className="absolute right-[13%] top-[6%] hidden h-12 w-36 items-center rounded-full bg-gradient-to-r from-[#165eea] via-[#5f8feb] to-[#d7e1f7] shadow-[0_8px_20px_rgba(37,99,235,0.2)] md:flex lg:right-[17%] lg:h-[62px] lg:w-[180px]"
            animate={{ y: [-4, 7, -4] }}
            transition={{ ...floatTransition, duration: 5 }}
          >
            <div className="absolute right-2 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-white shadow-md lg:right-3 lg:h-12 lg:w-12">
              <div className="absolute inset-1.5 rounded-full border border-gray-200 lg:inset-[7px]" />
            </div>
          </motion.div>

          <motion.div
            aria-hidden="true"
            className="absolute right-[4%] top-[2%] hidden text-4xl md:block lg:right-[7%] lg:text-5xl"
            animate={{ y: [-6, 8, -6], rotate: [-8, 8, -8] }}
            transition={{ ...floatTransition, duration: 3.8 }}
          >
            🥳
          </motion.div>

          <motion.div
            aria-hidden="true"
            className="absolute left-[3%] top-[31%] hidden h-14 w-14 rounded-full bg-[#ffbd2e] shadow-[0_8px_20px_rgba(255,189,46,0.18)] md:block lg:left-[7%] lg:h-16 lg:w-16"
            animate={{ y: [-3, 10, -3] }}
            transition={{ ...floatTransition, duration: 4.5 }}
          >
            <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black lg:h-3 lg:w-3" />
          </motion.div>

          <motion.div
            aria-hidden="true"
            className="absolute right-[2%] top-[38%] hidden h-7 w-28 items-center rounded-full border-2 border-black bg-white md:flex lg:right-[4%] lg:h-8 lg:w-36"
            animate={{ x: [-3, 5, -3] }}
            transition={{ ...floatTransition, duration: 4.2 }}
          >
            <div className="absolute left-[48%] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border border-gray-400 bg-[#25e84c] lg:h-4 lg:w-4" />
          </motion.div>

          <div className="relative z-10 mx-auto max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[56px] font-black leading-[0.92] tracking-[-0.06em] text-black sm:text-[76px] md:text-[100px] lg:text-[116px]"
            >
              bring
              <br />
              <span className="relative inline-block">a team</span>
              <br />
              <span className="relative inline-block">together</span>
            </motion.h1>

            <motion.div
              aria-hidden="true"
              className="absolute left-[7%] top-[56%] hidden h-14 w-28 items-center justify-center rounded-full bg-gradient-to-r from-[#ef5caa] via-[#ad73eb] to-[#6e9be9] shadow-[0_10px_24px_rgba(173,115,235,0.2)] md:flex lg:left-[13%] lg:h-[62px] lg:w-[125px]"
              animate={{ y: [-7, 8, -7], rotate: [-3, 3, -3] }}
              transition={{ ...floatTransition, duration: 4.3 }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md lg:h-11 lg:w-11">
                <MessageCircle className="h-5 w-5 text-black" strokeWidth={2.5} />
              </div>
            </motion.div>

            <motion.div
              aria-hidden="true"
              className="absolute right-[10%] top-[66%] hidden h-12 w-12 items-center justify-center rounded-full bg-[#e7e9ef] md:flex lg:right-[16%] lg:h-14 lg:w-14"
              animate={{ y: [-5, 7, -5], rotate: [3, -3, 3] }}
              transition={{ ...floatTransition, duration: 3.6 }}
            >
              <Mail className="h-5 w-5 text-black lg:h-[23px] lg:w-[23px]" />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="relative z-10 mx-auto mt-10 max-w-[680px] text-[clamp(10px,3.4vw,21px)] font-medium leading-[1.5] tracking-[-0.2px] text-black/80"
          >
            <span className="block whitespace-nowrap">Have a project, idea, or question?</span>
            <span className="block whitespace-nowrap">Connect with us and let&apos;s create something amazing together.</span>
          </motion.p>

          <motion.a
            href="#contact-form"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="relative z-10 mx-auto mt-7 flex w-fit items-center gap-2 rounded-full bg-[#292929] px-5 py-2.5 text-[14px] font-medium text-white shadow-lg transition-shadow hover:shadow-xl"
          >
            Start a conversation
            <ArrowUpRight className="h-[15px] w-[15px]" />
          </motion.a>

          <svg className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full md:block" viewBox="0 0 1000 650" fill="none" preserveAspectRatio="none" aria-hidden="true">
            <motion.path
              d="M72 205 C72 255 72 300 112 320 L150 320 C170 320 178 342 188 360"
              stroke="#171717"
              strokeWidth="2"
              strokeDasharray="7 9"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M78 475 C112 475 130 468 148 448"
              stroke="#171717"
              strokeWidth="2"
              strokeDasharray="6 8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.9 }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
