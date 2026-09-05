export default function FeatureSection() {
  return (
    <section className="relative min-h-[620px] w-full overflow-hidden border-b border-black/10 bg-[#b8f000] text-black sm:min-h-[680px] lg:min-h-[760px]">
      <div aria-hidden="true" className="absolute left-1/2 top-[38%] aspect-square w-[82vw] max-w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a8df00]" />

      <div className="relative z-10 flex min-h-[620px] items-center justify-center px-6 text-center sm:min-h-[680px] lg:min-h-[760px]">
        <h1 className="max-w-6xl text-[clamp(2.75rem,9vw,10rem)] font-black leading-[0.8] tracking-[-0.07em]">
          LET&apos;S WORK TOGETHER
        </h1>
      </div>
    </section>
  );
}
