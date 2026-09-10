import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { PageShell } from "@/components/site/PageShell";
import ContactHero from "@/components/ContactHero";
import {
  ArrowRight,
  ArrowUpRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
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
import { toast } from "sonner";
import { API_BASE_URL } from "@/lib/api";

import { buildPageMeta, buildBreadcrumbSchema, PAGE_SEO, SITE } from "@/config/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      ...buildPageMeta({
        title: PAGE_SEO.contact.title,
        description: PAGE_SEO.contact.description,
        canonical: PAGE_SEO.contact.canonical,
        ogTitle: PAGE_SEO.contact.ogTitle,
        ogDescription: PAGE_SEO.contact.ogDescription,
        robots: PAGE_SEO.contact.robots,
      }),
    ],
    links: [{ rel: "canonical", href: PAGE_SEO.contact.canonical }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbSchema([
            { name: "Home", url: SITE.domain },
            { name: "Contact", url: `${SITE.domain}/contact` },
          ]),
        ),
      },
    ],
  }),
  component: Contact,
});

const defaultFallbackFields = [
  { id: "1", name: "firstName", label: "First Name", type: "text", placeholder: "First Name *", isRequired: true, halfWidth: true },
  { id: "2", name: "lastName", label: "Last Name", type: "text", placeholder: "Last Name *", isRequired: true, halfWidth: true },
  { id: "3", name: "email", label: "Email", type: "email", placeholder: "Email *", isRequired: true, halfWidth: true },
  { id: "4", name: "phone", label: "Phone Number", type: "tel", placeholder: "Phone Number *", isRequired: true, halfWidth: true },
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
    fetch(`${API_BASE_URL}/contacts/fields`)
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => setFields(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Failed to fetch form fields", err));

    fetch(`${API_BASE_URL}/contacts/locations`)
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

      const res = await fetch(`${API_BASE_URL}/contacts`, {
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
      "w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-base font-medium text-gray-800 placeholder:text-gray-400 shadow-sm transition-all duration-200 focus:border-[#a58b60] focus:outline-none focus:ring-2 focus:ring-[#a58b60]/20";

    if (field.type === "textarea") {
      return (
        <textarea
          key={field.id}
          required={field.isRequired}
          value={val}
          onChange={(e) => setFormValues({ ...formValues, [field.name]: e.target.value })}
          placeholder={field.placeholder || `${field.label}${field.isRequired ? " *" : ""}`}
          className="min-h-40 w-full resize-none rounded-md border border-gray-300 bg-white px-4 py-3 text-base font-medium text-gray-800 placeholder:text-gray-400 shadow-sm transition-all duration-200 focus:border-[#a58b60] focus:outline-none focus:ring-2 focus:ring-[#a58b60]/20"
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
            className={`w-full appearance-none cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-3 pr-12 text-base font-medium text-gray-800 shadow-sm transition-all duration-200 focus:border-[#a58b60] focus:outline-none focus:ring-2 focus:ring-[#a58b60]/20 ${
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
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
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
      {/* ── Premium editorial hero ── */}
      <ContactHero />

      {/* ── Contact info + form ── */}
      <section id="contact-form" className="relative overflow-hidden bg-[#f4f3f0] py-16 text-black sm:py-24 lg:py-28">
        <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-cover bg-center lg:block" style={{ backgroundImage: "url('/contact/contact1.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4f3f0] via-[#f4f3f0]/95 to-transparent lg:w-[72%]" />

        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="flex flex-col justify-center">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#a58b60]">Contact Us</p>
            <h2 className="max-w-lg font-display text-5xl font-bold leading-[1.05] tracking-tight text-[#171717] sm:text-6xl">
              Join Us in Creating
              <br />
              Something Great
            </h2>

            <div className="mt-12 space-y-8 text-[#535353]">
              <div>
                <h3 className="mb-2 font-display text-xl font-semibold text-[#252525]">Address</h3>
                <p className="max-w-md leading-relaxed">{primaryLoc.address}</p>
              </div>
              <div>
                <h3 className="mb-2 font-display text-xl font-semibold text-[#252525]">Contact</h3>
                <p>Phone : {primaryLoc.phone || "+0123-456-789"}</p>
                <p className="mt-1 break-words">Email : connectwithdevspectra@gmail.com</p>
              </div>
              <div>
                <h3 className="mb-2 font-display text-xl font-semibold text-[#252525]">Open Time</h3>
                <p>{primaryLoc.hours || "Mon - Fri : 10:00 - 20:00 IST"}</p>
              </div>
              <div>
                <h3 className="mb-3 font-display text-xl font-semibold text-[#252525]">Stay Connected</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, href: "#", label: "Facebook" },
                    { icon: Twitter, href: "#", label: "X (Twitter)" },
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Instagram, href: "#", label: "Instagram" },
                    { icon: Youtube, href: "#", label: "YouTube" },
                  ].map((social, index) => (
                    <a key={index} href={social.href} aria-label={social.label} title={social.label} className="flex h-9 w-9 items-center justify-center rounded-full text-[#a58b60] transition-colors hover:bg-[#a58b60] hover:text-white">
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-7 shadow-[0_18px_55px_rgba(25,25,25,0.14)] sm:p-10 lg:mt-2 lg:p-12">
            <h2 className="mb-8 font-display text-3xl font-semibold text-[#171717]">Send a message</h2>
            {isSubmitted ? (
              <div className="py-10 text-center">
                <CheckCircle2 className="mx-auto mb-5 h-14 w-14 text-emerald-600" />
                <h3 className="mb-3 font-display text-2xl font-bold text-gray-900">Message Sent Successfully!</h3>
                <p className="mb-7 text-gray-600">Thank you for reaching out. We will get back to you shortly.</p>
                <button onClick={() => setIsSubmitted(false)} className="bg-[#171717] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#a58b60]">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {renderFields()}
                <button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-4 bg-[#171717] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#a58b60] disabled:opacity-60">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
                </button>
              </form>
            )}
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
