import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { useState, useEffect } from "react";

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
  const [reviewsData, setReviewsData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/reviews/google")
      .then((res) => res.json())
      .then((data) => {
        setReviewsData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load reviews", err);
        setLoading(false);
      });
  }, []);

  const averageRating = reviewsData?.averageRating || 0;
  const totalReviews = reviewsData?.totalReviews || 0;
  const reviews = reviewsData?.reviews || [];

  return (
    <PageShell mode="home">
      <section className="section-y">
        <div className="container-page">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium"
            style={{ borderColor: "var(--color-page-border)", color: "var(--color-page-muted)" }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--color-page-accent)" }}
            />
            New — AI engineering practice now live
          </span>

          <h1 className="display-1 mt-6 max-w-5xl">
            Software that feels{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--color-page-accent), var(--color-page-accent-2))",
              }}
            >
              inevitable.
            </span>
          </h1>

          <p className="lead mt-6 max-w-2xl">
            DevSpectra is a boutique engineering studio building websites, mobile apps, AI and cloud
            products for teams that care about craft.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-pill btn-accent">
              Get Free Consultation
            </Link>
            <Link to="/portfolio" className="btn-pill btn-ghost">
              View Portfolio
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {["React", "Next.js", "Node", "AWS", "Flutter", "PostgreSQL"].map((t) => (
              <span
                key={t}
                className="rounded-full border px-3 py-1 text-xs"
                style={{
                  borderColor: "var(--color-page-border)",
                  color: "var(--color-page-muted)",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Google Reviews Section */}
          <div className="mt-32 pt-16 border-t" style={{ borderColor: "var(--color-page-border)" }}>
            <div className="flex flex-col md:flex-row gap-12 items-start">
              {/* Summary */}
              <div className="md:w-1/3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
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
                    <h3 className="font-bold text-lg" style={{ color: "var(--color-page-text)" }}>
                      Google Reviews
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl font-black" style={{ color: "var(--color-page-text)" }}>
                    {averageRating}
                  </span>
                  <div className="flex text-[#fbbc05]">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className={`w-5 h-5 ${i <= averageRating ? 'fill-current' : 'fill-gray-300'}`} viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm" style={{ color: "var(--color-page-muted)" }}>
                  Based on {totalReviews} reviews
                </p>
                <button
                  className="mt-6 font-medium text-sm hover:underline"
                  style={{ color: "var(--color-page-accent)" }}
                >
                  Write a review
                </button>
              </div>

              {/* Reviews Grid */}
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {loading ? (
                  <div className="p-6 text-center text-sm" style={{ color: "var(--color-page-muted)" }}>
                    Loading reviews...
                  </div>
                ) : reviews.length === 0 ? (
                  <div className="p-6 text-center text-sm" style={{ color: "var(--color-page-muted)" }}>
                    No reviews published yet.
                  </div>
                ) : (
                  reviews.map((review: any, i: number) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl border"
                      style={{
                        borderColor: "var(--color-page-border)",
                        background: "var(--color-surface)",
                      }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        {review.authorPhoto ? (
                          <img src={review.authorPhoto} alt={review.authorName || review.name} className="w-10 h-10 rounded-full" />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center font-bold text-gray-600">
                            {(review.authorName || review.name)?.charAt(0)}
                          </div>
                        )}
                        <div>
                          <h4
                            className="font-semibold text-sm"
                            style={{ color: "var(--color-page-text)" }}
                          >
                            {review.authorName || review.name}
                          </h4>
                          <p className="text-xs" style={{ color: "var(--color-page-muted)" }}>
                            {review.relativeTime || review.time}
                          </p>
                        </div>
                      </div>
                      <div className="flex text-[#fbbc05] mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className={`w-4 h-4 ${star <= (review.rating || 5) ? 'fill-current' : 'fill-gray-300'}`} viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--color-page-text)" }}
                      >
                        "{review.text}"
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
