import { useEffect, useRef, useState } from "react";
import { API_BASE_URL } from "@/lib/api";

export function PartnerSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [partners, setPartners] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE_URL}/contacts/clients?t=${Date.now()}`)
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (Array.isArray(data)) {
          const active = data.filter((c: any) => c.isActive !== false);
          setPartners(active);
        }
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error("Failed to fetch trusted clients", err);
        setIsLoaded(true);
      });
  }, []);

  useEffect(() => {
    if (partners.length === 0) return;
    let animationFrameId: number;
    let lastTimestamp = 0;
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;

    const scroll = (timestamp: number) => {
      const elapsed = lastTimestamp ? Math.min(timestamp - lastTimestamp, 32) : 0;
      lastTimestamp = timestamp;

      scrollContainer.scrollLeft -= elapsed * 0.025;
      if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [partners]);

  if (!isLoaded || partners.length === 0) {
    return null;
  }

  return (
    <section className="overflow-hidden border-b border-gray-100 bg-white py-10 sm:py-14">
      <div className="mx-auto mb-8 max-w-7xl px-6 sm:px-10">
        <h2 className="text-4xl font-black uppercase tracking-tight text-[#4A3628] sm:text-5xl">
          Trusted Clients
        </h2>
        <div className="mt-4 h-px w-full bg-gray-200" />
      </div>
      <div ref={scrollRef} className="w-full overflow-x-auto" style={{ scrollbarWidth: "none" }}>
        <div className="flex w-max gap-6 px-6 sm:gap-8 sm:px-10">
          {[...partners, ...partners].map((partner, index) => {
            const logoSrc = partner.logoUrl || partner.src || partner.logo;
            return (
              <div
                key={`${partner.id || partner.name}-${index}`}
                className="rounded-[1.1rem] bg-[conic-gradient(from_210deg,#111827_0deg,#111827_48deg,#2563eb_62deg,#ef4444_78deg,#facc15_92deg,#f8fafc_112deg,#f8fafc_240deg,#111827_280deg,#111827_360deg)] p-[2px] shadow-[0_10px_24px_rgba(25,35,55,0.12)]"
              >
                <div className="flex h-24 w-40 shrink-0 items-center justify-center rounded-[1rem] bg-white p-5 sm:h-28 sm:w-48 sm:p-6">
                  {logoSrc ? (
                    <img
                      src={logoSrc}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-sm font-bold text-gray-800">{partner.name}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
