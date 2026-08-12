"use client";

import { motion } from "framer-motion";
import React from "react";

export function AnimatedLiquidBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden bg-white">
      {/* Base Layer */}
      <motion.div
        animate={{
          scale: [1.02, 1.06, 1.02],
          x: ["-1%", "1%", "-1%"],
          y: ["-1%", "1%", "-1%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-[-5%] w-[110%] h-[110%] bg-[url('/glassy-waves-bg.jpg')] bg-cover bg-center"
      />

      {/* Flowing Liquid Distortion Layer */}
      <motion.div
        animate={{
          scale: [1.08, 1.02, 1.08],
          x: ["1%", "-2%", "1%"],
          y: ["1%", "-1%", "1%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-[-5%] w-[110%] h-[110%] bg-[url('/glassy-waves-bg.jpg')] bg-cover bg-center opacity-50 mix-blend-overlay scale-x-[-1]"
      />

      {/* Sweeping Light Beams */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "200% 200%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-full h-full opacity-40 mix-blend-screen pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 30%), radial-gradient(circle at 80% 20%, rgba(200,230,255,0.6) 0%, transparent 40%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Floating Glass Bubbles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Bubble 1 */}
        <motion.div
          animate={{ y: [0, -100, 0], x: [0, 20, 0], rotate: [0, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] w-12 h-12 rounded-full bg-gradient-to-br from-white/90 to-white/10 backdrop-blur-md border border-white/80 shadow-[0_8px_16px_rgba(0,0,0,0.05),inset_0_4px_8px_rgba(255,255,255,1)]"
        />
        {/* Bubble 2 */}
        <motion.div
          animate={{ y: [0, -150, 0], x: [0, -30, 0], rotate: [0, -360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[25%] left-[25%] w-8 h-8 rounded-full bg-gradient-to-br from-white/90 to-white/10 backdrop-blur-md border border-white/80 shadow-[0_8px_16px_rgba(0,0,0,0.05),inset_0_4px_8px_rgba(255,255,255,1)]"
        />
        {/* Bubble 3 */}
        <motion.div
          animate={{ y: [0, -80, 0], x: [0, 40, 0], rotate: [0, 180, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute bottom-[20%] right-[30%] w-16 h-16 rounded-full bg-gradient-to-br from-white/90 to-white/10 backdrop-blur-md border border-white/80 shadow-[0_12px_24px_rgba(0,0,0,0.05),inset_0_6px_12px_rgba(255,255,255,1)]"
        />
        {/* Bubble 4 */}
        <motion.div
          animate={{ y: [0, -60, 0], x: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 7 }}
          className="absolute bottom-[10%] right-[15%] w-6 h-6 rounded-full bg-gradient-to-br from-white/90 to-white/10 backdrop-blur-md border border-white/80 shadow-[0_4px_8px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,1)]"
        />
        {/* Bubble 5 */}
        <motion.div
          animate={{ y: [0, -120, 0], x: [0, 50, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[10%] right-[40%] w-10 h-10 rounded-full bg-gradient-to-br from-white/90 to-white/10 backdrop-blur-md border border-white/80 shadow-[0_6px_12px_rgba(0,0,0,0.05),inset_0_3px_6px_rgba(255,255,255,1)]"
        />
      </div>

      {/* Seamless blending gradients to remove hard edges between sections */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

      {/* Children Content (Robot, Text, Orbits) */}
      <div className="relative z-20 w-full h-full">{children}</div>
    </div>
  );
}
