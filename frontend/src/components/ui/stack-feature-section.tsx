export default function FeatureSection() {
  return (
    <section className="relative isolate flex min-h-[620px] w-full items-center justify-center overflow-hidden border-b border-black/5 bg-white px-4 py-20 sm:min-h-[700px] sm:px-6 lg:min-h-[760px]">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-[43%] h-16 w-16 rounded-full bg-[#ffc53d] shadow-[inset_-8px_-8px_18px_rgba(255,150,0,0.2)] sm:h-24 sm:w-24 lg:left-[18%]" />
        <div className="absolute left-[32%] top-[22%] flex h-16 w-16 rotate-45 items-center justify-center rounded-[1.25rem] bg-[#36d84b] shadow-[0_8px_20px_rgba(54,216,75,0.25)] sm:h-20 sm:w-20">
          <span className="-rotate-45 text-3xl text-black">↗</span>
        </div>
        <div className="absolute right-[8%] top-[23%] h-16 w-36 rounded-full bg-gradient-to-r from-[#2f75df] to-[#93c5ff] shadow-[0_12px_24px_rgba(47,117,223,0.22)] sm:h-20 sm:w-56 lg:right-[19%]" />
        <div className="absolute right-[25%] top-[18%] h-16 w-16 rounded-full border-[8px] border-[#f4f1e9] bg-white shadow-[0_4px_14px_rgba(0,0,0,0.1)] sm:h-20 sm:w-20" />
        <div className="absolute right-[14%] top-[18%] h-14 w-14 rotate-12 rounded-[45%] bg-[#ff9e36] shadow-[0_6px_14px_rgba(255,158,54,0.25)] sm:h-20 sm:w-20" />
        <div className="absolute left-[31%] top-[54%] h-14 w-28 rotate-[-10deg] rounded-full bg-gradient-to-r from-[#f2599d] to-[#78a9f5] opacity-90 sm:h-20 sm:w-40" />
        <div className="absolute left-[40%] top-[55%] flex h-12 w-24 items-center justify-center rounded-full border-4 border-[#99b9eb] bg-[#d8e7ff] text-xl font-bold text-[#162442] shadow-[0_8px_15px_rgba(80,120,190,0.2)] sm:h-16 sm:w-32">
          ⌘
        </div>
        <div className="absolute right-[13%] top-[45%] h-10 w-24 rounded-full border-2 border-black bg-white shadow-[0_4px_10px_rgba(0,0,0,0.08)] sm:w-32 lg:right-[20%]">
          <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#31d74b] shadow-[0_0_0_4px_rgba(49,215,75,0.15)]" />
        </div>
        <div className="absolute left-[17%] top-[41%] h-28 w-px rotate-12 bg-black/80 sm:h-36" />
        <div className="absolute left-[19%] top-[48%] h-24 w-px -rotate-12 bg-black/80 sm:h-32" />
        <div className="absolute left-[19%] top-[47%] h-px w-20 bg-black/80 sm:w-32" />
        <div className="absolute right-[8%] top-[39%] h-24 w-px rotate-[45deg] bg-black/80 sm:h-32" />
        <div className="absolute right-[3%] top-[37%] h-px w-24 bg-black/80 sm:w-40" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <h1 className="max-w-4xl text-[clamp(3.7rem,11vw,9.5rem)] font-black lowercase leading-[0.82] tracking-[-0.08em] text-black">
          <span className="block">bring</span>
          <span className="block">your team</span>
          <span className="block">together</span>
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
