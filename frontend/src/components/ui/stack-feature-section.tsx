export default function FeatureSection() {
  return (
    <section className="relative flex min-h-[52vh] w-full items-end justify-center overflow-hidden border-b border-black/10 bg-[#b8f000] px-5 pb-0 sm:min-h-[60vh] sm:px-8 lg:min-h-[68vh]">
      <div aria-hidden="true" className="absolute left-1/2 top-[44%] aspect-square w-[72vw] max-w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a8df00]" />

      <h1 className="absolute bottom-0 left-1/2 z-10 w-full max-w-full px-3 text-center whitespace-nowrap text-[clamp(1.2rem,8vw,6rem)] font-black uppercase leading-[0.9] tracking-[-0.07em] text-black">
        Let&apos;s Work Together
      </h1>
    </section>
  );
}
