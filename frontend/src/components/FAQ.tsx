import React, { useState } from "react";
import { ChevronDown, Hash } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What exactly does DevSpectra do?",
      answer:
        "DevSpectra is a full-service digital agency. We design, build, and scale high-performance websites, web applications, mobile apps, and custom SaaS platforms tailored to your business needs.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity. A standard website might take 4-6 weeks, while a complex custom SaaS platform or mobile app could take 3-6 months. We provide detailed timelines during our initial strategy phase.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we offer dedicated maintenance and support retainers to ensure your digital products remain secure, up-to-date, and performant long after the initial launch.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer:
        "Absolutely. We specialize in seamless API integrations, connecting your new digital platform with your existing CRM, ERP, payment gateways, and third-party tools without disruption.",
    },
  ];

  return (
    <section className="py-24 bg-[#fafcff] relative border-b border-gray-100 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-[58%] opacity-35 lg:block"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
          maskImage: "linear-gradient(to right, black 55%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, black 55%, transparent 100%)",
        }}
      />

      {/* Decorative Glowing Orbs for Glass Effect */}
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-purple-400 rounded-full blur-[100px] opacity-20 pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-400 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        {/* Left Side: Header */}
        <div className="flex-1 lg:max-w-md mt-4">
          {/* Heading */}
          <h2 className="text-4xl md:text-[2.75rem] font-black text-[#4A3628] leading-[1.1] mb-6 tracking-tight uppercase">
            Frequently asked <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">
              questions
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-lg text-justify">
            Have questions about our work? Here are the most common things clients ask before
            getting started with us.
          </p>
        </div>

        {/* Right Side: Accordion */}
        <div className="flex-1 flex flex-col gap-4 relative z-10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-[1.1rem] bg-[conic-gradient(from_210deg,#111827_0deg,#111827_48deg,#2563eb_62deg,#ef4444_78deg,#facc15_92deg,#f8fafc_112deg,#f8fafc_240deg,#111827_280deg,#111827_360deg)] p-[2px] shadow-[0_10px_24px_rgba(25,35,55,0.12)]"
              >
                <div className="overflow-hidden rounded-[1rem] bg-white transition-all duration-300">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <span className="pr-8 text-lg font-bold text-gray-900">{faq.question}</span>

                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-500 text-white shadow-md"
                          : "bg-gray-200/60 text-gray-500"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 pb-6 text-justify text-[15px] font-medium leading-relaxed text-gray-500">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
