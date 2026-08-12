import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getAuthToken, clearAuthSession, isAuthenticated, getAuthUser } from "@/lib/auth";
import { motion } from "framer-motion";
import { LayoutDashboard, LogOut, Loader2, Users, FolderKanban, Mail, Star } from "lucide-react";
import { ReviewsTab } from "@/components/dashboard/ReviewsTab";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("overview");
  const user = getAuthUser();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate({ to: "/login" });
      return;
    }

    fetchDashboardStats();
  }, [navigate]);

  const fetchDashboardStats = async () => {
    try {
      const token = getAuthToken();
      const res = await fetch("http://localhost:5000/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 401) {
        clearAuthSession();
        navigate({ to: "/login" });
        return;
      }

      if (!res.ok) throw new Error("Failed to load dashboard data");

      const data = await res.json();
      setStats(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    clearAuthSession();
    navigate({ to: "/login" });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-indigo-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <div className="w-64 border-r border-white/10 p-6 flex flex-col hidden md:flex">
        <div className="flex items-center space-x-3 mb-10">
          <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <LayoutDashboard className="h-4 w-4 text-white" />
          </div>
          <span className="font-medium text-lg tracking-tight">Admin</span>
        </div>

        <div className="space-y-2 flex-1">
          <NavItem
            active={activeTab === "overview"}
            onClick={() => setActiveTab("overview")}
            icon={<LayoutDashboard size={18} />}
            label="Overview"
          />
          <NavItem
            active={activeTab === "projects"}
            onClick={() => setActiveTab("projects")}
            icon={<FolderKanban size={18} />}
            label="Projects"
          />
          <NavItem
            active={activeTab === "contacts"}
            onClick={() => setActiveTab("contacts")}
            icon={<Mail size={18} />}
            label="Contacts"
          />
          <NavItem
            active={activeTab === "users"}
            onClick={() => setActiveTab("users")}
            icon={<Users size={18} />}
            label="Users"
          />
          <NavItem
            active={activeTab === "reviews"}
            onClick={() => setActiveTab("reviews")}
            icon={<Star size={18} />}
            label="Google Reviews"
          />
        </div>

        <div className="pt-6 border-t border-white/10 mt-auto">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-10 w-10 bg-zinc-800 rounded-full flex items-center justify-center text-sm font-medium">
              {user?.name?.charAt(0) || "A"}
            </div>
            <div>
              <p className="text-sm font-medium">{user?.name || "Admin"}</p>
              <p className="text-xs text-zinc-500">{user?.role || "SUPER_ADMIN"}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 text-zinc-300 py-2 rounded-lg transition-colors text-sm"
          >
            <LogOut size={16} />
            <span>Sign out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-light tracking-tight mb-2">Welcome back.</h1>
          <p className="text-zinc-400">Here's what's happening with your portfolio today.</p>
        </header>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl mb-8">
            {error}
          </div>
        )}

        {activeTab === "overview" && stats && (
          <div className="space-y-8">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard
                title="Total Projects"
                value={stats.totalProjects}
                icon={<FolderKanban className="text-indigo-400" />}
              />
              <StatCard
                title="Total Contacts"
                value={stats.totalContacts}
                icon={<Users className="text-purple-400" />}
              />
              <StatCard
                title="Unread Messages"
                value={stats.unreadContacts}
                icon={<Mail className="text-pink-400" />}
              />
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h2 className="text-xl font-medium mb-4 tracking-tight">Recent Projects</h2>
                <div className="space-y-4">
                  {stats.latestProjects?.length > 0 ? (
                    stats.latestProjects.map((project: any) => (
                      <div
                        key={project.id}
                        className="flex justify-between items-center p-3 rounded-xl bg-black/40 hover:bg-white/5 transition-colors"
                      >
                        <div>
                          <p className="font-medium text-sm">{project.title}</p>
                          <p className="text-xs text-zinc-500">{project.category}</p>
                        </div>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${project.status === "published" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"}`}
                        >
                          {project.status}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-zinc-500 text-sm">No projects yet.</p>
                  )}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h2 className="text-xl font-medium mb-4 tracking-tight">Recent Messages</h2>
                <div className="space-y-4">
                  {stats.latestContacts?.length > 0 ? (
                    stats.latestContacts.map((contact: any) => (
                      <div
                        key={contact.id}
                        className="p-3 rounded-xl bg-black/40 hover:bg-white/5 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-1">
                          <p className="font-medium text-sm">{contact.name}</p>
                          {!contact.isRead && (
                            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                          )}
                        </div>
                        <p className="text-xs text-zinc-400 truncate">{contact.subject}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-zinc-500 text-sm">No messages yet.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "reviews" && <ReviewsTab />}
      </div>
    </div>
  );
}

function NavItem({
  icon,
  label,
  active = false,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all ${active ? "bg-indigo-600/10 text-indigo-400" : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"}`}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

function StatCard({ title, value, icon }: { title: string; value: number; icon: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-6 opacity-20">{icon}</div>
      <p className="text-zinc-400 text-sm font-medium mb-2">{title}</p>
      <h3 className="text-4xl font-light tracking-tight">{value || 0}</h3>
    </motion.div>
  );
}
