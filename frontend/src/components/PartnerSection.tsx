import { useEffect, useRef, useState } from "react";

const partners = [
  { name: "Amazon Web Services", src: "/contact/amazonaws.svg" },
  { name: "Apple", src: "/contact/apple.svg" },
  { name: "Docker", src: "/contact/docker.svg" },
  { name: "Google", src: "/contact/google.svg" },
  { name: "GitHub", src: "/contact/github.svg" },
  { name: "React", src: "/contact/react.svg" },
  { name: "MongoDB", src: "/contact/mongodb.svg" },
  { name: "TypeScript", src: "/contact/typescript.svg" },
];

export function PartnerSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;
    const scrollContainer = scrollRef.current;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 0.5;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section className="overflow-hidden border-b border-gray-100 bg-white py-10 sm:py-14">
      <div className="mx-auto mb-8 max-w-7xl px-6 sm:px-10">
        <h2 className="text-4xl font-black uppercase tracking-tight text-[#4A3628] sm:text-5xl">Partners</h2>
        <div className="mt-4 h-px w-full bg-gray-200" />
      </div>
      <div
        ref={scrollRef}
        onPointerDown={() => setIsPaused(true)}
        onWheel={() => setIsPaused(true)}
        className="w-full overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex w-max gap-8 px-6 sm:gap-10 sm:px-10">
        {[...partners, ...partners].map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex h-32 w-56 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white p-8 shadow-[0_5px_14px_rgba(15,23,42,0.12)] sm:h-36 sm:w-64"
          >
            <img src={partner.src} alt={partner.name} className="max-h-full max-w-full object-contain" />
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}