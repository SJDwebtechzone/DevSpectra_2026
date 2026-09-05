import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getAuthToken, clearAuthSession, isAuthenticated, getAuthUser } from "@/lib/auth";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  LogOut, 
  Loader2, 
  Users, 
  FolderKanban, 
  Mail, 
  Star,
  ChevronDown,
  Globe,
  Smartphone,
  TrendingUp,
  Palette,
  ShoppingBag,
  Plus,
  ExternalLink,
  X,
  CheckCircle,
  Pencil,
  Trash2,
  AlertTriangle,
  Power,
  Upload,
  Image as ImageIcon,
  MapPin
} from "lucide-react";
import { ReviewsTab } from "@/components/dashboard/ReviewsTab";
import { toast } from "sonner";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

const compressImageFile = (file: File, maxWidth = 1200, quality = 0.82): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(event.target?.result as string);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        const compressedDataUrl = canvas.toDataURL("image/jpeg", quality);
        resolve(compressedDataUrl);
      };
      img.onerror = () => resolve(event.target?.result as string);
      img.src = event.target?.result as string;
    };
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
};

const portfolioCategories = [
  { name: "Website", slug: "website", icon: Globe },
  { name: "Mobile App", slug: "mobile-app", icon: Smartphone },
  { name: "Digital Marketing", slug: "digital-marketing", icon: TrendingUp },
  { name: "UI/UX Design", slug: "uiux-design", icon: Palette },
  { name: "E-Commerce", slug: "e-commerce", icon: ShoppingBag },
];

