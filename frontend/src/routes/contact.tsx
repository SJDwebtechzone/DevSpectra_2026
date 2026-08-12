import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import {
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Asterisk,
  ArrowUpRight,
} from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import FeatureSection from "@/components/ui/stack-feature-section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Digital Agency" },
      { name: "description", content: "Join Us in Creating Something Great" },
    ],
  }),
  component: Contact,
});

function Marquee() {
  return (
    <div className="flex w-full overflow-hidden relative z-20 bg-gradient-to-b from-blue-400/20 to-blue-900/20 backdrop-blur-[24px] backdrop-saturate-150 border-y border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.4)] text-blue-950 py-4">
      <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="flex items-center text-xl font-bold uppercase tracking-wider mx-4"
          >
            <span className="mx-8">Website Design</span>
            <Asterisk className="w-8 h-8" />
            <span className="mx-8">UX/UI Design</span>
            <Asterisk className="w-8 h-8" />
            <span className="mx-8">Graphics Design</span>
            <Asterisk className="w-8 h-8" />
            <span className="mx-8">Digital Marketing</span>
            <Asterisk className="w-8 h-8" />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

function Contact() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    // Interactive cursor parallax
    const x = (e.clientX / window.innerWidth - 0.5) * 40;
    const y = (e.clientY / window.innerHeight - 0.5) * 40;
    setMousePos({ x, y });
  };

  return (
    <PageShell mode="contact" ctaLabel="Contact Us Now">
      {/* Top Header */}
      <FeatureSection />

      {/* Top Marquee */}
      <Marquee />

      {/* Main Content Area */}
      <section className="relative py-32 text-black bg-[#fbfdfa] overflow-hidden">
        {/* Background Atmospheric Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(230,245,255,0.5),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(240,250,255,0.6),transparent_50%)] pointer-events-none" />

        {/* Decorative Liquid Glass Elements */}
        <div className="absolute -top-32 -left-20 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl pointer-events-none animate-[liquid-float_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-10 right-0 w-[40rem] h-[40rem] bg-cyan-50/30 rounded-full blur-3xl pointer-events-none animate-[liquid-float_12s_ease-in-out_infinite_reverse]" />

        {/* Acrylic Wave Blobs */}
        <div className="absolute top-1/4 -right-10 w-72 h-72 bg-white/20 rounded-[40%_60%_70%_30%] backdrop-blur-md border border-white/40 shadow-[inset_10px_10px_40px_rgba(255,255,255,0.8),0_10px_30px_rgba(0,100,255,0.05)] pointer-events-none animate-[liquid-spin_15s_linear_infinite]" />
        <div className="absolute bottom-1/4 -left-12 w-64 h-64 bg-white/20 rounded-[60%_40%_30%_70%] backdrop-blur-md border border-white/40 shadow-[inset_-10px_-10px_40px_rgba(255,255,255,0.7),0_10px_30px_rgba(0,100,255,0.05)] pointer-events-none animate-[liquid-spin_12s_linear_infinite_reverse]" />

        {/* Small Glass Bubbles */}
        <div
          className="absolute top-1/3 left-1/4 w-12 h-12 rounded-full backdrop-blur-lg border border-white/50 shadow-[inset_2px_4px_10px_rgba(255,255,255,0.9),0_4px_12px_rgba(0,100,255,0.05)] pointer-events-none animate-[liquid-float_8s_ease-in-out_infinite]"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/3 w-8 h-8 rounded-full backdrop-blur-lg border border-white/50 shadow-[inset_2px_4px_8px_rgba(255,255,255,0.9),0_4px_12px_rgba(0,100,255,0.05)] pointer-events-none animate-[liquid-float_6s_ease-in-out_infinite]"
          style={{ animationDelay: "3s" }}
        />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
          {/* Left: Form */}
          <div>
            <div className="flex items-center gap-3 text-black/80 mb-4 text-sm font-medium tracking-wide">
              <span className="w-8 h-[2px] bg-black/80"></span> Contact Us
            </div>
            <h2 className="text-5xl lg:text-6xl font-display font-bold mb-12 leading-tight text-gray-900 tracking-tight">
              Join Us in Creating
              <br />
              Something Great
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name *"
                  className="w-full bg-white/50 backdrop-blur-[24px] border border-white/75 rounded-[32px] px-7 h-[72px] text-gray-800 placeholder:text-gray-400 font-medium text-[18px] shadow-[0_4px_24px_rgba(0,0,0,0.02),inset_0_2px_8px_rgba(255,255,255,0.6),inset_0_-1px_3px_rgba(100,150,255,0.05)] transition-all duration-300 focus:outline-none focus:bg-white/65 focus:border-white focus:shadow-[0_8px_32px_rgba(100,180,255,0.1),inset_0_4px_10px_rgba(255,255,255,0.8),inset_0_-1px_4px_rgba(100,150,255,0.1)] focus:-translate-y-0.5"
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  className="w-full bg-white/50 backdrop-blur-[24px] border border-white/75 rounded-[32px] px-7 h-[72px] text-gray-800 placeholder:text-gray-400 font-medium text-[18px] shadow-[0_4px_24px_rgba(0,0,0,0.02),inset_0_2px_8px_rgba(255,255,255,0.6),inset_0_-1px_3px_rgba(100,150,255,0.05)] transition-all duration-300 focus:outline-none focus:bg-white/65 focus:border-white focus:shadow-[0_8px_32px_rgba(100,180,255,0.1),inset_0_4px_10px_rgba(255,255,255,0.8),inset_0_-1px_4px_rgba(100,150,255,0.1)] focus:-translate-y-0.5"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full bg-white/50 backdrop-blur-[24px] border border-white/75 rounded-[32px] px-7 h-[72px] text-gray-800 placeholder:text-gray-400 font-medium text-[18px] shadow-[0_4px_24px_rgba(0,0,0,0.02),inset_0_2px_8px_rgba(255,255,255,0.6),inset_0_-1px_3px_rgba(100,150,255,0.05)] transition-all duration-300 focus:outline-none focus:bg-white/65 focus:border-white focus:shadow-[0_8px_32px_rgba(100,180,255,0.1),inset_0_4px_10px_rgba(255,255,255,0.8),inset_0_-1px_4px_rgba(100,150,255,0.1)] focus:-translate-y-0.5"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  className="w-full bg-white/50 backdrop-blur-[24px] border border-white/75 rounded-[32px] px-7 h-[72px] text-gray-800 placeholder:text-gray-400 font-medium text-[18px] shadow-[0_4px_24px_rgba(0,0,0,0.02),inset_0_2px_8px_rgba(255,255,255,0.6),inset_0_-1px_3px_rgba(100,150,255,0.05)] transition-all duration-300 focus:outline-none focus:bg-white/65 focus:border-white focus:shadow-[0_8px_32px_rgba(100,180,255,0.1),inset_0_4px_10px_rgba(255,255,255,0.8),inset_0_-1px_4px_rgba(100,150,255,0.1)] focus:-translate-y-0.5"
                />
              </div>
              <input
                type="text"
                placeholder="Subject *"
                className="w-full bg-white/50 backdrop-blur-[24px] border border-white/75 rounded-[32px] px-7 h-[72px] text-gray-800 placeholder:text-gray-400 font-medium text-[18px] shadow-[0_4px_24px_rgba(0,0,0,0.02),inset_0_2px_8px_rgba(255,255,255,0.6),inset_0_-1px_3px_rgba(100,150,255,0.05)] transition-all duration-300 focus:outline-none focus:bg-white/65 focus:border-white focus:shadow-[0_8px_32px_rgba(100,180,255,0.1),inset_0_4px_10px_rgba(255,255,255,0.8),inset_0_-1px_4px_rgba(100,150,255,0.1)] focus:-translate-y-0.5"
              />
              <textarea
                placeholder="Message *"
                className="w-full bg-white/50 backdrop-blur-[24px] border border-white/75 rounded-[32px] px-7 py-6 h-[220px] resize-none text-gray-800 placeholder:text-gray-400 font-medium text-[18px] shadow-[0_4px_24px_rgba(0,0,0,0.02),inset_0_2px_8px_rgba(255,255,255,0.6),inset_0_-1px_3px_rgba(100,150,255,0.05)] transition-all duration-300 focus:outline-none focus:bg-white/65 focus:border-white focus:shadow-[0_8px_32px_rgba(100,180,255,0.1),inset_0_4px_10px_rgba(255,255,255,0.8),inset_0_-1px_4px_rgba(100,150,255,0.1)] focus:-translate-y-0.5"
              ></textarea>

              <button
                type="button"
                className="inline-flex items-center justify-between gap-6 bg-[#060c18] hover:bg-[#0a152e] text-white font-medium rounded-full h-[64px] pl-8 pr-2 transition-all duration-300 group shadow-[0_12px_30px_rgba(0,0,0,0.15),inset_0_1px_2px_rgba(255,255,255,0.2)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 w-max"
              >
                <span className="text-[17px]">Send Message</span>
                <span className="bg-white text-[#060c18] w-[48px] h-[48px] rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform shadow-sm">
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </form>
          </div>

          {/* Right: Info Card */}
          <div className="relative mt-8 lg:mt-0">
            {/* Badge overlay */}
            <div className="absolute -top-10 right-4 lg:-right-6 bg-white/60 backdrop-blur-xl text-black w-28 h-28 rounded-full flex items-center justify-center border border-white/80 z-10 hidden sm:flex shadow-[0_8px_32px_rgba(0,0,0,0.05),inset_0_2px_10px_rgba(255,255,255,0.8)]">
              <div className="absolute inset-2 border border-dashed border-black/20 rounded-full animate-[spin_12s_linear_infinite]" />
              <ArrowUpRight className="w-8 h-8 text-black/80" />
            </div>

            <AuroraBackground
              className="h-full w-full rounded-[2.5rem] p-10 lg:p-14 shadow-[0_8px_40px_rgba(0,0,0,0.04),inset_0_2px_20px_rgba(255,255,255,0.6)] relative overflow-hidden items-start justify-start !bg-white/40 backdrop-blur-2xl border border-white/60 !text-gray-900"
              showRadialGradient={false}
            >
              <div className="space-y-10 relative z-10 w-full text-gray-900">
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Address</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    4517 Washington Ave. Manchester,
                    <br />
                    Kentucky 39495
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Contact</h3>
                  <p className="text-gray-600 font-medium">Phone : +0123-456-789</p>
                  <p className="text-gray-600 font-medium">Email : example@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Open Time</h3>
                  <p className="text-gray-600 font-medium">Monday - Friday : 10:00 - 20:00</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-5 text-gray-900">Stay Connected</h3>
                  <div className="flex gap-4">
                    {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="w-12 h-12 bg-white/60 text-gray-800 backdrop-blur-xl border border-white/80 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_2px_8px_rgba(255,255,255,0.8)] flex items-center justify-center rounded-full hover:bg-white hover:scale-105 transition-all"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AuroraBackground>
          </div>
        </div>

        {/* Animations for Liquid Elements */}
        <style>{`
          @keyframes liquid-float {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-20px) scale(1.05); }
          }
          @keyframes liquid-spin {
            0% { transform: rotate(0deg) scale(1); border-radius: 40% 60% 70% 30%; }
            50% { transform: rotate(180deg) scale(1.05); border-radius: 60% 40% 30% 70%; }
            100% { transform: rotate(360deg) scale(1); border-radius: 40% 60% 70% 30%; }
          }
        `}</style>
      </section>

      {/* Map Section */}
      <section className="h-[450px] w-full relative border-t border-b border-white/20">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0192837330755!2d-122.39868832367123!3d37.79427301053151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858066f1082a63%3A0x7d25e076722d3e0!2s1%20Market%20St%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          className="w-full h-full grayscale opacity-70"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </PageShell>
  );
}
