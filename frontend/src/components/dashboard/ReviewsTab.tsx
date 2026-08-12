import { useState, useEffect } from "react";
import { getAuthToken } from "@/lib/auth";
import { Star, Loader2, CheckCircle2, XCircle, Trash2, RefreshCw } from "lucide-react";

export function ReviewsTab() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchReviewsData();
  }, []);

  const fetchReviewsData = async () => {
    setLoading(true);
    try {
      const token = getAuthToken();
      const res = await fetch("http://localhost:5000/reviews/google/admin", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch Google reviews data");
      }

      const data = await res.json();
      setReviews(data.reviews || []);
      setStats({
        totalReviews: data.totalReviews,
        averageRating: data.averageRating,
        fiveStarCount: data.fiveStarCount,
        fourStarCount: data.fourStarCount,
        lastSyncTime: data.lastSyncTime,
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSync = async () => {
    setSyncing(true);
    setError("");
    try {
      const token = getAuthToken();
      const res = await fetch("http://localhost:5000/reviews/google/sync", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to sync Google Reviews");
      }

      // Refresh the data after sync
      await fetchReviewsData();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSyncing(false);
    }
  };

  const togglePublish = async (id: string, currentStatus: boolean) => {
    try {
      const res = await fetch(`http://localhost:5000/reviews/google/${id}/publish`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAuthToken()}`,
        },
        body: JSON.stringify({ isPublished: !currentStatus }),
      });
      if (res.ok) fetchReviewsData();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteReview = async (id: string) => {
    if (!confirm("Are you sure you want to delete this review?")) return;
    try {
      const res = await fetch(`http://localhost:5000/reviews/google/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${getAuthToken()}` },
      });
      if (res.ok) fetchReviewsData();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 text-indigo-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-medium tracking-tight">Google Reviews</h1>
          <p className="text-zinc-400 text-sm mt-1">
            Manage and sync reviews from your Google Business Profile.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-xs text-zinc-500">
            Last Sync:{" "}
            {stats?.lastSyncTime ? new Date(stats.lastSyncTime).toLocaleString() : "Never"}
          </span>
          <button
            onClick={handleSync}
            disabled={syncing}
            className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {syncing ? <Loader2 size={16} className="animate-spin" /> : <RefreshCw size={16} />}
            <span>{syncing ? "Syncing..." : "Sync Now"}</span>
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl">
          {error}
        </div>
      )}

      {/* Stats Cards */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden">
            <p className="text-zinc-400 text-sm font-medium mb-2">Total Reviews</p>
            <h3 className="text-4xl font-light tracking-tight">{stats.totalReviews}</h3>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden">
            <p className="text-zinc-400 text-sm font-medium mb-2">Average Rating</p>
            <div className="flex items-center space-x-2">
              <h3 className="text-4xl font-light tracking-tight">
                {stats.averageRating ? stats.averageRating.toFixed(1) : "0.0"}
              </h3>
              <Star className="text-yellow-500 h-6 w-6 fill-yellow-500" />
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden">
            <p className="text-zinc-400 text-sm font-medium mb-2">5-Star Reviews</p>
            <h3 className="text-4xl font-light tracking-tight text-green-400">
              {stats.fiveStarCount}
            </h3>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden">
            <p className="text-zinc-400 text-sm font-medium mb-2">4-Star Reviews</p>
            <h3 className="text-4xl font-light tracking-tight text-indigo-400">
              {stats.fourStarCount}
            </h3>
          </div>
        </div>
      )}

      {/* Reviews Table */}
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-medium tracking-tight">Synced Reviews</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-white/10 text-zinc-400 text-sm">
                <th className="p-4 font-medium">Reviewer</th>
                <th className="p-4 font-medium">Rating</th>
                <th className="p-4 font-medium">Review Text</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-zinc-500">
                    No reviews synced yet. Click "Sync Now" to fetch reviews from Google.
                  </td>
                </tr>
              ) : (
                reviews.map((review) => (
                  <tr
                    key={review.id}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors text-sm"
                  >
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        {review.authorPhoto || review.profilePhotoUrl ? (
                          <img
                            src={review.authorPhoto || review.profilePhotoUrl}
                            alt={review.authorName}
                            className="w-8 h-8 rounded-full"
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                            {review.authorName?.charAt(0)}
                          </div>
                        )}
                        <div>
                          <span className="font-medium text-zinc-200 block">
                            {review.authorName}
                          </span>
                          <span className="text-xs text-zinc-500">{review.relativeTime}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-zinc-600"}`}
                          />
                        ))}
                      </div>
                    </td>
                    <td className="p-4 text-zinc-400 max-w-xs truncate" title={review.reviewText}>
                      {review.reviewText || <span className="italic">No text provided</span>}
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => togglePublish(review.id, review.isPublished)}
                        className={`px-3 py-1 text-xs rounded-full transition-colors flex items-center space-x-1 ${review.isPublished ? "bg-green-500/10 text-green-400 hover:bg-green-500/20" : "bg-zinc-500/10 text-zinc-400 hover:bg-zinc-500/20"}`}
                      >
                        {review.isPublished ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
                        <span>{review.isPublished ? "Published" : "Hidden"}</span>
                      </button>
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => deleteReview(review.id)}
                        className="p-2 text-zinc-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                        title="Delete Review"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
