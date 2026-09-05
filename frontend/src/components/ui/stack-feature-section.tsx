export default function FeatureSection() {
  return (
    <section className="relative flex min-h-[52vh] w-full items-end justify-center overflow-hidden border-b border-black/10 bg-[#e9e9e9] px-5 pb-0 sm:min-h-[60vh] sm:px-8 lg:min-h-[68vh]">
      <div aria-hidden="true" className="absolute left-[8%] top-[30%] h-16 w-16 rounded-full bg-[#ffbd2e] sm:h-20 sm:w-20" />
      <div aria-hidden="true" className="absolute left-[39%] top-[15%] h-16 w-16 rounded-full bg-[#28dc51] sm:h-20 sm:w-20" />
      <div aria-hidden="true" className="absolute right-[12%] top-[18%] text-4xl sm:text-5xl">🥳</div>

      <div aria-hidden="true" className="absolute left-[35%] top-[17%] h-16 w-44 rounded-full bg-gradient-to-r from-[#2775e8] to-[#8eb2ff] shadow-[inset_-18px_0_0_#f8f8f8] sm:h-20 sm:w-64" />
      <div aria-hidden="true" className="absolute left-[39%] top-[18.5%] h-10 w-10 rounded-full border border-gray-300 bg-white shadow-sm sm:h-14 sm:w-14" />
      <div aria-hidden="true" className="absolute right-[25%] top-[34%] h-10 w-28 rounded-full border-2 border-black bg-white shadow-[inset_20px_0_0_#35d85e] sm:h-14 sm:w-40" />

      <div aria-hidden="true" className="absolute bottom-[27%] left-[22%] h-16 w-28 rounded-full bg-gradient-to-r from-[#f46b9d] to-[#72a9ff] opacity-90 sm:h-20 sm:w-40" />
      <div aria-hidden="true" className="absolute bottom-[28%] left-[29%] h-12 w-12 rounded-full border-2 border-white bg-[#b7ccff] shadow-sm sm:h-16 sm:w-16" />

      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        <h1 className="max-w-4xl text-[clamp(3.6rem,10vw,8.75rem)] font-black uppercase leading-[0.82] tracking-[-0.07em] text-black">
          Let&apos;s build
          <br />
          something <span className="relative inline-block">great<span aria-hidden="true" className="absolute -right-8 -top-7 text-2xl normal-case tracking-normal sm:-right-12 sm:-top-10 sm:text-4xl">↗</span></span>
          <br />
          together
        </h1>
        <p className="mt-10 max-w-xl text-sm font-medium leading-relaxed text-gray-600 sm:text-base">
          Have a question, a project in mind, or just want to say hello? Let&apos;s bring your next idea to life together.
        </p>
        <a
          href="#contact-form"
          className="mt-7 rounded-full bg-[#171717] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          Start a conversation
        </a>
      </div>

      <div aria-hidden="true" className="absolute bottom-7 left-1/2 h-px w-24 -translate-x-1/2 bg-black/20" />
    </section>
  );
}
