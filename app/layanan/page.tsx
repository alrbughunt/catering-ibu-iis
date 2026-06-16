import type { Metadata } from "next";
import {
  UtensilsCrossed,
  Package,
  Building2,
  Clock3,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { PageHeader } from "@/components/layout/PageHeader";
import { ContactCTASection } from "@/components/sections/ContactCTASection";

export const metadata: Metadata = {
  title: "Layanan Catering",
  description:
    "Layanan Catering Ibu Iis meliputi catering harian, rantangan, nasi kotak, konsumsi rapat, seminar, acara kantor, instansi, dan keluarga.",
  alternates: {
    canonical: "/layanan",
  },
};

const services = [
  {
    icon: UtensilsCrossed,
    title: "Catering Harian / Rantangan",
    description:
      "Layanan konsumsi rutin untuk kantor, instansi, sekolah, rumah sakit, maupun kebutuhan keluarga.",
    features: [
      "Menu berganti setiap hari",
      "Porsi konsisten",
      "Pengiriman terjadwal",
      "Pilihan paket individu & keluarga",
    ],
  },
  {
    icon: Package,
    title: "Paket Nasi Kotak",
    description:
      "Solusi konsumsi praktis untuk rapat, seminar, gathering, pelatihan, syukuran, dan berbagai acara lainnya.",
    features: [
      "Kemasan rapi & higienis",
      "Pilihan paket ekonomis hingga premium",
      "Cocok untuk acara skala kecil maupun besar",
      "Tepat waktu",
    ],
  },
];

const advantages = [
  {
    icon: ShieldCheck,
    title: "Higienis & Berkualitas",
    description:
      "Menggunakan bahan segar dengan proses produksi yang menjaga kualitas makanan.",
  },
  {
    icon: Clock3,
    title: "Tepat Waktu",
    description:
      "Pesanan dikirim sesuai jadwal agar acara berjalan lancar tanpa hambatan.",
  },
  {
    icon: Truck,
    title: "Siap Antar",
    description:
      "Melayani pengiriman ke berbagai area Tasikmalaya dan sekitarnya.",
  },
  {
    icon: Building2,
    title: "Melayani Berbagai Segmen",
    description:
      "Mulai dari perusahaan, instansi, sekolah, hingga acara keluarga.",
  },
];

const orderSteps = [
  {
    step: "01",
    title: "Konsultasi Kebutuhan",
    description:
      "Hubungi kami melalui WhatsApp dan jelaskan kebutuhan konsumsi Anda.",
  },
  {
    step: "02",
    title: "Pilih Paket",
    description:
      "Pilih paket nasi kotak atau catering harian sesuai kebutuhan dan anggaran.",
  },
  {
    step: "03",
    title: "Konfirmasi Pesanan",
    description:
      "Kami akan mengonfirmasi detail menu, jumlah porsi, dan jadwal pengiriman.",
  },
  {
    step: "04",
    title: "Produksi & Pengiriman",
    description:
      "Pesanan diproses dan dikirim tepat waktu sesuai kesepakatan.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Layanan Catering Ibu Iis"
        subtitle="Solusi konsumsi profesional untuk kantor, instansi, acara perusahaan, dan kebutuhan keluarga."
        breadcrumbs={[{ label: "Layanan" }]}
      />

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-base">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label mb-4 inline-flex gap-2 justify-center">
              <span className="w-8 h-px bg-brand-gold" />
              Layanan Utama
              <span className="w-8 h-px bg-brand-gold" />
            </span>

            <h2 className="section-title mb-4">
              Pilihan Layanan yang Fleksibel
            </h2>

            <p className="section-subtitle">
              Kami menyediakan layanan yang dapat disesuaikan dengan kebutuhan
              personal, perusahaan, maupun instansi.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="card-base p-8 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand-green-50 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-brand-green" />
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-brand-green mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <span className="w-2 h-2 rounded-full bg-brand-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding bg-gray-50">
        <div className="container-base">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="section-title mb-4">
              Mengapa Memilih Catering Ibu Iis?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="card-base p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-brand-green-50 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-brand-green" />
                  </div>

                  <h3 className="font-semibold text-brand-green mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Order Process */}
      <section className="section-padding bg-white">
        <div className="container-base">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="section-title mb-4">
              Cara Pemesanan
            </h2>

            <p className="section-subtitle">
              Proses sederhana agar kebutuhan konsumsi Anda dapat kami tangani
              dengan cepat dan tepat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {orderSteps.map((step, index) => (
              <div key={index} className="card-base p-6">
                <span className="text-4xl font-bold text-brand-gold/30">
                  {step.step}
                </span>

                <h3 className="font-semibold text-brand-green mt-4 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTASection />
    </>
  );
}