import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, TrendingUp, Users, Mail, Megaphone, Settings, Search, Calendar } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube, FaGoogle } from 'react-icons/fa';

export default function DigitalMarketingMockup() {
  return (
    <div className="relative w-full h-full min-h-[450px] flex items-center justify-center p-4">
      <div className="relative w-full max-w-[600px] aspect-[16/10] perspective-[1500px]">
        
        {/* Complete Laptop Assembly */}
        <motion.div 
          initial={{ opacity: 0, rotateY: -15, rotateX: 5, y: 50 }}
          whileInView={{ opacity: 1, rotateY: 5, rotateX: 0, y: 0 }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true }}
          className="absolute inset-x-8 top-12 bottom-20 relative z-10 flex flex-col"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Laptop Screen (Lid) */}
          <div className="w-full h-full bg-[#111] rounded-t-3xl rounded-b-sm p-3 md:p-4 shadow-2xl relative z-10 border-t border-x border-gray-700/50">
            {/* Webcam dot */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-900 rounded-full border border-gray-800"></div>
            
            {/* Screen Content */}
            <div className="w-full h-full bg-white rounded-lg overflow-hidden flex text-gray-800 relative shadow-inner">
               {/* Sidebar */}
               <div className="w-16 md:w-20 bg-[#0f172a] flex flex-col items-center py-6 gap-6 shrink-0 z-10 border-r border-gray-800">
                  <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold mb-4">A</div>
                  <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-[0_0_15px_rgba(79,70,229,0.5)]">
                    <LayoutDashboard className="w-5 h-5" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                  <Users className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                  <Mail className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                  <Megaphone className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                  <Settings className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors mt-auto" />
               </div>

               {/* Main Area */}
               <div className="flex-1 p-4 md:p-6 flex flex-col bg-slate-50">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-lg">Performance Overview</h3>
                    <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-medium shadow-sm">
                      <Calendar className="w-3.5 h-3.5 text-gray-500" />
                      May 12 - Jun 12
                    </div>
                  </div>

                  {/* Top Stats */}
                  <div className="grid grid-cols-4 gap-3 mb-6">
                    {[
                      { label: 'Total Users', value: '24.8K', up: true, diff: '18.6%' },
                      { label: 'Conversions', value: '3.65K', up: true, diff: '24.1%' },
                      { label: 'Click Through Rate', value: '6.52%', up: true, diff: '8.3%' },
                      { label: 'Cost per Result', value: '$1.36', up: false, diff: '12.5%' },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm">
                        <div className="text-gray-400 text-[10px] mb-1">{stat.label}</div>
                        <div className="font-bold text-lg mb-1">{stat.value}</div>
                        <div className={`text-[9px] font-bold ${stat.up ? 'text-emerald-500' : 'text-emerald-500'}`}>
                          {stat.up ? '↑' : '↓'} {stat.diff}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4 flex-1">
                    {/* Campaign Performance Chart */}
                    <div className="flex-[2] bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="font-bold text-xs">Campaign Performance</span>
                        <div className="flex items-center gap-3 text-[9px] text-gray-500">
                          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-indigo-600"></span> Clicks</div>
                          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-300"></span> Conversions</div>
                        </div>
                      </div>
                      <div className="flex-1 relative w-full mt-2">
                         {/* SVG Chart */}
                         <svg viewBox="0 0 400 120" className="w-full h-full absolute inset-0 overflow-visible" preserveAspectRatio="none">
                            <path d="M0,80 C30,70 60,100 100,70 C140,40 180,90 220,60 C260,30 300,50 350,20 C380,10 400,20 400,20" fill="none" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" />
                            <path d="M0,100 C40,110 80,70 120,90 C160,110 200,60 250,80 C300,100 350,50 400,60" fill="none" stroke="#d8b4fe" strokeWidth="3" strokeLinecap="round" />
                         </svg>
                         {/* Tooltip */}
                         <div className="absolute left-[55%] top-[30%] bg-white border border-gray-100 shadow-lg text-[9px] px-2 py-1 flex flex-col items-center rounded -translate-x-1/2 -translate-y-1/2 z-10">
                            <span className="text-gray-400">May 26</span>
                            <span className="font-bold">5.6K Clicks</span>
                         </div>
                         <div className="absolute left-[55%] top-[50%] w-3 h-3 bg-indigo-600 rounded-full border-2 border-white shadow-sm -translate-x-1/2 -translate-y-1/2"></div>
                      </div>
                    </div>

                    {/* Traffic Sources Donut */}
                    <div className="flex-1 bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col items-center justify-center">
                       <span className="font-bold text-xs mb-4 self-start">Traffic Sources</span>
                       <div className="relative w-24 h-24 mb-4">
                          <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="12" />
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#4f46e5" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="138" strokeLinecap="round" />
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="180" strokeLinecap="round" />
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#f59e0b" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="220" strokeLinecap="round" />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="font-bold text-[11px]">12.8K</span>
                            <span className="text-[8px] text-gray-500">Total</span>
                          </div>
                       </div>
                       <div className="w-full space-y-1.5 text-[9px]">
                          <div className="flex justify-between items-center"><div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div><span className="text-gray-600">Organic</span></div><span className="font-bold">45%</span></div>
                          <div className="flex justify-between items-center"><div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div><span className="text-gray-600">Paid</span></div><span className="font-bold">30%</span></div>
                          <div className="flex justify-between items-center"><div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div><span className="text-gray-600">Social</span></div><span className="font-bold">15%</span></div>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
            
            {/* Highlight on screen edge */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-white/20 pointer-events-none"></div>
          </div>

          {/* Laptop Base (Keyboard area) */}
          <div className="w-[105%] self-center perspective-[800px] z-0 -mt-[1px]">
            <div 
              className="w-full h-32 md:h-48 bg-gradient-to-b from-[#e5e5e5] to-[#a3a3a3] rounded-b-[2.5rem] border-t border-gray-400 flex flex-col items-center pt-3 md:pt-5 shadow-[0_25px_50px_rgba(0,0,0,0.5)] origin-top relative"
              style={{ transform: 'rotateX(60deg)' }}
            >
              {/* Keyboard Deck */}
              <div className="w-[85%] h-14 md:h-24 bg-[#222] rounded-md shadow-[inset_0_2px_15px_rgba(0,0,0,0.9)] opacity-95 mb-2 md:mb-4 flex items-center justify-center relative overflow-hidden border border-black/50">
                  {/* Fake Keys Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:12px_12px] opacity-40"></div>
              </div>
              {/* Trackpad */}
              <div className="w-[25%] h-8 md:h-12 bg-gray-400/30 rounded-md shadow-inner border border-gray-400/50"></div>
              {/* Front Lip / Chassis Thickness */}
              <div className="absolute bottom-0 inset-x-4 md:inset-x-8 h-2 md:h-4 bg-gradient-to-b from-[#999] to-[#666] rounded-b-[2rem] blur-[0.5px]"></div>
            </div>
          </div>
        </motion.div>

        {/* --- FLOATING ELEMENTS --- */}
        
        {/* Connection Lines (SVG Background) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="w-full h-full">
            <g fill="none" stroke="#c7d2fe" strokeWidth="4" strokeLinecap="round" strokeDasharray="0 15">
              <path d="M200,100 C300,-20 600,-20 700,150" />
              <path d="M100,200 C-50,300 50,500 200,550" />
              <path d="M800,200 C1000,300 950,500 700,550" />
              <path d="M200,550 C400,700 600,700 700,550" />
            </g>
            {/* Glowing nodes on the paths */}
            <circle cx="450" cy="30" r="5" fill="#8b5cf6" className="shadow-[0_0_10px_#8b5cf6]" />
            <circle cx="80" cy="350" r="6" fill="#6366f1" className="shadow-[0_0_10px_#6366f1]" />
            <circle cx="850" cy="400" r="5" fill="#8b5cf6" className="shadow-[0_0_10px_#8b5cf6]" />
            <circle cx="450" cy="620" r="6" fill="#6366f1" className="shadow-[0_0_10px_#6366f1]" />
          </svg>
        </div>

        {/* Google Ads */}
        <motion.div 
          initial={{ opacity: 0, y: -20, z: 50 }}
          whileInView={{ opacity: 1, y: 0, z: 120 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
          viewport={{ once: true }}
          className="absolute -top-16 left-8 md:left-24 bg-white rounded-2xl shadow-xl p-4 z-20 flex flex-col items-center gap-2"
          style={{ transform: 'translateZ(120px)' }}
        >
          <div className="w-10 h-10 flex items-center justify-center">
             <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" alt="Google Ads" className="w-full h-full object-contain" />
          </div>
          <span className="text-[10px] font-bold text-gray-700">Google Ads</span>
        </motion.div>

        {/* Conversions Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, z: 40 }}
          whileInView={{ opacity: 1, scale: 1, z: 100 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="absolute -top-24 right-[35%] md:right-[40%] bg-white rounded-2xl shadow-xl p-4 z-20 w-36"
          style={{ transform: 'translateZ(100px)' }}
        >
          <div className="text-[10px] text-gray-500 font-bold mb-1">Conversions</div>
          <div className="text-xl font-black mb-1">3.65K</div>
          <div className="text-[9px] text-emerald-500 font-bold mb-2">↑ 24.1%</div>
          <svg viewBox="0 0 100 20" className="w-full h-6 overflow-visible">
            <path d="M0,15 L20,5 L40,10 L60,0 L80,15 L100,5" fill="none" stroke="#8b5cf6" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Meta Ads */}
        <motion.div 
          initial={{ opacity: 0, x: 20, z: 80 }}
          whileInView={{ opacity: 1, x: 0, z: 140 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute -top-10 right-4 md:right-16 bg-white rounded-2xl shadow-xl p-4 px-6 z-20 flex items-center gap-3"
          style={{ transform: 'translateZ(140px)' }}
        >
          <FaFacebook className="w-6 h-6 text-[#1877F2]" />
          <span className="text-[11px] font-bold text-gray-700 leading-tight">Meta<br/>Ads</span>
        </motion.div>

        {/* Instagram */}
        <motion.div 
          initial={{ opacity: 0, x: -30, z: 100 }}
          whileInView={{ opacity: 1, x: 0, z: 150 }}
          transition={{ duration: 0.7, delay: 0.5, type: "spring" }}
          viewport={{ once: true }}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-white rounded-2xl shadow-xl p-4 z-20"
          style={{ transform: 'translateZ(150px)' }}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white">
            <FaInstagram className="w-6 h-6" />
          </div>
        </motion.div>

        {/* Facebook */}
        <motion.div 
          initial={{ opacity: 0, x: 30, z: 100 }}
          whileInView={{ opacity: 1, x: 0, z: 150 }}
          transition={{ duration: 0.7, delay: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="absolute top-[60%] right-0 -translate-y-1/2 bg-white rounded-2xl shadow-xl p-4 z-20"
          style={{ transform: 'translateZ(150px)' }}
        >
          <FaFacebook className="w-10 h-10 text-[#1877F2]" />
        </motion.div>

        {/* YouTube */}
        <motion.div 
          initial={{ opacity: 0, y: 30, z: 120 }}
          whileInView={{ opacity: 1, y: 0, z: 180 }}
          transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="absolute bottom-6 left-1/4 bg-white rounded-2xl shadow-xl p-4 z-30"
          style={{ transform: 'translateZ(180px)' }}
        >
          <FaYoutube className="w-12 h-8 text-[#FF0000]" />
        </motion.div>

        {/* Total Reach Bar Chart Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30, z: 90 }}
          whileInView={{ opacity: 1, y: 0, z: 130 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="absolute bottom-12 left-0 bg-white rounded-2xl shadow-xl p-4 z-20 w-36"
          style={{ transform: 'translateZ(130px)' }}
        >
          <div className="text-[10px] text-gray-500 font-bold mb-1">Total Reach</div>
          <div className="text-xl font-black mb-1">128K</div>
          <div className="text-[9px] text-emerald-500 font-bold mb-3">↑ 35.7%</div>
          <div className="flex items-end gap-1 h-12">
            {[30, 50, 40, 60, 75, 100].map((h, i) => (
              <div key={i} className="flex-1 bg-indigo-100 rounded-t-sm" style={{ height: `${h}%` }}>
                <div className="w-full h-full bg-indigo-500 rounded-t-sm" style={{ opacity: i === 5 ? 1 : 0.4 }}></div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Engagement Rate Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30, z: 110 }}
          whileInView={{ opacity: 1, y: 0, z: 170 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="absolute bottom-0 right-1/4 bg-white rounded-2xl shadow-xl p-4 z-30 w-40"
          style={{ transform: 'translateZ(170px)' }}
        >
          <div className="text-[10px] text-gray-500 font-bold mb-1">Engagement Rate</div>
          <div className="text-2xl font-black mb-1">5.32%</div>
          <div className="text-[9px] text-emerald-500 font-bold mb-2">↑ 16.2%</div>
          <svg viewBox="0 0 100 20" className="w-full h-6 overflow-visible">
            <path d="M0,20 C10,10 20,25 30,15 C40,5 50,20 60,10 C70,0 80,15 90,5 L100,10" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </motion.div>

      </div>
    </div>
  );
}
