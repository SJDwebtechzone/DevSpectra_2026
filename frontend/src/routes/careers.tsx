import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { PageShell } from "@/components/site/PageShell";
import { ArrowRight, MapPin, Mail, Phone, CheckCircle2, UploadCloud } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — DevSpectra" },
      { name: "description", content: "Begin your career at DevSpectra. Explore open positions and apply today." },
    ],
  }),
  component: Careers,
});

interface JobPosition {
  id: string;
  title: string;
  location: string;
  type: string;
}

const openPositions: JobPosition[] = [
  { id: "marketing-expert", title: "Marketing Expert", location: "Remote - US/Canada", type: "Full Time" },
  { id: "graphic-designer", title: "Graphic Designer", location: "Remote - UK/Italy", type: "Full Time" },
  { id: "project-manager", title: "Project Manager", location: "Remote - Australia", type: "Full Time" },
  { id: "seo-specialist", title: "SEO Specialist", location: "Remote - France", type: "Full Time" },
  { id: "senior-developer", title: "Senior Developer", location: "Remote - US/Canada", type: "Full Time" },
  { id: "ui-designer", title: "UI Designer", location: "Remote - Canada", type: "Full Time" },
  { id: "digital-marketing-analyst", title: "Digital Marketing Analyst", location: "Remote - US/Canada", type: "Full Time" },
  { id: "ui-ux-designer", title: "UI/UX Designer", location: "Remote - Canada", type: "Full Time" },
  { id: "full-stack-developer", title: "Full Stack Developer", location: "Remote - US/Canada", type: "Full Time" },
];

const LOGO_GRADIENT_H = "linear-gradient(90deg, #5B21B6 0%, #2563EB 20%, #00B4D8 40%, #10B981 60%, #F59E0B 80%, #EF4444 100%)";
const LOGO_GRADIENT_V = "linear-gradient(180deg, #5B21B6 0%, #2563EB 20%, #00B4D8 40%, #10B981 60%, #F59E0B 80%, #EF4444 100%)";
const LOGO_GRADIENT_DIAG = "linear-gradient(135deg, #5B21B6 0%, #2563EB 20%, #00B4D8 40%, #10B981 60%, #F59E0B 80%, #EF4444 100%)";

