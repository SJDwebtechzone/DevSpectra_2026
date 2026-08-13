import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, Code, Database, Zap } from 'lucide-react';

const SpectraIconMini = ({ children }: { children: React.ReactNode }) => (
  <div className="relative shrink-0">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-400 to-orange-500 rounded-full blur-[6px] opacity-40"></div>
    <div className="relative bg-gradient-to-br from-blue-500 via-purple-400 to-orange-500 p-[1.5px] rounded-full shadow-sm">
      <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="mini-icon-stroke-grad" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" stopColor="#3b82f6" />
               <stop offset="50%" stopColor="#a855f7" />
               <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 opacity-[0.5] pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0,50 Q25,20 50,50 T100,50 M0,60 Q25,30 50,60 T100,60" stroke="url(#mini-icon-wave-grad)" fill="none" strokeWidth="0.5" />
             <defs>
               <linearGradient id="mini-icon-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#f97316" />
               </linearGradient>
             </defs>
          </svg>
        </div>
        <div className="relative z-10 text-transparent [&_svg]:!stroke-[url(#mini-icon-stroke-grad)] [&_svg]:!fill-none [&_svg]:w-4 [&_svg]:h-4 md:[&_svg]:w-5 md:[&_svg]:h-5">
          {children}
        </div>
      </div>
    </div>
  </div>
);

const IMAGES = [
  '/services/saas-1.jpg',
  '/services/saas-2.jpg',
  '/services/saas-3.jpg'
];

export default function SaasDashboardMockup() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center p-4 lg:p-8 overflow-visible">
      {/* --- FLOATING ELEMENTS --- */}
      
      {/* Top Left - API */}
      <motion.div 
        initial={{ opacity: 0, y: -20, x: -20 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute top-4 left-4 md:top-12 md:left-12 bg-white rounded-xl shadow-lg p-3 md:p-4 z-20 flex items-center gap-3 border border-gray-100"
      >
        <SpectraIconMini>
          <Code />
        </SpectraIconMini>
        <div>
          <div className="text-[10px] md:text-xs text-gray-500 font-semibold">Integration</div>
          <div className="text-xs md:text-sm font-bold text-gray-800">REST API</div>
        </div>
      </motion.div>

      {/* Top Right - Cloud */}
      <motion.div 
        initial={{ opacity: 0, y: -20, x: 20 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="absolute -top-4 right-4 md:top-4 md:right-16 bg-white rounded-xl shadow-lg p-3 md:p-4 z-20 flex flex-col items-center gap-2 border border-gray-100"
      >
        <div className="flex items-center gap-3 text-gray-800 font-bold text-xs md:text-sm">
          <SpectraIconMini>
            <Cloud />
          </SpectraIconMini>
          <div className="flex flex-col">
            <span>Cloud Native</span>
            <span className="text-[9px] md:text-[10px] text-gray-400 font-medium">99.9% Uptime Guarantee</span>
          </div>
        </div>
      </motion.div>

      {/* Bottom Left - Database */}
      <motion.div 
        initial={{ opacity: 0, y: 20, x: -20 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute bottom-12 left-2 md:bottom-20 md:left-10 bg-white rounded-xl shadow-lg p-3 z-20 flex items-center gap-3 border border-gray-100"
      >
        <SpectraIconMini>
          <Database />
        </SpectraIconMini>
        <div>
          <div className="text-[10px] text-gray-500 font-semibold">Secure Data</div>
          <div className="text-xs font-bold text-gray-800">Encrypted</div>
        </div>
      </motion.div>

      {/* Bottom Right - Speed */}
      <motion.div 
        initial={{ opacity: 0, y: 20, x: 20 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="absolute bottom-4 right-4 md:bottom-12 md:right-12 bg-white rounded-xl shadow-lg p-3 z-20 flex items-center gap-2 border border-gray-100"
      >
        <SpectraIconMini>
          <Zap />
        </SpectraIconMini>
        <span className="text-xs font-bold text-gray-800">Lightning Fast</span>
      </motion.div>

      {/* Container with Perspective */}
      <div className="relative w-full max-w-[800px] aspect-[4/3] perspective-[1500px]">
        
        {/* iPad Pro Base */}
        <motion.div 
          initial={{ opacity: 0, rotateY: 10, rotateX: 10, y: 40 }}
          whileInView={{ opacity: 1, rotateY: 10, rotateX: 10, y: 0 }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-[#e5e7eb] rounded-[2rem] md:rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border-[12px] md:border-[16px] border-[#111]"
          style={{ transformStyle: 'preserve-3d' }}
        >
           {/* Webcam dot */}
           <div className="absolute top-1/2 -right-[6px] md:-right-[8px] -translate-y-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#050505] rounded-full"></div>
           
           {/* Inner screen area */}
           <div className="relative w-full h-full bg-[#0a0a0a] rounded-[1.2rem] md:rounded-[2rem] overflow-hidden flex flex-col font-sans ring-1 ring-white/10">
             
              {/* Carousel container */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img 
                    src={IMAGES[currentIndex]} 
                    alt={`SaaS Dashboard ${currentIndex + 1}`}
                    className="w-full h-full object-cover object-center brightness-110 contrast-105"
                    onError={(e) => {
                      // Fallback for missing images
                      e.currentTarget.src = `https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3`;
                    }}
                  />
                </motion.div>
              </AnimatePresence>
              
           </div>
           
           {/* Home Indicator line (bottom edge in landscape mode) */}
           <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-white/30 rounded-full"></div>

        </motion.div>
      </div>
    </div>
  );
}
