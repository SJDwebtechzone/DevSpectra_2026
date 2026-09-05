import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function FeatureSection() {
  return (
    <section className="relative min-h-[620px] w-full overflow-hidden border-b border-black/10 bg-[#b8f000] text-black sm:min-h-[680px] lg:min-h-[760px]">
      <div aria-hidden="true" className="absolute left-1/2 top-[38%] aspect-square w-[82vw] max-w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a8df00]" />

      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1180px] flex-col px-6 py-12 sm:min-h-[680px] sm:px-10 sm:py-16 lg:min-h-[760px] lg:px-14 lg:py-20">
        <div className="grid grid-cols-1 gap-10 text-[10px] font-semibold leading-[1.35] sm:grid-cols-3 sm:gap-6">
          <div className="space-y-2 uppercase tracking-[0.08em]">
            <p className="text-black/60">Contact</p>
            <p>higyoagaditama.com</p>
            <p>+62821-5949-5854</p>
          </div>

          <div className="text-center sm:pt-0">
            <h1 className="text-base font-bold tracking-tight sm:text-lg">Got a project? Want to collaborate?</h1>
            <a
              href="#contact-form"
              className="mt-4 inline-flex items-center gap-3 rounded-full bg-[#2516d9] px-5 py-2 text-[10px] font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Discuss our project <span aria-hidden="true">&#8594;</span>
            </a>
          </div>

          <div className="space-y-5 uppercase tracking-[0.08em] sm:text-right">
            <div>
              <p className="text-black/60">Indonesia</p>
              <p className="mt-2">Jln. Bambu No. 375</p>
              <p>Samarinda, Kalimantan Timur</p>
            </div>
            <div>
              <p className="text-black/60">Hong Kong</p>
              <p className="mt-2">60 Ya Fung Sung</p>
              <p>San Tsuen, 75129</p>
            </div>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-5 text-[9px] font-semibold uppercase tracking-[0.08em] sm:flex-row sm:items-end sm:justify-between">
          <p>© Copyright 2024. All rights reserved.</p>
          <p>Terms &amp; Conditions</p>
          <div className="flex items-center gap-3 sm:justify-end">
            <a href="https://www.facebook.com/people/Devspectra/61592571971735/" aria-label="Facebook" target="_blank" rel="noreferrer"><Facebook className="h-3 w-3" /></a>
            <a href="https://www.youtube.com/@Devspectratech" aria-label="YouTube" target="_blank" rel="noreferrer"><Youtube className="h-3 w-3" /></a>
            <a href="https://www.instagram.com/_devspectra_" aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram className="h-3 w-3" /></a>
            <a href="https://www.linkedin.com/company/devspectra/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin className="h-3 w-3" /></a>
          </div>
        </div>

      </div>
    </section>
  );
}
