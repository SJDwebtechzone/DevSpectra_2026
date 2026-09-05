export default function FeatureSection() {
  return (
    <section className="relative flex min-h-[52vh] w-full items-end justify-center overflow-hidden border-b border-black/10 bg-black px-5 pb-0 sm:min-h-[60vh] sm:px-8 lg:min-h-[68vh]">
      <img
        src="/contact/contact2.jpg"
        alt="Partners shaking hands"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/35" />

      <h1 className="absolute bottom-0 left-0 z-10 w-full px-1 text-center whitespace-nowrap text-[clamp(1rem,8vw,9.5rem)] font-black uppercase leading-[0.9] tracking-[-0.07em] text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.65)]">
        Let&apos;s Work Together
      </h1>
    </section>
  );
}
