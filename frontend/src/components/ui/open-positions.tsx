import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import { FaJava, FaPython } from "react-icons/fa";
import { motion } from "framer-motion";

const positions = [
  {
    id: "java",
    title: "Java Developer",
    subtitle: "Skilled Java developer",
    location: "Remote",
    type: "Full-time",
    icon: FaJava,
    iconColor: "text-[#007396]",
  },
  {
    id: "python",
    title: "Python Developer",
    subtitle: "Skilled in Python, SQL, Django and ML",
    location: "Remote",
    type: "Full-time",
    icon: FaPython,
    iconColor: "text-[#3776AB]",
  },
];

export function OpenPositions() {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-white">
      {/* Animated Glassy Background Layers */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Base Layer */}
        <motion.div
          animate={{
            scale: [1.02, 1.06, 1.02],
            x: ["1%", "-1%", "1%"],
            y: ["1%", "-1%", "1%"],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-[-5%] w-[110%] h-[110%] bg-[url('/glassy-waves-bg.jpg')] bg-cover bg-center opacity-[0.35] mix-blend-multiply"
        />

        {/* Flowing overlay */}
        <motion.div
          animate={{
            scale: [1.08, 1.02, 1.08],
            x: ["-2%", "1%", "-2%"],
            y: ["-1%", "1%", "-1%"],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-[-5%] w-[110%] h-[110%] bg-[url('/glassy-waves-bg.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay rotate-180"
        />

        {/* Sweeping Light Beams */}
        <motion.div
          animate={{ backgroundPosition: ["200% 200%", "0% 0%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-full opacity-30 mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(255,255,255,0.9) 0%, transparent 40%)",
            backgroundSize: "200% 200%",
          }}
        />

        {/* Floating Glass Bubbles for consistency with Hero */}
        <motion.div
          animate={{ y: [0, -60, 0], x: [0, 20, 0], rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[15%] w-10 h-10 rounded-full bg-gradient-to-br from-white/90 to-white/20 backdrop-blur-md border border-white/80 shadow-[0_8px_16px_rgba(0,0,0,0.05),inset_0_4px_8px_rgba(255,255,255,1)]"
        />
        <motion.div
          animate={{ y: [0, -40, 0], x: [0, -10, 0], rotate: [0, -180] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[20%] left-[10%] w-14 h-14 rounded-full bg-gradient-to-br from-white/90 to-white/20 backdrop-blur-md border border-white/80 shadow-[0_12px_24px_rgba(0,0,0,0.05),inset_0_4px_8px_rgba(255,255,255,1)]"
        />

        {/* Seamless blending gradients */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#0B192C] tracking-tight mb-4">
            Open Positions
          </h2>
          <p className="text-[#546a87] text-lg font-bold tracking-wider uppercase text-sm md:text-base">
            Join our team and help us build the future.
          </p>
        </div>

        <div className="space-y-8">
          {positions.map((pos) => (
            <div
              key={pos.id}
              className="relative group p-6 sm:p-8 rounded-[2.5rem] bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_rgba(150,170,200,0.15),inset_0_4px_8px_rgba(255,255,255,1)] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_48px_rgba(150,170,200,0.3),inset_0_4px_12px_rgba(255,255,255,1)] hover:-translate-y-2"
            >
              {/* Inner ambient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/40 to-cyan-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
                <div className="flex items-center gap-6">
                  {/* Floating 3D Icon Container */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-[1.5rem] bg-gradient-to-br from-white/95 to-white/50 backdrop-blur-md border border-white/90 shadow-[0_8px_16px_rgba(0,0,0,0.05),inset_0_4px_8px_rgba(255,255,255,1)] flex items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
                    <pos.icon
                      className={`w-10 h-10 sm:w-12 sm:h-12 ${pos.iconColor} filter drop-shadow-sm`}
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C] mb-2 tracking-tight">
                      {pos.title}
                    </h3>
                    <p className="text-[#546a87] text-sm sm:text-base font-medium mb-4">
                      {pos.subtitle}
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                      <span className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/70 border border-white/90 text-[#0B192C] text-xs sm:text-sm font-bold shadow-[0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-sm">
                        <MapPin className="w-3.5 h-3.5 text-[#546a87]" />
                        {pos.location}
                      </span>
                      <span className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/70 border border-white/90 text-[#0B192C] text-xs sm:text-sm font-bold shadow-[0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-sm">
                        <Briefcase className="w-3.5 h-3.5 text-[#546a87]" />
                        {pos.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="#apply"
                  onClick={() => {
                    // Update the select dropdown if it exists
                    const select = document.getElementById("role-select") as HTMLSelectElement;
                    if (select) {
                      select.value = pos.title;
                    }
                  }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0B192C] border border-transparent text-white font-bold text-sm hover:bg-transparent hover:border-[#0B192C] hover:text-[#0B192C] shadow-[0_8px_24px_rgba(11,25,44,0.3)] hover:shadow-none transition-all duration-300"
                >
                  Apply now
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
