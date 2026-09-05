export default function FeatureSection() {
  return (
    <section className="relative isolate flex min-h-[620px] w-full items-center justify-center overflow-hidden border-b border-black/5 bg-white px-6 py-24 sm:min-h-[700px] lg:min-h-[760px]">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[12%] top-[37%] h-20 w-20 rounded-full bg-[#ffc53d] shadow-[inset_-8px_-8px_18px_rgba(255,150,0,0.2)] sm:h-28 sm:w-28" />
        <div className="absolute left-[28%] top-[21%] h-20 w-20 rotate-45 rounded-[1.5rem] bg-[#36d84b] shadow-[0_8px_20px_rgba(54,216,75,0.25)] sm:h-24 sm:w-24" />
        <div className="absolute right-[18%] top-[23%] h-20 w-44 rounded-full bg-gradient-to-r from-[#2f75df] to-[#93c5ff] shadow-[0_12px_24px_rgba(47,117,223,0.22)] sm:h-24 sm:w-64" />
        <div className="absolute right-[29%] top-[18%] h-20 w-20 rounded-full border-[10px] border-[#f4f1e9] bg-white shadow-[0_4px_14px_rgba(0,0,0,0.1)] sm:h-24 sm:w-24" />
        <div className="absolute left-[34%] top-[48%] h-16 w-32 rotate-[-10deg] rounded-full bg-gradient-to-r from-[#f2599d] to-[#78a9f5] opacity-90 sm:h-20 sm:w-44" />
        <div className="absolute left-[41%] top-[51%] flex h-14 w-28 items-center justify-center rounded-full border-4 border-[#99b9eb] bg-[#d8e7ff] text-xl font-bold text-[#162442] shadow-[0_8px_15px_rgba(80,120,190,0.2)] sm:h-16 sm:w-36">
          ⌘
        </div>
        <div className="absolute right-[23%] top-[42%] h-12 w-28 rounded-full border-2 border-black bg-white shadow-[0_4px_10px_rgba(0,0,0,0.08)] sm:w-36">
          <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#31d74b] shadow-[0_0_0_4px_rgba(49,215,75,0.15)]" />
        </div>
        <div className="absolute right-[22%] top-[20%] h-16 w-16 rotate-12 rounded-[45%] bg-[#ff9e36] shadow-[0_6px_14px_rgba(255,158,54,0.25)] sm:h-20 sm:w-20" />
        <div className="absolute left-[18%] top-[28%] h-24 w-px rotate-12 bg-black/80 sm:h-32" />
        <div className="absolute left-[20%] top-[45%] h-24 w-px -rotate-12 bg-black/80 sm:h-32" />
        <div className="absolute left-[20%] top-[43%] h-px w-24 bg-black/80 sm:w-36" />
        <div className="absolute right-[12%] top-[34%] h-24 w-px rotate-[45deg] bg-black/80 sm:h-32" />
        <div className="absolute right-[7%] top-[31%] h-px w-28 bg-black/80 sm:w-44" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <h1 className="max-w-4xl text-[clamp(3.5rem,10vw,8.5rem)] font-black uppercase leading-[0.82] tracking-[-0.07em] text-black">
          Bring your team together
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-black/70 sm:text-lg">
          Connect with DevSpectra and turn your next idea into a clear, confident digital experience.
        </p>
        <a
          href="#contact-form"
          className="mt-7 rounded-full bg-[#242424] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#4b3a28]"
        >
          Start a conversation
        </a>
      </div>
    </section>
  );
}
