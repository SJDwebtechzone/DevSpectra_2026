import { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-black/80 hover:bg-black text-white shadow-lg backdrop-blur-md border border-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5 transition-transform duration-300" />
        </button>
      )}

      {/* Call Button (9600941222) */}
      <a
        href="tel:+919600941222"
        aria-label="Call Us"
        className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95"
      >
        <FaPhoneAlt className="w-5 h-5" />
      </a>

      {/* WhatsApp Button (7339041222) */}
      <a
        href="https://wa.me/917339041222"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95"
      >
        <span className="absolute -inset-1 rounded-full bg-green-500/30 animate-ping pointer-events-none opacity-75" />
        <FaWhatsapp className="w-6 h-6 relative z-10" />
      </a>
    </div>
  );
}