function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState<any>(null);
  const [dbProjects, setDbProjects] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [contactSubTab, setContactSubTab] = useState<"submissions" | "builder" | "locations">("submissions");
  const [formFields, setFormFields] = useState<any[]>([]);
  const [isAddFieldModalOpen, setIsAddFieldModalOpen] = useState(false);
  const [fieldFormData, setFieldFormData] = useState({
    label: "",
    type: "text",
    placeholder: "",
    optionsStr: "",
    isRequired: true,
    halfWidth: false,
  });
  const [editingField, setEditingField] = useState<any | null>(null);
  const [editFieldFormData, setEditFieldFormData] = useState({
    label: "",
    type: "text",
    placeholder: "",
    optionsStr: "",
    isRequired: true,
    halfWidth: false,
  });

  // Office Location Management State
  const [officeLocations, setOfficeLocations] = useState<any[]>([]);
  const [isAddLocationModalOpen, setIsAddLocationModalOpen] = useState(false);
  const [locationFormData, setLocationFormData] = useState({
    name: "",
    city: "",
    address: "",
    phone: "+0123-456-789",
    hours: "Mon - Fri : 10:00 - 20:00 IST",
    status: "Open Now",
    embedUrl: "",
    directUrl: "",
    isPrimary: false,
  });
  const [editingLocation, setEditingLocation] = useState<any | null>(null);
  const [editLocationFormData, setEditLocationFormData] = useState({
    name: "",
    city: "",
    address: "",
    phone: "",
    hours: "",
    status: "Open Now",
    embedUrl: "",
    directUrl: "",
    isPrimary: false,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("overview");

  // Modal State for Adding Portfolio Item
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "Website",
    description: "",
    technologies: "React, Node.js",
    imageUrl: "/portfolio/website-1.jpg",
    liveUrl: "https://devspectra.com",
    status: "published",
  });

  // Modal State for Editing Portfolio Item
  const [editingProject, setEditingProject] = useState<any | null>(null);
  const [editFormData, setEditFormData] = useState({
    id: "",
    title: "",
    category: "Website",
    description: "",
    technologies: "",
    imageUrl: "",
    liveUrl: "",
    status: "published",
  });

  // Modal State for Deleting Portfolio Item
  const [deletingProject, setDeletingProject] = useState<any | null>(null);

  const user = getAuthUser();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate({ to: "/login" });
      return;
    }

    fetchDashboardStats();
    fetchProjects();
    fetchContacts();
    fetchFormFields();
    fetchOfficeLocations();
  }, [navigate]);

  const fetchOfficeLocations = async () => {
    try {
      const res = await fetch("http://localhost:5000/contacts/locations");
      if (res.ok) {
        const data = await res.json();
        setOfficeLocations(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      console.error("Failed to fetch office locations", err);
    }
  };

  const handleAddLocationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!locationFormData.name || !locationFormData.address) {
      toast.error("Please fill in office name and full address");
      return;
    }

    try {
      const token = getAuthToken();
      const payload = {
        ...locationFormData,
        embedUrl:
          locationFormData.embedUrl ||
          `https://maps.google.com/maps?q=${encodeURIComponent(locationFormData.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`,
        directUrl:
          locationFormData.directUrl ||
          `https://maps.google.com/?q=${encodeURIComponent(locationFormData.address)}`,
      };

      const res = await fetch("http://localhost:5000/contacts/locations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        if (res.status === 401) {
          clearAuthSession();
          navigate({ to: "/login" });
          throw new Error("Session expired. Please log in again.");
        }
        const errData = await res.json().catch(() => ({}));
        const errMsg = Array.isArray(errData.message) ? errData.message.join(", ") : errData.message;
        throw new Error(errMsg || "Failed to create location");
      }

      toast.success("Office location added successfully!");
      setIsAddLocationModalOpen(false);
      setLocationFormData({
        name: "",
        city: "",
        address: "",
        phone: "+0123-456-789",
        hours: "Mon - Fri : 10:00 - 20:00 IST",
        status: "Open Now",
        embedUrl: "",
        directUrl: "",
        isPrimary: false,
      });
      fetchOfficeLocations();
    } catch (err: any) {
      toast.error(err.message || "Error adding location");
    }
  };

  const openEditLocationModal = (loc: any) => {
    setEditingLocation(loc);
    setEditLocationFormData({
      name: loc.name || "",
      city: loc.city || "",
      address: loc.address || "",
      phone: loc.phone || "",
      hours: loc.hours || "",
      status: loc.status || "Open Now",
      embedUrl: loc.embedUrl || "",
      directUrl: loc.directUrl || "",
      isPrimary: !!loc.isPrimary,
    });
  };

  const handleEditLocationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingLocation) return;

    try {
      const token = getAuthToken();
      const payload = {
        ...editLocationFormData,
        embedUrl:
          editLocationFormData.embedUrl ||
          `https://maps.google.com/maps?q=${encodeURIComponent(editLocationFormData.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`,
        directUrl:
          editLocationFormData.directUrl ||
          `https://maps.google.com/?q=${encodeURIComponent(editLocationFormData.address)}`,
      };

      const res = await fetch(`http://localhost:5000/contacts/locations/${editingLocation.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        if (res.status === 401) {
          clearAuthSession();
          navigate({ to: "/login" });
          throw new Error("Session expired. Please log in again.");
        }
        const errData = await res.json().catch(() => ({}));
        const errMsg = Array.isArray(errData.message) ? errData.message.join(", ") : errData.message;
        throw new Error(errMsg || "Failed to update location");
      }

      toast.success("Office location updated successfully!");
      setEditingLocation(null);
      fetchOfficeLocations();
    } catch (err: any) {
      toast.error(err.message || "Error updating location");
    }
  };

  const handleDeleteLocation = async (id: string) => {
    if (!confirm("Are you sure you want to delete this office location?")) return;
    try {
      const token = getAuthToken();
      const res = await fetch(`http://localhost:5000/contacts/locations/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to delete location");
      toast.success("Office location deleted");
      fetchOfficeLocations();
    } catch (err) {
      toast.error("Failed to delete location");
    }
  };

  const handleSetPrimaryLocation = async (id: string) => {
    try {
      const token = getAuthToken();
      const res = await fetch(`http://localhost:5000/contacts/locations/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ isPrimary: true }),
      });
      if (!res.ok) throw new Error("Failed to update primary location");
      toast.success("Set as primary footer map!");
      fetchOfficeLocations();
    } catch (err) {
      toast.error("Failed to update primary location");
    }
  };

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
      setError("");
    } finally {
      setLoading(false);
    }
  };

  const fetchProjects = async () => {
    try {
      const res = await fetch("http://localhost:5000/projects");
      if (res.ok) {
        const data = await res.json();
        setDbProjects(data);
      }
    } catch (err) {
      console.error("Failed to fetch backend projects", err);
    }
  };

  const fetchContacts = async () => {
    try {
      const token = getAuthToken();
      const res = await fetch("http://localhost:5000/contacts", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setContacts(data);
      }
    } catch (err) {
      console.error("Failed to fetch contacts", err);
    }
  };

  const handleDeleteContact = async (id: string) => {
    try {
      const token = getAuthToken();
      const res = await fetch(`http://localhost:5000/contacts/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        toast.success("Contact submission deleted");
        setContacts((prev) => prev.filter((c) => c.id !== id));
        fetchDashboardStats();
      }
    } catch (err) {
      toast.error("Failed to delete contact submission");
    }
  };

  const handleToggleReadStatus = async (id: string) => {
    try {
      const token = getAuthToken();
      const res = await fetch(`http://localhost:5000/contacts/${id}/read`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const updated = await res.json();
        toast.success(updated.isRead ? "Marked as Read" : "Marked as Unread");
        setContacts((prev) =>
          prev.map((c) => (c.id === id ? { ...c, isRead: updated.isRead } : c))
        );
        fetchDashboardStats();
      }
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  const fetchFormFields = async () => {
    try {
      const token = getAuthToken();
      const res = await fetch("http://localhost:5000/contacts/fields/admin", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setFormFields(data);
      }
    } catch (err) {
      console.error("Failed to fetch form fields", err);
    }
  };

  const handleAddFieldSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fieldFormData.label) {
      toast.error("Please enter a field label");
      return;
    }

    try {
      const token = getAuthToken();
      const optionsArray = fieldFormData.optionsStr
        .split(",")
        .map((o) => o.trim())
        .filter(Boolean);

      const payload = {
        label: fieldFormData.label,
        type: fieldFormData.type,
        placeholder: fieldFormData.placeholder || `${fieldFormData.label}${fieldFormData.isRequired ? " *" : ""}`,
        options: fieldFormData.type === "select" ? optionsArray : undefined,
        isRequired: fieldFormData.isRequired,
        halfWidth: fieldFormData.halfWidth,
        isActive: true,
      };

      const res = await fetch("http://localhost:5000/contacts/fields", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to create field");

      toast.success("New form field added!");
      setIsAddFieldModalOpen(false);
      setFieldFormData({ label: "", type: "text", placeholder: "", optionsStr: "", isRequired: true, halfWidth: false });
      fetchFormFields();
    } catch (err: any) {
      toast.error(err.message || "Failed to add field");
    }
  };

  const handleToggleFieldStatus = async (id: string, currentActive: boolean) => {
    try {
      const token = getAuthToken();
      const res = await fetch(`http://localhost:5000/contacts/fields/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ isActive: !currentActive }),
      });
      if (res.ok) {
        toast.success(`Field marked as ${!currentActive ? "Active" : "Inactive"}`);
        setFormFields((prev) =>
          prev.map((f) => (f.id === id ? { ...f, isActive: !currentActive } : f))
        );
      }
    } catch (err) {
      toast.error("Failed to toggle field status");
    }
  };

  const handleDeleteField = async (id: string) => {
    try {
      const token = getAuthToken();
      const res = await fetch(`http://localhost:5000/contacts/fields/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        toast.success("Form field deleted");
        setFormFields((prev) => prev.filter((f) => f.id !== id));
      }
    } catch (err) {
      toast.error("Failed to delete form field");
    }
  };

  const openEditFieldModal = (field: any) => {
    setEditingField(field);
    setEditFieldFormData({
      label: field.label || "",
      type: field.type || "text",
      placeholder: field.placeholder || "",
      optionsStr: (field.options || []).join(", "),
      isRequired: field.isRequired ?? true,
      halfWidth: field.halfWidth ?? false,
    });
  };

  const handleEditFieldSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingField) return;

    try {
      const token = getAuthToken();
      const optionsArray = editFieldFormData.optionsStr
        .split(",")
        .map((o) => o.trim())
        .filter(Boolean);

      const payload = {
        label: editFieldFormData.label,
        type: editFieldFormData.type,
        placeholder: editFieldFormData.placeholder,
        options: editFieldFormData.type === "select" ? optionsArray : undefined,
        isRequired: editFieldFormData.isRequired,
        halfWidth: editFieldFormData.halfWidth,
      };

      const res = await fetch(`http://localhost:5000/contacts/fields/${editingField.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to update field");

      toast.success("Form field updated!");
      setEditingField(null);
      fetchFormFields();
    } catch (err: any) {
      toast.error(err.message || "Failed to update field");
    }
  };

  // Add Portfolio Item
  const handleAddProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description) {
      toast.error("Please fill in required fields");
      return;
    }

    setIsSubmitting(true);
    try {
      const token = getAuthToken();
      const slug = formData.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      const techArray = formData.technologies
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

      const getCategoryDefaultImage = (catName: string) => {
        const cat = (catName || "").toLowerCase();
        if (cat.includes("mobile")) return "/portfolio/mobile-1.jpg";
        if (cat.includes("commerce")) return "/portfolio/ecommerce-1.jpg";
        if (cat.includes("ui") || cat.includes("ux") || cat.includes("design")) return "/portfolio/uiux-1.jpg";
        if (cat.includes("marketing")) return "/portfolio/digital-1.jpg";
        return "/portfolio/website-1.jpg";
      };

      const payload = {
        title: formData.title,
        slug,
        description: formData.description,
        category: formData.category,
        technologies: techArray,
        thumbnail: formData.imageUrl || getCategoryDefaultImage(formData.category),
        liveUrl: formData.liveUrl,
        status: formData.status,
        isOngoing: formData.status === "ongoing",
      };

      const res = await fetch("http://localhost:5000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Failed to create project");
      }

      const newProject = await res.json();
      toast.success("Portfolio item added successfully!");
      setDbProjects((prev) => [newProject, ...prev]);
      setIsAddModalOpen(false);

      // Reset form
      setFormData({
        title: "",
        category: "Website",
        description: "",
        technologies: "React, Node.js",
        imageUrl: "/portfolio/website-1.jpg",
        liveUrl: "https://devspectra.com",
        status: "published",
      });

      fetchDashboardStats();
    } catch (err: any) {
      toast.error(err.message || "Error adding item");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Open Edit Modal
  const openEditModal = (project: any) => {
    setEditingProject(project);
    setEditFormData({
      id: project.id,
      title: project.title || "",
      category: project.category || "Website",
      description: project.desc || project.description || "",
      technologies: Array.isArray(project.rawTechnologies) 
        ? project.rawTechnologies.join(", ")
        : project.tech || "",
      imageUrl: project.img || project.thumbnail || "",
      liveUrl: project.liveUrl || "",
      status: project.status || "published",
    });
  };

  // Edit Portfolio Item Submit
  const handleEditProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editFormData.title || !editFormData.id) return;

    setIsSubmitting(true);
    try {
      const token = getAuthToken();
      const techArray = editFormData.technologies
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

      const payload = {
        title: editFormData.title,
        category: editFormData.category,
        description: editFormData.description,
        technologies: techArray,
        thumbnail: editFormData.imageUrl,
        liveUrl: editFormData.liveUrl,
        status: editFormData.status,
        isOngoing: editFormData.status === "ongoing",
      };

      const res = await fetch(`http://localhost:5000/projects/${editFormData.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Failed to update project");
      }

      const updated = await res.json();
      toast.success("Portfolio item updated!");
      
      setDbProjects((prev) =>
        prev.map((item) => (item.id === updated.id ? updated : item))
      );
      setEditingProject(null);
      fetchDashboardStats();
    } catch (err: any) {
      toast.error(err.message || "Error updating item");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Quick Toggle Active / Inactive
  const toggleActiveStatus = async (project: any) => {
    const isCurrentlyActive = (project.status || "published") === "published" || (project.status === "active");
    const newStatus = isCurrentlyActive ? "inactive" : "published";

    if (!project.id) {
      setDbProjects((prev) =>
        prev.map((item) => (item.title === project.title ? { ...item, status: newStatus } : item))
      );
      toast.success(newStatus === "published" ? "Item set to Active" : "Item set to Inactive");
      return;
    }

    try {
      const token = getAuthToken();
      const res = await fetch(`http://localhost:5000/projects/${project.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) throw new Error("Failed to update status");

      const updated = await res.json();
      setDbProjects((prev) =>
        prev.map((item) => (item.id === updated.id ? updated : item))
      );
      toast.success(
        newStatus === "published"
          ? "Item Active (Visible on website)"
          : "Item Inactive (Hidden from website)"
      );
    } catch (err: any) {
      toast.error(err.message || "Could not toggle status");
    }
  };

  // Delete Portfolio Item Submit
  const handleDeleteProjectSubmit = async () => {
    if (!deletingProject) return;

    if (!deletingProject.id) {
      toast.success(`'${deletingProject.title}' deleted`);
      setDeletingProject(null);
      return;
    }

    setIsSubmitting(true);
    try {
      const token = getAuthToken();
      const res = await fetch(`http://localhost:5000/projects/${deletingProject.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to delete project");

      toast.success("Portfolio item deleted successfully!");
      setDbProjects((prev) => prev.filter((p) => p.id !== deletingProject.id));
      setDeletingProject(null);
      fetchDashboardStats();
    } catch (err: any) {
      toast.error(err.message || "Error deleting item");
    } finally {
      setIsSubmitting(false);
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

  const currentCategorySlug = activeTab.startsWith("portfolio:")
    ? activeTab.split(":")[1]
    : "all";

  // Combine DB projects and static projects
  const allDisplayProjects = [
    ...dbProjects.map((p) => ({
      id: p.id,
      title: p.title,
      slug:
        p.category === "Mobile App"
          ? "mobile-app"
          : p.category === "Digital Marketing"
          ? "digital-marketing"
          : p.category === "UI/UX Design"
          ? "uiux-design"
          : p.category === "E-Commerce"
          ? "e-commerce"
          : "website",
      category: p.category,
      desc: p.description,
      img: p.thumbnail || "/portfolio/website-1.jpg",
      tech: Array.isArray(p.technologies) ? p.technologies.join(", ") : p.technologies || "Tech",
      rawTechnologies: p.technologies,
      status: p.status || "published",
      isCustom: true,
      liveUrl: p.liveUrl,
    })),
    ...samplePortfolioProjects,
  ];

  return (
    <div className="min-h-screen bg-black text-white flex relative">
      {/* Sidebar */}
      <div className="w-64 border-r border-white/10 p-6 flex flex-col hidden md:flex shrink-0">
        <div className="flex items-center space-x-3 mb-10">
          <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <LayoutDashboard className="h-4 w-4 text-white" />
          </div>
          <span className="font-medium text-lg tracking-tight">Admin</span>
        </div>

        <div className="space-y-2 flex-1 overflow-y-auto pr-1">
          <NavItem
            active={activeTab === "overview"}
            onClick={() => setActiveTab("overview")}
            icon={<LayoutDashboard size={18} />}
            label="Overview"
          />

          <NavItem
            active={activeTab.startsWith("portfolio")}
            onClick={() => setActiveTab("portfolio")}
            icon={<FolderKanban size={18} />}
            label="Portfolio"
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
            className="w-full flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 text-zinc-300 py-2 rounded-lg transition-colors text-sm cursor-pointer"
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

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard
                title="Total Portfolio Items"
                value={stats?.totalProjects || allDisplayProjects.length}
                icon={<FolderKanban className="text-indigo-400" />}
              />
              <StatCard
                title="Active Office Locations"
                value={officeLocations.length || 1}
                icon={<MapPin className="text-emerald-400" />}
              />
              <StatCard
                title="Form Fields Configured"
                value={formFields.length || 5}
                icon={<Pencil className="text-purple-400" />}
              />
            </div>

            {/* Recent Activity */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-medium mb-4 tracking-tight">Recent Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {allDisplayProjects.slice(0, 4).map((project: any, idx: number) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-4 rounded-xl bg-black/40 hover:bg-white/5 transition-colors border border-white/5"
                  >
                    <div>
                      <p className="font-medium text-sm text-white">{project.title}</p>
                      <p className="text-xs text-zinc-400 mt-0.5">{project.category}</p>
                    </div>
                    <span className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {project.status || "published"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Portfolio Management View (Dropdown Sub-items) */}
        {activeTab.startsWith("portfolio") && (
          <div className="space-y-6">
            {/* Header & Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/5 border border-white/10 rounded-2xl p-6">
              <div>
                <h2 className="text-2xl font-semibold text-white capitalize flex items-center gap-2">
                  <FolderKanban className="text-indigo-400 h-6 w-6" />
                  {currentCategorySlug === "all"
                    ? "All Portfolio Items"
                    : `${
                        portfolioCategories.find((c) => c.slug === currentCategorySlug)?.name ||
                        currentCategorySlug
                      } Portfolio`}
                </h2>
                <p className="text-sm text-zinc-400 mt-1">
                  Manage items, edit, delete, and control active/inactive showcase status.
                </p>
              </div>

              <button
                onClick={() => setIsAddModalOpen(true)}
                className="btn-pill bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm transition-all shadow-lg hover:shadow-indigo-500/25 cursor-pointer self-start sm:self-auto"
              >
                <Plus size={18} />
                <span>Add Portfolio Item</span>
              </button>
            </div>

            {/* Filter Category Tabs */}
            <div className="flex flex-wrap gap-2 pb-2">
              <button
                onClick={() => setActiveTab("portfolio")}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                  currentCategorySlug === "all"
                    ? "bg-indigo-600 text-white"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
                }`}
              >
                All Categories
              </button>
              {portfolioCategories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = currentCategorySlug === cat.slug;
                return (
                  <button
                    key={cat.slug}
                    onClick={() => setActiveTab(`portfolio:${cat.slug}`)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-medium flex items-center gap-2 transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-indigo-600 text-white"
                        : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon size={14} />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allDisplayProjects
                .filter((p) => {
                  if (currentCategorySlug === "all") return true;
                  return p.slug === currentCategorySlug;
                })
                .map((project, idx) => {
                  const isActive = (project.status || "published") === "published" || project.status === "active";
                  return (
                    <motion.div
                      key={project.id || idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`bg-white/5 border rounded-2xl overflow-hidden transition-all flex flex-col group relative ${
                        isActive ? "border-white/10 hover:border-indigo-500/50" : "border-red-500/20 opacity-75"
                      }`}
                    >
                      <div className="h-44 bg-zinc-900 overflow-hidden relative">
                        <img
                          src={project.img}
                          alt={project.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 flex gap-1.5 items-center z-20">
                          {/* Active / Inactive Status Badge */}
                          <button
                            type="button"
                            onClick={() => toggleActiveStatus(project)}
                            title={isActive ? "Click to set Inactive (hide from website)" : "Click to set Active (show on website)"}
                            className={`px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase flex items-center gap-1.5 backdrop-blur-md cursor-pointer transition-all duration-200 shadow-xl ${
                              isActive
                                ? "bg-black/90 text-emerald-400 border border-emerald-500/70 hover:bg-emerald-950/90"
                                : "bg-black/90 text-rose-400 border border-rose-500/70 hover:bg-rose-950/90"
                            }`}
                          >
                            <span className={`w-2 h-2 rounded-full ${isActive ? "bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" : "bg-rose-500 shadow-[0_0_8px_#f43f5e]"}`} />
                            <span>{isActive ? "ACTIVE" : "INACTIVE"}</span>
                          </button>

                          {project.isCustom && (
                            <span className="px-2 py-0.5 rounded text-[9px] font-extrabold tracking-wider uppercase bg-indigo-600 text-white shadow-md">
                              New
                            </span>
                          )}
                        </div>

                        {/* Category Badge */}
                        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-black/70 backdrop-blur-md border border-white/10 text-indigo-300">
                          {project.category}
                        </span>

                        {/* Hover Action Overlay Buttons (Edit & Delete) */}
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
                          <button
                            onClick={() => openEditModal(project)}
                            className="w-10 h-10 rounded-xl bg-white/10 hover:bg-indigo-600 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
                            title="Edit Project"
                          >
                            <Pencil size={16} />
                          </button>

                          <button
                            onClick={() => setDeletingProject(project)}
                            className="w-10 h-10 rounded-xl bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
                            title="Delete Project"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <h3 className="font-semibold text-lg text-white">{project.title}</h3>
                          </div>
                          <p className="text-xs text-zinc-400 leading-relaxed mb-4">{project.desc}</p>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
                          <span className="text-zinc-500 font-mono">{project.tech}</span>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => toggleActiveStatus(project)}
                              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                                isActive
                                  ? "bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25 border border-emerald-500/30"
                                  : "bg-rose-500/15 text-rose-400 hover:bg-rose-500/25 border border-rose-500/30"
                              }`}
                            >
                              <Power size={11} />
                              <span>{isActive ? "Active (On Site)" : "Inactive (Hidden)"}</span>
                            </button>
                            <a
                              href="/portfolio"
                              target="_blank"
                              rel="noreferrer"
                              className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-medium"
                            >
                              Preview <ExternalLink size={12} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
            </div>
          </div>
        )}

        {/* Google Reviews Tab */}
        {activeTab === "reviews" && <ReviewsTab />}

        {/* Contacts Tab */}
        {activeTab === "contacts" && (
          <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between bg-white/5 border border-white/10 rounded-2xl p-6 gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                  <Mail className="text-pink-400 h-6 w-6" />
                  Contact Form Builder
                </h2>
                <p className="text-zinc-400 text-sm mt-1">
                  Add, edit, toggle, or delete fields that appear on your website Contact Us page. All inquiries are sent directly to your client email.
                </p>
              </div>

              <button
                onClick={() => setIsAddFieldModalOpen(true)}
                className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-indigo-600/20 shrink-0"
              >
                <Plus size={16} />
                <span>Add Custom Field</span>
              </button>
            </div>

            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(Array.isArray(formFields) ? formFields : []).map((field) => (
                <div
                  key={field.id}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between gap-4 hover:border-indigo-500/30 transition-all"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-semibold text-white text-base flex items-center gap-2">
                        {field.label}
                        {field.isRequired && <span className="text-red-400 text-xs">*</span>}
                      </h4>

                      <div className="flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          {field.type}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-zinc-800 text-zinc-400 border border-zinc-700">
                          {field.halfWidth ? "50% Width" : "Full Width"}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs font-mono text-zinc-400">
                      Placeholder: <span className="text-zinc-300">{field.placeholder || "Default"}</span>
                    </p>

                    {field.options && field.options.length > 0 && (
                      <div className="text-xs font-mono text-zinc-400 pt-1">
                        Dropdown Options:
                        <div className="flex flex-wrap gap-1 mt-1">
                          {field.options.map((opt: string, i: number) => (
                            <span key={i} className="bg-black/40 text-zinc-300 px-2 py-0.5 rounded text-[11px] border border-white/10">
                              {opt}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <button
                      onClick={() => handleToggleFieldStatus(field.id, field.isActive)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                        field.isActive
                          ? "bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25 border border-emerald-500/30"
                          : "bg-rose-500/15 text-rose-400 hover:bg-rose-500/25 border border-rose-500/30"
                      }`}
                    >
                      <Power size={13} />
                      <span>{field.isActive ? "Active (On Website)" : "Inactive (Hidden)"}</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openEditFieldModal(field)}
                        className="p-2 rounded-lg bg-white/5 hover:bg-indigo-500/20 text-zinc-400 hover:text-indigo-300 transition-colors cursor-pointer"
                        title="Edit Field & Dropdown Options"
                      >
                        <Pencil size={15} />
                      </button>

                      <button
                        onClick={() => handleDeleteField(field.id)}
                        className="p-2 rounded-lg bg-white/5 hover:bg-red-500/20 text-zinc-400 hover:text-red-400 transition-colors cursor-pointer"
                        title="Delete Field"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Office Locations & Google Maps Manager */}
            <div className="pt-10 border-t border-white/10 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between bg-white/5 border border-white/10 rounded-2xl p-6 gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                    <MapPin className="text-emerald-400 h-6 w-6" />
                    Office Locations & Google Maps Manager
                  </h2>
                  <p className="text-zinc-400 text-sm mt-1">
                    Manage your dynamic office branches (Chennai, Kanchipuram, or new locations). Change addresses, map embeds, or select which location appears in your website footer map.
                  </p>
                </div>

                <button
                  onClick={() => setIsAddLocationModalOpen(true)}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-emerald-600/20 shrink-0"
                >
                  <Plus size={16} />
                  <span>Add Office Location</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(Array.isArray(officeLocations) ? officeLocations : []).map((loc) => (
                  <div
                    key={loc.id}
                    className={`bg-white/5 border rounded-2xl p-6 flex flex-col justify-between gap-5 transition-all relative ${
                      loc.isPrimary ? "border-emerald-500/50 bg-emerald-950/10" : "border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <h3 className="text-lg font-bold text-white flex items-center gap-2">
                            {loc.name}
                            {loc.isPrimary && (
                              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                Primary Footer Map
                              </span>
                            )}
                          </h3>
                          <p className="text-xs text-emerald-400 font-medium">{loc.city}</p>
                        </div>

                        <button
                          onClick={() => handleSetPrimaryLocation(loc.id)}
                          disabled={loc.isPrimary}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                            loc.isPrimary
                              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 cursor-default"
                              : "bg-white/5 hover:bg-emerald-600/20 text-zinc-400 hover:text-emerald-300 border border-white/10"
                          }`}
                        >
                          {loc.isPrimary ? "Primary Map" : "Set as Footer Map"}
                        </button>
                      </div>

                      <div className="space-y-1.5 text-xs text-zinc-300 bg-black/40 p-3.5 rounded-xl border border-white/5 font-mono">
                        <p><span className="text-zinc-500">Address:</span> {loc.address}</p>
                        <p><span className="text-zinc-500">Phone:</span> {loc.phone || "+0123-456-789"}</p>
                        <p><span className="text-zinc-500">Hours:</span> {loc.hours || "Mon - Fri : 10:00 - 20:00"}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <a
                        href={loc.directUrl || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-medium"
                      >
                        Preview Map <ExternalLink size={12} />
                      </a>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openEditLocationModal(loc)}
                          className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-indigo-500/20 text-zinc-300 hover:text-indigo-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Pencil size={13} />
                          <span>Edit</span>
                        </button>

                        <button
                          onClick={() => handleDeleteLocation(loc.id)}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-zinc-400 hover:text-red-400 transition-colors cursor-pointer"
                          title="Delete Location"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === "users" && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Users Management</h2>
            <p className="text-zinc-400 text-sm">Manage admin accounts and team permissions.</p>
          </div>
        )}
      </div>

      {/* Add Portfolio Item Modal Dialog */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAddModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="w-full max-w-lg bg-[#0d111a] border border-white/15 rounded-2xl p-6 shadow-2xl relative z-10 text-white overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                    <Plus size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Add Portfolio Item</h3>
                    <p className="text-xs text-zinc-400">Publish a new item to your showcase</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleAddProjectSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. NextGen FinTech Platform"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                    >
                      <option value="Website">Website</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="E-Commerce">E-Commerce</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">Status</label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                    >
                      <option value="published">Active (Visible on website)</option>
                      <option value="ongoing">Ongoing Project (Visible under Ongoing Projects)</option>
                      <option value="inactive">Inactive (Hidden from website)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Description *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Brief summary of what was built and key features..."
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Website URL
                  </label>
                  <input
                    type="url"
                    value={formData.liveUrl}
                    onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
                    placeholder="https://example.com"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5 flex justify-between items-center">
                    <span>Upload Template Image *</span>
                    <span className="text-[10px] text-zinc-500">Image displayed on website showcase card</span>
                  </label>
                  
                  <div className="flex flex-col sm:flex-row gap-3.5 items-start sm:items-center bg-black/50 border border-dashed border-white/20 rounded-xl p-3.5 hover:border-indigo-500/50 transition-colors">
                    {/* Live Image Preview Thumbnail */}
                    <div className="w-20 h-16 rounded-lg bg-zinc-900 border border-white/10 overflow-hidden shrink-0 relative flex items-center justify-center">
                      {formData.imageUrl ? (
                        <img
                          src={formData.imageUrl}
                          alt="Uploaded Template Preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center p-1 text-zinc-500">
                          <ImageIcon size={20} className="mx-auto mb-0.5 opacity-50" />
                          <span className="text-[9px] block">No Image</span>
                        </div>
                      )}
                    </div>

                    {/* File Upload Button */}
                    <div className="flex-1 space-y-2 w-full">
                      <div className="flex items-center gap-2">
                        <label className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all shadow-lg hover:shadow-indigo-500/25">
                          <Upload size={14} />
                          <span>Choose Image File</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={async (e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                try {
                                  const compressed = await compressImageFile(file);
                                  setFormData((prev) => ({ ...prev, imageUrl: compressed }));
                                } catch (err) {
                                  console.error("Error compressing image", err);
                                }
                              }
                            }}
                          />
                        </label>

                        {formData.imageUrl && (
                          <button
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, imageUrl: "" }))}
                            className="px-3 py-2 rounded-xl bg-white/5 hover:bg-red-500/20 text-zinc-400 hover:text-red-400 text-xs transition-colors cursor-pointer"
                          >
                            Remove
                          </button>
                        )}
                      </div>

                      <p className="text-[11px] text-zinc-400">
                        Upload your custom template image (PNG, JPG, WEBP, SVG) from your device.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Saving...</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Publish Item</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Edit Portfolio Item Modal Dialog */}
      <AnimatePresence>
        {editingProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setEditingProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="w-full max-w-lg bg-[#0d111a] border border-white/15 rounded-2xl p-6 shadow-2xl relative z-10 text-white overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                    <Pencil size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Edit Portfolio Item</h3>
                    <p className="text-xs text-zinc-400">Update project details and status</p>
                  </div>
                </div>
                <button
                  onClick={() => setEditingProject(null)}
                  className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleEditProjectSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={editFormData.title}
                    onChange={(e) => setEditFormData({ ...editFormData, title: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Category *
                    </label>
                    <select
                      value={editFormData.category}
                      onChange={(e) => setEditFormData({ ...editFormData, category: e.target.value })}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                    >
                      <option value="Website">Website</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="E-Commerce">E-Commerce</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Status (Showcase) *
                    </label>
                    <select
                      value={editFormData.status}
                      onChange={(e) => setEditFormData({ ...editFormData, status: e.target.value })}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                    >
                      <option value="published">Active (Visible on website)</option>
                      <option value="ongoing">Ongoing Project (Visible under Ongoing Projects)</option>
                      <option value="inactive">Inactive (Hidden from website)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Description *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={editFormData.description}
                    onChange={(e) => setEditFormData({ ...editFormData, description: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Website URL
                  </label>
                  <input
                    type="url"
                    value={editFormData.liveUrl}
                    onChange={(e) => setEditFormData({ ...editFormData, liveUrl: e.target.value })}
                    placeholder="https://example.com"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5 flex justify-between items-center">
                    <span>Upload Template Image *</span>
                    <span className="text-[10px] text-zinc-500">Image displayed on website showcase card</span>
                  </label>
                  
                  <div className="flex flex-col sm:flex-row gap-3.5 items-start sm:items-center bg-black/50 border border-dashed border-white/20 rounded-xl p-3.5 hover:border-indigo-500/50 transition-colors">
                    {/* Live Image Preview Thumbnail */}
                    <div className="w-20 h-16 rounded-lg bg-zinc-900 border border-white/10 overflow-hidden shrink-0 relative flex items-center justify-center">
                      {editFormData.imageUrl ? (
                        <img
                          src={editFormData.imageUrl}
                          alt="Uploaded Template Preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center p-1 text-zinc-500">
                          <ImageIcon size={20} className="mx-auto mb-0.5 opacity-50" />
                          <span className="text-[9px] block">No Image</span>
                        </div>
                      )}
                    </div>

                    {/* File Upload Button */}
                    <div className="flex-1 space-y-2 w-full">
                      <div className="flex items-center gap-2">
                        <label className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all shadow-lg hover:shadow-indigo-500/25">
                          <Upload size={14} />
                          <span>Choose Image File</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={async (e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                try {
                                  const compressed = await compressImageFile(file);
                                  setEditFormData((prev) => ({ ...prev, imageUrl: compressed }));
                                } catch (err) {
                                  console.error("Error compressing image", err);
                                }
                              }
                            }}
                          />
                        </label>

                        {editFormData.imageUrl && (
                          <button
                            type="button"
                            onClick={() => setEditFormData((prev) => ({ ...prev, imageUrl: "" }))}
                            className="px-3 py-2 rounded-xl bg-white/5 hover:bg-red-500/20 text-zinc-400 hover:text-red-400 text-xs transition-colors cursor-pointer"
                          >
                            Remove
                          </button>
                        )}
                      </div>

                      <p className="text-[11px] text-zinc-400">
                        Upload your custom template image (PNG, JPG, WEBP, SVG) from your device.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setEditingProject(null)}
                    className="px-4 py-2 rounded-xl text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Saving...</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Save Changes</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal Dialog */}
      <AnimatePresence>
        {deletingProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDeletingProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="w-full max-w-md bg-[#0d111a] border border-red-500/30 rounded-2xl p-6 shadow-2xl relative z-10 text-white overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center border border-red-500/30 shrink-0">
                  <AlertTriangle size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Delete Portfolio Item?</h3>
                  <p className="text-xs text-zinc-400">This action cannot be undone.</p>
                </div>
              </div>

              <p className="text-sm text-zinc-300 mb-6 bg-white/5 p-3 rounded-xl border border-white/10">
                Are you sure you want to delete <span className="font-semibold text-white">"{deletingProject.title}"</span> from your portfolio database?
              </p>

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setDeletingProject(null)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleDeleteProjectSubmit}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-red-600 hover:bg-red-500 text-white transition-all shadow-lg hover:shadow-red-500/25 flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Deleting...</span>
                    </>
                  ) : (
                    <>
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Yes, Delete Item</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Add Custom Form Field Modal Dialog */}
      <AnimatePresence>
        {isAddFieldModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAddFieldModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="w-full max-w-lg bg-[#0d111a] border border-white/10 rounded-2xl p-6 shadow-2xl relative z-10 text-white overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Plus className="text-indigo-400" size={20} />
                  Add Custom Website Form Field
                </h3>
                <button
                  onClick={() => setIsAddFieldModalOpen(false)}
                  className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleAddFieldSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Field Label *
                  </label>
                  <input
                    type="text"
                    required
                    value={fieldFormData.label}
                    onChange={(e) => setFieldFormData({ ...fieldFormData, label: e.target.value })}
                    placeholder="e.g. Budget Range, Company Name, Deadline"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Input Type *
                    </label>
                    <select
                      value={fieldFormData.type}
                      onChange={(e) => setFieldFormData({ ...fieldFormData, type: e.target.value })}
                      className="w-full bg-[#161b26] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                    >
                      <option value="text">Text Input</option>
                      <option value="email">Email Input</option>
                      <option value="tel">Phone / Number</option>
                      <option value="select">Dropdown Select</option>
                      <option value="textarea">Textarea Box</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Layout Width
                    </label>
                    <select
                      value={fieldFormData.halfWidth ? "half" : "full"}
                      onChange={(e) => setFieldFormData({ ...fieldFormData, halfWidth: e.target.value === "half" })}
                      className="w-full bg-[#161b26] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                    >
                      <option value="full">Full Width (100%)</option>
                      <option value="half">Half Width (50%)</option>
                    </select>
                  </div>
                </div>

                {fieldFormData.type === "select" && (
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Dropdown Options (Comma-separated) *
                    </label>
                    <input
                      type="text"
                      required={fieldFormData.type === "select"}
                      value={fieldFormData.optionsStr}
                      onChange={(e) => setFieldFormData({ ...fieldFormData, optionsStr: e.target.value })}
                      placeholder="e.g. $5k-$10k, $10k-$25k, $25k+"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                    <span className="text-[11px] text-zinc-400 mt-1 block">
                      Separate each option with a comma.
                    </span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Placeholder Text
                  </label>
                  <input
                    type="text"
                    value={fieldFormData.placeholder}
                    onChange={(e) => setFieldFormData({ ...fieldFormData, placeholder: e.target.value })}
                    placeholder={`e.g. ${fieldFormData.label || "Enter value"} *`}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="isRequiredCheck"
                    checked={fieldFormData.isRequired}
                    onChange={(e) => setFieldFormData({ ...fieldFormData, isRequired: e.target.checked })}
                    className="w-4 h-4 rounded text-indigo-600 focus:ring-0 cursor-pointer"
                  />
                  <label htmlFor="isRequiredCheck" className="text-xs font-medium text-zinc-300 cursor-pointer">
                    Required Field (Users must fill before submitting)
                  </label>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsAddFieldModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2 cursor-pointer"
                  >
                    <Plus size={15} />
                    <span>Create Form Field</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Edit Custom Form Field Modal Dialog */}
      <AnimatePresence>
        {editingField && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setEditingField(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="w-full max-w-lg bg-[#0d111a] border border-white/10 rounded-2xl p-6 shadow-2xl relative z-10 text-white overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Pencil className="text-indigo-400" size={20} />
                  Edit Form Field & Options
                </h3>
                <button
                  onClick={() => setEditingField(null)}
                  className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleEditFieldSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Field Label *
                  </label>
                  <input
                    type="text"
                    required
                    value={editFieldFormData.label}
                    onChange={(e) => setEditFieldFormData({ ...editFieldFormData, label: e.target.value })}
                    placeholder="e.g. Service Needed, Budget Range"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Input Type *
                    </label>
                    <select
                      value={editFieldFormData.type}
                      onChange={(e) => setEditFieldFormData({ ...editFieldFormData, type: e.target.value })}
                      className="w-full bg-[#161b26] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                    >
                      <option value="text">Text Input</option>
                      <option value="email">Email Input</option>
                      <option value="tel">Phone / Number</option>
                      <option value="select">Dropdown Select</option>
                      <option value="textarea">Textarea Box</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Layout Width
                    </label>
                    <select
                      value={editFieldFormData.halfWidth ? "half" : "full"}
                      onChange={(e) => setEditFieldFormData({ ...editFieldFormData, halfWidth: e.target.value === "half" })}
                      className="w-full bg-[#161b26] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                    >
                      <option value="full">Full Width (100%)</option>
                      <option value="half">Half Width (50%)</option>
                    </select>
                  </div>
                </div>

                {editFieldFormData.type === "select" && (
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Dropdown Services / Options (Comma-separated) *
                    </label>
                    <textarea
                      rows={3}
                      required={editFieldFormData.type === "select"}
                      value={editFieldFormData.optionsStr}
                      onChange={(e) => setEditFieldFormData({ ...editFieldFormData, optionsStr: e.target.value })}
                      placeholder="e.g. Website, Mobile App, E-Commerce, UI/UX Design, Digital Marketing, SaaS Product, Cloud Consulting, Other"
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                    <span className="text-[11px] text-zinc-400 mt-1 block">
                      Add, rename, or delete any option by modifying this comma-separated list.
                    </span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Placeholder Text
                  </label>
                  <input
                    type="text"
                    value={editFieldFormData.placeholder}
                    onChange={(e) => setEditFieldFormData({ ...editFieldFormData, placeholder: e.target.value })}
                    placeholder={`e.g. ${editFieldFormData.label || "Enter value"} *`}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="editIsRequiredCheck"
                    checked={editFieldFormData.isRequired}
                    onChange={(e) => setEditFieldFormData({ ...editFieldFormData, isRequired: e.target.checked })}
                    className="w-4 h-4 rounded text-indigo-600 focus:ring-0 cursor-pointer"
                  />
                  <label htmlFor="editIsRequiredCheck" className="text-xs font-medium text-zinc-300 cursor-pointer">
                    Required Field (Users must fill before submitting)
                  </label>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setEditingField(null)}
                    className="px-4 py-2 rounded-xl text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2 cursor-pointer"
                  >
                    <CheckCircle size={15} />
                    <span>Save Changes</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Add Office Location Modal Dialog */}
      <AnimatePresence>
        {isAddLocationModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAddLocationModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="w-full max-w-lg bg-[#0d111a] border border-white/10 rounded-2xl p-6 shadow-2xl relative z-10 text-white overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <MapPin className="text-emerald-400" size={20} />
                  Add Office Branch Location
                </h3>
                <button
                  onClick={() => setIsAddLocationModalOpen(false)}
                  className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleAddLocationSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Office Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={locationFormData.name}
                    onChange={(e) => setLocationFormData({ ...locationFormData, name: e.target.value })}
                    placeholder="e.g. Coimbatore Branch, Madurai Office"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    City / Region *
                  </label>
                  <input
                    type="text"
                    required
                    value={locationFormData.city}
                    onChange={(e) => setLocationFormData({ ...locationFormData, city: e.target.value })}
                    placeholder="e.g. Coimbatore, Tamil Nadu"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Full Address *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={locationFormData.address}
                    onChange={(e) => setLocationFormData({ ...locationFormData, address: e.target.value })}
                    placeholder="e.g. Door No. 12, Main Road, Gandhipuram, Coimbatore 641012"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value={locationFormData.phone}
                      onChange={(e) => setLocationFormData({ ...locationFormData, phone: e.target.value })}
                      placeholder="+0123-456-789"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Operating Hours
                    </label>
                    <input
                      type="text"
                      value={locationFormData.hours}
                      onChange={(e) => setLocationFormData({ ...locationFormData, hours: e.target.value })}
                      placeholder="Mon - Fri : 10:00 - 20:00 IST"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Google Maps Embed URL (Optional)
                  </label>
                  <input
                    type="text"
                    value={locationFormData.embedUrl}
                    onChange={(e) => setLocationFormData({ ...locationFormData, embedUrl: e.target.value })}
                    placeholder="Auto-generated from address if empty"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="isPrimaryLocCheck"
                    checked={locationFormData.isPrimary}
                    onChange={(e) => setLocationFormData({ ...locationFormData, isPrimary: e.target.checked })}
                    className="w-4 h-4 rounded text-emerald-600 focus:ring-0 cursor-pointer"
                  />
                  <label htmlFor="isPrimaryLocCheck" className="text-xs font-medium text-zinc-300 cursor-pointer">
                    Set as Primary Footer Map (Appears in website footer)
                  </label>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsAddLocationModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2 cursor-pointer"
                  >
                    <Plus size={15} />
                    <span>Create Location</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Edit Office Location Modal Dialog */}
      <AnimatePresence>
        {editingLocation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setEditingLocation(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="w-full max-w-lg bg-[#0d111a] border border-white/10 rounded-2xl p-6 shadow-2xl relative z-10 text-white overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Pencil className="text-emerald-400" size={20} />
                  Edit Office Location
                </h3>
                <button
                  onClick={() => setEditingLocation(null)}
                  className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleEditLocationSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Office Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={editLocationFormData.name}
                    onChange={(e) => setEditLocationFormData({ ...editLocationFormData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    City / Region *
                  </label>
                  <input
                    type="text"
                    required
                    value={editLocationFormData.city}
                    onChange={(e) => setEditLocationFormData({ ...editLocationFormData, city: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Full Address *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={editLocationFormData.address}
                    onChange={(e) => setEditLocationFormData({ ...editLocationFormData, address: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value={editLocationFormData.phone}
                      onChange={(e) => setEditLocationFormData({ ...editLocationFormData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Operating Hours
                    </label>
                    <input
                      type="text"
                      value={editLocationFormData.hours}
                      onChange={(e) => setEditLocationFormData({ ...editLocationFormData, hours: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Google Maps Embed URL (Optional)
                  </label>
                  <input
                    type="text"
                    value={editLocationFormData.embedUrl}
                    onChange={(e) => setEditLocationFormData({ ...editLocationFormData, embedUrl: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="editIsPrimaryLocCheck"
                    checked={editLocationFormData.isPrimary}
                    onChange={(e) => setEditLocationFormData({ ...editLocationFormData, isPrimary: e.target.checked })}
                    className="w-4 h-4 rounded text-emerald-600 focus:ring-0 cursor-pointer"
                  />
                  <label htmlFor="editIsPrimaryLocCheck" className="text-xs font-medium text-zinc-300 cursor-pointer">
                    Set as Primary Footer Map (Appears in website footer)
                  </label>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setEditingLocation(null)}
                    className="px-4 py-2 rounded-xl text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2 cursor-pointer"
                  >
                    <CheckCircle size={15} />
                    <span>Save Location Changes</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

const samplePortfolioProjects: Array<{
  id?: string;
  title: string;
  slug: string;
  category: string;
  desc: string;
  img: string;
  tech: string;
  status: string;
  isCustom: boolean;
  rawTechnologies?: string[];
  liveUrl?: string;
}> = [
  {
    title: "nskillindia",
    slug: "website",
    category: "Website",
    desc: "Comprehensive Ed Tech Platform with course management and student portal.",
    img: "/portfolio/website-1.jpg",
    tech: "Next.js, Postgres",
    status: "published",
    isCustom: false,
  },
  {
    title: "seatown",
    slug: "website",
    category: "Website",
    desc: "Luxury coastal travel experience platform with real-time booking.",
    img: "/portfolio/website-2.jpg",
    tech: "React, Tailwind",
    status: "published",
    isCustom: false,
  },
  {
    title: "veerify Mobile App",
    slug: "mobile-app",
    category: "Mobile App",
    desc: "Identity verification and secure mobile auth solution.",
    img: "/portfolio/mobile-1.jpg",
    tech: "Flutter, Node.js",
    status: "published",
    isCustom: false,
  },
  {
    title: "snapoo Mobile App",
    slug: "mobile-app",
    category: "Mobile App",
    desc: "Social instant media sharing app with filters and chat.",
    img: "/portfolio/mobile-2.jpg",
    tech: "React Native, Firebase",
    status: "published",
    isCustom: false,
  },
  {
    title: "SEO & Growth Campaign",
    slug: "digital-marketing",
    category: "Digital Marketing",
    desc: "Organic search optimization & brand positioning for B2B tech.",
    img: "/portfolio/digital-1.jpg",
    tech: "SEO, Content Strategy",
    status: "published",
    isCustom: false,
  },
  {
    title: "Social Media Branding",
    slug: "digital-marketing",
    category: "Digital Marketing",
    desc: "High-engagement posters, reels, and multi-channel campaign.",
    img: "/portfolio/digital-2.jpg",
    tech: "Figma, Video Prod",
    status: "published",
    isCustom: false,
  },
  {
    title: "Katalist UI/UX",
    slug: "uiux-design",
    category: "UI/UX Design",
    desc: "SaaS analytics dashboard design system and component kit.",
    img: "/portfolio/uiux-1.jpg",
    tech: "Figma, Design System",
    status: "published",
    isCustom: false,
  },
  {
    title: "SM-enterpricess",
    slug: "e-commerce",
    category: "E-Commerce",
    desc: "High-volume B2B e-commerce platform with automated invoicing.",
    img: "/portfolio/ecommerce-1.jpg",
    tech: "Shopify Plus, Liquid",
    status: "published",
    isCustom: false,
  },
  {
    title: "cloth buy",
    slug: "e-commerce",
    category: "E-Commerce",
    desc: "Fashion e-commerce store with custom 3D product view.",
    img: "/portfolio/ecommerce-2.jpg",
    tech: "Next.js, Stripe",
    status: "published",
    isCustom: false,
  },
];

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
      className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all cursor-pointer ${
        active ? "bg-indigo-600/10 text-indigo-400 font-semibold" : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
      }`}
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
