import React, { useState } from 'react';
import { ChevronDown, Hash } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What exactly does DevSpectra do?",
      answer: "DevSpectra is a full-service digital agency. We design, build, and scale high-performance websites, web applications, mobile apps, and custom SaaS platforms tailored to your business needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A standard website might take 4-6 weeks, while a complex custom SaaS platform or mobile app could take 3-6 months. We provide detailed timelines during our initial strategy phase."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer dedicated maintenance and support retainers to ensure your digital products remain secure, up-to-date, and performant long after the initial launch."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely. We specialize in seamless API integrations, connecting your new digital platform with your existing CRM, ERP, payment gateways, and third-party tools without disruption."
    }
  ];

  return (
    <section className="py-24 bg-[#fafcff] relative border-b border-gray-100 overflow-hidden">
      {/* Decorative Glowing Orbs for Glass Effect */}
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-purple-400 rounded-full blur-[100px] opacity-20 pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-400 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        
        {/* Left Side: Header */}
        <div className="flex-1 lg:max-w-md mt-4">
          
          {/* Heading */}
          <h2 className="text-4xl md:text-[2.75rem] font-black text-gray-900 leading-[1.1] mb-6 tracking-tight uppercase">
            Frequently asked <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">
              questions
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-lg">
            Got questions about our process, timelines, or technical capabilities? We've compiled the most common inquiries to help you understand exactly how we work.
          </p>
        </div>

        {/* Right Side: Accordion */}
        <div className="flex-1 flex flex-col gap-4 relative z-10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-md ${
                  isOpen 
                    ? "border-white/60 bg-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" 
                    : "border-white/40 bg-white/40 hover:bg-white/60 shadow-sm"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-bold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  
                  {/* Icon */}
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen 
                      ? "bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-500 text-white shadow-md rotate-180" 
                      : "bg-gray-200/60 text-gray-500"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-[15px] text-gray-500 leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
