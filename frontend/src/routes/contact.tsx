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
      "w-full bg-[#fafafa] border border-[#e7e5e0] rounded-none px-4 h-12 text-gray-800 placeholder:text-gray-400 text-sm transition-colors duration-300 focus:outline-none focus:border-[#9b835d] focus:bg-white";

    if (field.type === "textarea") {
      return (
        <textarea
          key={field.id}
          required={field.isRequired}
          value={val}
          onChange={(e) => setFormValues({ ...formValues, [field.name]: e.target.value })}
          placeholder={field.placeholder || `${field.label}${field.isRequired ? " *" : ""}`}
          className="w-full bg-[#fafafa] border border-[#e7e5e0] rounded-none px-4 py-3 h-32 resize-none text-gray-800 placeholder:text-gray-400 text-sm transition-colors duration-300 focus:outline-none focus:border-[#9b835d] focus:bg-white"
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
            className={`w-full bg-[#fafafa] border border-[#e7e5e0] rounded-none px-4 h-12 text-sm transition-colors duration-300 focus:outline-none focus:border-[#9b835d] focus:bg-white appearance-none cursor-pointer ${
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
      <section className="relative py-20 lg:py-28 text-black bg-[#f1f1ef] overflow-hidden">
        {/* Background Atmospheric Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(233,213,255,0.38),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(209,250,229,0.42),transparent_50%),radial-gradient(ellipse_at_center,rgba(254,243,199,0.25),transparent_45%)] pointer-events-none" />

        {/* Decorative Liquid Glass Elements */}
        <div className="absolute -top-32 -left-20 w-96 h-96 bg-purple-100/35 rounded-full blur-3xl pointer-events-none animate-[liquid-float_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-10 right-0 w-[40rem] h-[40rem] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none animate-[liquid-float_12s_ease-in-out_infinite_reverse]" />

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

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-0 items-start relative z-10">
          {/* Right: Dynamic Form */}
          <div className="order-2 lg:order-2 bg-white p-7 sm:p-10 lg:p-12 shadow-[0_24px_60px_rgba(31,29,24,0.12)]">
            <div className="flex items-center gap-3 text-black/60 mb-4 text-xs font-semibold tracking-[0.18em] uppercase">
              <span className="w-7 h-px bg-[#9b835d]"></span> Contact us
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-9 leading-tight text-[#171612] tracking-tight">
              Send a message
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
              <form onSubmit={handleSubmit} className="space-y-5">
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
                  className="inline-flex items-center gap-3 bg-[#171612] hover:bg-[#4b3a28] text-white font-medium px-5 py-3 transition-colors duration-300 group w-max cursor-pointer disabled:opacity-60"
                >
                  <span className="text-[17px]">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  <span className="text-[#d4bd91] flex items-center justify-center group-hover:translate-x-1 transition-transform">
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

          {/* Left: Contact Details */}
          <div className="relative mt-0 order-1 lg:order-1 pr-0 lg:pr-20">
            {/* Badge overlay */}
            <div className="hidden">
              <div className="absolute inset-2 border border-dashed border-black/20 rounded-full animate-[spin_12s_linear_infinite]" />
              <ArrowUpRight className="w-8 h-8 text-black/80" />
            </div>

            <AuroraBackground
              className="h-full w-full p-0 relative overflow-hidden items-start justify-start !bg-transparent !shadow-none !border-0 !text-gray-900"
              showRadialGradient={false}
            >
              <div className="space-y-8 relative z-10 w-full text-gray-900">
                <div className="mb-16">
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#9b835d] mb-4">Get in touch</p>
                  <h3 className="text-5xl sm:text-6xl font-display font-semibold mb-5 text-[#171612] leading-[0.95]">Contact me</h3>
                  <p className="text-gray-500 max-w-md leading-relaxed text-base">
                    Have a project in mind or simply want to say hello? Tell us what you are building and we will get back to you soon.
                  </p>
                </div>

                <div className="border-t border-[#dedbd3] pt-7 pb-8">
                  <h3 className="text-xs font-semibold tracking-[0.16em] uppercase mb-2 text-[#9b835d]">Office</h3>
                  <p className="text-gray-600 leading-relaxed text-[17px]">
                    DevSpectra, Valasaravakkam,
                    <br />
                    Chennai, Tamil Nadu, India
                  </p>
                </div>

                <div className="border-t border-[#dedbd3] pt-7 pb-8">
                  <h3 className="text-xs font-semibold tracking-[0.16em] uppercase mb-2 text-[#9b835d]">Email</h3>
                  <p className="text-gray-600 text-[17px]">info@devspectra.com</p>
                </div>

                <div className="border-t border-[#dedbd3] pt-7 pb-8">
                  <h3 className="text-xs font-semibold tracking-[0.16em] uppercase mb-2 text-[#9b835d]">Open time</h3>
                  <p className="text-gray-600 text-[17px]">Monday - Friday : 10:00 - 20:00</p>
                </div>

                <div className="border-t border-[#dedbd3] pt-7">
                  <h3 className="text-xs font-semibold tracking-[0.16em] uppercase mb-4 text-[#9b835d]">Follow me</h3>
                  <div className="flex flex-wrap gap-3.5">
                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/company/devspectra/posts/?feedView=all"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-12 h-12 bg-white/70 text-[#0077B5] backdrop-blur-xl border border-white/90 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_2px_8px_rgba(255,255,255,0.8)] flex items-center justify-center rounded-full hover:bg-[#0077B5] hover:text-white hover:scale-110 hover:shadow-[0_4px_15px_rgba(0,119,181,0.4)] transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>

                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/people/Devspectra/61592571971735/?rdid=LKwgeZMfC0rRrH6K&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1HgawTFf6o%2F"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="w-12 h-12 bg-white/70 text-[#1877F2] backdrop-blur-xl border border-white/90 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_2px_8px_rgba(255,255,255,0.8)] flex items-center justify-center rounded-full hover:bg-[#1877F2] hover:text-white hover:scale-110 hover:shadow-[0_4px_15px_rgba(24,119,242,0.4)] transition-all"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/_devspectra_?igsi=MW9wMW9oczAyOHg2eA%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-12 h-12 bg-white/70 text-[#E4405F] backdrop-blur-xl border border-white/90 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_2px_8px_rgba(255,255,255,0.8)] flex items-center justify-center rounded-full hover:bg-[#E4405F] hover:text-white hover:scale-110 hover:shadow-[0_4px_15px_rgba(228,64,95,0.4)] transition-all"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>

                    {/* YouTube */}
                    <a
                      href="https://www.youtube.com/@Devspectratech"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      className="w-12 h-12 bg-white/70 text-[#FF0000] backdrop-blur-xl border border-white/90 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_2px_8px_rgba(255,255,255,0.8)] flex items-center justify-center rounded-full hover:bg-[#FF0000] hover:text-white hover:scale-110 hover:shadow-[0_4px_15px_rgba(255,0,0,0.4)] transition-all"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>

                    {/* Justdial */}
                    <a
                      href="https://www.justdial.com/Chennai/DevSpectra-Valasaravakkam/044PXX44-XX44-251112122932-Q6Z1_BZDET?via=scode"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Justdial"
                      className="w-12 h-12 bg-white/70 text-[#F26522] backdrop-blur-xl border border-white/90 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_2px_8px_rgba(255,255,255,0.8)] flex items-center justify-center rounded-full hover:bg-[#F26522] hover:text-white hover:scale-110 hover:shadow-[0_4px_15px_rgba(242,101,34,0.4)] transition-all"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* j dot */}
                        <circle cx="6.8" cy="5.2" r="1.8" />
                        {/* j body */}
                        <path d="M5.3 8.8h3v6.6c0 1.4-1.1 2.6-2.5 2.6H4.4v-2.4h1.1c.4 0 .8-.4.8-.8V8.8z" />
                        {/* d body */}
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.4 4.5h2.8V18h-2.6v-1.3c-.8.9-1.9 1.5-3.3 1.5-2.9 0-5.1-2.2-5.1-5.1s2.2-5.1 5.1-5.1c1.4 0 2.5.6 3.3 1.5V4.5zm-2.8 6.4c-1.5 0-2.7 1.1-2.7 2.6s1.2 2.6 2.7 2.6 2.7-1.1 2.7-2.6-1.2-2.6-2.7-2.6z"
                        />
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
