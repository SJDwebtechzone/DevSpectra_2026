import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import HeroSection from "@/components/HeroSection";
import { ServicesCards } from "@/components/ServicesCards";
import { OngoingProjects } from "@/components/OngoingProjects";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FAQ } from "@/components/FAQ";
import { useState, useEffect, useRef } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DevSpectra — Software that feels inevitable" },
      {
        name: "description",
        content:
          "DevSpectra is a boutique engineering studio building websites, mobile apps, AI and cloud products for teams that care about craft.",
      },
      { property: "og:title", content: "DevSpectra — Software that feels inevitable" },
      {
        property: "og:description",
        content:
          "Boutique engineering studio for web, mobile, AI and cloud. Senior team, transparent process, work that ships and stays.",
      },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "DevSpectra — Software that feels inevitable" },
      {
        name: "twitter:description",
        content:
          "Boutique engineering studio for web, mobile, AI and cloud. Work that ships and stays.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
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
        text: "Very excellent service, nice speech Thank you Thank you very much 🙏"
      },
      {
        authorName: "Vigneswari Arun",
        relativeTime: "6 months ago",
        rating: 5,
        text: "I had a great experience working with this team. On time delivery and I'm very satisfied with the work. Thank you to the entire team and support and effort."
      },
      {
        authorName: "Vedarajan “Sekar” Sekar",
        relativeTime: "7 months ago",
        rating: 5,
        text: "I Really Appreciate their Commitment towards their core in perfection in completing the project, We personally had a great time in sharing our knowledge to attain the Success in Developing the portal.....Thank you Team "
      }
    ]
  };
  const loading = false;
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    const scrollContainer = scrollRef.current;
    let isHovered = false;
    let floatScrollLeft = 0;

    if (!scrollContainer) return;

    floatScrollLeft = scrollContainer.scrollLeft;

    const scrollStep = () => {
      if (!isHovered) {
        floatScrollLeft += 0.5; // Auto-scroll speed
        scrollContainer.scrollLeft = floatScrollLeft;

        // Reset to start when reaching the end of the scroll width
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth - 5)) {
            scrollContainer.scrollLeft = 0;
            floatScrollLeft = 0;
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
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <img src="/about.png" alt="About DevSpectra" className="w-full max-w-[500px] h-auto object-contain drop-shadow-xl rounded-2xl" />
            </div>
            <div className="w-full lg:w-1/2 text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-[#4A3628] mb-8 leading-[1.1]">
                DIGITAL EXPERIENCES, <br />
                <span className="font-serif italic font-normal tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">built for what’s next.</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-[1.35rem] text-gray-600 leading-relaxed font-medium max-w-2xl text-justify">
                We design and develop modern digital products, from high-performance websites and web applications to mobile experiences and growth-focused solutions, helping ambitious businesses turn ideas into products that perform, scale, and stand out.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServicesCards />
      <OngoingProjects />
      <WhyChooseUs />
      <FAQ />

      <section className="pb-24 bg-white">
        <div className="container-page">

          {/* Google Reviews Section */}
          <div className="pt-8 border-t" style={{ borderColor: "var(--color-page-border)" }}>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              {/* Summary Block (Fixed) */}
              <div className="w-full lg:w-[280px] shrink-0 flex flex-col justify-center py-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100">
                    <svg
                      viewBox="0 0 24 24"
                      width="28"
                      height="28"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl" style={{ color: "var(--color-page-text)" }}>
                      Google Reviews
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl font-black" style={{ color: "var(--color-page-text)" }}>
                    {averageRating}
                  </span>
                  <div className="flex text-[#fbbc05]">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className={`w-6 h-6 ${i <= averageRating ? 'fill-current' : 'fill-gray-300'}`} viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-base text-gray-500 mb-6">
                  Based on {totalReviews} reviews
                </p>
                <a
                  href="https://search.google.com/local/writereview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-base hover:underline text-left mt-auto inline-flex items-center text-blue-600"
                >
                  Write a review
                </a>
              </div>

              {/* Auto Scrolling Reviews Area */}
              <div 
                ref={scrollRef}
                className="w-full flex-1 overflow-x-auto overflow-y-hidden relative -mx-6 px-6 lg:mx-0 lg:px-0 py-4 scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <div className="flex gap-6 w-max pl-6 lg:pl-0">
                  {/* Duplicate array for seamless infinite scroll */}
                  {[...reviews, ...reviews, ...reviews, ...reviews].map((review: any, i: number) => (
                    <div
                      key={i}
                      className="shrink-0 w-[300px] sm:w-[350px] p-8 rounded-[2rem] border shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col"
                      style={{
                        borderColor: "var(--color-page-border)",
                        background: "var(--color-surface)",
                      }}
                    >
                      <div className="flex items-center gap-4 mb-5">
                        {review.authorPhoto ? (
                          <img src={review.authorPhoto} alt={review.authorName || review.name} className="w-12 h-12 rounded-full shadow-sm" />
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
                          <p className="text-sm font-medium" style={{ color: "var(--color-page-muted)" }}>
                            {review.relativeTime || review.time}
                          </p>
                        </div>
                      </div>
                      <div className="flex text-[#fbbc05] mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className={`w-5 h-5 ${star <= (review.rating || 5) ? 'fill-current' : 'fill-gray-300'}`} viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p
                        className="text-base leading-relaxed text-gray-600 flex-1 overflow-y-auto"
                      >
                        "{review.text}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
