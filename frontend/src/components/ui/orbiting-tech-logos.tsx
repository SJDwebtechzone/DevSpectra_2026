import React from "react";
import { Play } from "lucide-react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiGraphql, SiMysql, SiJavascript } from "react-icons/si";

export function OrbitingTechLogos() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[800px] pointer-events-none overflow-hidden z-20">
      {/* Container for the concentric rings, centered on the right edge */}
      <div className="absolute right-[-300px] top-1/2 -translate-y-1/2 w-[800px] h-[800px] flex items-center justify-center">
        {/* Outer Ring */}
        <div
          className="absolute w-[700px] h-[700px] border border-dashed border-white/40 rounded-full animate-[spin_60s_linear_infinite]"
          
        >
          {/* Icons positioned along the outer ring */}

          {/* GraphQL */}
          <div className="absolute top-[15%] left-[15%] -translate-x-1/2 -translate-y-1/2 animate-[spin_60s_linear_infinite_reverse]">
            <div className="w-14 h-14 bg-white/60 backdrop-blur-md rounded-full border border-white shadow-[0_4px_16px_rgba(0,0,0,0.1)] flex items-center justify-center">
              <SiGraphql className="w-7 h-7 text-[#E10098]" />
            </div>
          </div>

          {/* MySQL */}
          <div className="absolute bottom-[20%] right-[10%] -translate-x-1/2 -translate-y-1/2 animate-[spin_60s_linear_infinite_reverse]">
            <div className="w-14 h-14 bg-white/60 backdrop-blur-md rounded-full border border-white shadow-[0_4px_16px_rgba(0,0,0,0.1)] flex items-center justify-center">
              <SiMysql className="w-8 h-8 text-[#4479A1]" />
            </div>
          </div>

          {/* Node.js */}
          <div className="absolute bottom-[10%] left-[25%] -translate-x-1/2 -translate-y-1/2 animate-[spin_60s_linear_infinite_reverse]">
            <div className="w-14 h-14 bg-white/60 backdrop-blur-md rounded-full border border-white shadow-[0_4px_16px_rgba(0,0,0,0.1)] flex items-center justify-center">
              <FaNodeJs className="w-7 h-7 text-[#339933]" />
            </div>
          </div>
        </div>

        {/* Middle Ring */}
        <div
          className="absolute w-[450px] h-[450px] border border-dashed border-white/50 rounded-full animate-[spin_40s_linear_infinite_reverse]"
          
        >
          {/* Icons positioned along the middle ring */}

          {/* React */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_40s_linear_infinite]">
            <div className="w-16 h-16 bg-white/70 backdrop-blur-md rounded-full border border-white shadow-[0_4px_16px_rgba(0,0,0,0.1)] flex items-center justify-center">
              <FaReact className="w-9 h-9 text-[#61DAFB] animate-[spin_10s_linear_infinite]" />
            </div>
          </div>

          {/* JavaScript */}
          <div className="absolute bottom-[20%] left-[10%] -translate-x-1/2 -translate-y-1/2 animate-[spin_40s_linear_infinite]">
            <div className="w-12 h-12 bg-white/70 backdrop-blur-md rounded-full border border-white shadow-[0_4px_16px_rgba(0,0,0,0.1)] flex items-center justify-center">
              <SiJavascript className="w-6 h-6 text-[#F7DF1E]" />
            </div>
          </div>

          {/* Play/Vercel */}
          <div className="absolute bottom-[30%] right-[-5%] -translate-x-1/2 -translate-y-1/2 animate-[spin_40s_linear_infinite]">
            <div className="w-12 h-12 bg-white/70 backdrop-blur-md rounded-full border border-white shadow-[0_4px_16px_rgba(0,0,0,0.1)] flex items-center justify-center">
              <Play className="w-5 h-5 text-black fill-black ml-0.5" />
            </div>
          </div>
        </div>

        {/* Inner Ring */}
        <div
          className="absolute w-[250px] h-[250px] border border-dashed border-white/60 rounded-full animate-[spin_20s_linear_infinite]"
          
        >
          {/* Empty inner ring for depth */}
        </div>
      </div>
    </div>
  );
}
