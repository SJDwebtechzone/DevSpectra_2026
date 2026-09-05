import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IridescentWaveBackground } from './ui/iridescent-wave-background';

const SpectraButton = ({ children, href }) => {
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

export default function HeroSection() {
  const [activeDevice, setActiveDevice] = useState('laptop');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDevice(prev => prev === 'laptop' ? 'mobile' : 'laptop');
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#fafcff] -mt-24 pt-36 pb-16 lg:pt-40 lg:pb-24">
      {/* Background Noise Texture */}
      <div 
        className="absolute top-0 left-0 bottom-0 w-[60%] z-0 pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          maskImage: "linear-gradient(to right, black 40%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, black 40%, transparent 100%)",
        }}
      ></div>
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-80"
        style={{
          maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
        }}
      >
        <IridescentWaveBackground 
          showText={false} 
          speed={0.35} 
          intensity={1.2}
          className="absolute inset-0 w-full h-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          
          {/* Left Column: Content */}
          <div className="w-full lg:w-[55%] flex flex-col items-start text-left">
            
            {/* Pill Badge - Spectra Style */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative inline-flex items-center group mb-10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-400 to-orange-500 rounded-full blur-[6px] opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-r from-blue-500 via-purple-400 to-orange-500 p-[1.5px] rounded-full shadow-sm">
                <div className="bg-white rounded-full px-5 py-2 flex items-center relative overflow-hidden">
                  {/* Subtle Wavy Background Pattern inside the pill */}
                  <div className="absolute inset-0 opacity-[0.3] pointer-events-none">
                    <svg width="100%" height="100%" viewBox="0 0 400 100" preserveAspectRatio="none">
                       <path d="M0,50 Q100,0 200,50 T400,50 M0,60 Q100,20 200,60 T400,60 M0,40 Q100,-10 200,40 T400,40 M0,70 Q100,30 200,70 T400,70" stroke="url(#wave-grad-pill)" fill="none" strokeWidth="0.5" />
                       <defs>
                         <linearGradient id="wave-grad-pill" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="50%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#f97316" />
                         </linearGradient>
                       </defs>
                    </svg>
                  </div>
                  <span className="relative z-10 text-[0.7rem] sm:text-[0.75rem] font-bold tracking-[0.2em] text-gray-900 uppercase">
                    Your Ideas. Our Code. Real Impact.
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="relative mb-10 mt-6"
            >
              {/* Cursive overlapping text */}
              <div 
                className="absolute text-blue-600 z-10 -top-10 left-0 md:-top-12 md:-left-4 text-5xl md:text-7xl lowercase drop-shadow-sm" 
                style={{ 
                  fontFamily: "'Caveat', 'Dancing Script', 'Brush Script MT', cursive",
                  transform: "rotate(-5deg)",
                }}
              >
                We build digital
              </div>
              
              {/* Main uppercase text */}
              <h1
                className="text-[3.5rem] sm:text-[5rem] lg:text-[5.5rem] font-black leading-[0.85] tracking-tighter text-gray-950 flex flex-col uppercase relative z-0 mt-8"
              >
                <span className="text-[#7c2d12]">Experiences</span>
                <span className="text-[#7c2d12]">That Drive</span>
                <span
                  className="text-transparent bg-clip-text pb-2"
                  style={{
                    backgroundImage: "linear-gradient(to right, #7928CA, #0070F3, #00DFD8, #10B981, #F5A623, #FF4B4B)"
                  }}
                >
                  Results.
                </span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-lg text-gray-900 font-medium mb-10 max-w-lg leading-relaxed"
            >
              DevSpectra is a creative digital agency crafting stunning websites, powerful web applications, and growth-driven digital solutions for modern businesses.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 mb-16"
            >
              <SpectraButton href="/portfolio">Explore Our Work</SpectraButton>
            </motion.div>



          </div>

          {/* Right Column: 3D Illustration via CSS/Framer */}
          <div className="w-full lg:w-[45%] h-[420px] sm:h-[500px] lg:h-[600px] relative flex justify-center items-start mt-8 lg:mt-20">
            

            
            {/* Animated Device Mockup Switcher */}
            <AnimatePresence mode="wait">
              {activeDevice === 'laptop' ? (
                <motion.div 
                  key="laptop"
                  initial={{ opacity: 0, y: 40, rotateX: 15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -20, rotateX: -10, transition: { duration: 0.4 } }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="absolute w-[95%] max-w-[500px] z-20 flex flex-col items-center"
                  style={{ perspective: "1000px" }}
                >
                  {/* Laptop Lid/Screen */}
                  <div className="w-full aspect-[16/10] bg-[#1a1a1a] rounded-t-[1.5rem] rounded-b-[4px] border-[6px] md:border-[8px] border-[#1a1a1a] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] relative flex flex-col p-1.5 md:p-2 overflow-hidden ring-1 ring-white/10">
                    {/* Camera Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 md:w-20 h-4 bg-[#1a1a1a] rounded-b-xl z-30 flex justify-center items-center">
                       <div className="w-1.5 h-1.5 rounded-full bg-blue-900 shadow-[0_0_4px_#3b82f6]"></div>
                    </div>
                    
                    <div className="flex-1 bg-[#050505] rounded-sm md:rounded-md overflow-hidden relative border border-white/5 shadow-inner">
                       <img src="/home1.png" alt="DevSpectra website view" className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                  </div>
                  
                  {/* Laptop Base */}
                  <div className="w-[114%] h-4 md:h-5 bg-gradient-to-b from-[#e5e5e5] to-[#a3a3a3] rounded-b-xl rounded-t-[2px] relative shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border-t border-white/40">
                     {/* Trackpad indentation */}
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-2 md:h-2.5 bg-[#d4d4d4] rounded-b-md shadow-inner"></div>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="mobile"
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9, transition: { duration: 0.4 } }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="absolute w-[200px] md:w-[240px] h-[400px] md:h-[480px] -mt-16 md:-mt-24 z-20 flex flex-col items-center"
                >
                  {/* Mobile Body */}
                  <div className="w-full h-full rounded-[44px] md:rounded-[52px] border-[10px] md:border-[14px] border-[#111] overflow-hidden relative shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] bg-black ring-1 ring-white/10">
                    {/* Hardware Notch / Dynamic Island */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 md:w-32 h-7 md:h-8 bg-[#111] rounded-b-2xl z-30 flex items-center justify-end px-3">
                      <div className="w-3 h-3 rounded-full bg-white/10" />
                    </div>

                    {/* Fake Status Bar */}
                    <div className="absolute top-2 inset-x-6 flex justify-between items-center z-20 text-[10px] font-semibold text-white/80">
                      <span>9:41</span>
                      <div className="flex gap-1 items-center">
                        <div className="w-5 h-2.5 border border-current rounded-[3px] p-[1px] opacity-80">
                          <div className="w-[75%] h-full bg-current rounded-sm"></div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 overflow-hidden bg-[#050505]">
                       <img src="/home2.png" alt="DevSpectra mobile app view" className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>


          </div>

        </div>
        
        {/* Full Length Stats Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="w-full mt-4 lg:mt-0 bg-white/80 backdrop-blur-md border border-white rounded-2xl sm:rounded-3xl p-3 sm:p-6 lg:p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] flex flex-row items-center justify-between gap-1 sm:gap-4 relative z-30"
        >
          {/* Stat 1 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-4 text-center sm:text-left flex-1 justify-center">
            <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 rounded-full p-[1.5px] bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 shrink-0 shadow-sm">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <svg className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-2xl lg:text-3xl font-black text-gray-900 leading-none">1+</div>
              <div className="text-[0.55rem] sm:text-[0.65rem] lg:text-xs text-gray-500 font-bold uppercase tracking-wider mt-0.5 sm:mt-1 whitespace-nowrap">Years Experience</div>
            </div>
          </div>
          
          <div className="w-px h-8 sm:h-12 bg-gray-200 shrink-0"></div>
          
          {/* Stat 2 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-4 text-center sm:text-left flex-1 justify-center">
            <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 rounded-full p-[1.5px] bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 shrink-0 shadow-sm">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <svg className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-2xl lg:text-3xl font-black text-gray-900 leading-none">25+</div>
              <div className="text-[0.55rem] sm:text-[0.65rem] lg:text-xs text-gray-500 font-bold uppercase tracking-wider mt-0.5 sm:mt-1 whitespace-nowrap">Projects Delivered</div>
            </div>
          </div>

          <div className="w-px h-8 sm:h-12 bg-gray-200 shrink-0"></div>

          {/* Stat 3 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-4 text-center sm:text-left flex-1 justify-center">
            <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 rounded-full p-[1.5px] bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 shrink-0 shadow-sm">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <svg className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-2xl lg:text-3xl font-black text-gray-900 leading-none">15+</div>
              <div className="text-[0.55rem] sm:text-[0.65rem] lg:text-xs text-gray-500 font-bold uppercase tracking-wider mt-0.5 sm:mt-1 whitespace-nowrap">Happy Clients</div>
            </div>
          </div>

          <div className="w-px h-8 sm:h-12 bg-gray-200 shrink-0"></div>

          {/* Stat 4 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-4 text-center sm:text-left flex-1 justify-center">
            <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 rounded-full p-[1.5px] bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 shrink-0 shadow-sm">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <svg className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-2xl lg:text-3xl font-black text-gray-900 leading-none">99%</div>
              <div className="text-[0.55rem] sm:text-[0.65rem] lg:text-xs text-gray-500 font-bold uppercase tracking-wider mt-0.5 sm:mt-1 whitespace-nowrap">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
