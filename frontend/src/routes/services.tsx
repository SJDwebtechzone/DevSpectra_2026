import { createFileRoute } from "@tanstack/react-router";
import { PageShell, StubHero } from "@/components/site/PageShell";
import PhoneMockupBasic from "@/components/ui/phone-mockups-1";
import ProductPageDemo from "@/components/ui/product-detail-demo";
import SaasDashboardMockup from "@/components/ui/saas-dashboard";
import DigitalMarketingMockup from "@/components/ui/digital-marketing-mockup";
import { ServicesCards } from "@/components/ServicesCards";


const SpectraButton = ({ children, href }: { children: React.ReactNode, href?: string }) => {
  const Component = href ? 'a' : 'button';
  return (
    <Component href={href} className="relative inline-flex group w-fit">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-400 to-orange-500 rounded-full blur-[10px] opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
      <div className="relative flex items-center bg-gradient-to-r from-blue-500 via-purple-400 to-orange-500 p-[1.5px] rounded-full w-full shadow-sm">
        <div className="relative flex items-center justify-between w-full bg-white rounded-full px-6 py-3 overflow-hidden">
          
          {/* Subtle Wavy Background Pattern */}
          <div className="absolute inset-0 opacity-[0.5] pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 400 100" preserveAspectRatio="none">
               <path d="M0,50 Q100,0 200,50 T400,50 M0,60 Q100,20 200,60 T400,60 M0,40 Q100,-10 200,40 T400,40 M0,70 Q100,30 200,70 T400,70" stroke="url(#wave-grad)" fill="none" strokeWidth="0.5" />
               <defs>
                 <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#f97316" />
                 </linearGradient>
               </defs>
            </svg>
          </div>

          <span className="relative z-10 text-gray-900 font-bold tracking-widest text-xs sm:text-sm mr-4 uppercase">
            {children}
          </span>
          <div className="relative z-10 w-9 h-9 rounded-full border border-gray-100 flex items-center justify-center text-gray-900 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] group-hover:scale-105 transition-transform shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </div>
      </div>
    </Component>
  );
};

const SpectraIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative shrink-0">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-400 to-orange-500 rounded-full blur-[8px] opacity-40"></div>
      <div className="relative bg-gradient-to-br from-blue-500 via-purple-400 to-orange-500 p-[1.5px] rounded-full shadow-sm">
        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center overflow-hidden">
          
          {/* SVG Definitions for Gradients */}
          <svg width="0" height="0" className="absolute">
            <defs>
              <linearGradient id="icon-stroke-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                 <stop offset="0%" stopColor="#3b82f6" />
                 <stop offset="50%" stopColor="#a855f7" />
                 <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </svg>

          {/* Subtle Wavy Background Pattern */}
          <div className="absolute inset-0 opacity-[0.5] pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0,50 Q25,20 50,50 T100,50 M0,60 Q25,30 50,60 T100,60" stroke="url(#icon-wave-grad)" fill="none" strokeWidth="0.5" />
               <defs>
                 <linearGradient id="icon-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#f97316" />
                 </linearGradient>
               </defs>
            </svg>
          </div>
          
          {/* Inner Icon wrapper that forces the SVG stroke to use the gradient */}
          <div className="relative z-10 text-transparent [&_svg]:!stroke-[url(#icon-stroke-grad)]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — DevSpectra" },
      {
        name: "description",
        content:
          "Web, mobile, UI/UX, digital marketing, SEO, AI and cloud — eight practices, one studio. Transparent pricing, senior engineers, end-to-end delivery.",
      },
      { property: "og:title", content: "Services — DevSpectra" },
      {
        property: "og:description",
        content:
          "Eight practices, one studio. What we build, end to end — from first sketch to running production system.",
      },
      { property: "og:url", content: "/services" },
      { name: "twitter:title", content: "Services — DevSpectra" },
      {
        name: "twitter:description",
        content: "Web, mobile, AI, cloud. Transparent pricing, senior engineers.",
      },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <PageShell mode="services">
      {/* Services Hero Section - Neon Design */}
      <section className="relative overflow-hidden w-full min-h-[90vh] flex flex-col justify-center pt-32 md:pt-40 pb-16 -mt-24" style={{ backgroundColor: "#d5ff00" }}>
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 z-0 opacity-[0.15]" style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          backgroundPosition: "center center"
        }}>
          {/* Plus signs at intersections (simulated with radial gradients or just rely on grid) */}
        </div>
        
        <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          {/* Left Content */}
          <div className="flex-1 w-full lg:max-w-3xl text-black">
            <span className="inline-block font-bold tracking-widest uppercase mb-4 text-sm md:text-base text-blue-700">
              CREATIVE × STRATEGY × PERFORMANCE
            </span>
            
            <div className="relative mb-6">
              <h1 className="font-black text-[4.5rem] md:text-[6rem] lg:text-[7rem] leading-[0.85] tracking-tighter uppercase">
                WE BUILD<br />WEBSITES
              </h1>
              {/* Cursive text overlapping */}
              <div 
                className="absolute text-5xl md:text-7xl lg:text-8xl text-blue-700" 
                style={{ 
                  fontFamily: "'Brush Script MT', 'Caveat', 'Dancing Script', cursive",
                  transform: "rotate(-5deg)",
                  top: "60%",
                  left: "10%",
                  textShadow: "2px 2px 0px #d5ff00, -2px -2px 0px #d5ff00, 2px -2px 0px #d5ff00, -2px 2px 0px #d5ff00"
                }}
              >
                That Perform.
              </div>
            </div>

            <p className="text-lg md:text-xl font-medium max-w-md mb-10 leading-snug text-gray-900 mt-12 md:mt-16">
              From stunning websites to high-converting Google Ads — we build, launch & grow digital experiences that deliver results.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-16">
              <SpectraButton href="/contact">OUR SERVICES</SpectraButton>
              <a href="/portfolio" className="text-black px-6 py-4 rounded-full font-bold text-sm md:text-base hover:bg-black/5 transition-colors flex items-center gap-2 group">
                VIEW WORK
                <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center transform group-hover:translate-x-1 transition-transform">↗</span>
              </a>
            </div>

            {/* Trusted Brands */}
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-gray-700 mb-4">Trusted by forward-thinking brands</p>
              <div className="flex flex-wrap items-center gap-6 md:gap-8 opacity-80">
                <span className="font-bold text-xl flex items-center gap-1"><span className="text-blue-600 text-2xl">+</span>Google</span>
                <span className="font-bold text-xl flex items-center gap-1">Dropbox</span>
                <span className="font-bold text-xl flex items-center gap-1">slack</span>
                <span className="font-black text-xl text-red-600 tracking-tighter">NETFLIX</span>
                <span className="font-bold text-xl tracking-tighter">webflow</span>
              </div>
            </div>
          </div>

          {/* Right Content / UI Mockups */}
          <div className="flex-1 w-full relative h-[600px] hidden md:block lg:mt-0 mt-12">
            
            {/* 1. Mobile Phone (Center Left) */}
            <div className="absolute top-[5%] left-[5%] w-[260px] h-[520px] bg-[#0a0a0c] rounded-[2.5rem] border-[8px] border-gray-900 shadow-2xl z-10 transform -rotate-3 overflow-hidden flex flex-col">
              {/* Notch / Status bar */}
              <div className="h-6 w-full flex justify-between items-center px-4 pt-1">
                <span className="text-[10px] text-white font-medium">9:41</span>
                <div className="w-24 h-5 bg-black rounded-b-xl absolute left-1/2 -translate-x-1/2 top-0"></div>
                <div className="flex gap-1 items-center">
                  <div className="w-3 h-2 bg-white rounded-sm"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-white font-black tracking-widest text-sm">DEVSPECTRA*</span>
                  <div className="space-y-1">
                    <div className="w-4 h-[2px] bg-white"></div>
                    <div className="w-4 h-[2px] bg-white"></div>
                    <div className="w-4 h-[2px] bg-white"></div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Web Development</p>
                <h2 className="text-[#d5ff00] font-black text-3xl leading-none uppercase mb-4">Bringing<br/>Ideas To<br/>Motion</h2>
                <div className="flex-1 relative rounded-xl overflow-hidden mb-4">
                  <img src="/hero/hero-cylinders.jpg" alt="Abstract 3D" className="absolute inset-0 w-full h-full object-cover scale-150 object-center" />
                </div>
                <button className="w-full border border-gray-600 rounded-full py-2 text-white text-xs font-bold uppercase flex justify-between items-center px-4 hover:bg-white/10">
                  View Projects <span>↗</span>
                </button>
              </div>
            </div>

            {/* 2. Google Search Card (Top Right) */}
            <div className="absolute top-[0%] right-[0%] w-[320px] bg-white rounded-xl shadow-2xl z-20 p-4 transform rotate-6 border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                <span className="font-bold text-xl tracking-tighter"><span className="text-blue-500">G</span><span className="text-red-500">o</span><span className="text-yellow-500">o</span><span className="text-blue-500">g</span><span className="text-green-500">l</span><span className="text-red-500">e</span></span>
              </div>
              <div className="w-full border border-gray-200 rounded-full py-2 px-3 flex justify-between items-center mb-4 bg-gray-50">
                <span className="text-sm text-gray-700">Digital Agency</span>
                <div className="flex gap-2 text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                </div>
              </div>
              <div className="mb-2">
                <span className="text-xs font-bold text-gray-900">Sponsored</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-[10px] font-bold">D*</div>
                <div>
                  <p className="text-sm font-medium leading-none text-gray-900">DevSpectra Studio</p>
                  <p className="text-[10px] text-gray-500">www.devspectra.in</p>
                </div>
              </div>
              <h3 className="text-blue-700 font-medium text-lg leading-tight mb-2">Premium Web Design & App Development</h3>
              <p className="text-xs text-gray-600 mb-3">We create stunning websites, robust mobile apps, & visual experiences that connect and convert.</p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-[10px] text-blue-600 bg-blue-50 px-2 py-1 rounded-full">Web Design</span>
                <span className="text-[10px] text-blue-600 bg-blue-50 px-2 py-1 rounded-full">App Dev</span>
              </div>
            </div>

            {/* 3. Desktop Browser Card (Bottom Right) */}
            <div className="absolute bottom-[5%] right-[-5%] w-[420px] bg-[#0f0f11] rounded-xl shadow-2xl z-30 border border-gray-800 overflow-hidden transform -rotate-2 flex flex-col">
               {/* Browser Top Bar */}
               <div className="bg-[#1a1a1d] h-8 flex items-center px-3 gap-2">
                 <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
               </div>
               <div className="p-5 flex-1 relative">
                 <div className="flex justify-between items-center mb-6">
                   <span className="text-white font-black tracking-widest text-sm">DEVSPECTRA*</span>
                   <div className="flex gap-3 text-[10px] text-gray-400 uppercase">
                     <span className="text-[#d5ff00]">Home</span>
                     <span>Services</span>
                     <span>Work</span>
                   </div>
                 </div>
                 
                 <div className="flex gap-4">
                   <div className="w-1/2">
                     <h2 className="text-white font-black text-3xl leading-none uppercase mb-4">DIGITAL<br/>STUDIO</h2>
                     <p className="text-[10px] text-gray-400 uppercase max-w-[150px]">We turn ideas into digital products that connect & inspire.</p>
                   </div>
                   <div className="w-1/2 relative">
                     <div className="w-32 h-32 rounded-full overflow-hidden absolute right-0 top-0">
                       <img src="/hero/hero-sphere.jpg" alt="Dark Sphere" className="w-full h-full object-cover scale-150" />
                     </div>
                   </div>
                 </div>
               </div>
            </div>
            
          </div>
          
        </div>
      </section>

      <ServicesCards />

      {/* Web Development Section */}
      <section id="web-development" className="bg-white py-24 relative overflow-hidden text-black border-t border-gray-100">
        <style>{`
          @keyframes scroll-up {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          @keyframes scroll-down {
            0% { transform: translateY(-50%); }
            100% { transform: translateY(0); }
          }
          .animate-scroll-up {
            animation: scroll-up 25s linear infinite;
          }
          .animate-scroll-down {
            animation: scroll-down 30s linear infinite;
          }
        `}</style>
        
        {/* Premium Spectra Glowing String Waves */}
        <div className="absolute inset-0 z-0 opacity-70 pointer-events-none flex items-center justify-center mix-blend-screen overflow-hidden">
          <svg width="100%" height="100%" viewBox="0 0 1440 800" preserveAspectRatio="none" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full min-w-[1440px] h-[120%]">
            <g strokeWidth="2.5" fill="none" opacity="0.8">
              <path d="M-100,500 C300,700 800,200 1500,400" stroke="url(#premium-grad-1)" style={{ filter: 'drop-shadow(0px 0px 15px rgba(59,130,246,0.5))' }} />
              <path d="M-100,550 C400,300 700,800 1500,450" stroke="url(#premium-grad-2)" style={{ filter: 'drop-shadow(0px 0px 15px rgba(249,115,22,0.5))' }} />
              <path d="M-100,450 C200,600 900,100 1500,550" stroke="url(#premium-grad-3)" style={{ filter: 'drop-shadow(0px 0px 15px rgba(168,85,247,0.5))' }} />
              
              <path d="M-100,480 C350,650 750,250 1500,420" stroke="url(#premium-grad-1)" strokeWidth="1" opacity="0.5" />
              <path d="M-100,520 C450,350 650,750 1500,480" stroke="url(#premium-grad-2)" strokeWidth="1" opacity="0.5" />
            </g>
            <defs>
              <linearGradient id="premium-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="#3b82f6" />
                 <stop offset="50%" stopColor="#a855f7" />
                 <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
              <linearGradient id="premium-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="#f97316" />
                 <stop offset="50%" stopColor="#ec4899" />
                 <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="premium-grad-3" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="#a855f7" />
                 <stop offset="50%" stopColor="#3b82f6" />
                 <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </svg>
          {/* Subtle glow orbs behind the waves */}
          <div className="absolute top-1/3 left-1/4 w-[30rem] h-[30rem] bg-blue-600/15 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[30rem] h-[30rem] bg-orange-600/15 rounded-full blur-[100px]"></div>
        </div>

        <div className="container-page flex flex-col lg:flex-row items-center gap-16 relative z-10">
          {/* Left Content */}
          <div className="flex-1 w-full lg:max-w-xl relative z-20">
            <span className="inline-block text-blue-600 font-bold tracking-widest text-sm mb-4 uppercase">
              WHAT WE DO
            </span>
            
            <h2 className="font-black text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tighter uppercase mb-2">
              WEB<br />DEVELOPMENT
            </h2>
            <div 
              className="text-4xl md:text-5xl text-blue-600 mb-8" 
              style={{ fontFamily: "'Brush Script MT', 'Caveat', 'Dancing Script', cursive", transform: "rotate(-3deg) translateY(-10px)" }}
            >
              Fast. Scalable. Stunning.
            </div>
            
            <p className="text-gray-700 text-lg mb-10 max-w-md font-medium">
              We build modern, high-performance websites that not only look stunning but also deliver seamless user experiences and real business results.
            </p>

            <div className="space-y-6 mb-12">
              {/* Feature 1 */}
              <div className="flex gap-4 items-start">
                <SpectraIcon><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg></SpectraIcon>
                <div className="pt-1">
                  <h4 className="font-bold text-gray-900 mb-1">Custom Websites</h4>
                  <p className="text-sm text-gray-600 leading-snug">Tailored websites built to match your brand and business goals.</p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex gap-4 items-start">
                <SpectraIcon><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></SpectraIcon>
                <div className="pt-1">
                  <h4 className="font-bold text-gray-900 mb-1">High Performance</h4>
                  <p className="text-sm text-gray-600 leading-snug">Optimized for speed, SEO, and flawless performance across all devices.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4 items-start">
                <SpectraIcon><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></SpectraIcon>
                <div className="pt-1">
                  <h4 className="font-bold text-gray-900 mb-1">Responsive Design</h4>
                  <p className="text-sm text-gray-600 leading-snug">Pixel-perfect designs that adapt beautifully to every screen size.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4 items-start">
                <SpectraIcon><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></SpectraIcon>
                <div className="pt-1">
                  <h4 className="font-bold text-gray-900 mb-1">Secure & Scalable</h4>
                  <p className="text-sm text-gray-600 leading-snug">Clean, secure code with scalable architecture to grow with your business.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              <SpectraButton href="/contact">LET'S BUILD YOUR WEBSITE</SpectraButton>
              <a href="/portfolio" className="text-black font-bold text-xs md:text-sm hover:underline flex items-center gap-2 uppercase tracking-wide">
                VIEW OUR WORK →
              </a>
            </div>
          </div>

          {/* Right Content / Scrolling Isometric Cards */}
          <div className="flex-1 absolute right-[-40%] lg:right-[-5%] top-[-20%] lg:top-[-10%] w-[160%] lg:w-[80%] h-[120%] opacity-15 lg:opacity-100 lg:relative lg:h-[850px] z-0 pointer-events-none" style={{ perspective: "1000px" }}>
            
            {/* The tilted container faking 3D isometric projection */}
            <div className="absolute inset-0 flex gap-4 lg:gap-6 transform" style={{ 
              transform: "rotate(-12deg) skewX(8deg) scale(1.1) translateX(-5%)", 
              transformOrigin: "center center",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
              maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)"
            }}>
              
              {/* Column 1 - scrolling UP */}
              <div className="w-1/3 mt-[10%]">
                <div className="flex flex-col gap-4 lg:gap-6 animate-scroll-up">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                    <div key={`col1-${i}`} className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.06)] shrink-0 border border-gray-50 overflow-hidden aspect-[16/10]">
                      <img src={["/services/web1.png", "/services/web4.png", "/services/web8.png"][(i - 1) % 3]} alt="Website sample" className="w-full h-full object-cover object-top" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2 - scrolling DOWN */}
              <div className="w-1/3 mt-[-40%]">
                <div className="flex flex-col gap-4 lg:gap-6 animate-scroll-down">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                    <div key={`col2-${i}`} className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.06)] shrink-0 border border-gray-50 overflow-hidden aspect-[16/10]">
                      <img src={["/services/web2.png", "/services/web5.png", "/services/web7.png"][(i - 1) % 3]} alt="Website sample" className="w-full h-full object-cover object-top" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 3 - scrolling UP */}
              <div className="w-1/3 mt-[5%]">
                <div className="flex flex-col gap-4 lg:gap-6 animate-scroll-up">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                    <div key={`col3-${i}`} className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.06)] shrink-0 border border-gray-50 overflow-hidden aspect-[16/10]">
                      <img src={["/services/web3.png", "/services/web6.png", "/services/web9.png"][(i - 1) % 3]} alt="Website sample" className="w-full h-full object-cover object-top" />
                    </div>
                  ))}
                </div>
              </div>

            </div>
            
          </div>
          
        </div>
      </section>

      {/* Mobile Application Section */}
      <section id="mobile-application" className="bg-[#02081f] py-24 relative overflow-hidden text-white border-t border-gray-900">
        <style>{`
          @keyframes carousel {
            0%, 20% { transform: translateX(0%); }
            25%, 45% { transform: translateX(-100%); }
            50%, 70% { transform: translateX(-200%); }
            75%, 95% { transform: translateX(-300%); }
            100% { transform: translateX(0%); }
          }
          .animate-carousel {
            animation: carousel 16s infinite cubic-bezier(0.77, 0, 0.175, 1);
          }
        `}</style>

        <div className="container-page flex flex-col lg:flex-row items-center gap-16 relative z-10">
          {/* Left Content */}
          <div className="flex-1 w-full lg:max-w-xl relative z-20">
            <h2 className="font-black text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tighter uppercase mb-4 text-[#d5ff00]">
              MOBILE<br />APPLICATION
            </h2>
            <div className="text-3xl md:text-4xl text-white mb-6 font-bold tracking-tight">
              Apps Built for How People Move
            </div>
            
            <p className="text-gray-400 text-lg mb-10 max-w-md font-medium">
              We design and develop fast, intuitive mobile applications that turn ideas into seamless digital experiences — from the first tap to long-term growth.
            </p>

            <div className="space-y-6 mb-12">
              {/* Feature 1 */}
              <div className="flex gap-4 items-start">
                <SpectraIcon><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg></SpectraIcon>
                <div className="pt-1">
                  <h4 className="font-bold text-white mb-1">Custom Mobile Apps</h4>
                  <p className="text-sm text-gray-400 leading-snug">Tailored Android and iOS applications built around your business and users.</p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex gap-4 items-start">
                <SpectraIcon><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></SpectraIcon>
                <div className="pt-1">
                  <h4 className="font-bold text-white mb-1">Smooth User Experience</h4>
                  <p className="text-sm text-gray-400 leading-snug">Clean, intuitive interfaces designed to make every interaction feel effortless.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4 items-start">
                <SpectraIcon><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></SpectraIcon>
                <div className="pt-1">
                  <h4 className="font-bold text-white mb-1">Powerful Performance</h4>
                  <p className="text-sm text-gray-400 leading-snug">Fast, reliable apps optimized for real-world devices and demanding users.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4 items-start">
                <SpectraIcon><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path></svg></SpectraIcon>
                <div className="pt-1">
                  <h4 className="font-bold text-white mb-1">Scalable Architecture</h4>
                  <p className="text-sm text-gray-400 leading-snug">Secure and flexible technology that grows with your business.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 items-center mb-12">
              <SpectraButton href="/contact">LET&apos;S BUILD YOUR APP</SpectraButton>
              <a href="/portfolio" className="text-white font-bold text-xs md:text-sm hover:text-[#d5ff00] transition-colors flex items-center gap-2 uppercase tracking-wide">
                EXPLORE OUR WORK →
              </a>
            </div>

            <div className="text-[10px] md:text-xs text-gray-500 font-bold tracking-[0.2em] uppercase border-t border-gray-800 pt-6">
              ANDROID × iOS × EXPERIENCE × PERFORMANCE
            </div>
          </div>

          {/* Right Content / Phone Mockup Carousel */}
          <div className="flex-1 relative w-full h-[600px] flex items-center justify-center lg:justify-end">
            <PhoneMockupBasic />
            {/* Decorative background glow */}
            <div className="absolute top-1/2 right-10 w-64 h-64 bg-[#d5ff00] rounded-full blur-[100px] opacity-20 pointer-events-none z-0 transform -translate-y-1/2"></div>
          </div>
          
        </div>
      </section>

      {/* E-Commerce Section */}
      <section id="e-commerce" className="bg-white py-24 relative overflow-hidden text-black border-t border-gray-100">
        <div className="container-page flex flex-col lg:flex-row items-center gap-16 relative z-10">
          
          {/* Mobile-only Header */}
          <div className="w-full relative z-20 lg:hidden flex flex-col">
            <h2 className="font-black text-4xl md:text-5xl leading-[0.9] tracking-tighter uppercase mb-4 text-[#d5ff00]" style={{ textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000" }}>
              E-COMMERCE
            </h2>
            <div className="text-3xl md:text-4xl text-black font-bold tracking-tight">
              Stores Built to Sell. Designed to Scale.
            </div>
          </div>

          {/* Left Content / Effect */}
          <div className="flex-1 relative w-full flex items-center justify-center lg:justify-start">
            <ProductPageDemo />
          </div>

          {/* Right Content */}
          <div className="flex-1 w-full lg:max-w-xl relative z-20">
            <div className="hidden lg:block">
                <h2 className="font-black text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tighter uppercase mb-4 text-[#d5ff00]" style={{ textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000" }}>
                  E-COMMERCE
                </h2>
                <div className="text-3xl md:text-4xl text-black mb-6 font-bold tracking-tight">
                  Stores Built to Sell. Designed to Scale.
                </div>
            </div>
            
            <p className="text-gray-600 text-lg mb-10 max-w-md font-medium mt-4 lg:mt-0">
              We create high-converting e-commerce experiences that make shopping simple, build trust, and turn visitors into loyal customers.
            </p>

            <div className="space-y-6 mb-12">
              {/* Feature 1 */}
              <div className="flex gap-4 items-start">
                <SpectraIcon><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg></SpectraIcon>
                <div className="pt-1">
                  <h4 className="font-bold text-gray-900 mb-1">Custom Online Stores</h4>
                  <p className="text-sm text-gray-600 leading-snug">Beautiful, flexible storefronts built around your products, brand, and business goals.</p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex gap-4 items-start">
                <SpectraIcon><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></SpectraIcon>
                <div className="pt-1">
                  <h4 className="font-bold text-gray-900 mb-1">Conversion-Focused UX</h4>
                  <p className="text-sm text-gray-600 leading-snug">Smooth product discovery, smart navigation, and frictionless checkout experiences.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4 items-start">
                <SpectraIcon><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg></SpectraIcon>
                <div className="pt-1">
                  <h4 className="font-bold text-gray-900 mb-1">Secure Payments</h4>
                  <p className="text-sm text-gray-600 leading-snug">Reliable payment integration with secure, seamless transactions across devices.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4 items-start">
                <SpectraIcon><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></SpectraIcon>
                <div className="pt-1">
                  <h4 className="font-bold text-gray-900 mb-1">Powerful Store Management</h4>
                  <p className="text-sm text-gray-600 leading-snug">Easy product, order, customer, and inventory management — all in one place.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 items-center mb-12">
              <SpectraButton href="/contact">LET&apos;S BUILD YOUR STORE</SpectraButton>
              <a href="/portfolio" className="text-gray-900 font-bold text-xs md:text-sm hover:text-black transition-colors flex items-center gap-2 uppercase tracking-wide">
                VIEW E-COMMERCE WORK →
              </a>
            </div>

            <div className="text-[10px] md:text-xs text-gray-400 font-bold tracking-[0.2em] uppercase border-t border-gray-100 pt-6">
              SHOP × SELL × CONVERT × GROW
            </div>
          </div>
          
        </div>
      </section>

      {/* SaaS Product Section */}
      <section id="saas-products" className="bg-slate-950 py-24 relative overflow-hidden text-white border-t border-gray-900">
        <div className="container-page flex flex-col lg:flex-row items-center gap-16 relative z-10">
          
          {/* Left Content */}
          <div className="flex-1 w-full lg:max-w-xl relative z-20">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <span className="text-purple-400 font-bold tracking-widest text-xs uppercase">SAAS PRODUCT</span>
            </div>
            
            <h2 className="font-black text-4xl md:text-5xl lg:text-6xl leading-[0.85] tracking-tighter uppercase mb-2 text-white">
              SAAS PRODUCTS<br/>THAT SOLVE REAL
            </h2>
            <div className="font-serif italic text-4xl md:text-5xl lg:text-[4rem] text-[#d5ff00] mb-8 mt-2 pr-4 leading-tight">
              Problems. At Scale.
            </div>
            
            <p className="text-gray-400 text-lg mb-10 max-w-md font-medium">
              We design and build powerful SaaS products that help startups and businesses automate, scale, and stay ahead in a competitive world.
            </p>

            <div className="space-y-6 mb-12">
              {/* Feature 1 */}
              <div className="flex gap-4 items-start">
                <SpectraIcon><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg></SpectraIcon>
                <div className="pt-0.5">
                  <h4 className="font-bold text-white mb-1">Custom SaaS Development</h4>
                  <p className="text-sm text-gray-400 leading-snug">End-to-end SaaS solutions tailored to your product vision and users.</p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex gap-4 items-start">
                <SpectraIcon><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg></SpectraIcon>
                <div className="pt-0.5">
                  <h4 className="font-bold text-white mb-1">Scalable & Secure Architecture</h4>
                  <p className="text-sm text-gray-400 leading-snug">Cloud-native, robust, and future-ready systems built for growth.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4 items-start">
                <SpectraIcon><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></SpectraIcon>
                <div className="pt-0.5">
                  <h4 className="font-bold text-white mb-1">Smart & Intuitive UX</h4>
                  <p className="text-sm text-gray-400 leading-snug">Interfaces that simplify complexity and deliver delightful user experiences.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4 items-start">
                <SpectraIcon><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></SpectraIcon>
                <div className="pt-0.5">
                  <h4 className="font-bold text-white mb-1">Analytics That Drive Growth</h4>
                  <p className="text-sm text-gray-400 leading-snug">Real-time insights and dashboards to help you make better decisions, faster.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 items-center mb-12">
              <SpectraButton href="/contact">LET&apos;S BUILD YOUR SAAS</SpectraButton>
              <a href="/portfolio" className="text-white font-bold text-xs md:text-sm hover:text-[#d5ff00] transition-colors flex items-center gap-2 uppercase tracking-wide">
                VIEW OUR WORK →
              </a>
            </div>

            <div className="text-[10px] md:text-xs text-gray-600 font-bold tracking-[0.2em] uppercase pt-4">
              <span className="text-[#d5ff00]">AUTOMATE</span> × SCALE × ANALYZE × GROW
            </div>
          </div>
          
          {/* Right Content / Mockup */}
          <div className="flex-1 relative w-full h-[600px] lg:h-[700px] flex items-center justify-center lg:justify-end perspective-1000">
            <SaasDashboardMockup />
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"></div>
            <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
          </div>

        </div>
      </section>

      {/* Digital Marketing Section */}
      <section id="digital-marketing" className="bg-white py-24 relative overflow-hidden text-gray-900 border-t border-gray-100">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>

        <div className="container-page flex flex-col lg:flex-row items-center gap-16 relative z-10">
          
          {/* Left Content / Mockup */}
          <div className="flex-1 relative w-full h-[600px] lg:h-[700px] flex items-center justify-center perspective-1000 order-2 lg:order-1">
            <DigitalMarketingMockup />
          </div>

          {/* Right Content */}
          <div className="flex-1 w-full lg:max-w-xl relative z-20 order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-4 bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-full w-fit">
              <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
              <span className="text-indigo-700 font-bold tracking-widest text-xs uppercase">DIGITAL MARKETING</span>
            </div>
            
            <h2 className="font-black text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tighter mb-4 text-gray-900">
              Digital Marketing<br/>That Drives Growth.
            </h2>
            
            <p className="text-gray-500 text-lg mb-8 max-w-md font-medium leading-relaxed">
              <span className="font-bold text-gray-700">Smart strategies. Powerful campaigns. Real results.</span><br/><br/>
              We help brands get noticed, build trust, and convert audiences into loyal customers with data-driven marketing solutions.
            </p>

            <div className="space-y-6 mb-12">
              {/* Feature 1: SEO */}
              <div className="flex gap-4 items-center group cursor-pointer">
                <SpectraIcon><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></SpectraIcon>
                <div className="flex-1 pt-0.5">
                  <h4 className="font-bold text-gray-900 mb-0.5">SEO (Search Engine Optimization)</h4>
                  <p className="text-xs text-gray-500 leading-snug">Improve rankings, increase organic traffic, and grow your visibility.</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all text-indigo-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>
              
              {/* Feature 2: Social Media */}
              <div className="flex gap-4 items-center group cursor-pointer">
                <SpectraIcon><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg></SpectraIcon>
                <div className="flex-1 pt-0.5">
                  <h4 className="font-bold text-gray-900 mb-0.5">Social Media Marketing</h4>
                  <p className="text-xs text-gray-500 leading-snug">Build your brand, engage your audience, and grow across all major platforms.</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all text-indigo-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>

              {/* Feature 3: Google Ads */}
              <div className="flex gap-4 items-center group cursor-pointer">
                <SpectraIcon><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143z"></path></svg></SpectraIcon>
                <div className="flex-1 pt-0.5">
                  <h4 className="font-bold text-gray-900 mb-0.5">Google Ads</h4>
                  <p className="text-xs text-gray-500 leading-snug">Reach high-intent customers and get the best ROI with smart ad campaigns.</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all text-indigo-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>

              {/* Feature 4: Meta Ads */}
              <div className="flex gap-4 items-center group cursor-pointer">
                <SpectraIcon><svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18.66 6h-3.32C13.25 6 12 7.25 12 9.34v.5c0 2.09-1.25 3.34-3.34 3.34H5.34C3.25 13.18 2 14.43 2 16.52v.5C2 19.11 3.25 20.36 5.34 20.36h3.32c2.09 0 3.34-1.25 3.34-3.34v-.5c0-2.09 1.25-3.34 3.34-3.34h3.32c2.09 0 3.34-1.25 3.34-3.34v-.5C22 7.25 20.75 6 18.66 6z"></path></svg></SpectraIcon>
                <div className="flex-1 pt-0.5">
                  <h4 className="font-bold text-gray-900 mb-0.5">Meta Ads (Facebook & Instagram)</h4>
                  <p className="text-xs text-gray-500 leading-snug">Target the right audience and drive more leads and sales with creative ads.</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all text-indigo-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>
              
              {/* Feature 5: Video Editing */}
              <div className="flex gap-4 items-center group cursor-pointer">
                <SpectraIcon><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path></svg></SpectraIcon>
                <div className="flex-1 pt-0.5">
                  <h4 className="font-bold text-gray-900 mb-0.5">Video Editing</h4>
                  <p className="text-xs text-gray-500 leading-snug">Engaging videos that tell your story, boost engagement, and drive results.</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all text-indigo-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center mb-12">
              <SpectraButton href="/contact">LET&apos;S GROW YOUR BRAND</SpectraButton>
              <a href="/portfolio" className="bg-white border border-indigo-200 text-indigo-600 px-6 py-3.5 rounded-lg font-bold text-xs hover:bg-indigo-50 transition-colors flex items-center gap-2 group">
                VIEW OUR WORK <span className="w-5 h-5 rounded-full border border-indigo-200 flex items-center justify-center text-[10px] group-hover:border-indigo-400 transition-colors">↗</span>
              </a>
            </div>

          </div>
          
        </div>
      </section>
    </PageShell>
  );
}
