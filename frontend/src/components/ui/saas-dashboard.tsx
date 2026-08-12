import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, BarChart3, Users, FolderOpen, CreditCard, Settings, Search, Bell, ChevronDown, Cloud } from 'lucide-react';

export default function SaasDashboardMockup() {
  return (
    <div className="relative w-full h-full min-h-[600px] flex items-center justify-center p-4">
      {/* Container with Perspective */}
      <div className="relative w-full max-w-[850px] aspect-[16/10] perspective-[1400px]">
           {/* Glowing Glass Platform Base */}
           <motion.div 
             initial={{ opacity: 0, rotateY: 25, rotateX: 50, rotateZ: -10, y: 100 }}
             whileInView={{ opacity: 1, rotateY: 35, rotateX: 45, rotateZ: -15, y: 30 }}
             transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
             viewport={{ once: true }}
             className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%] bg-gradient-to-br from-[#d5ff00]/20 to-transparent rounded-[3rem] border-2 border-[#d5ff00]/30 shadow-[0_0_100px_rgba(213,255,0,0.15)] backdrop-blur-md"
             style={{ transformStyle: 'preserve-3d', transform: 'translateZ(-50px)' }}
           ></motion.div>

        {/* Main Dashboard Window Base (The thick glossy base) */}
        <motion.div 
          initial={{ opacity: 0, rotateY: 25, rotateX: 50, rotateZ: -10, y: 50 }}
          whileInView={{ opacity: 1, rotateY: 35, rotateX: 45, rotateZ: -15, y: 0 }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-gradient-to-br from-slate-900 to-black rounded-[2.5rem] shadow-[0_40px_100px_-10px_rgba(0,0,0,1),-20px_20px_40px_rgba(213,255,0,0.1)] border-4 border-gray-800"
          style={{ transformStyle: 'preserve-3d' }}
        >
           {/* The glossy physical lip of the screen */}
           <div className="absolute inset-0 rounded-[2.2rem] bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-50 shadow-[inset_0_0_20px_rgba(0,0,0,1)]"></div>
           
           {/* The actual screen content area */}
           <div className="absolute inset-[12px] bg-[#0a0d16] rounded-[1.8rem] overflow-hidden flex flex-col md:flex-row ring-1 ring-black">
             
              {/* Sidebar */}
              <div className="hidden md:flex w-1/4 min-w-[200px] bg-[#0d111c] border-r border-white/5 p-6 flex-col relative z-10">
                <div className="text-white font-black text-2xl mb-12 tracking-tight flex items-center gap-1">
                  ANIMOZA<span className="text-indigo-500 text-3xl leading-none">*</span>
                </div>

                <nav className="space-y-2.5 flex-1">
                  <a href="#" className="flex items-center gap-3 px-4 py-3 bg-indigo-600/10 text-indigo-400 rounded-xl text-sm font-semibold transition-colors border border-indigo-500/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                    <LayoutDashboard className="w-4 h-4" /> Dashboard
                  </a>
                  {[
                    { icon: BarChart3, label: 'Analytics' },
                    { icon: Users, label: 'Users' },
                    { icon: FolderOpen, label: 'Projects' },
                    { icon: CreditCard, label: 'Billing' },
                    { icon: Settings, label: 'Settings' },
                  ].map((item, i) => (
                    <a key={i} href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium transition-colors">
                      <item.icon className="w-4 h-4" /> {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 p-6 lg:p-8 flex flex-col relative bg-gradient-to-b from-[#0a0d16] to-[#07090f]">
                {/* Subtle grid background */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
                
                {/* Topbar */}
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div>
                    <h2 className="text-white text-2xl font-bold tracking-tight">Welcome back, Alex! 👋</h2>
                    <p className="text-gray-500 text-xs md:text-sm mt-1.5 font-medium">Here's what's happening with your product today.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="hidden md:flex gap-2">
                      <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors hover:bg-white/10 shadow-inner">
                        <Search className="w-4 h-4" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors hover:bg-white/10 shadow-inner relative">
                        <Bell className="w-4 h-4" />
                        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.8)]"></span>
                      </button>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full pl-1.5 pr-4 py-1.5 cursor-pointer hover:bg-white/10 transition-colors shadow-inner">
                      <img src="https://i.pravatar.cc/150?u=alex" alt="User" className="w-7 h-7 rounded-full border border-white/20" />
                      <span className="text-white text-xs font-semibold">May 12 - Jun 12</span>
                      <ChevronDown className="w-3 h-3 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 relative z-10">
                  {[
                    { label: 'Total Users', value: '24,842', change: '+12.5%', isPos: true },
                    { label: 'Active Subscriptions', value: '6,342', change: '+8.2%', isPos: true },
                    { label: 'Monthly Revenue', value: '$48,240', change: '+15.3%', isPos: true },
                    { label: 'Churn Rate', value: '2.45%', change: '-2.1%', isPos: false },
                  ].map((stat, i) => (
                    <div key={i} className="bg-[#0f131f] border border-white/5 p-5 rounded-2xl shadow-lg relative overflow-hidden group hover:border-white/10 transition-colors">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-3 relative z-10">{stat.label}</div>
                      <div className="text-white font-black text-2xl mb-3 relative z-10 tracking-tight">{stat.value}</div>
                      <div className="flex justify-between items-center text-[10px] font-medium relative z-10">
                        <span className="text-gray-600">vs last month</span>
                        <span className={stat.isPos ? "text-emerald-400" : "text-rose-400"}>{stat.change}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 relative z-10 min-h-0">
                  <div className="col-span-2 bg-[#0f131f] border border-white/5 rounded-3xl p-6 flex flex-col relative overflow-hidden shadow-lg">
                    <div className="flex justify-between items-center mb-6 relative z-10">
                      <h3 className="text-white text-sm font-bold tracking-wide">Revenue Overview</h3>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg shadow-inner cursor-pointer hover:bg-white/10 transition-colors">
                        This Month <ChevronDown className="w-3 h-3" />
                      </div>
                    </div>
                    {/* Glowing Chart Line */}
                    <div className="flex-1 relative w-full h-full min-h-[150px]">
                      <svg viewBox="0 0 400 150" className="w-full h-full absolute inset-0 preserve-3d" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chartGradient2" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                          </linearGradient>
                          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="8" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                          </filter>
                        </defs>
                        <path d="M0,120 C40,100 80,60 120,80 C160,100 200,130 240,70 C280,10 320,40 360,60 C400,80 400,30 400,30 L400,150 L0,150 Z" fill="url(#chartGradient2)" />
                        <path d="M0,120 C40,100 80,60 120,80 C160,100 200,130 240,70 C280,10 320,40 360,60 C400,80 400,30 400,30" fill="none" stroke="#a78bfa" strokeWidth="4" strokeLinecap="round" filter="url(#glow)" />
                        <path d="M0,120 C40,100 80,60 120,80 C160,100 200,130 240,70 C280,10 320,40 360,60 C400,80 400,30 400,30" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      {/* Tooltip dot */}
                      <div className="absolute left-[60%] top-[40%] w-4 h-4 bg-white rounded-full border-[3px] border-purple-500 shadow-[0_0_20px_rgba(167,139,250,1)] -translate-x-1/2 -translate-y-1/2"></div>
                      <div className="absolute left-[60%] top-[15%] bg-white text-gray-900 text-xs font-black px-3 py-1.5 rounded-lg shadow-xl -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <div className="text-gray-500 text-[9px] mb-0.5 font-bold uppercase tracking-wider">May 28</div>
                        $6,420
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-white"></div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1 bg-[#0f131f] border border-white/5 rounded-3xl p-6 flex flex-col shadow-lg relative">
                    <h3 className="text-white text-sm font-bold tracking-wide mb-6">Top Products</h3>
                    <div className="flex-1 flex flex-col items-center justify-center">
                      {/* Glowing Donut Chart */}
                      <div className="relative w-32 h-32 mb-8">
                        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                          <defs>
                            <filter id="glow-donut" x="-20%" y="-20%" width="140%" height="140%">
                              <feGaussianBlur stdDeviation="4" result="blur" />
                              <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                          </defs>
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#1f2937" strokeWidth="14" />
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#8b5cf6" strokeWidth="14" strokeDasharray="251.2" strokeDashoffset="80" strokeLinecap="round" filter="url(#glow-donut)" />
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#f59e0b" strokeWidth="14" strokeDasharray="251.2" strokeDashoffset="190" strokeLinecap="round" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white drop-shadow-md">
                          <span className="font-black text-2xl tracking-tight">68%</span>
                          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Active</span>
                        </div>
                      </div>
                      {/* Legend */}
                      <div className="w-full space-y-3 text-[11px] font-semibold">
                        <div className="flex justify-between items-center"><div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div><span className="text-gray-400">Product A</span></div><span className="text-white">68%</span></div>
                        <div className="flex justify-between items-center"><div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></div><span className="text-gray-400">Product B</span></div><span className="text-white">22%</span></div>
                        <div className="flex justify-between items-center"><div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div><span className="text-gray-400">Product C</span></div><span className="text-white">10%</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
           </div>

           {/* FLOATING ELEMENTS - NOW INSIDE THE 3D CONTAINER FOR CORRECT PERSPECTIVE */}

           {/* Users Card Floating */}
           <motion.div 
             initial={{ opacity: 0, z: 0 }}
             whileInView={{ opacity: 1, z: 120 }}
             transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
             viewport={{ once: true }}
             className="absolute -left-16 top-[40%] w-56 bg-white rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.2)_inset] p-6 z-20 backdrop-blur-sm"
             style={{ transform: 'translateZ(120px)' }}
           >
             <div className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">Users</div>
             <div className="text-4xl font-black text-gray-900 mb-1 tracking-tighter">12,875</div>
             <div className="flex flex-col text-[11px] font-semibold">
               <span className="text-emerald-500">+18.2%</span>
               <span className="text-gray-400">vs last month</span>
             </div>
             <svg viewBox="0 0 100 30" className="w-full h-10 mt-6 overflow-visible">
                <path d="M0,20 C20,10 30,30 50,15 C70,0 80,25 100,5" fill="none" stroke="#a78bfa" strokeWidth="4" strokeLinecap="round" />
             </svg>
           </motion.div>

           {/* API Pill Floating */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.5, z: 0 }}
             whileInView={{ opacity: 1, scale: 1, z: 140 }}
             transition={{ duration: 0.6, delay: 0.6, type: "spring", bounce: 0.6 }}
             viewport={{ once: true }}
             className="absolute -left-24 bottom-32 bg-indigo-500 text-white px-5 py-2.5 rounded-2xl shadow-[0_20px_40px_rgba(99,102,241,0.5),inset_0_2px_4px_rgba(255,255,255,0.3)] z-20 flex items-center gap-3 border border-indigo-400"
             style={{ transform: 'translateZ(140px)' }}
           >
             <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_white]"></div>
             <span className="font-black text-sm tracking-widest">API</span>
           </motion.div>

           {/* New Signups Floating */}
           <motion.div 
             initial={{ opacity: 0, x: 0, z: 0 }}
             whileInView={{ opacity: 1, x: -30, z: 160 }}
             transition={{ duration: 0.8, delay: 0.5, type: "spring", bounce: 0.3 }}
             viewport={{ once: true }}
             className="absolute -bottom-16 right-32 w-56 bg-white rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.2)_inset] p-5 z-30"
             style={{ transform: 'translateZ(160px)' }}
           >
             <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-2">New Signups</div>
             <div className="text-3xl font-black text-gray-900 mb-1 tracking-tighter">1,452</div>
             <div className="flex flex-col text-[10px] font-semibold mb-4">
               <span className="text-emerald-500">+24.6%</span>
               <span className="text-gray-400">vs last month</span>
             </div>
             <svg viewBox="0 0 200 40" className="w-full h-10 overflow-visible">
                <path d="M0,30 C40,40 60,10 100,20 C140,30 160,10 200,5" fill="none" stroke="#8b5cf6" strokeWidth="4" strokeLinecap="round" />
             </svg>
           </motion.div>

           {/* Cloud Icon Box Floating */}
           <motion.div 
             initial={{ opacity: 0, z: 0 }}
             whileInView={{ opacity: 1, z: 200 }}
             transition={{ duration: 0.7, delay: 0.8, type: "spring", bounce: 0.5 }}
             viewport={{ once: true }}
             className="absolute -bottom-8 -right-8 bg-white w-24 h-24 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.5),inset_0_4px_10px_rgba(255,255,255,0.5)] flex items-center justify-center z-40 border border-gray-100"
             style={{ transform: 'translateZ(200px)' }}
           >
             <div className="text-indigo-500 bg-indigo-50 p-4 rounded-2xl">
                <Cloud className="w-10 h-10 fill-indigo-500" />
             </div>
           </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
