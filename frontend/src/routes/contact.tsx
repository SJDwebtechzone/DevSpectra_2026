import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { PageShell } from "@/components/site/PageShell";
import {
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Asterisk,
  ArrowUpRight,
  ChevronDown,
  Loader2,
  CheckCircle2,
  MapPin,
  Clock,
  Phone,
  Navigation,
  Compass,
  Sparkles,
} from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import FeatureSection from "@/components/ui/stack-feature-section";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Digital Agency" },
      { name: "description", content: "Join Us in Creating Something Great" },
    ],
  }),
  component: Contact,
});

function Marquee() {
  return (
    <div className="flex w-full overflow-hidden relative z-20 bg-gradient-to-b from-blue-400/20 to-blue-900/20 backdrop-blur-[24px] backdrop-saturate-150 border-y border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.4)] text-blue-950 py-4">
      <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="flex items-center text-xl font-bold uppercase tracking-wider mx-4"
          >
            <span className="mx-8">Website Design</span>
            <Asterisk className="w-8 h-8" />
            <span className="mx-8">UX/UI Design</span>
            <Asterisk className="w-8 h-8" />
            <span className="mx-8">Graphics Design</span>
            <Asterisk className="w-8 h-8" />
            <span className="mx-8">Digital Marketing</span>
            <Asterisk className="w-8 h-8" />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

const defaultFallbackFields = [
  { id: "1", name: "firstName", label: "First Name", type: "text", placeholder: "First Name *", isRequired: true, halfWidth: true },
  { id: "2", name: "lastName", label: "Last Name", type: "text", placeholder: "Last Name *", isRequired: true, halfWidth: true },
  { id: "3", name: "email", label: "Email", type: "email", placeholder: "Email *", isRequired: true, halfWidth: true },
  { id: "4", name: "phone", label: "Phone Number", type: "tel", placeholder: "Phone Number *", isRequired: false, halfWidth: true },
  {
    id: "5",
    name: "service",
    label: "Service Needed",
    type: "select",
    placeholder: "Service *",
    isRequired: true,
    halfWidth: false,
    options: ["Website", "Mobile App", "E-Commerce", "UI/UX Design", "Digital Marketing", "SaaS Product", "Other"],
  },
  { id: "6", name: "message", label: "Message", type: "textarea", placeholder: "Message *", isRequired: true, halfWidth: false },
];

function Contact() {
  const [fields, setFields] = useState<any[]>([]);
  const [formValues, setFormValues] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [locations, setLocations] = useState<any[]>([]);
  const [activeLocId, setActiveLocId] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:5000/contacts/fields")
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => setFields(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Failed to fetch form fields", err));

    fetch("http://localhost:5000/contacts/locations")
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (Array.isArray(data)) {
          setLocations(data);
          if (data.length > 0) {
            const primary = data.find((l: any) => l && l.isPrimary) || data[0];
            if (primary?.id) setActiveLocId(primary.id);
          }
        }
      })
      .catch((err) => console.error("Failed to fetch office locations", err));
  }, []);

  const safeLocations = Array.isArray(locations) ? locations : [];
  const activeFields = Array.isArray(fields) && fields.length > 0 ? fields : defaultFallbackFields;

  const activeLoc = safeLocations.find((l) => l && l.id === activeLocId) || safeLocations[0] || {
    name: "Chennai Headquarters",
    city: "Chennai, Tamil Nadu",
    address: "18, 2nd St, Vani Nagar, Jai Nagar, Valasaravakkam, Chennai, Tamil Nadu 600087",
    phone: "+0123-456-789",
    hours: "Mon - Fri : 10:00 - 20:00 IST",
    status: "Open Now",
    embedUrl:
      "https://maps.google.com/maps?q=18,+2nd+St,+Vani+Nagar,+Jai+Nagar,+Valasaravakkam,+Chennai,+Tamil+Nadu+600087&t=&z=15&ie=UTF8&iwloc=&output=embed",
    directUrl:
      "https://maps.google.com/?q=18,+2nd+St,+Vani+Nagar,+Jai+Nagar,+Valasaravakkam,+Chennai,+Tamil+Nadu+600087",
  };

  const primaryLoc = safeLocations.find((l) => l && l.isPrimary) || activeLoc;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check required fields
    const missing = activeFields.filter((f) => f.isRequired && (!formValues[f.name] || !String(formValues[f.name]).trim()));
    if (missing.length > 0) {
      toast.error(`Please fill in required field: ${missing[0].label}`);
      return;
    }

    setIsSubmitting(true);
    try {
      const fullName = `${formValues.firstName || ""} ${formValues.lastName || ""}`.trim() || formValues.name || "Anonymous";
      const payload = {
        name: fullName,
        email: formValues.email || "",
        phone: formValues.phone || "",
        service: formValues.service || formValues.subject || "General Inquiry",
        subject: formValues.service || formValues.subject || "Website Contact Form",
        message: formValues.message || "",
        customData: formValues,
      };

      const res = await fetch("http://localhost:5000/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Failed to submit message");
      }

      toast.success("Thank you! Your message has been received.");
      setIsSubmitted(true);
      setFormValues({});
    } catch (err: any) {
      toast.error(err.message || "Error submitting message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFields = () => {
    const rows: Array<{ isHalfRow: boolean; fields: any[] }> = [];
    let currentHalfRow: any[] = [];

    activeFields.forEach((field) => {
      if (field.type === "textarea" || !field.halfWidth) {
        if (currentHalfRow.length > 0) {
          rows.push({ isHalfRow: true, fields: currentHalfRow });
          currentHalfRow = [];
        }
        rows.push({ isHalfRow: false, fields: [field] });
      } else {
        currentHalfRow.push(field);
        if (currentHalfRow.length === 2) {
          rows.push({ isHalfRow: true, fields: currentHalfRow });
          currentHalfRow = [];
        }
      }
    });

    if (currentHalfRow.length > 0) {
      rows.push({ isHalfRow: true, fields: currentHalfRow });
    }

    return rows.map((row, rIdx) => (
      <div
        key={`row-${rIdx}`}
        className={row.isHalfRow ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "w-full space-y-6"}
      >
        {row.fields.map((field) => renderInput(field))}
      </div>
    ));
  };

  const renderInput = (field: any) => {
    const val = formValues[field.name] || "";
    const commonClass =
      "w-full bg-white/50 backdrop-blur-[24px] border border-white/75 rounded-[32px] px-7 h-[72px] text-gray-800 placeholder:text-gray-400 font-medium text-[18px] shadow-[0_4px_24px_rgba(0,0,0,0.02),inset_0_2px_8px_rgba(255,255,255,0.6),inset_0_-1px_3px_rgba(100,150,255,0.05)] transition-all duration-300 focus:outline-none focus:bg-white/65 focus:border-white focus:shadow-[0_8px_32px_rgba(100,180,255,0.1),inset_0_4px_10px_rgba(255,255,255,0.8),inset_0_-1px_4px_rgba(100,150,255,0.1)] focus:-translate-y-0.5";

    if (field.type === "textarea") {
      return (
        <textarea
          key={field.id}
          required={field.isRequired}
          value={val}
          onChange={(e) => setFormValues({ ...formValues, [field.name]: e.target.value })}
          placeholder={field.placeholder || `${field.label}${field.isRequired ? " *" : ""}`}
          className="w-full bg-white/50 backdrop-blur-[24px] border border-white/75 rounded-[32px] px-7 py-6 h-[220px] resize-none text-gray-800 placeholder:text-gray-400 font-medium text-[18px] shadow-[0_4px_24px_rgba(0,0,0,0.02),inset_0_2px_8px_rgba(255,255,255,0.6),inset_0_-1px_3px_rgba(100,150,255,0.05)] transition-all duration-300 focus:outline-none focus:bg-white/65 focus:border-white focus:shadow-[0_8px_32px_rgba(100,180,255,0.1),inset_0_4px_10px_rgba(255,255,255,0.8),inset_0_-1px_4px_rgba(100,150,255,0.1)] focus:-translate-y-0.5"
        />
      );
    }

    if (field.type === "select") {
      return (
        <div key={field.id} className="relative w-full">
          <select
            required={field.isRequired}
            value={val}
            onChange={(e) => setFormValues({ ...formValues, [field.name]: e.target.value })}
            className={`w-full bg-white/50 backdrop-blur-[24px] border border-white/75 rounded-[32px] px-7 h-[72px] font-medium text-[18px] shadow-[0_4px_24px_rgba(0,0,0,0.02),inset_0_2px_8px_rgba(255,255,255,0.6),inset_0_-1px_3px_rgba(100,150,255,0.05)] transition-all duration-300 focus:outline-none focus:bg-white/65 focus:border-white focus:shadow-[0_8px_32px_rgba(100,180,255,0.1),inset_0_4px_10px_rgba(255,255,255,0.8),inset_0_-1px_4px_rgba(100,150,255,0.1)] focus:-translate-y-0.5 appearance-none cursor-pointer ${
              val === "" ? "text-gray-400" : "text-gray-800 font-semibold"
            }`}
          >
            <option value="" disabled className="text-gray-400">
              {field.placeholder || `${field.label}${field.isRequired ? " *" : ""}`}
            </option>
            {(field.options || []).map((opt: string, oIdx: number) => (
              <option key={oIdx} value={opt} className="text-gray-900 bg-white">
                {opt}
              </option>
            ))}
          </select>
          <div className="absolute right-7 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      );
    }

    return (
      <input
        key={field.id}
        type={field.type || "text"}
        required={field.isRequired}
        value={val}
        onChange={(e) => setFormValues({ ...formValues, [field.name]: e.target.value })}
        placeholder={field.placeholder || `${field.label}${field.isRequired ? " *" : ""}`}
        className={commonClass}
      />
    );
  };

  return (
    <PageShell mode="contact" ctaLabel="Contact Us Now">
      {/* Top Header */}
      <FeatureSection />

      {/* Top Marquee */}
      <Marquee />

      {/* Main Content Area */}
      <section className="relative py-32 text-black bg-[#fbfdfa] overflow-hidden">
        {/* Background Atmospheric Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(230,245,255,0.5),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(240,250,255,0.6),transparent_50%)] pointer-events-none" />

        {/* Decorative Liquid Glass Elements */}
        <div className="absolute -top-32 -left-20 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl pointer-events-none animate-[liquid-float_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-10 right-0 w-[40rem] h-[40rem] bg-cyan-50/30 rounded-full blur-3xl pointer-events-none animate-[liquid-float_12s_ease-in-out_infinite_reverse]" />

        {/* Acrylic Wave Blobs */}
        <div className="absolute top-1/4 -right-10 w-72 h-72 bg-white/20 rounded-[40%_60%_70%_30%] backdrop-blur-md border border-white/40 shadow-[inset_10px_10px_40px_rgba(255,255,255,0.8),0_10px_30px_rgba(0,100,255,0.05)] pointer-events-none animate-[liquid-spin_15s_linear_infinite]" />
        <div className="absolute bottom-1/4 -left-12 w-64 h-64 bg-white/20 rounded-[60%_40%_30%_70%] backdrop-blur-md border border-white/40 shadow-[inset_-10px_-10px_40px_rgba(255,255,255,0.7),0_10px_30px_rgba(0,100,255,0.05)] pointer-events-none animate-[liquid-spin_12s_linear_infinite_reverse]" />

        {/* Small Glass Bubbles */}
        <div
          className="absolute top-1/3 left-1/4 w-12 h-12 rounded-full backdrop-blur-lg border border-white/50 shadow-[inset_2px_4px_10px_rgba(255,255,255,0.9),0_4px_12px_rgba(0,100,255,0.05)] pointer-events-none animate-[liquid-float_8s_ease-in-out_infinite]"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/3 w-8 h-8 rounded-full backdrop-blur-lg border border-white/50 shadow-[inset_2px_4px_8px_rgba(255,255,255,0.9),0_4px_12px_rgba(0,100,255,0.05)] pointer-events-none animate-[liquid-float_6s_ease-in-out_infinite]"
          style={{ animationDelay: "3s" }}
        />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
          {/* Left: Dynamic Form */}
          <div>
            <div className="flex items-center gap-3 text-black/80 mb-4 text-sm font-medium tracking-wide">
              <span className="w-8 h-[2px] bg-black/80"></span> Contact Us
            </div>
            <h2 className="text-5xl lg:text-6xl font-display font-bold mb-12 leading-tight text-gray-900 tracking-tight">
              Join Us in Creating
              <br />
              Something Great
            </h2>

            {isSubmitted ? (
              <div className="p-10 text-center bg-white/70 backdrop-blur-2xl rounded-3xl border border-emerald-200/80 shadow-[0_20px_50px_rgba(16,185,129,0.12),inset_0_2px_10px_rgba(255,255,255,0.8)] animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-emerald-100/90 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-emerald-200">
                  <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                </div>
                <h3 className="text-3xl font-display font-bold text-gray-900 mb-3">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600 max-w-md mx-auto text-base leading-relaxed mb-8">
                  Thank you for reaching out! Your inquiry has been sent directly to <span className="font-semibold text-gray-900">ramyashan.1010@gmail.com</span>. We will review your message and get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center gap-3 bg-[#060c18] hover:bg-[#0a152e] text-white font-medium px-8 py-4 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Send Another Message</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {fields.length === 0 ? (
                  <div className="p-8 text-center text-gray-400 bg-white/40 backdrop-blur-lg rounded-3xl border border-white">
                    <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2 text-indigo-500" />
                    Loading Form Fields...
                  </div>
                ) : (
                  renderFields()
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-between gap-6 bg-[#060c18] hover:bg-[#0a152e] text-white font-medium rounded-full h-[64px] pl-8 pr-2 transition-all duration-300 group shadow-[0_12px_30px_rgba(0,0,0,0.15),inset_0_1px_2px_rgba(255,255,255,0.2)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 w-max cursor-pointer disabled:opacity-60"
                >
                  <span className="text-[17px]">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  <span className="bg-white text-[#060c18] w-[48px] h-[48px] rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform shadow-sm">
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <ArrowRight className="w-5 h-5" />
                    )}
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Info Card */}
          <div className="relative mt-8 lg:mt-0">
            {/* Badge overlay */}
            <div className="absolute -top-10 right-4 lg:-right-6 bg-white/60 backdrop-blur-xl text-black w-28 h-28 rounded-full flex items-center justify-center border border-white/80 z-10 hidden sm:flex shadow-[0_8px_32px_rgba(0,0,0,0.05),inset_0_2px_10px_rgba(255,255,255,0.8)]">
              <div className="absolute inset-2 border border-dashed border-black/20 rounded-full animate-[spin_12s_linear_infinite]" />
              <ArrowUpRight className="w-8 h-8 text-black/80" />
            </div>

            <AuroraBackground
              className="h-full w-full rounded-[2.5rem] p-10 lg:p-14 shadow-[0_8px_40px_rgba(0,0,0,0.04),inset_0_2px_20px_rgba(255,255,255,0.6)] relative overflow-hidden items-start justify-start !bg-white/40 backdrop-blur-2xl border border-white/60 !text-gray-900"
              showRadialGradient={false}
            >
              <div className="space-y-8 relative z-10 w-full text-gray-900">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 font-display">Address</h3>
                  <p className="text-gray-600 font-medium leading-relaxed text-[17px] whitespace-pre-line">
                    {primaryLoc.address}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 font-display">Contact</h3>
                  <p className="text-gray-600 font-medium text-[17px]">Phone : {primaryLoc.phone || "+0123-456-789"}</p>
                  <p className="text-gray-600 font-medium mt-1 text-[17px]">Email : connectwithdevspectra@gmail.com</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 font-display">Open Time</h3>
                  <p className="text-gray-600 font-medium text-[17px]">{primaryLoc.hours || "Monday - Friday : 10:00 - 20:00"}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 font-display">Stay Connected</h3>
                  <div className="flex gap-4 flex-wrap">
                    {[
                      { icon: Facebook, href: "#" },
                      { icon: Twitter, href: "#" },
                      { icon: Linkedin, href: "#" },
                      { icon: Instagram, href: "#" },
                      { icon: Youtube, href: "#" },
                    ].map((s, i) => (
                      <a
                        key={i}
                        href={s.href}
                        className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md border border-white flex items-center justify-center text-gray-700 hover:text-black hover:bg-white hover:scale-110 transition-all shadow-[0_8px_20px_rgba(0,0,0,0.06)]"
                      >
                        <s.icon className="w-5 h-5 stroke-[2]" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AuroraBackground>
          </div>
        </div>
      </section>

      {/* Unique Interactive Map Section before Footer */}
      <section className="relative py-20 text-black bg-gradient-to-b from-[#fbfdfa] to-slate-100/60 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[25rem] bg-gradient-to-r from-blue-400/10 via-emerald-400/10 to-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
            <div>
              <div className="flex items-center gap-3 text-emerald-600 mb-3 text-sm font-semibold tracking-wider uppercase">
                <Compass className="w-4 h-4 animate-[spin_10s_linear_infinite]" /> Interactive Radar
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 tracking-tight">
                Locate DevSpectra
              </h3>
            </div>

            {/* Location Switcher Tabs */}
            <div className="flex items-center p-1.5 bg-white/80 backdrop-blur-xl border border-gray-200/80 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.04)] gap-2 flex-wrap">
              {safeLocations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setActiveLocId(loc.id)}
                  className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    activeLocId === loc.id
                      ? "bg-[#060c18] text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/60"
                  }`}
                >
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>{loc.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Map Frame Outer Container with Acrylic Border */}
          <div className="relative w-full h-[520px] rounded-[3rem] p-3 bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_30px_80px_rgba(0,0,0,0.08),inset_0_2px_15px_rgba(255,255,255,0.9)] overflow-hidden group">
            
            {/* Floating Glass Control Badge Card (Top Left) */}
            <div className="absolute top-8 left-8 z-20 max-w-sm hidden md:block animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="bg-[#060c18]/90 backdrop-blur-2xl text-white p-7 rounded-[2rem] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      {activeLoc.status || "Open Now"}
                    </span>
                  </div>
                  <Sparkles className="w-4 h-4 text-blue-400" />
                </div>

                <div>
                  <h4 className="text-xl font-bold font-display text-white mb-1">
                    {activeLoc.name}
                  </h4>
                  <p className="text-xs text-gray-400 font-medium">
                    {activeLoc.city}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-white/10 text-xs text-gray-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{activeLoc.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{activeLoc.hours || "Mon - Fri : 10:00 - 20:00"}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>{activeLoc.phone || "+0123-456-789"}</span>
                  </div>
                </div>

                {activeLoc.directUrl && (
                  <a
                    href={activeLoc.directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-xs py-3 px-5 rounded-full transition-all shadow-lg hover:shadow-blue-500/25"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Turn-by-Turn Directions</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-auto" />
                  </a>
                )}
              </div>
            </div>

            {/* Google Map iframe */}
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-gray-900 relative">
              <iframe
                key={activeLoc.id || activeLoc.name}
                src={activeLoc.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full transition-opacity duration-500"
              ></iframe>
            </div>

            {/* Mobile Bottom Quick Button */}
            {activeLoc.directUrl && (
              <div className="absolute bottom-6 right-6 left-6 z-20 md:hidden">
                <a
                  href={activeLoc.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#060c18] text-white text-sm font-semibold py-3.5 px-6 rounded-full shadow-xl border border-white/20"
                >
                  <Navigation className="w-4 h-4 text-emerald-400" />
                  <span>Open Directions in Maps</span>
                  <ArrowUpRight className="w-4 h-4 ml-auto" />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
