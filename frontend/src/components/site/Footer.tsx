import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export function Footer() {
  const [locations, setLocations] = useState<any[]>([]);
  const [activeLoc, setActiveLoc] = useState<any>({
    id: "default",
    name: "Chennai Office",
    city: "Chennai",
    address: "18, 2nd St, Vani Nagar, Jai Nagar, Valasaravakkam, Chennai, Tamil Nadu 600087",
    embedUrl:
      "https://maps.google.com/maps?q=18,+2nd+St,+Vani+Nagar,+Jai+Nagar,+Valasaravakkam,+Chennai,+Tamil+Nadu+600087&t=&z=15&ie=UTF8&iwloc=&output=embed",
    directUrl:
      "https://maps.google.com/?q=18,+2nd+St,+Vani+Nagar,+Jai+Nagar,+Valasaravakkam,+Chennai,+Tamil+Nadu+600087",
    isPrimary: true,
  });

  useEffect(() => {
    fetch("http://localhost:5000/contacts/locations")
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setLocations(data);
          const primary = data.find((l: any) => l.isPrimary) || data[0];
          setActiveLoc(primary);
        }
      })
      .catch((err) => console.error("Failed to fetch footer locations", err));
  }, []);

  return (
    <footer className="relative bg-[#02081f] pt-24 pb-8 overflow-hidden">
      
      {/* Decorative Noise */}
      <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

      <div className="container-page max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-16 mb-16 md:mb-20 text-[15px] leading-loose">
          
          {/* Brand Column */}
          <div className="flex flex-col text-white items-start lg:col-span-2">
            <img src="/devspectra.png" alt="DevSpectra" className="h-20 w-auto object-contain mb-6 -ml-2" />
            <p className="text-base leading-relaxed text-gray-300 font-medium max-w-sm text-justify">
              Devspectra is a full-service digital agency specializing in cutting-edge web development, mobile applications, and scalable software solutions.
            </p>
          </div>

          {/* Column 1 */}
          <div className="flex flex-col text-gray-300 font-semibold">
            <span className="mb-2 text-gray-500 font-mono text-sm md:text-base tracking-widest uppercase">SERVICES</span>
            <Link to="/services#web-development" className="hover:text-white transition-colors">Web Development</Link>
            <Link to="/services#mobile-application" className="hover:text-white transition-colors">App Development</Link>
            <Link to="/services#e-commerce" className="hover:text-white transition-colors">E-Commerce</Link>
            <Link to="/services#saas-products" className="hover:text-white transition-colors">SaaS Products</Link>
            <Link to="/services#digital-marketing" className="hover:text-white transition-colors">Digital Marketing</Link>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col text-gray-300 font-semibold">
            <span className="mb-2 text-gray-500 font-mono text-sm md:text-base tracking-widest uppercase">COMPANY</span>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
            <Link to="/blog" className="hover:text-white transition-colors">Blogs</Link>
            <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Column 3 - Map & All Office Locations */}
          <div className="flex flex-col text-gray-300 font-semibold">
            <span className="text-gray-500 font-mono text-sm md:text-base tracking-widest uppercase mb-2">
              OUR LOCATIONS {locations.length > 0 && `(${locations.length})`}
            </span>

            {/* Office Location Branch Pills / Selector */}
            {locations.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-3">
                {locations.map((loc) => {
                  const isSelected = activeLoc?.id === loc.id;
                  return (
                    <button
                      key={loc.id}
                      onClick={() => setActiveLoc(loc)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 border ${
                        isSelected
                          ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-md"
                          : "bg-gray-900/60 text-gray-400 hover:text-white border-gray-800 hover:border-gray-700"
                      }`}
                    >
                      <span>{loc.city || loc.name}</span>
                      {loc.isPrimary && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" title="Primary Footer Location" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {activeLoc && (
              <>
                <div className="text-xs text-gray-400 font-normal mb-2 leading-tight space-y-0.5">
                  <p className="font-semibold text-white flex items-center gap-1.5">
                    {activeLoc.name}
                    {activeLoc.isPrimary && (
                      <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-500/30">
                        Primary
                      </span>
                    )}
                  </p>
                  <p className="text-[11px] text-gray-400 line-clamp-1">{activeLoc.address}</p>
                </div>

                <div className="relative w-full h-40 mb-3 rounded-[12px] overflow-hidden group border border-gray-800 bg-gray-900">
                  <iframe
                    key={activeLoc.id || activeLoc.embedUrl}
                    src={
                      activeLoc.embedUrl ||
                      `https://maps.google.com/maps?q=${encodeURIComponent(activeLoc.address || activeLoc.name)}&t=&z=15&ie=UTF8&iwloc=&output=embed`
                    }
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                  />
                </div>

                <a
                  href={
                    activeLoc.directUrl ||
                    `https://maps.google.com/?q=${encodeURIComponent(activeLoc.address || activeLoc.name || "DevSpectra")}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5 group text-sm"
                >
                  View {activeLoc.city || activeLoc.name} on Google Maps
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </>
            )}
          </div>
        </div>

        {/* Bottom Bar with Socials and Copyright */}
        <div className="flex flex-col justify-center items-center gap-6 mb-8 w-full">
          {/* Social Icons */}
          <div className="flex items-center gap-6 text-gray-400">
            <a href="#" aria-label="LinkedIn" className="hover:text-white hover:-translate-y-1 transition-all duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" aria-label="X (Twitter)" className="hover:text-white hover:-translate-y-1 transition-all duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white hover:-translate-y-1 transition-all duration-300">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-white hover:-translate-y-1 transition-all duration-300">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>

          <p className="font-mono text-xs md:text-sm tracking-[0.1em] text-gray-500 uppercase text-center">
            © 2026 DEVSPECTRA INC. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>

      {/* Massive Text Banner */}
      <div className="w-full relative z-10 flex justify-center -mb-[5%] overflow-hidden pointer-events-none">
        <h1 
          className="text-[16vw] font-black leading-[0.75] tracking-[-0.04em] uppercase text-transparent bg-clip-text" 
          style={{ 
            transform: "scaleY(1.1)",
            backgroundImage: "linear-gradient(to right, #7928CA, #0070F3, #00DFD8, #10B981, #F5A623, #FF4B4B)"
          }}
        >
          DEVSPECTRA
        </h1>
      </div>

    </footer>
  );
}
