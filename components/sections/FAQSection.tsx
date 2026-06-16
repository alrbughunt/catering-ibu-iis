"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";
import { cn } from "@/lib/utils";
import { whatsappCTA } from "@/data/site";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("1");

  return (
    <section
      className="section-padding bg-gray-50"
      aria-labelledby="faq-heading"
    >
      <div className="container-base">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="flex items-center justify-center mb-4">
              <span className="section-label">
                <span className="w-8 h-px bg-brand-gold" />
                FAQ
                <span className="w-8 h-px bg-brand-gold" />
              </span>
            </div>
            <h2 id="faq-heading" className="section-title mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="section-subtitle">
              Temukan jawaban atas pertanyaan umum seputar layanan, pemesanan, dan operasional kami.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {faqItems.slice(0, 8).map((item) => (
              <div
                key={item.id}
                className={cn(
                  "rounded-xl border transition-all duration-200 overflow-hidden",
                  openId === item.id
                    ? "border-brand-green/30 shadow-card bg-white"
                    : "border-gray-200 bg-white hover:border-brand-green/20"
                )}
              >
                <button
                  onClick={() =>
                    setOpenId(openId === item.id ? null : item.id)
                  }
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={openId === item.id}
                >
                  <span
                    className={cn(
                      "font-semibold text-sm md:text-base leading-snug",
                      openId === item.id ? "text-brand-green" : "text-gray-800"
                    )}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 shrink-0 transition-transform duration-200",
                      openId === item.id
                        ? "rotate-180 text-brand-green"
                        : "text-gray-400"
                    )}
                  />
                </button>

                {/* Answer */}
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openId === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="px-5 pb-5">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 text-sm leading-relaxed mt-3">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-12 text-center p-8 bg-brand-green rounded-2xl text-white">
            <h3 className="font-display font-semibold text-xl mb-3">
              Masih Ada Pertanyaan?
            </h3>
            <p className="text-white/75 text-sm mb-6">
              Tim kami siap menjawab semua pertanyaan Anda. Hubungi langsung melalui WhatsApp untuk respons lebih cepat.
            </p>
            <a
              href={whatsappCTA("Halo Catering Ibu Iis, saya punya pertanyaan tentang layanan catering.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-white font-semibold px-7 py-3 rounded-xl transition-all"
            >
              Tanya via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
