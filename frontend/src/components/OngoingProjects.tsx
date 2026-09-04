import React from 'react';
import { ChevronRight } from "lucide-react";

export function OngoingProjects() {
  const projects = [
    {
      title: "Silicon Vista.",
      subtitle: "Learning Platform.",
      img: "/portfolio/website-4.jpg"
    },
    {
      title: "DevSpectra.",
      subtitle: "Boutique Engineering Studio.",
      img: "/portfolio/website-2.jpg"
    }
  ];

  return (
    <section className="py-24 bg-[#fafcff] relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#4A3628] uppercase">
            Ongoing Projects
          </h2>
          <div className="h-[1px] flex-1 bg-gray-200"></div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl sm:rounded-[2rem] h-[320px] sm:h-[400px] md:h-[480px] overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col pt-4 sm:pt-8 md:pt-10 items-center text-center group cursor-pointer transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="px-3 sm:px-6 md:px-10 max-w-md mb-3 sm:mb-6 flex-shrink-0">
                <h3 className="text-base sm:text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-1 sm:mb-2">
                  {project.title} <br className="hidden sm:block" />
                  <span className="text-gray-500 block sm:inline">{project.subtitle}</span>
                </h3>
              </div>
              <div className="w-full mt-auto flex-1 bg-gray-50 flex items-end justify-center overflow-hidden border-t border-gray-100 relative">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
