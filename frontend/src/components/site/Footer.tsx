import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative bg-[#02081f] pt-24 pb-8 overflow-hidden">
      
      {/* Decorative Noise */}
      <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

      <div className="container-page max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mb-40 text-[15px] leading-loose">
          
          {/* Brand Column */}
          <div className="flex flex-col text-white items-start">
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

          {/* Column 3 */}
          <div className="flex flex-col text-gray-300 font-semibold">
            <span className="mb-2 text-gray-500 font-mono text-sm md:text-base tracking-widest uppercase">FOLLOW US</span>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">X</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
          </div>
        </div>

        {/* Bottom Small Bar */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 font-mono text-xs md:text-sm tracking-[0.1em] text-gray-500 uppercase text-center w-full">
          <p>© 2026 DEVSPECTRA INC. ALL RIGHTS RESERVED.</p>
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
