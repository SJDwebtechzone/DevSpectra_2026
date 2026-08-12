import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { RobotHero } from "@/components/ui/robot-hero";
import { AnimatedLiquidBackground } from "@/components/ui/animated-liquid-background";
import { OrbitingTechLogos } from "@/components/ui/orbiting-tech-logos";
import { OpenPositions } from "@/components/ui/open-positions";
import { useState } from "react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Digital Agency" },
      { name: "description", content: "Come build with a small, senior team." },
    ],
  }),
  component: Careers,
});

function Careers() {
  return (
    <PageShell mode="careers" ctaLabel="Apply Now" ctaTo="#apply">
      {/* Robot Hero Section */}
      <div className="-mt-24 w-full h-screen relative overflow-hidden">
        <AnimatedLiquidBackground>
          <OrbitingTechLogos />

          <RobotHero
            transparentBackground={true}
            backgroundContent={
              <div className="flex flex-col items-center justify-start pt-[20vh] text-center px-6 w-full h-full mx-auto pointer-events-none relative z-30">
                <h1
                  className="font-black tracking-tight mb-8 leading-none"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", color: "#0B192C" }}
                >
                  Let's Build Something Legendary.
                </h1>
                <p className="text-xs md:text-sm lg:text-base font-bold tracking-[0.1em] max-w-4xl mx-auto uppercase text-[#546a87] leading-relaxed">
                  We are designers, engineers, and dreamers. <br />
                  If you are ready to push boundaries and have fun doing it, DevSpectra is your new
                  home.
                </p>
              </div>
            }
          />
        </AnimatedLiquidBackground>
      </div>

      <OpenPositions />

      {/* Apply Form - Premium Glass */}
      <section id="apply" className="relative text-[#0B192C] py-32 px-6 overflow-hidden">
        {/* Parallax Glassy Background */}
        <div className="absolute inset-0 w-full h-full bg-[url('/glassy-waves-bg.jpg')] bg-cover bg-fixed bg-center opacity-[0.35] mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0B192C] mb-4">
              Apply Now
            </h2>
            <p className="text-[#546a87] text-lg font-bold tracking-wider uppercase text-sm md:text-base">
              Take the first step towards your new career.
            </p>
          </div>

          <form className="space-y-6 bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-white/80 shadow-[0_8px_32px_rgba(150,170,200,0.15),inset_0_4px_8px_rgba(255,255,255,1)] relative overflow-hidden group">
            {/* Inner ambient glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/0 via-blue-50/30 to-cyan-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-[#546a87]">
                  Full name
                </label>
                <input
                  type="text"
                  className="w-full bg-white/60 backdrop-blur-md border border-white/90 p-4 rounded-2xl outline-none focus:border-[#0B192C] focus:ring-4 focus:ring-blue-100/50 font-medium text-[#0B192C] shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-[#546a87]">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-white/60 backdrop-blur-md border border-white/90 p-4 rounded-2xl outline-none focus:border-[#0B192C] focus:ring-4 focus:ring-blue-100/50 font-medium text-[#0B192C] shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-[#546a87]">
                  Role you're applying for
                </label>
                <div className="relative">
                  <select
                    id="role-select"
                    className="w-full bg-white/60 backdrop-blur-md border border-white/90 p-4 pr-12 rounded-2xl outline-none focus:border-[#0B192C] focus:ring-4 focus:ring-blue-100/50 font-medium text-[#0B192C] shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] appearance-none cursor-pointer transition-all"
                  >
                    <option>Java Developer</option>
                    <option>Python Developer</option>
                    <option>Full Stack Developer</option>
                    <option>MERN Stack Developer</option>
                    <option>React Developer</option>
                    <option>UI/UX Developer</option>
                    <option>DevOps</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-[#546a87]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-[#546a87]">
                  Resume / CV (PDF)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="w-full bg-white/60 backdrop-blur-md border border-white/90 p-3 rounded-2xl outline-none focus:border-[#0B192C] focus:ring-4 focus:ring-blue-100/50 font-medium text-[#0B192C] shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] file:mr-4 file:py-2.5 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-[#0B192C] file:text-white hover:file:bg-[#1a2d4c] cursor-pointer transition-all"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  className="w-full bg-[#0B192C] text-white font-bold uppercase tracking-widest py-5 rounded-2xl text-base transition-all duration-300 shadow-[0_8px_24px_rgba(11,25,44,0.3)] hover:shadow-[0_12px_32px_rgba(11,25,44,0.4)] hover:-translate-y-1"
                >
                  Submit application
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
