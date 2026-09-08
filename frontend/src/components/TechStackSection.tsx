import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TechItem {
  name: string;
  icon: string;
  description?: string;
  color?: string;
}

const frontendStack: TechItem[] = [
  { name: "HTML5", icon: "/home/tech/html5.svg" },
  { name: "CSS3", icon: "/home/tech/css3.svg" },
  { name: "Tailwind", icon: "/home/tech/tailwind.svg" },
  { name: "Bootstrap", icon: "/home/tech/bootstrap.svg" },
  { name: "TypeScript", icon: "/home/tech/typescript.svg" },
  { name: "React.js", icon: "/home/tech/react.svg" },
  { name: "JavaScript", icon: "/home/tech/javascript.svg" },
  { name: "Next.js", icon: "/home/tech/nextjs.svg" },
];

const backendStack: TechItem[] = [
  { name: "Node.js", icon: "/home/tech/nodejs.svg", color: "#539E43", description: "V8 JavaScript Runtime Engine" },
  { name: "Express.js", icon: "/home/tech/express.svg", color: "#FFFFFF", description: "Minimalist Web Framework" },
  { name: "Next.js", icon: "/home/tech/nextjs.svg", color: "#FFFFFF", description: "Full-Stack React Framework" },
  { name: "Nest.js", icon: "/home/tech/nestjs.svg", color: "#E0234E", description: "Progressive Enterprise Node.js Architecture" },
];

const databaseStack: TechItem[] = [
  { name: "MongoDB", icon: "/home/tech/mongodb.svg", description: "Document NoSQL Database" },
  { name: "PostgreSQL", icon: "/home/tech/postgresql.svg", description: "Advanced Relational SQL" },
  { name: "phpMyAdmin", icon: "/home/tech/phpmyadmin.svg", description: "MySQL Administration" },
];

const cloudStack: TechItem[] = [
  { name: "AWS", icon: "/home/tech/aws.svg", color: "#FF9900", description: "Amazon Web Services Cloud Infrastructure" },
  { name: "Azure", icon: "/home/tech/azure.svg", color: "#0078D4", description: "Microsoft Azure Enterprise Cloud" },
  { name: "Google Cloud", icon: "/home/tech/gcp.svg", color: "#4285F4", description: "Google Cloud Platform Services" },
];