function SpectraIcon({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      {/* Ambient Spectra Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 rounded-full blur-[8px] opacity-40 group-hover:opacity-75 transition-opacity duration-300" />

      {/* Gradient Border Ring */}
      <div
        className="relative p-[1.5px] rounded-full shadow-sm transition-transform duration-300 group-hover:scale-105"
        style={{
          backgroundImage: LOGO_GRADIENT_DIAG,
        }}
      >
        <div className="relative w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
          {/* SVG Definitions for Gradients */}
          <svg width="0" height="0" className="absolute">
            <defs>
              <linearGradient id="career-icon-stroke-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5B21B6" />
                <stop offset="20%" stopColor="#2563EB" />
                <stop offset="40%" stopColor="#00B4D8" />
                <stop offset="60%" stopColor="#10B981" />
                <stop offset="80%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#EF4444" />
              </linearGradient>
            </defs>
          </svg>

          {/* Subtle Wavy Background Pattern */}
          <div className="absolute inset-0 opacity-[0.55] pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                d="M0,50 Q25,20 50,50 T100,50 M0,60 Q25,30 50,60 T100,60"
                stroke="url(#career-icon-wave-grad)"
                fill="none"
                strokeWidth="0.6"
              />
              <defs>
                <linearGradient id="career-icon-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#F97316" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Inner Icon wrapper with logo gradient stroke */}
          <div className="relative z-10 text-transparent [&_svg]:!stroke-[url(#career-icon-stroke-grad)] [&_svg]:w-5 [&_svg]:h-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function SpectraButton({
  children,
  onClick,
  type = "button",
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative inline-flex group cursor-pointer shrink-0 ${className}`}
    >
      {/* Ambient Spectra Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full blur-[10px] opacity-40 group-hover:opacity-80 transition-opacity duration-500" />

      {/* Gradient Border Ring */}
      <div
        className="relative flex items-center p-[1.5px] rounded-full w-full shadow-sm"
        style={{ backgroundImage: LOGO_GRADIENT_H }}
      >
        <div className="relative flex items-center justify-between w-full bg-white rounded-full px-6 py-3.5 overflow-hidden">
          {/* Subtle Wavy Background Pattern */}
          <div className="absolute inset-0 opacity-[0.5] pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 400 100" preserveAspectRatio="none">
              <path
                d="M0,50 Q100,0 200,50 T400,50 M0,60 Q100,20 200,60 T400,60 M0,40 Q100,-10 200,40 T400,40"
                stroke="url(#submit-btn-wave-grad)"
                fill="none"
                strokeWidth="0.6"
              />
              <defs>
                <linearGradient id="submit-btn-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#5B21B6" />
                  <stop offset="25%" stopColor="#2563EB" />
                  <stop offset="50%" stopColor="#00B4D8" />
                  <stop offset="75%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#EF4444" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <span className="relative z-10 text-gray-900 font-bold tracking-widest text-xs sm:text-sm mr-4 uppercase">
            {children}
          </span>
          <div className="relative z-10 w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-900 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] group-hover:scale-105 group-hover:translate-x-1 transition-all shrink-0">
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </div>
        </div>
      </div>
    </button>
  );
}

function Careers() {
  const [selectedRole, setSelectedRole] = useState<string>("Marketing Expert");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [applySubmitted, setApplySubmitted] = useState(false);
  const [hoveredJob, setHoveredJob] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSelectRole = (title: string) => {
    setSelectedRole(title);
    const element = document.getElementById("apply-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  return (
    <PageShell mode="careers" ctaLabel="Apply Now" ctaTo="#apply-form">
      <div className="bg-white min-h-screen text-[#1E293B] pb-24">
        {/* Top Header Section */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-8 pb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-gray-100">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase block mb-3">
                — Agency Positions Available
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-950">
                Begin Your{" "}
                <span className="relative inline-block pb-1">
                  <span
                    className="bg-clip-text text-transparent font-black"
                    style={{
                      backgroundImage: LOGO_GRADIENT_H,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Career Here
                  </span>
                  <span
                    className="absolute left-0 -bottom-1 w-full h-[4px] rounded-full"
                    style={{
                      backgroundImage: LOGO_GRADIENT_H,
                    }}
                  />
                </span>
              </h1>
            </div>

            <div className="lg:max-w-md lg:border-l lg:border-gray-200 lg:pl-6">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Discover rewarding career opportunities, build state-of-the-art digital products, and grow alongside our collaborative team of creators and builders.
              </p>
            </div>
          </div>
        </div>

        {/* Main Grid: Job Cards + Sidebar */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Job Cards List with Spectra Look */}
            <div className="lg:col-span-8 space-y-4">
              {openPositions.map((job) => {
                const isHovered = hoveredJob === job.id;
                return (
                  <div
                    key={job.id}
                    onMouseEnter={() => setHoveredJob(job.id)}
                    onMouseLeave={() => setHoveredJob(null)}
                    onClick={() => handleSelectRole(job.title)}
                    className="relative group cursor-pointer"
                  >
                    {/* Ambient Spectra Glow on Hover */}
                    <div
                      className={`absolute inset-0 rounded-2xl blur-[12px] transition-opacity duration-500 ${
                        isHovered ? "opacity-35" : "opacity-0"
                      }`}
                      style={{ backgroundImage: LOGO_GRADIENT_H }}
                    />

                    {/* Gradient Border Ring */}
                    <div
                      className="relative p-[1.5px] rounded-2xl transition-all duration-300"
                      style={{
                        backgroundImage: isHovered
                          ? LOGO_GRADIENT_H
                          : "linear-gradient(90deg, rgba(226,232,240,0.8), rgba(226,232,240,0.8))",
                      }}
                    >
                      <div className="relative bg-white rounded-2xl p-5 sm:p-6 flex items-center justify-between overflow-hidden shadow-sm">
                        {/* Subtle Wavy Background Pattern on Hover */}
                        <div
                          className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                            isHovered ? "opacity-[0.45]" : "opacity-0"
                          }`}
                        >
                          <svg width="100%" height="100%" viewBox="0 0 600 100" preserveAspectRatio="none">
                            <path
                              d="M0,50 Q150,10 300,50 T600,50 M0,65 Q150,25 300,65 T600,65"
                              stroke="url(#job-card-wave-grad)"
                              fill="none"
                              strokeWidth="0.6"
                            />
                            <defs>
                              <linearGradient id="job-card-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#5B21B6" />
                                <stop offset="25%" stopColor="#2563EB" />
                                <stop offset="50%" stopColor="#00B4D8" />
                                <stop offset="75%" stopColor="#10B981" />
                                <stop offset="100%" stopColor="#EF4444" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>

                        {/* Exact Spectra Accent Bar on Left on Hover */}
                        <div
                          className={`absolute left-0 top-0 bottom-0 w-1.5 transition-opacity duration-300 ${
                            isHovered ? "opacity-100" : "opacity-0"
                          }`}
                          style={{ backgroundImage: LOGO_GRADIENT_V }}
                        />

                        <div className="pl-2 relative z-10">
                          <h3
                            className="text-base sm:text-lg font-bold transition-all duration-300"
                            style={
                              isHovered
                                ? {
                                    backgroundImage: LOGO_GRADIENT_H,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                  }
                                : { color: "#0B192C" }
                            }
                          >
                            {job.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                            {job.location} · {job.type}
                          </p>
                        </div>

                        {/* Right Circular Arrow Badge with Spectra Styling */}
                        <div className="relative z-10 shrink-0">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 p-[1.5px]"
                            style={{
                              backgroundImage: isHovered
                                ? LOGO_GRADIENT_DIAG
                                : "linear-gradient(90deg, #e2e8f0, #e2e8f0)",
                              boxShadow: isHovered ? "0 4px 14px rgba(37,99,235,0.35)" : "none",
                              transform: isHovered ? "translateX(4px)" : "none",
                            }}
                          >
                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                              <ArrowRight
                                className="w-4 h-4 stroke-[2.5] transition-colors duration-300"
                                style={
                                  isHovered
                                    ? { stroke: "url(#career-icon-stroke-grad)" }
                                    : { stroke: "#64748B" }
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Contact & Talent Team Card */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] sticky top-28 space-y-6">
                <div>
                  <span
                    className="text-[11px] font-bold tracking-[0.15em] uppercase block mb-2 bg-clip-text text-transparent"
                    style={{
                      backgroundImage: LOGO_GRADIENT_H,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Direct Inquiries
                  </span>
                  <h3 className="text-xl font-black text-gray-950 mb-2">
                    Get In Touch With Us
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    Have questions regarding our culture, hiring process, or open roles? Reach out directly to our talent team.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Location */}
                  <div className="flex items-start gap-4 group cursor-pointer p-3.5 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/20 transition-all">
                    <SpectraIcon>
                      <MapPin />
                    </SpectraIcon>
                    <div>
                      <h5 className="text-xs font-bold text-gray-950">Our Location</h5>
                      <p className="text-xs text-gray-500 mt-1 leading-snug">
                        No. 58 A, East Madison Street, Baltimore, MD, USA 4508
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 group cursor-pointer p-3.5 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/20 transition-all">
                    <SpectraIcon>
                      <Mail />
                    </SpectraIcon>
                    <div>
                      <h5 className="text-xs font-bold text-gray-950">Email</h5>
                      <a
                        href="mailto:info@devspectra.com"
                        className="text-xs text-gray-500 group-hover:text-blue-600 transition-colors mt-1 block font-medium"
                      >
                        info@devspectra.com
                      </a>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="flex items-start gap-4 group cursor-pointer p-3.5 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/20 transition-all">
                    <SpectraIcon>
                      <Phone />
                    </SpectraIcon>
                    <div>
                      <h5 className="text-xs font-bold text-gray-950">Phone Number</h5>
                      <a
                        href="tel:+15550192834"
                        className="text-xs text-gray-500 group-hover:text-blue-600 transition-colors mt-1 block font-medium"
                      >
                        +000 - 123 - 456789
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Note Badge */}
                <div className="pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-gray-600 leading-relaxed">
                    <span
                      className="font-bold block mb-1 bg-clip-text text-transparent"
                      style={{
                        backgroundImage: LOGO_GRADIENT_H,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      ✨ Fast Application Review
                    </span>
                    All submitted profiles are directly reviewed by senior leads within 24 hours.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Application Form */}
        <div id="apply-form" className="max-w-7xl mx-auto px-6 sm:px-8 mt-24 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image: Support / Team with Headsets */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 group">
                <img
                  src="/team.jpg"
                  alt="DevSpectra Support and Recruitment Team"
                  className="w-full h-[520px] object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right: Detailed Application Form */}
            <div className="lg:col-span-7">
              <div className="max-w-xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 tracking-tight mb-8">
                  Our Team Will Respond To You Within 24 Hrs
                </h2>

                {applySubmitted ? (
                  <div className="bg-slate-50 border border-slate-200 text-slate-900 p-6 rounded-2xl flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-base">Application Submitted Successfully!</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        Our recruiting team will review your application and get in touch within 24 hours.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setApplySubmitted(true);
                      setTimeout(() => setApplySubmitted(false), 6000);
                    }}
                    className="space-y-6"
                  >
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Your Name *"
                          className="w-full pb-2 pt-1 border-b border-gray-300 text-sm font-medium text-gray-900 bg-transparent outline-none focus:border-blue-600 transition-colors placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Your Email *"
                          className="w-full pb-2 pt-1 border-b border-gray-300 text-sm font-medium text-gray-900 bg-transparent outline-none focus:border-blue-600 transition-colors placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    {/* Row 2: Mobile Number & Position Select */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                      <div>
                        <input
                          type="tel"
                          required
                          placeholder="Mobile Number *"
                          className="w-full pb-2 pt-1 border-b border-gray-300 text-sm font-medium text-gray-900 bg-transparent outline-none focus:border-blue-600 transition-colors placeholder:text-gray-400"
                        />
                      </div>
                      <div className="relative">
                        <select
                          value={selectedRole}
                          onChange={(e) => setSelectedRole(e.target.value)}
                          className="w-full pb-2 pt-1 border-b border-gray-300 text-sm font-medium text-gray-900 bg-transparent outline-none focus:border-blue-600 transition-colors cursor-pointer appearance-none"
                        >
                          {openPositions.map((job) => (
                            <option key={job.id} value={job.title} className="text-gray-900">
                              {job.title}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-0 bottom-3 pointer-events-none text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Additional Message */}
                    <div className="pt-2">
                      <textarea
                        rows={3}
                        placeholder="Additional message"
                        className="w-full pb-2 pt-1 border-b border-gray-300 text-sm font-medium text-gray-900 bg-transparent outline-none focus:border-blue-600 transition-colors placeholder:text-gray-400 resize-none"
                      />
                    </div>

                    {/* Row 4: File Upload & Submit Button with Spectra Styling */}
                    <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
                      {/* Upload Box with Spectra Styling */}
                      <div className="flex-1">
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx,.jpg,.png"
                          className="hidden"
                        />
                        <div
                          onClick={() => fileInputRef.current?.click()}
                          className="relative group cursor-pointer"
                        >
                          {/* Ambient Glow */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-2xl blur-[8px] opacity-25 group-hover:opacity-60 transition-opacity duration-300" />

                          {/* Gradient Border Box */}
                          <div
                            className="relative p-[1.5px] rounded-2xl transition-all duration-300"
                            style={{ backgroundImage: LOGO_GRADIENT_H }}
                          >
                            <div className="relative bg-white rounded-2xl px-4 py-3 flex items-center gap-3 overflow-hidden shadow-sm">
                              {/* Wavy Background Pattern */}
                              <div className="absolute inset-0 opacity-[0.35] pointer-events-none">
                                <svg width="100%" height="100%" viewBox="0 0 300 60" preserveAspectRatio="none">
                                  <path
                                    d="M0,30 Q75,10 150,30 T300,30"
                                    stroke="url(#upload-wave-grad)"
                                    fill="none"
                                    strokeWidth="0.6"
                                  />
                                  <defs>
                                    <linearGradient id="upload-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                      <stop offset="0%" stopColor="#5B21B6" />
                                      <stop offset="50%" stopColor="#00B4D8" />
                                      <stop offset="100%" stopColor="#EF4444" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </div>

                              {/* Mini Pill Browse Button in Navy Blue */}
                              <div
                                className="relative z-10 px-3.5 py-1.5 rounded-full bg-[#0B192C] hover:bg-[#1E293B] text-white text-xs font-bold shrink-0 shadow-md shadow-[#0B192C]/20 flex items-center gap-1.5 transition-all duration-300 group-hover:scale-105"
                              >
                                <UploadCloud className="w-3.5 h-3.5 text-white" />
                                Browse Files
                              </div>

                              <span className="relative z-10 text-xs text-gray-600 truncate flex-1 font-medium">
                                {uploadedFile ? uploadedFile.name : "Drag & Drop files here"}
                              </span>

                              <span className="relative z-10 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 shrink-0">
                                {uploadedFile ? "1 of 5" : "0 of 5"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-[11px] text-gray-400 mt-1.5 pl-1">
                          *Upload your Portfolio in pdf, jpg, png, or doc format
                        </p>
                      </div>

                      {/* Submit Button with Iconic Spectra Pill Styling */}
                      <SpectraButton type="submit">
                        Submit
                      </SpectraButton>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
