import React, { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { API_BASE_URL } from "@/lib/api";

export function OngoingProjects() {
  const [ongoingProjects, setOngoingProjects] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/projects`)
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const ongoing = data.filter(
            (p: any) =>
              p.isOngoing === true ||
              String(p.status).toLowerCase() === "ongoing",
          );

          if (ongoing.length > 0) {
            setOngoingProjects(ongoing);
          } else {
            const active = data.filter(
              (p: any) =>
                p.status === "published" ||
                p.status === "active" ||
                !p.status,
            );
            setOngoingProjects(
              active.length > 0 ? active.slice(0, 2) : data.slice(0, 2),
            );
          }
        }
      })
      .catch((err) =>
        console.error("Failed to fetch dynamic ongoing projects", err),
      );
  }, []);

  const displayList =
    ongoingProjects.length > 0
      ? ongoingProjects
      : [
          {
            id: "1",
            title: "Silicon Vista.",
            shortDescription: "Learning Platform.",
            category: "Website",
            thumbnail: "/portfolio/website-4.jpg",
            liveUrl: "https://devspectra.com",
          },
          {
            id: "2",
            title: "DevSpectra.",
            shortDescription: "Boutique Engineering Studio.",
            category: "Website",
            thumbnail: "/portfolio/website-2.jpg",
            liveUrl: "https://devspectra.com",
          },
        ];

  return (
    <section className="py-10 md:py-12 bg-[#fafcff] relative z-10">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-[#4A3628] uppercase">
            Ongoing Projects
          </h2>
          <div className="h-[1px] flex-1 bg-gray-200"></div>
        </div>

        <div
          className="flex flex-row gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 md:snap-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {displayList.map((project, idx) => {
            const title = project.title || "Project";
            const subtitle =
              project.shortDescription || project.category || "In Development";
            const imageSrc =
              project.thumbnail ||
              project.img ||
              "/portfolio/website-1.jpg";

            return (
              <div
                key={project.id || idx}
                className="w-[210px] sm:w-[240px] shrink-0 snap-center md:w-auto md:shrink rounded-[1rem] md:rounded-[1.3rem] bg-[conic-gradient(from_210deg,#111827_0deg,#111827_48deg,#2563eb_62deg,#ef4444_78deg,#facc15_92deg,#f8fafc_112deg,#f8fafc_240deg,#111827_280deg,#111827_360deg)] p-[2px] shadow-[0_6px_16px_rgba(25,35,55,0.08)] transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="bg-white rounded-[0.95rem] md:rounded-[1.2rem] overflow-hidden shadow-[0_3px_12px_rgb(0,0,0,0.03)] flex flex-col pt-3 md:pt-4 items-center text-center relative">
                  <div className="px-3 md:px-10 max-w-md mb-3 md:mb-6 flex-shrink-0">
                    <h3 className="text-base sm:text-xl md:text-3xl font-bold tracking-tight text-gray-900 mb-1 md:mb-2">
                      {title}
                      {!title.endsWith(".") ? "." : ""}{" "}
                      <br className="hidden xl:block" />
                      <span className="text-gray-500 font-normal block text-xs sm:text-sm md:text-2xl mt-0.5 md:mt-1">
                        {subtitle}
                        {!subtitle.endsWith(".") ? "." : ""}
                      </span>
                    </h3>
                  </div>

                  <div className="w-full mt-auto flex-1 bg-gray-50/80 flex items-start justify-center overflow-hidden border-t border-gray-100 relative h-[140px] sm:h-[160px] md:h-[200px] p-1.5 md:p-2">
                    <img
                      src={imageSrc}
                      alt={title}
                      className="w-full h-full object-contain md:object-cover object-top rounded-md md:rounded-lg shadow-sm"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}