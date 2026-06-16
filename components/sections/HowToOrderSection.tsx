import { whatsappCTA } from "@/data/site";
import { MessageCircle, ClipboardList, UtensilsCrossed, CalendarCheck, Truck, Phone } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MessageCircle,
    title: "Hubungi WhatsApp",
    description:
      "Mulai dengan menghubungi kami melalui WhatsApp. Tim kami siap merespons dengan cepat dan ramah.",
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "Konsultasi Kebutuhan",
    description:
      "Ceritakan kebutuhan Anda — jenis acara, jumlah peserta, tanggal, dan anggaran. Kami akan membantu menemukan solusi terbaik.",
  },
  {
    step: "03",
    icon: UtensilsCrossed,
    title: "Pilih Menu & Paket",
    description:
      "Pilih menu dan paket yang sesuai dari katalog kami, atau minta rekomendasi dari tim kami.",
  },
  {
    step: "04",
    icon: CalendarCheck,
    title: "Konfirmasi Jadwal",
    description:
      "Konfirmasi tanggal, waktu, dan lokasi pengiriman. Kami akan memastikan semua detail pesanan sudah tepat.",
  },
  {
    step: "05",
    icon: Truck,
    title: "Pesanan Siap & Dikirim",
    description:
      "Pesanan Anda diproses dengan standar kualitas terbaik dan dikirimkan tepat waktu sesuai jadwal.",
  },
];

export function HowToOrderSection() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="how-to-order-heading"
    >
      <div className="container-base">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center mb-4">
            <span className="section-label">
              <span className="w-8 h-px bg-brand-gold" />
              Cara Pemesanan
              <span className="w-8 h-px bg-brand-gold" />
            </span>
          </div>
          <h2 id="how-to-order-heading" className="section-title mb-4">
            Pesan Catering Semudah Chat WhatsApp
          </h2>
          <p className="section-subtitle">
            Proses pemesanan yang sederhana, cepat, dan mudah. Tidak perlu antri atau datang langsung — cukup chat dari mana saja.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-8 left-[calc(10%+28px)] right-[calc(10%+28px)] h-px bg-gradient-to-r from-brand-green/20 via-brand-gold/40 to-brand-green/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center">
                  {/* Step Icon */}
                  <div className="relative mb-5">
                    <div className="w-14 h-14 bg-brand-green rounded-2xl flex items-center justify-center shadow-card">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {idx + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-semibold text-brand-green text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-600 mb-6">
            Siap memulai? Hubungi kami sekarang dan dapatkan konsultasi gratis.
          </p>
          <a
            href={whatsappCTA("Halo Catering Ibu Iis, saya ingin memesan catering. Boleh konsultasi dulu?")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-base px-8 py-4"
          >
            <Phone className="w-5 h-5" />
            Mulai Pesan Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
