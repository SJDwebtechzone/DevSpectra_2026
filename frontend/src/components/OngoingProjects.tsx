import React, { useState, useEffect } from 'react';
import { ExternalLink } from "lucide-react";

export function OngoingProjects() {
  const [ongoingProjects, setOngoingProjects] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          // Filter projects marked as ongoing
          const ongoing = data.filter(
            (p: any) => p.isOngoing || p.status === "ongoing"
          );
          if (ongoing.length > 0) {
            setOngoingProjects(ongoing);
          } else {
            // Fallback: show active/published database projects
            const active = data.filter(
              (p: any) => p.status === "published" || p.status === "active" || !p.status
            );
            setOngoingProjects(active.length > 0 ? active.slice(0, 2) : data.slice(0, 2));
          }
        }
      })
      .catch((err) => console.error("Failed to fetch dynamic ongoing projects", err));
  }, []);

  const displayList = ongoingProjects.length > 0 ? ongoingProjects : [
    {
      id: "1",
      title: "Silicon Vista.",
      shortDescription: "Learning Platform.",
      category: "Website",
      thumbnail: "/portfolio/website-4.jpg",
      liveUrl: "https://devspectra.com"
    },
    {
      id: "2",
      title: "DevSpectra.",
      shortDescription: "Boutique Engineering Studio.",
      category: "Website",
      thumbnail: "/portfolio/website-2.jpg",
      liveUrl: "https://devspectra.com"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {displayList.map((project, idx) => {
            const title = project.title || "Project";
            const subtitle = project.shortDescription || project.category || "In Development";
            const imageSrc = project.thumbnail || project.img || "/portfolio/website-1.jpg";

            return (
              <a
                key={project.id || idx}
                href={project.liveUrl || "/portfolio"}
                target={project.liveUrl ? "_blank" : "_self"}
                rel="noreferrer"
                className="bg-white rounded-[2rem] h-[400px] md:h-[480px] overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col pt-8 md:pt-10 items-center text-center group cursor-pointer transition-transform duration-500 hover:-translate-y-1 relative"
              >
                <div className="px-6 md:px-10 max-w-md mb-6 flex-shrink-0">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-2">
                    {title}{!title.endsWith(".") ? "." : ""} <br className="hidden xl:block" />
                    <span className="text-gray-500 font-normal block text-xl md:text-2xl mt-1">{subtitle}{!subtitle.endsWith(".") ? "." : ""}</span>
                  </h3>
                </div>
                <div className="w-full mt-auto flex-1 bg-gray-50 flex items-end justify-center overflow-hidden border-t border-gray-100 relative">
                  <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    <span>View Project</span>
                    <ExternalLink size={12} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
