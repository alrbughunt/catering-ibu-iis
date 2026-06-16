import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { pricingPackages, pricingNote } from "@/data/pricing";
import { whatsappCTA } from "@/data/site";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section
      className="section-padding bg-gray-50"
      aria-labelledby="pricing-heading"
    >
      <div className="container-base">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center mb-4">
            <span className="section-label">
              <span className="w-8 h-px bg-brand-gold" />
              Harga & Paket
              <span className="w-8 h-px bg-brand-gold" />
            </span>
          </div>
          <h2 id="pricing-heading" className="section-title mb-4">
            Paket Terjangkau untuk Setiap Kebutuhan
          </h2>
          <p className="section-subtitle">
            Pilih paket yang sesuai dengan kebutuhan dan anggaran Anda. Semua harga dapat disesuaikan lebih lanjut.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={cn(
                "relative rounded-2xl p-7 flex flex-col transition-all duration-300",
                pkg.popular
                  ? "bg-brand-green text-white shadow-lg shadow-brand-green/20 scale-[1.02]"
                  : "bg-white shadow-card hover:shadow-card-hover border border-gray-100"
              )}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-gold text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-gold whitespace-nowrap">
                    ★ Paling Diminati
                  </span>
                </div>
              )}

              {/* Highlight */}
              {pkg.highlight && !pkg.popular && (
                <span
                  className={cn(
                    "text-xs font-bold uppercase tracking-widest mb-3",
                    "text-brand-gold"
                  )}
                >
                  {pkg.highlight}
                </span>
              )}

              {/* Package Name */}
              <h3
                className={cn(
                  "font-display font-bold text-xl mb-2",
                  pkg.popular ? "text-white" : "text-brand-green"
                )}
              >
                {pkg.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <p
                  className={cn(
                    "text-xs font-medium mb-1",
                    pkg.popular ? "text-white/60" : "text-gray-500"
                  )}
                >
                  Mulai dari
                </p>
                <div className="flex items-baseline gap-1">
                  <span
                    className={cn(
                      "font-display font-bold text-3xl",
                      pkg.popular ? "text-brand-gold" : "text-brand-green"
                    )}
                  >
                    {pkg.priceLabel}
                  </span>
                  <span
                    className={cn(
                      "text-sm",
                      pkg.popular ? "text-white/60" : "text-gray-500"
                    )}
                  >
                    /porsi
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                className={cn(
                  "text-sm leading-relaxed mb-5",
                  pkg.popular ? "text-white/75" : "text-gray-600"
                )}
              >
                {pkg.description}
              </p>

              {/* Includes */}
              <ul className="space-y-2.5 mb-7 flex-1">
                {pkg.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2
                      className={cn(
                        "w-4 h-4 mt-0.5 shrink-0",
                        pkg.popular ? "text-brand-gold" : "text-brand-green"
                      )}
                    />
                    <span className={pkg.popular ? "text-white/85" : "text-gray-700"}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={whatsappCTA(pkg.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-[0.98]",
                  pkg.popular
                    ? "bg-brand-gold hover:bg-brand-gold-light text-white shadow-gold"
                    : "bg-brand-green-50 hover:bg-brand-green hover:text-white text-brand-green border border-brand-green/20"
                )}
              >
                <Phone className="w-4 h-4" />
                Pesan Paket Ini
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center">
          <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-6">
            <span className="font-medium text-gray-700">Catatan: </span>
            {pricingNote}
          </p>
          <a
            href={whatsappCTA("Halo Catering Ibu Iis, saya ingin mendapatkan penawaran khusus untuk pesanan catering.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Hubungi Kami untuk Penawaran Khusus
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
