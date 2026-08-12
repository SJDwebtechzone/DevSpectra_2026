import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

export interface ImageItem {
  src: string;
  alt: string;
}

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-[240px] md:w-[280px] h-[500px] md:h-[580px] bg-black rounded-[2.5rem] md:rounded-[3rem] border-[10px] md:border-[12px] border-gray-800 shadow-2xl overflow-hidden flex flex-col">
      {/* Hardware elements */}
      <div className="absolute top-0 inset-x-0 h-6 md:h-7 flex justify-center z-20">
        <div className="w-24 md:w-32 h-5 md:h-6 bg-gray-800 rounded-b-xl md:rounded-b-2xl"></div>
      </div>
      
      {/* Status Bar */}
      <div className="absolute top-0 w-full h-7 md:h-8 flex justify-between items-center px-5 md:px-6 text-white text-[9px] md:text-[10px] font-bold z-30 pt-1">
        <span>9:41</span>
        <div className="flex gap-1 md:gap-1.5 items-center">
          <svg className="w-2.5 h-2.5 md:w-3 md:h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path></svg>
          <svg className="w-2.5 h-2.5 md:w-3 md:h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M21 4h-2v16h2V4zm-4 4h-2v12h2V8zm-4 4h-2v8h2v-8zm-4 4H7v4h2v-4z"></path></svg>
        </div>
      </div>

      {/* Screen Content */}
      <div className="w-full h-full relative bg-gray-900 overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-2 inset-x-0 h-1 flex justify-center z-20">
        <div className="w-20 md:w-24 h-1 bg-white rounded-full opacity-50"></div>
      </div>
    </div>
  );
}

export function PhoneCarousel({ images }: { images: ImageItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  // Helper to determine position relative to center
  const getOffset = (index: number) => {
    const diff = (index - currentIndex + images.length) % images.length;
    // 0 = center
    // 1 = right
    // length - 1 = left
    if (diff === 0) return 0;
    if (diff === 1) return 1;
    if (diff === images.length - 1) return -1;
    return 2; // hidden/background
  };

  return (
    <div className="relative w-full max-w-[800px] h-[600px] flex items-center justify-center overflow-visible group">
      
      {/* Render each phone */}
      <div className="relative w-full h-full flex items-center justify-center">
        {images.map((image, index) => {
          const offset = getOffset(index);
          const isCenter = offset === 0;
          const isLeft = offset === -1;
          const isRight = offset === 1;
          const isHidden = Math.abs(offset) > 1;

          return (
            <motion.div
              key={image.src}
              className="absolute"
              initial={false}
              animate={{
                x: isCenter ? "0%" : isLeft ? "-65%" : isRight ? "65%" : "0%",
                scale: isCenter ? 1 : isHidden ? 0.7 : 0.85,
                opacity: isCenter ? 1 : isHidden ? 0 : 0.6,
                zIndex: isCenter ? 30 : isHidden ? 10 : 20,
              }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              style={{
                pointerEvents: isCenter ? "auto" : "none",
              }}
            >
              <PhoneFrame src={image.src} alt={image.alt} />
            </motion.div>
          );
        })}
      </div>

      {/* Controls Overlay */}
      <div className="absolute inset-x-0 bottom-4 md:bottom-8 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity z-40">
        <div className="bg-black/80 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-6 shadow-xl border border-white/10">
          <button onClick={prev} className="text-white hover:text-gray-300 transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => setIsPlaying(!isPlaying)} className="text-[#d5ff00] hover:text-white transition-colors">
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button onClick={next} className="text-white hover:text-gray-300 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