function FrontendGroup() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* 1. Individual Minimal Frontend Tech Cards (Like Database Section) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-8 gap-2 sm:gap-3 md:gap-3.5 w-full max-w-5xl justify-items-center"
      >
        {frontendStack.map((tech) => (
          <div
            key={tech.name}
            className="group flex flex-col items-center gap-1.5 rounded-2xl border border-[#1E294B] bg-[#070D21]/95 px-2.5 py-2.5 sm:px-3 sm:py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/60 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] w-full min-w-0"
          >
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0B132B]/90 p-1.5 sm:p-2 shadow-md group-hover:border-indigo-400/50 group-hover:bg-[#111c3d]">
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <span className="text-[10px] sm:text-[11px] font-semibold text-slate-200 group-hover:text-white transition-colors truncate text-center max-w-full">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>

      {/* 8-Branch Fork Connector Connecting Cards to FrontEnd Badge */}
      <div className="w-full max-w-5xl h-8 flex items-center justify-center">
        <svg viewBox="0 0 800 32" className="w-full h-full overflow-visible" preserveAspectRatio="none">
          {/* 8 Vertical drops coming down from each of the 8 cards */}
          <line x1="50" y1="0" x2="50" y2="16" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
          <line x1="150" y1="0" x2="150" y2="16" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
          <line x1="250" y1="0" x2="250" y2="16" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
          <line x1="350" y1="0" x2="350" y2="16" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
          <line x1="450" y1="0" x2="450" y2="16" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
          <line x1="550" y1="0" x2="550" y2="16" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
          <line x1="650" y1="0" x2="650" y2="16" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
          <line x1="750" y1="0" x2="750" y2="16" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />

          {/* Horizontal cross-bar */}
          <line x1="50" y1="16" x2="750" y2="16" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />

          {/* Center stem connecting down to the FrontEnd Badge */}
          <line x1="400" y1="16" x2="400" y2="32" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
        </svg>
      </div>

      {/* 2. FrontEnd Badge Node */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-2.5 rounded-xl border border-indigo-500/50 bg-gradient-to-r from-[#0E1738] to-[#121B40] px-6 py-2 shadow-[0_0_20px_rgba(99,102,241,0.25)]"
      >
        <img src="/home/tech/icon-frontend.svg" alt="Frontend" className="h-4.5 w-4.5 object-contain text-indigo-400" />
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-200">FrontEnd</span>
      </motion.div>

      {/* Dotted connector to Stack */}
      <svg width="2" height="28" className="overflow-visible shrink-0 block">
        <line x1="1" y1="0" x2="1" y2="28" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function BackendCard({
  backendIndex,
  setBackendIndex,
}: {
  backendIndex: number;
  setBackendIndex: (i: number) => void;
}) {
  return (
    <div className="flex items-center justify-end w-full">
      {/* 2x2 Backend Tech Box (Reduced compact App Tiles) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative rounded-2xl border border-[#1E294B] bg-[#070D21]/95 p-2.5 sm:p-3 shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-md hover:border-indigo-500/40 transition-all duration-300"
      >
        <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
          {backendStack.map((tech, idx) => {
            const isActive = backendIndex === idx;
            return (
              <div
                key={tech.name}
                onClick={() => setBackendIndex(idx)}
                className={`cursor-pointer relative flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-xl overflow-hidden shadow-md transition-all duration-300 ${
                  isActive
                    ? "ring-2 ring-indigo-400 ring-offset-2 ring-offset-[#070D21] scale-[1.06] shadow-[0_0_18px_rgba(99,102,241,0.4)]"
                    : "hover:scale-[1.04] opacity-90 hover:opacity-100 hover:shadow-[0_0_12px_rgba(255,255,255,0.12)]"
                }`}
                title={tech.name}
              >
                <img src={tech.icon} alt={tech.name} className="h-full w-full object-cover" />
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Connector between Backend Tech Box and Backend Badge */}
      <svg height="2" className="w-8 xl:w-14 overflow-visible shrink-0 block">
        <line x1="0" y1="1" x2="100%" y2="1" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
      </svg>

      {/* Backend Badge Node */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex shrink-0 items-center gap-2 rounded-xl border border-indigo-500/50 bg-gradient-to-r from-[#0E1738] to-[#121B40] px-4 py-2 shadow-[0_0_20px_rgba(99,102,241,0.25)]"
      >
        <img src="/home/tech/icon-backend.svg" alt="Backend" className="h-4 w-4 object-contain text-indigo-400" />
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-200">Backend</span>
      </motion.div>

      {/* Connector between Backend Badge and Stack Node */}
      <svg height="2" className="w-8 xl:w-14 overflow-visible shrink-0 block">
        <line x1="0" y1="1" x2="100%" y2="1" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function CloudCard({
  cloudIndex,
}: {
  cloudIndex: number;
}) {
  const currentCloud = cloudStack[cloudIndex];

  return (
    <div className="flex items-center justify-start w-full">
      {/* Connector between Stack Node and Cloud Badge */}
      <svg height="2" className="w-8 xl:w-14 overflow-visible shrink-0 block">
        <line x1="0" y1="1" x2="100%" y2="1" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
      </svg>

      {/* Cloud Badge Node */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex shrink-0 items-center gap-2 rounded-xl border border-indigo-500/50 bg-gradient-to-r from-[#0E1738] to-[#121B40] px-4 py-2 shadow-[0_0_20px_rgba(99,102,241,0.25)]"
      >
        <img src="/home/tech/icon-cloud.svg" alt="Cloud" className="h-4 w-4 object-contain text-indigo-400" />
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-200">Cloud</span>
      </motion.div>

      {/* Connector between Cloud Badge and Cloud Box */}
      <svg height="2" className="w-8 xl:w-14 overflow-visible shrink-0 block">
        <line x1="0" y1="1" x2="100%" y2="1" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
      </svg>

      {/* Clean White Rounded Box with Auto-changing Logo */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative flex h-16 w-16 sm:h-18 sm:w-18 shrink-0 items-center justify-center rounded-2xl bg-white p-3 shadow-[0_10px_35px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCloud.name}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.35 }}
            className="flex h-full w-full items-center justify-center"
          >
            <img
              src={currentCloud.icon}
              alt={currentCloud.name}
              className="h-full w-full object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function DatabaseGroup({
  databaseIndex,
  setDatabaseIndex,
}: {
  databaseIndex: number;
  setDatabaseIndex: (i: number) => void;
}) {
  // Rotate the 3 database cards dynamically based on databaseIndex so positions auto-change smoothly
  const displayedStack = [
    databaseStack[databaseIndex % 3],
    databaseStack[(databaseIndex + 1) % 3],
    databaseStack[(databaseIndex + 2) % 3],
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Connector from Stack Node to Database Badge */}
      <svg width="2" height="28" className="overflow-visible shrink-0 block">
        <line x1="1" y1="0" x2="1" y2="28" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
      </svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-2 rounded-xl border border-indigo-500/50 bg-gradient-to-r from-[#0E1738] to-[#121B40] px-5 py-1.5 shadow-[0_0_20px_rgba(99,102,241,0.25)]"
      >
        <img src="/home/tech/icon-database.svg" alt="Database" className="h-4 w-4 object-contain text-indigo-400" />
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-200">Database</span>
      </motion.div>

      {/* 3 branch seamless SVG fork connector */}
      <div className="w-[340px] sm:w-[390px] h-8 flex items-center justify-center">
        <svg viewBox="0 0 390 32" className="w-full h-full overflow-visible" preserveAspectRatio="none">
          {/* Top vertical stem starting right at the edge of Database badge */}
          <line x1="195" y1="0" x2="195" y2="16" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
          {/* Horizontal cross-bar */}
          <line x1="62" y1="16" x2="328" y2="16" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
          {/* Left drop connecting to left card */}
          <line x1="62" y1="16" x2="62" y2="32" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
          {/* Middle drop connecting to center card */}
          <line x1="195" y1="16" x2="195" y2="32" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
          {/* Right drop connecting to right card */}
          <line x1="328" y1="16" x2="328" y2="32" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
        </svg>
      </div>

      {/* Auto-shifting Database Cards with smooth layout animation */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 min-h-[90px]">
        {displayedStack.map((tech, posIdx) => (
          <motion.div
            key={tech.name}
            layout
            transition={{
              layout: { type: "spring", stiffness: 300, damping: 26 },
            }}
            onClick={() => {
              const origIdx = databaseStack.findIndex((d) => d.name === tech.name);
              if (origIdx !== -1) setDatabaseIndex(origIdx);
            }}
            className={`cursor-pointer group flex flex-col items-center gap-1.5 rounded-2xl border bg-[#070D21]/95 px-5 py-3 backdrop-blur-md transition-all duration-300 min-w-[105px] ${
              posIdx === 1
                ? "border-indigo-400/80 shadow-[0_0_25px_rgba(99,102,241,0.4)] scale-[1.05]"
                : "border-[#1E294B] shadow-[0_12px_40px_rgba(0,0,0,0.5)] hover:border-indigo-400/50"
            }`}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0B132B]/90 p-2 shadow-md group-hover:border-indigo-400/50 group-hover:bg-[#111c3d]">
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


function DesktopArchitecture({
  backendIndex,
  setBackendIndex,
  cloudIndex,
  databaseIndex,
  setDatabaseIndex,
}: {
  backendIndex: number;
  setBackendIndex: (i: number) => void;
  cloudIndex: number;
  databaseIndex: number;
  setDatabaseIndex: (i: number) => void;
}) {
  return (
    <div className="hidden lg:flex flex-col items-center w-full">
      {/* TOP: Frontend Tree */}
      <FrontendGroup />

      {/* CENTER ROW: Symmetrical 3-column Grid with centered Stack Hub */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-stretch w-full max-w-5xl mx-auto">
        {/* Left Branch */}
        <BackendCard backendIndex={backendIndex} setBackendIndex={setBackendIndex} />

        {/* Center Node: STACK Core Hub */}
        <div className="flex flex-col items-center justify-center min-h-0">
          <div className="flex-1 w-[2px] min-h-[16px] bg-[repeating-linear-gradient(to_bottom,#818cf8_0,#818cf8_4px,transparent_4px,transparent_8px)]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center justify-center rounded-2xl border-2 border-indigo-400/80 bg-gradient-to-b from-[#182352] to-[#0A1028] px-8 py-5 shadow-[0_0_45px_rgba(99,102,241,0.4)] backdrop-blur-lg ring-2 ring-indigo-400/20 shrink-0 my-2"
          >
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]">
              Stack
            </span>
            <span className="text-[10px] font-semibold tracking-widest text-indigo-300 uppercase mt-0.5 whitespace-nowrap">
              Core Hub
            </span>
          </motion.div>

          <div className="flex-1 w-[2px] min-h-[16px] bg-[repeating-linear-gradient(to_bottom,#818cf8_0,#818cf8_4px,transparent_4px,transparent_8px)]" />
        </div>

        {/* Right Branch */}
        <CloudCard cloudIndex={cloudIndex} />
      </div>

      {/* BOTTOM: Database Tree with Auto-changing position */}
      <DatabaseGroup databaseIndex={databaseIndex} setDatabaseIndex={setDatabaseIndex} />
    </div>
  );
}


function MobileArchitecture({
  backendIndex,
  setBackendIndex,
  cloudIndex,
  databaseIndex,
  setDatabaseIndex,
}: {
  backendIndex: number;
  setBackendIndex: (i: number) => void;
  cloudIndex: number;
  databaseIndex: number;
  setDatabaseIndex: (i: number) => void;
}) {
  const currentCloud = cloudStack[cloudIndex];
  const displayedDbStack = [
    databaseStack[databaseIndex % 3],
    databaseStack[(databaseIndex + 1) % 3],
    databaseStack[(databaseIndex + 2) % 3],
  ];

  return (
    <div className="flex lg:hidden flex-col items-center gap-4 w-full">
      <div className="w-full rounded-2xl border border-[#1E294B] bg-[#070D21]/95 p-4">
        <div className="flex items-center justify-center gap-2 mb-3">
          <img src="/home/tech/icon-frontend.svg" alt="Frontend" className="h-4 w-4 object-contain text-indigo-400" />
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-200">FrontEnd</span>
        </div>
        <div className="grid grid-cols-4 gap-2 sm:gap-3 justify-items-center">
          {frontendStack.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center gap-1.5">
              <div className="flex h-13 w-13 items-center justify-center rounded-xl border border-white/10 bg-[#0B132B] p-2 shadow-md">
                <img src={tech.icon} alt={tech.name} className="h-7 w-7 object-contain" />
              </div>
              <span className="text-[11px] font-medium text-slate-300 text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <svg width="2" height="24" className="overflow-visible shrink-0 block">
        <line x1="1" y1="0" x2="1" y2="24" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
      </svg>

      <div className="flex flex-col items-center justify-center rounded-xl border-2 border-indigo-400/80 bg-gradient-to-b from-[#182352] to-[#0A1028] px-7 py-3 shadow-[0_0_30px_rgba(99,102,241,0.4)]">
        <span className="text-lg font-black tracking-tight text-white uppercase">Stack</span>
        <span className="text-[9px] font-semibold tracking-widest text-indigo-300 uppercase">Core Hub</span>
      </div>

      <svg width="2" height="24" className="overflow-visible shrink-0 block">
        <line x1="1" y1="0" x2="1" y2="24" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
      </svg>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        <div className="rounded-2xl border border-[#1E294B] bg-[#070D21]/95 p-4">
          <div className="flex items-center justify-center gap-2 mb-3">
            <img src="/home/tech/icon-backend.svg" alt="Backend" className="h-4 w-4 object-contain text-indigo-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-200">Backend</span>
          </div>
          <div className="grid grid-cols-2 gap-2.5 justify-items-center">
            {backendStack.map((tech, idx) => (
              <div
                key={tech.name}
                onClick={() => setBackendIndex(idx)}
                className={`cursor-pointer flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-xl overflow-hidden shadow-md transition-all ${
                  backendIndex === idx ? "ring-2 ring-indigo-400 ring-offset-2 ring-offset-[#070D21] scale-105" : ""
                }`}
                title={tech.name}
              >
                <img src={tech.icon} alt={tech.name} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[#1E294B] bg-[#070D21]/95 p-4 flex flex-col items-center justify-between">
          <div className="flex items-center justify-center gap-2 mb-2">
            <img src="/home/tech/icon-cloud.svg" alt="Cloud" className="h-4 w-4 object-contain text-indigo-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-200">Cloud</span>
          </div>
          <div className="flex flex-col items-center py-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-sky-400/40 bg-[#0B132B] p-2">
              <img src={currentCloud.icon} alt={currentCloud.name} className="h-full w-full object-contain" />
            </div>
            <span className="text-xs font-bold text-white mt-1.5">{currentCloud.name}</span>
          </div>
        </div>
      </div>

      <div className="h-6 w-0 border-l-2 border-dashed border-indigo-400/70" />

      <div className="w-full rounded-2xl border border-[#1E294B] bg-[#070D21]/95 p-4">
        <div className="flex items-center justify-center gap-2 mb-3">
          <img src="/home/tech/icon-database.svg" alt="Database" className="h-4 w-4 object-contain text-indigo-400" />
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-200">Database</span>
        </div>
        <div className="grid grid-cols-3 gap-2 justify-items-center">
          {displayedDbStack.map((tech) => (
            <motion.div
              key={tech.name}
              layout
              transition={{ layout: { type: "spring", stiffness: 300, damping: 26 } }}
              onClick={() => {
                const origIdx = databaseStack.findIndex((d) => d.name === tech.name);
                if (origIdx !== -1) setDatabaseIndex(origIdx);
              }}
              className="flex flex-col items-center gap-1 cursor-pointer"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-[#0B132B] p-2">
                <img src={tech.icon} alt={tech.name} className="h-full w-full object-contain" />
              </div>
              <span className="text-[10px] text-slate-300 text-center">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}



export function TechStackSection() {
  const [cloudIndex, setCloudIndex] = useState(0);
  const [backendIndex, setBackendIndex] = useState(0);
  const [databaseIndex, setDatabaseIndex] = useState(0);

  // Auto-change Cloud tech every 3 seconds
  useEffect(() => {
    const cloudTimer = setInterval(() => {
      setCloudIndex((prev) => (prev + 1) % cloudStack.length);
    }, 3000);
    return () => clearInterval(cloudTimer);
  }, []);

  // Auto-change Backend highlighted tech every 2.5 seconds
  useEffect(() => {
    const backendTimer = setInterval(() => {
      setBackendIndex((prev) => (prev + 1) % backendStack.length);
    }, 2500);
    return () => clearInterval(backendTimer);
  }, []);

  // Auto-change Database position every 2.5 seconds
  useEffect(() => {
    const databaseTimer = setInterval(() => {
      setDatabaseIndex((prev) => (prev + 1) % databaseStack.length);
    }, 2500);
    return () => clearInterval(databaseTimer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#060C20] py-24 px-4 sm:px-6 lg:px-8 text-white selection:bg-indigo-500 selection:text-white">
      {/* Precision Navy Dot-Grid Pattern matching design */}
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(64,115,214,0.38)_1.5px,transparent_1.5px)] [background-size:22px_22px]" />

      {/* Soft Ambient Center Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(15,28,70,0.55),transparent_80%)]" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[900px] rounded-full bg-indigo-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 h-[400px] w-[750px] rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <DesktopArchitecture
          backendIndex={backendIndex}
          setBackendIndex={setBackendIndex}
          cloudIndex={cloudIndex}
          databaseIndex={databaseIndex}
          setDatabaseIndex={setDatabaseIndex}
        />

        <MobileArchitecture
          backendIndex={backendIndex}
          setBackendIndex={setBackendIndex}
          cloudIndex={cloudIndex}
          databaseIndex={databaseIndex}
          setDatabaseIndex={setDatabaseIndex}
        />
      </div>
    </section>
  );
}
