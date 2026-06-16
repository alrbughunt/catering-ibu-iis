import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { whatsappCTA } from "@/data/site";

const trustPoints = [
  "Higienis & Terjamin",
  "Tepat Waktu",
  "Harga Kompetitif",
  "Rasa Berkualitas",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5" />
      </div>

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="container-base relative z-10 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-4xl">
          {/* Label */}
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
            <span className="text-brand-gold text-sm font-medium">
              Katering Profesional — Tasikmalaya & Sekitarnya
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 text-balance">
            Catering Profesional untuk{" "}
            <span className="text-brand-gold">Kantor, Instansi,</span>{" "}
            dan Acara di Tasikmalaya
          </h1>

          {/* Subheadline */}
          <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            Catering Ibu Iis melayani nasi kotak, catering harian, konsumsi rapat, seminar, dan acara keluarga dengan cita rasa rumahan berkualitas, pengemasan higienis, dan pengiriman yang selalu tepat waktu.
          </p>

          {/* Trust Points */}
          <div className="flex flex-wrap gap-4 mb-10">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-white/90 text-sm font-medium">{point}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappCTA("Halo Catering Ibu Iis, saya ingin memesan catering. Bisa konsultasi?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-brand-gold hover:bg-brand-gold-light text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-gold active:scale-[0.98] text-base"
            >
              <Phone className="w-5 h-5" />
              Pesan Sekarang
            </a>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2.5 border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:bg-white/10 active:scale-[0.98] text-base"
            >
              Lihat Menu
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { value: "5+", label: "Tahun Pengalaman" },
              { value: "500+", label: "Pelanggan Puas" },
              { value: "10.000+", label: "Porsi Terlayani" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display font-bold text-white text-2xl md:text-3xl">
                  {stat.value}
                </p>
                <p className="text-white/50 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
