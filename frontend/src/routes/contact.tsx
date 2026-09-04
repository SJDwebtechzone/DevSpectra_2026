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

function Contact() {
  const [fields, setFields] = useState<any[]>([]);
  const [formValues, setFormValues] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/contacts/fields")
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => setFields(data))
      .catch((err) => console.error("Failed to fetch form fields", err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check required fields
    const missing = fields.filter((f) => f.isRequired && (!formValues[f.name] || !String(formValues[f.name]).trim()));
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

    fields.forEach((field) => {
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
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 font-display">Address</h3>
                  <p className="text-gray-600 font-medium leading-relaxed text-[17px]">
                    DevSpectra, Valasaravakkam,
                    <br />
                    Chennai, Tamil Nadu, India
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 font-display">Contact</h3>
                  <p className="text-gray-600 font-medium text-[17px]">Email : info@devspectra.com</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 font-display">Open Time</h3>
                  <p className="text-gray-600 font-medium text-[17px]">Monday - Friday : 10:00 - 20:00</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 font-display">Stay Connected</h3>
                  <div className="flex flex-wrap gap-3.5">
                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/company/devspectra/posts/?feedView=all"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-12 h-12 bg-white/70 text-[#0077B5] backdrop-blur-xl border border-white/90 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_2px_8px_rgba(255,255,255,0.8)] flex items-center justify-center rounded-full hover:bg-white hover:scale-110 hover:shadow-lg transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>

                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/people/Devspectra/61592571971735/?rdid=LKwgeZMfC0rRrH6K&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1HgawTFf6o%2F"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="w-12 h-12 bg-white/70 text-[#1877F2] backdrop-blur-xl border border-white/90 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_2px_8px_rgba(255,255,255,0.8)] flex items-center justify-center rounded-full hover:bg-white hover:scale-110 hover:shadow-lg transition-all"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/_devspectra_?igsi=MW9wMW9oczAyOHg2eA%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-12 h-12 bg-white/70 text-[#E4405F] backdrop-blur-xl border border-white/90 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_2px_8px_rgba(255,255,255,0.8)] flex items-center justify-center rounded-full hover:bg-white hover:scale-110 hover:shadow-lg transition-all"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>

                    {/* YouTube */}
                    <a
                      href="https://www.youtube.com/@Devspectratech"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      className="w-12 h-12 bg-white/70 text-[#FF0000] backdrop-blur-xl border border-white/90 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_2px_8px_rgba(255,255,255,0.8)] flex items-center justify-center rounded-full hover:bg-white hover:scale-110 hover:shadow-lg transition-all"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>

                    {/* Justdial */}
                    <a
                      href="https://www.justdial.com/Chennai/DevSpectra-Valasaravakkam/044PXX44-XX44-251112122932-Q6Z1_BZDET?via=scode"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Justdial"
                      className="w-12 h-12 bg-white/70 backdrop-blur-xl border border-white/90 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_2px_8px_rgba(255,255,255,0.8)] flex items-center justify-center rounded-full hover:bg-white hover:scale-110 hover:shadow-lg transition-all"
                    >
                      <svg viewBox="0 0 24 24" className="w-6 h-6 rounded-md shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="6" fill="#0076D7" />
                        <text x="4" y="16.5" fill="#FFFFFF" fontSize="12" fontWeight="900" fontFamily="system-ui, sans-serif">J</text>
                        <text x="11.5" y="16.5" fill="#FF8A00" fontSize="12" fontWeight="900" fontFamily="system-ui, sans-serif">d</text>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </AuroraBackground>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
