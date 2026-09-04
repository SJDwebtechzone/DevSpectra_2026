import { Link } from "@tanstack/react-router";

function JustdialIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
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
  );
}

export function Footer() {
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

          {/* Column 3 - Map */}
          <div className="flex flex-col text-gray-300 font-semibold">
            <span className="mb-2 text-gray-500 font-mono text-sm md:text-base tracking-widest uppercase">OUR LOCATION</span>
            <div className="relative w-full h-40 mb-3 rounded-[12px] overflow-hidden group border border-gray-800 bg-gray-900">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113645.75338146747!2d77.49080709088732!3d8.172403912959648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f12613dd3e63%3A0xa946b5bd864893cc!2sNagercoil%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0 pointer-events-none"
               ></iframe>
            </div>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1.5 group text-sm">
              View on Google Maps 
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar with Socials and Copyright */}
        <div className="flex flex-col justify-center items-center gap-6 mb-8 w-full">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/devspectra/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#0077B5] hover:border-[#0077B5] hover:shadow-[0_0_16px_rgba(0,119,181,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/people/Devspectra/61592571971735/?rdid=LKwgeZMfC0rRrH6K&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1HgawTFf6o%2F"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-11 h-11 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] hover:shadow-[0_0_16px_rgba(24,119,242,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/_devspectra_?igsi=MW9wMW9oczAyOHg2eA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#E4405F] hover:border-[#E4405F] hover:shadow-[0_0_16px_rgba(228,64,95,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@Devspectratech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-11 h-11 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] hover:shadow-[0_0_16px_rgba(255,0,0,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* Justdial */}
            <a
              href="https://www.justdial.com/Chennai/DevSpectra-Valasaravakkam/044PXX44-XX44-251112122932-Q6Z1_BZDET?via=scode"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Justdial"
              className="w-11 h-11 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#F26522] hover:border-[#F26522] hover:shadow-[0_0_16px_rgba(242,101,34,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              <JustdialIcon className="w-5 h-5 fill-current" />
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
