import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import HeroSection from "@/components/HeroSection";
import { ServicesCards } from "@/components/ServicesCards";
import { OngoingProjects } from "@/components/OngoingProjects";
import { TechStackSection } from "@/components/TechStackSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FAQ } from "@/components/FAQ";
import { PartnerSection } from "@/components/PartnerSection";
import { useState, useEffect, useRef } from "react";

import { generateSEO, generateLocalBusinessSchema } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => {
    const seo = generateSEO({
      url: "/",
    });

    return {
      meta: seo.meta,
      links: seo.links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(generateLocalBusinessSchema("Chennai")),
        },
      ],
    };
  },
  component: Home,
});

function Home() {
  const reviewsData = {
    averageRating: 5,
    totalReviews: 5,
    reviews: [
      {
        authorName: "AJENDRA GOD AJENDRA",
        relativeTime: "2 months ago",
        rating: 5,
        text: "Very excellent service, nice speech Thank you Thank you very much 🙏",
      },
      {
        authorName: "Vigneswari Arun",
        relativeTime: "6 months ago",
        rating: 5,
        text: "I had a great experience working with this team. On time delivery and I'm very satisfied with the work. Thank you to the entire team and support and effort.",
      },
      {
        authorName: "Vedarajan “Sekar” Sekar",
        relativeTime: "7 months ago",
        rating: 5,
        text: "I Really Appreciate their Commitment towards their core in perfection in completing the project, We personally had a great time in sharing our knowledge to attain the Success in Developing the portal.....Thank you Team ",
      },
    ],
  };
  const loading = false;
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    const scrollContainer = scrollRef.current;
    let isHovered = false;
    let floatScrollLeft = 0;
    let lastTimestamp = 0;

    if (!scrollContainer) return;

    floatScrollLeft = scrollContainer.scrollLeft;

    const scrollStep = (timestamp: number) => {
      const elapsed = lastTimestamp ? Math.min(timestamp - lastTimestamp, 32) : 0;
      lastTimestamp = timestamp;

      if (!isHovered) {
        floatScrollLeft += elapsed * 0.025;
        scrollContainer.scrollLeft = floatScrollLeft;

        // The reviews are repeated, so loop by one set without a visible jump.
        const loopWidth = scrollContainer.scrollWidth / 4;
        if (loopWidth > 0 && floatScrollLeft >= loopWidth) {
          floatScrollLeft -= loopWidth;
          scrollContainer.scrollLeft = floatScrollLeft;
        }
      } else {
        floatScrollLeft = scrollContainer.scrollLeft;
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);

    const handleHover = () => (isHovered = true);
    const handleLeave = () => (isHovered = false);

    scrollContainer.addEventListener("mouseenter", handleHover);
    scrollContainer.addEventListener("mouseleave", handleLeave);
    scrollContainer.addEventListener("touchstart", handleHover, { passive: true });
    scrollContainer.addEventListener("touchend", handleLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener("mouseenter", handleHover);
      scrollContainer.removeEventListener("mouseleave", handleLeave);
      scrollContainer.removeEventListener("touchstart", handleHover);
      scrollContainer.removeEventListener("touchend", handleLeave);
    };
  }, []);
  const averageRating = reviewsData.averageRating;
  const totalReviews = reviewsData.totalReviews;
  const reviews = reviewsData.reviews;

  return (
    <PageShell mode="home">
      <HeroSection />

      {/* Intro Statement Section */}
      <section className="py-24 md:py-32 bg-white relative z-10 border-b border-gray-100 overflow-hidden">
        <div className="container-page max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-3/5 flex justify-center lg:justify-start">
              <div className="w-full max-w-[720px] rounded-[2.5rem] border border-gray-200 bg-white p-3 shadow-[0_18px_45px_rgba(25,35,55,0.16),inset_0_1px_0_rgba(255,255,255,0.95)]">
                <div className="rounded-[2rem] bg-[conic-gradient(from_210deg,#111827_0deg,#111827_48deg,#2563eb_62deg,#ef4444_78deg,#facc15_92deg,#f8fafc_112deg,#f8fafc_240deg,#111827_280deg,#111827_360deg)] p-[2px] shadow-[inset_0_1px_4px_rgba(148,163,184,0.18)]">
                  <div className="overflow-hidden rounded-[1.9rem] bg-gray-50 p-1">
                    <video
                      src="/home/about.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-label="About DevSpectra"
                      className="block h-auto w-full rounded-[1.65rem] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/5 text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-[#4A3628] mb-8 leading-[1.1]">
                DIGITAL EXPERIENCES, <br />
                <span className="font-serif italic font-normal tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">
                  built for what’s next.
                </span>
              </h2>
              <p className="text-lg md:text-xl lg:text-[1.35rem] text-gray-600 leading-relaxed font-medium max-w-2xl text-justify">
                We design and develop modern digital products, from high-performance websites and
                web applications to mobile experiences and growth-focused solutions, helping
                ambitious businesses turn ideas into products that perform, scale, and stand out.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServicesCards />
      <TechStackSection />
      <OngoingProjects />
      <WhyChooseUs />
      <FAQ />
      <PartnerSection />

      <section className="pb-24 bg-white">
        <div className="container-page">
          {/* Google Reviews Section */}
          <div className="pt-8 border-t" style={{ borderColor: "var(--color-page-border)" }}>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 items-center lg:items-start">
              {/* Summary Block (Fixed) */}
              <div className="w-full lg:-ml-8 lg:w-[240px] shrink-0 flex flex-col justify-start py-0">
                <div className="mb-6">
                  <h3 className="text-4xl font-black leading-none tracking-tight sm:text-5xl">
                    <span className="text-[#4285f4]">G</span>
                    <span className="text-[#ea4335]">o</span>
                    <span className="text-[#fbbc05]">o</span>
                    <span className="text-[#4285f4]">g</span>
                    <span className="text-[#34a853]">l</span>
                    <span className="text-[#ea4335]">e</span>
                  </h3>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-500 sm:text-3xl">Reviews</span>
                    <span className="text-xl tracking-[0.08em] text-[#fbbc05] sm:text-2xl">
                      ★★★★★
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl font-black" style={{ color: "var(--color-page-text)" }}>
                    {averageRating}
                  </span>
                  <div className="flex text-[#fbbc05]">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg
                        key={i}
                        className={`w-6 h-6 ${i <= averageRating ? "fill-current" : "fill-gray-300"}`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-base text-gray-500 mb-6">Based on {totalReviews} reviews</p>
                <div className="mt-auto inline-flex rounded-full bg-[conic-gradient(from_210deg,#111827_0deg,#111827_48deg,#2563eb_62deg,#ef4444_78deg,#facc15_92deg,#f8fafc_112deg,#f8fafc_240deg,#111827_280deg,#111827_360deg)] p-[2px] shadow-[0_8px_18px_rgba(25,35,55,0.14)]">
                  <a
                    href="https://g.page/r/CffO_u1buA2YEBM/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-base font-semibold text-gray-800 transition-colors hover:bg-gray-50"
                  >
                    Write a review
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-900 shadow-sm">
                      ↗
                    </span>
                  </a>
                </div>
              </div>

              {/* Auto Scrolling Reviews Area */}
              <div
                ref={scrollRef}
                className="w-full flex-1 overflow-x-auto overflow-y-hidden relative -mx-6 px-6 lg:mx-0 lg:px-0 py-4 scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <div className="flex gap-6 w-max pl-6 lg:pl-0">
                  {/* Duplicate array for seamless infinite scroll */}
                  {[...reviews, ...reviews, ...reviews, ...reviews].map(
                    (review: any, i: number) => (
                      <div
                        key={i}
                        className="shrink-0 rounded-[2.15rem] bg-[conic-gradient(from_210deg,#111827_0deg,#111827_48deg,#2563eb_62deg,#ef4444_78deg,#facc15_92deg,#f8fafc_112deg,#f8fafc_240deg,#111827_280deg,#111827_360deg)] p-[2px] shadow-[0_12px_30px_rgba(25,35,55,0.12)]"
                      >
                        <div className="h-full w-[300px] sm:w-[350px] rounded-[2rem] bg-white p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col">
                          <div className="flex items-center gap-4 mb-5">
                            {review.authorPhoto ? (
                              <img
                                src={review.authorPhoto}
                                alt={review.authorName || review.name}
                                className="w-12 h-12 rounded-full shadow-sm"
                              />
                            ) : (
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center font-bold text-gray-600 text-lg">
                                {(review.authorName || review.name)?.charAt(0)}
                              </div>
                            )}
                            <div>
                              <h4
                                className="font-bold text-base line-clamp-1"
                                style={{ color: "var(--color-page-text)" }}
                              >
                                {review.authorName || review.name}
                              </h4>
                              <p
                                className="text-sm font-medium"
                                style={{ color: "var(--color-page-muted)" }}
                              >
                                {review.relativeTime || review.time}
                              </p>
                            </div>
                          </div>
                          <div className="flex text-[#fbbc05] mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                className={`w-5 h-5 ${star <= (review.rating || 5) ? "fill-current" : "fill-gray-300"}`}
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <p className="text-base leading-relaxed text-gray-600 flex-1 overflow-y-auto">
                            "{review.text}"
                          </p>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
