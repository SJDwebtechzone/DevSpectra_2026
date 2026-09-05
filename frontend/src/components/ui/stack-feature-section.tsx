export default function FeatureSection() {
  return (
    <section className="relative flex min-h-[52vh] w-full items-end justify-center overflow-hidden border-b border-black/10 bg-[#b8f000] px-5 pb-0 sm:min-h-[60vh] sm:px-8 lg:min-h-[68vh]">
      <div aria-hidden="true" className="absolute left-1/2 top-[44%] aspect-square w-[72vw] max-w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a8df00]" />

      <div className="relative z-10 mb-[clamp(9rem,25vh,14rem)] flex w-full max-w-6xl items-center justify-between text-[9px] font-medium leading-tight text-black sm:text-[10px]">
        <p>© Copyright 2024. DevSpectra. All rights reserved.</p>
        <p>Terms &amp; Conditions</p>
        <div className="flex items-center gap-3" aria-label="Social links">
          <a href="https://www.facebook.com/people/Devspectra/61592571971735/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Fb</a>
          <a href="https://www.instagram.com/_devspectra_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Ig</a>
          <a href="https://www.linkedin.com/company/devspectra/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">In</a>
        </div>
      </div>

      <h1 className="absolute bottom-[-0.12em] left-1/2 z-10 w-max -translate-x-1/2 whitespace-nowrap text-[clamp(3.2rem,13vw,12rem)] font-black uppercase leading-[0.72] tracking-[-0.07em] text-black">
        Let&apos;s Work Together
      </h1>
    </section>
  );
}
