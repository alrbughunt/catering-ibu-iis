import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactCTASection } from "@/components/sections/ContactCTASection";
import { ArrowRight, Package, UtensilsCrossed } from "lucide-react";

export const metadata: Metadata = {
  title: "Katalog Menu",
  description:
    "Pilihan paket nasi kotak dan catering harian dari Catering Ibu Iis untuk kebutuhan kantor, instansi, seminar, dan acara keluarga.",
  alternates: {
    canonical: "/menu",
  },
};

const menuCategories = [
  {
    slug: "paket-ekonomis",
    icon: Package,
    title: "Paket Ekonomis",
    price: "Mulai Rp15.000",
    description:
      "Pilihan hemat untuk kegiatan sosial, panitia lapangan, dan konsumsi sederhana.",
    features: [
      "Nasi Putih",
      "Telur / Tempe / Orek",
      "Sayur Harian",
      "Kerupuk & Sambal",
    ],
  },
  {
    slug: "paket-standar",
    icon: Package,
    title: "Paket Standar",
    price: "Mulai Rp20.000",
    description:
      "Paket favorit untuk rapat kantor, seminar, dan kegiatan instansi.",
    features: [
      "Ayam Goreng/Bakar",
      "Lauk Pendamping",
      "Sayur Harian",
      "Kerupuk & Sambal",
    ],
  },
  {
    slug: "paket-premium",
    icon: Package,
    title: "Paket Premium",
    price: "Mulai Rp30.000",
    description:
      "Pilihan terbaik untuk acara formal dan tamu penting.",
    features: [
      "Nasi Uduk / Nasi Kuning",
      "Rendang / Daging",
      "Buah",
      "Air Mineral",
    ],
  },
  {
    slug: "catering-harian",
    icon: UtensilsCrossed,
    title: "Catering Harian",
    price: "Mulai Rp15.000",
    description:
      "Menu berganti setiap hari untuk kantor, sekolah, dan instansi.",
    features: [
      "Menu Rotasi",
      "Pengiriman Terjadwal",
      "Porsi Konsisten",
      "Langganan Bulanan",
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <PageHeader
        title="Katalog Menu"
        subtitle="Pilih paket yang sesuai dengan kebutuhan acara, kantor, maupun konsumsi harian Anda."
        breadcrumbs={[{ label: "Menu" }]}
      />

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-base text-center max-w-3xl mx-auto">
          <span className="section-label mb-4 inline-flex gap-2 justify-center">
            <span className="w-8 h-px bg-brand-gold" />
            Pilihan Menu
            <span className="w-8 h-px bg-brand-gold" />
          </span>

          <h2 className="section-title mb-4">
            Paket Catering untuk Berbagai Kebutuhan
          </h2>

          <p className="section-subtitle">
            Semua menu dibuat menggunakan bahan berkualitas, dimasak secara
            higienis, dan dapat disesuaikan dengan kebutuhan acara Anda.
          </p>
        </div>
      </section>

      {/* Menu Cards */}
      <section className="section-padding bg-gray-50">
        <div className="container-base">
          <div className="grid lg:grid-cols-2 gap-8">
            {menuCategories.map((menu, index) => {
              const Icon = menu.icon;

              return (
                <div
                  key={index}
                  className="card-base p-8 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand-green-50 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-brand-green" />
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display text-2xl font-semibold text-brand-green">
                      {menu.title}
                    </h3>

                    <span className="text-brand-gold font-semibold">
                      {menu.price}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {menu.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {menu.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <span className="w-2 h-2 rounded-full bg-brand-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/menu/${menu.slug}`}
                    className="inline-flex items-center gap-2 text-brand-green font-semibold hover:text-brand-gold transition-colors"
                  >
                    Lihat Detail Paket
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTASection />
    </>
  );
}